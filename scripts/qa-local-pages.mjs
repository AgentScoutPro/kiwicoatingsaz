import { writeFileSync } from "node:fs";

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:3015";
const siteUrl = "https://kiwicoatingsaz.com";

const cities = ["mesa", "gilbert", "chandler", "queen-creek", "san-tan-valley", "casa-grande"];
const services = [
  "garage-floor-coatings",
  "polyaspartic-floor-coatings",
  "epoxy-floor-coatings",
  "patio-and-pool-deck-coatings",
  "metallic-epoxy-floors"
];

function textFromHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function match(html, pattern) {
  return html.match(pattern)?.[1]?.trim() || "";
}

function duplicateValues(rows, key) {
  const seen = new Map();
  const duplicates = new Set();

  for (const row of rows) {
    const value = row[key];
    if (!value) {
      continue;
    }

    if (seen.has(value)) {
      duplicates.add(value);
    }

    seen.set(value, row.path);
  }

  return duplicates;
}

const rows = [];

for (const city of cities) {
  for (const service of services) {
    const path = `/service-areas/${city}/${service}`;
    const response = await fetch(`${baseUrl}${path}`);
    const html = await response.text();
    const intro = match(html, /<p class="lead">([\s\S]*?)<\/p>/);
    const title = match(html, /<title>([^<]*)<\/title>/);
    const description = match(html, /<meta name="description" content="([^"]*)"/);
    const h1 = match(html, /<h1[^>]*>([\s\S]*?)<\/h1>/).replace(/<[^>]+>/g, "");
    const canonical = match(html, /<link rel="canonical" href="([^"]*)"/);
    const text = textFromHtml(html);

    rows.push({
      path,
      status: response.status,
      title,
      description,
      h1,
      intro,
      canonical,
      wordCount: text.split(/\s+/).filter(Boolean).length,
      h1Count: (html.match(/<h1[\s\S]*?<\/h1>/g) || []).length,
      hasServiceLink: html.includes(`href="/services/${service}"`),
      hasCityLink: html.includes(`href="/locations/${city}"`),
      hasCta: html.includes('href="/contact"') && html.includes("Request a Quote"),
      hasFaqSchema: html.includes("FAQPage"),
      hasServiceSchema: html.includes('"@type":"Service"') || html.includes('"@type":["Service"')
    });
  }
}

const duplicateTitles = duplicateValues(rows, "title");
const duplicateDescriptions = duplicateValues(rows, "description");
const duplicateH1s = duplicateValues(rows, "h1");
const duplicateIntros = duplicateValues(rows, "intro");

const findings = rows.flatMap((row) => {
  const pageFindings = [];

  if (row.status !== 200) pageFindings.push("Page did not return 200.");
  if (row.h1Count !== 1) pageFindings.push(`Expected 1 H1, found ${row.h1Count}.`);
  if (duplicateTitles.has(row.title)) pageFindings.push("Duplicate title.");
  if (duplicateDescriptions.has(row.description)) pageFindings.push("Duplicate description.");
  if (duplicateH1s.has(row.h1)) pageFindings.push("Duplicate H1.");
  if (duplicateIntros.has(row.intro)) pageFindings.push("Identical introductory content.");
  if (row.canonical !== `${siteUrl}${row.path}`) pageFindings.push("Missing or incorrect canonical.");
  if (!row.hasServiceLink) pageFindings.push("Missing parent service link.");
  if (!row.hasCityLink) pageFindings.push("Missing parent city link.");
  if (!row.hasCta) pageFindings.push("Missing quote CTA.");
  if (!row.hasFaqSchema) pageFindings.push("Missing FAQ schema.");
  if (!row.hasServiceSchema) pageFindings.push("Missing Service schema.");

  return pageFindings.map((finding) => ({ path: row.path, finding }));
});

const report = `# Kiwi Coatings AZ Local Page QA

Date: 2026-08-27

Base URL tested: \`${baseUrl}\`

## Summary

- Tier 1 pages tested: ${rows.length}
- Duplicate titles: ${duplicateTitles.size}
- Duplicate descriptions: ${duplicateDescriptions.size}
- Duplicate H1s: ${duplicateH1s.size}
- Identical introductory content: ${duplicateIntros.size}
- Findings: ${findings.length}

## Page Results

| URL | Status | H1 Count | Word Count | Canonical | Parent Links | CTA | Schema |
| --- | ---: | ---: | ---: | --- | --- | --- | --- |
${rows
  .map(
    (row) =>
      `| \`${row.path}\` | ${row.status} | ${row.h1Count} | ${row.wordCount} | ${row.canonical === `${siteUrl}${row.path}` ? "Pass" : "Fail"} | ${
        row.hasServiceLink && row.hasCityLink ? "Pass" : "Fail"
      } | ${row.hasCta ? "Pass" : "Fail"} | ${row.hasFaqSchema && row.hasServiceSchema ? "Pass" : "Fail"} |`
  )
  .join("\n")}

## Findings

${findings.length ? findings.map((finding) => `- \`${finding.path}\` - ${finding.finding}`).join("\n") : "- No findings."}
`;

writeFileSync("docs/LOCAL_PAGE_QA.md", report);

if (findings.length > 0) {
  console.error(report);
  process.exit(1);
}

console.log(report);
