"use client";

import { useState } from "react";

type Status = "idle" | "ready" | "error";

const RECIPIENT_EMAIL = "randy@kiwicoatingsaz.com";
const SOURCE_PAGE = "https://www.kiwicoatingsaz.com/floors-for-hope";

function value(data: FormData, key: string) {
  return String(data.get(key) ?? "").trim();
}

function buildNominationEmail(data: FormData) {
  return [
    "FLOORS FOR HOPE NOMINATION",
    "",
    "SUBMITTED BY",
    "",
    "Name:",
    value(data, "your_name"),
    "Email:",
    value(data, "your_email"),
    "Phone:",
    value(data, "your_phone"),
    "",
    "NOMINEE",
    "",
    "Name:",
    value(data, "nominee_name"),
    "City:",
    value(data, "nominee_city"),
    "Phone:",
    value(data, "nominee_phone"),
    "Email:",
    value(data, "nominee_email"),
    "",
    "WHY THEY ARE BEING NOMINATED",
    "",
    value(data, "nomination_story"),
    "",
    "ADDITIONAL INFORMATION",
    "",
    value(data, "additional_information"),
    "",
    "SOURCE PAGE",
    "",
    SOURCE_PAGE,
    "",
    "Submitted through:",
    "Kiwi Coatings Floors for Hope"
  ].join("\n");
}

export function FloorsForHopeNominationForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const data = new FormData(form);
    const nomineeName = value(data, "nominee_name") || "Nominee";
    const subject = `Floors for Hope Nomination - ${nomineeName}`;
    const body = buildNominationEmail(data);
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
      <form className="nomination-form" name="floors-for-hope-nomination" onSubmit={handleSubmit}>
        <fieldset className="nomination-fieldset">
          <legend>Your Information</legend>
          <div className="grid two">
            <label className="card">
              Your Name *
              <input name="your_name" required type="text" autoComplete="name" />
            </label>
            <label className="card">
              Your Email *
              <input name="your_email" required type="email" autoComplete="email" />
            </label>
            <label className="card">
              Your Phone
              <input name="your_phone" type="tel" autoComplete="tel" />
            </label>
          </div>
        </fieldset>

        <fieldset className="nomination-fieldset">
          <legend>Nominee Information</legend>
          <div className="grid two">
            <label className="card">
              Nominee Name *
              <input name="nominee_name" required type="text" />
            </label>
            <label className="card">
              Nominee City *
              <input name="nominee_city" required type="text" />
            </label>
            <label className="card">
              Nominee Phone
              <input name="nominee_phone" type="tel" />
            </label>
            <label className="card">
              Nominee Email
              <input name="nominee_email" type="email" />
            </label>
          </div>
        </fieldset>

        <fieldset className="nomination-fieldset">
          <legend>Story</legend>
          <label className="card nomination-full">
            Why are you nominating this person? *
            <textarea name="nomination_story" required rows={7} maxLength={1800} />
          </label>
          <label className="card nomination-full">
            Anything else Kiwi Coatings should know?
            <textarea name="additional_information" rows={5} maxLength={1000} />
          </label>
        </fieldset>

        <button className="button" type="submit">
          Nominate Someone
        </button>
      </form>

      {status === "ready" ? (
        <div className="card form-status form-status-success" role="status">
          <p>Your email application will open with the nomination ready to send.</p>
        </div>
      ) : null}
      {status === "error" ? (
        <div className="card form-status form-status-error" role="alert">
          <p>
            Your email application could not be opened. Please email your nomination directly to{" "}
            <a href={`mailto:${RECIPIENT_EMAIL}`}>{RECIPIENT_EMAIL}</a>.
          </p>
        </div>
      ) : null}
    </>
  );
}
