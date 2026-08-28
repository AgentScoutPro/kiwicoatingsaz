"use client";

import { useState } from "react";
import { site } from "@/lib/site-data";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactQuoteForm({ selectedService }: { selectedService: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          address: data.get("address"),
          service: data.get("service"),
          message: data.get("message"),
          honeypot: data.get("company_website")
        })
      });

      const result = await response.json().catch(() => ({ ok: false }));

      if (response.ok && result.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card form-status form-status-success" role="status">
        <p>Thank you. Your request has been sent directly to Kiwi Coatings. Someone will be in touch soon.</p>
      </div>
    );
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
        <button className="button" disabled={status === "submitting"} type="submit">
          {status === "submitting" ? "Sending…" : "Request Free Estimate"}
        </button>
      </form>
      {status === "error" ? (
        <div className="card form-status form-status-error" role="alert">
          <p>
            We couldn't send your request. Please call Kiwi Coatings directly at{" "}
            <a href={site.phoneHref}>{site.phone}</a> or try again.
          </p>
        </div>
      ) : null}
    </>
  );
}
