"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    const targets = document.querySelectorAll("[data-reveal]");
    if (targets.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}
