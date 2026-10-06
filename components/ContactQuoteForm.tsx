"use client";

import { useState } from "react";
import { site } from "@/lib/site-data";

type Status = "idle" | "ready" | "error";

const RECIPIENT_EMAIL = "randy@kiwicoatingsaz.com";

function formatFieldName(name: string) {
  return name
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function buildEmailBody(form: HTMLFormElement) {
  const data = new FormData(form);
  const lines = ["NEW KIWI COATINGS WEBSITE INQUIRY", ""];

  data.forEach((value, key) => {
    if (key === "company_website" || value instanceof File) {
      return;
    }

    const cleanValue = String(value).trim();

    if (!cleanValue) {
      return;
    }

    const label = key === "message" ? "Project Details" : formatFieldName(key);
    lines.push(`${label}: ${cleanValue}`);
  });

  lines.push(
    "",
    "Website Page:",
    window.location.href,
    "",
    "Submitted From:",
    "Kiwi Coatings Website"
  );

  return lines.join("\n");
}

export function ContactQuoteForm({ selectedService }: { selectedService: string }) {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const subjectName = name || "Website Visitor";
    const subject = `Kiwi Coatings Website Quote Request - ${subjectName}`;
    const body = buildEmailBody(form);
    const params = new URLSearchParams({ subject, body });
    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?${params.toString()}`;

    try {
      setStatus("ready");
      window.location.href = mailtoLink;
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <form className="grid two" name="quote-request" onSubmit={handleSubmit}>
        <label className="card">
          Name *
          <input name="name" required type="text" />
        </label>
        <label className="card">
          Email Address *
          <input name="email" required type="email" />
        </label>
        <label className="card">
          Phone Number
          <input name="phone" type="tel" />
        </label>
        <label className="card">
          Project Address
          <input name="address" type="text" />
        </label>
        <label className="card">
          Service Requested
          <select name="service" defaultValue={selectedService || ""}>
            <option value="" disabled>Select a service</option>
            {site.quoteOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="card">
          Anything you'd like to add?
          <textarea maxLength={800} name="message" rows={5} />
        </label>
        <label className="quote-honeypot" aria-hidden="true">
          Company Website
          <input name="company_website" tabIndex={-1} autoComplete="off" type="text" />
        </label>
        <button className="button" type="submit">
          Request Free Estimate
        </button>
      </form>
      {status === "ready" ? (
        <div className="card form-status form-status-success" role="status">
          <p>Your email application will open with your request ready to send.</p>
        </div>
      ) : null}
      {status === "error" ? (
        <div className="card form-status form-status-error" role="alert">
          <p>
            Your email application could not be opened. Please email us directly at{" "}
            <a href={`mailto:${RECIPIENT_EMAIL}`}>{RECIPIENT_EMAIL}</a>.
          </p>
        </div>
      ) : null}
    </>
  );
}
