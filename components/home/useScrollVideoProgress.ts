"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SEEK_EPSILON = 0.05;

export function useScrollVideoProgress({
  sectionRef,
  videoRef,
  desktopVh,
  mobileVh,
  reducedMotion,
  active
}: {
  sectionRef: React.RefObject<HTMLElement | null>;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  desktopVh: number;
  mobileVh: number;
  reducedMotion: boolean;
  active: boolean;
}) {
  const [progress, setProgress] = useState(0);
  const targetTimeRef = useRef(0);
  const durationRef = useRef(0);
  const lastReportedRef = useRef(-1);

  useEffect(() => {
    if (reducedMotion || !active) {
      return;
    }

    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) {
      return;
    }

    const onLoadedMetadata = () => {
      durationRef.current = video.duration || 0;
    };

    if (video.readyState >= 1 && Number.isFinite(video.duration)) {
      durationRef.current = video.duration;
    }
    video.addEventListener("loadedmetadata", onLoadedMetadata);

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)"
      },
      (context) => {
        const { isDesktop } = context.conditions as { isDesktop: boolean };
        const vh = isDesktop ? desktopVh : mobileVh;

        section.style.setProperty("--scroll-video-length", `${vh}vh`);

        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const duration = durationRef.current;
            targetTimeRef.current = duration > 0 ? self.progress * duration : 0;
            // eslint-disable-next-line no-console
            console.log("[DEBUG onUpdate]", { progress: self.progress, duration, target: targetTimeRef.current });
            const rounded = Math.round(self.progress * 200) / 200;
            if (Math.abs(rounded - lastReportedRef.current) >= 0.005) {
              lastReportedRef.current = rounded;
              setProgress(rounded);
            }
          }
        });

        // eslint-disable-next-line no-console
        console.log("[DEBUG trigger created]", { start: trigger.start, end: trigger.end });

        return () => trigger.kill();
      }
    );

    let rafId = 0;
    const tick = () => {
      const currentVideo = videoRef.current;
      if (currentVideo && currentVideo.readyState >= 2 && durationRef.current > 0) {
        const delta = targetTimeRef.current - currentVideo.currentTime;
        if (Math.abs(delta) > SEEK_EPSILON) {
          currentVideo.currentTime = targetTimeRef.current;
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      cancelAnimationFrame(rafId);
      mm.revert();
    };
  }, [sectionRef, videoRef, desktopVh, mobileVh, reducedMotion, active]);

  return progress;
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function useNearViewport(ref: React.RefObject<HTMLElement | null>, rootMargin = "800px 0px") {
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNear(true);
          }
        });
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return near;
}
