"use client";

import { useRouter } from "next/navigation";

export function QuoteSelector({ options }: { options: string[] }) {
  const router = useRouter();

  return (
    <form
      className="card quote-selector"
      aria-label="Project type selector"
      onSubmit={(event) => event.preventDefault()}
    >
      <label>
        Project Type
        <select
          name="project-type"
          defaultValue=""
          onChange={(event) => {
            const value = event.target.value;
            if (value) {
              router.push(`/get-a-quote?service=${encodeURIComponent(value)}`);
            }
          }}
        >
          <option value="" disabled>
            Select a project type
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}
