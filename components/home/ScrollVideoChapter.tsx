"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  useNearViewport,
  usePrefersReducedMotion,
  useScrollVideoProgress
} from "./useScrollVideoProgress";

export type ScrollVideoChapterProps = {
  mediaId: string;
  videoSrc: string;
  posterSrc: string;
  alt: string;
  className?: string;
  desktopScrollLength?: number;
  mobileScrollLength?: number;
  objectPosition?: string;
  mobileObjectPosition?: string;
  priority?: boolean;
  children?: React.ReactNode | ((progress: number) => React.ReactNode);
  reducedMotionContent?: React.ReactNode;
  /** Optional progress-driven CSS custom properties applied to the <video> element (e.g. for a brief framing adjustment). */
  videoVars?: (progress: number) => Record<string, string | number>;
};

export function ScrollVideoChapter({
  mediaId,
  videoSrc,
  posterSrc,
  alt,
  className,
  desktopScrollLength = 240,
  mobileScrollLength = 190,
  objectPosition,
  mobileObjectPosition,
  priority = false,
  children,
  reducedMotionContent,
  videoVars
}: ScrollVideoChapterProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const near = useNearViewport(sectionRef);
  const shouldLoadVideo = priority || near;

  const progress = useScrollVideoProgress({
    sectionRef,
    videoRef,
    desktopVh: desktopScrollLength,
    mobileVh: mobileScrollLength,
    reducedMotion,
    active: shouldLoadVideo
  });

  const copy = typeof children === "function" ? children(progress) : children;

  useEffect(() => {
    if (!priority && shouldLoadVideo && videoRef.current) {
      videoRef.current.load();
    }
  }, [priority, shouldLoadVideo]);

  if (reducedMotion) {
    return (
      <section
        className={["scroll-video-chapter", "scroll-video-chapter--static", className].filter(Boolean).join(" ")}
        data-story-act={mediaId}
        data-reveal
      >
        <div className="scroll-video-stage">
          <Image src={posterSrc} alt={alt} fill sizes="100vw" style={{ objectFit: "cover" }} priority={priority} />
          <div className="scroll-video-scrim" aria-hidden="true" />
          <div className="scroll-video-copy scroll-video-copy--static">{reducedMotionContent ?? copy}</div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className={["scroll-video-chapter", className].filter(Boolean).join(" ")}
      data-story-act={mediaId}
      style={
        {
          "--scroll-video-desktop-length": `${desktopScrollLength}vh`,
          "--scroll-video-mobile-length": `${mobileScrollLength}vh`
        } as React.CSSProperties
      }
    >
      <div className="scroll-video-stage">
        <video
          ref={videoRef}
          className="scroll-video-el"
          aria-label={alt}
          muted
          playsInline
          controls={false}
          autoPlay={false}
          loop={false}
          preload={priority ? "auto" : shouldLoadVideo ? "metadata" : "none"}
          poster={posterSrc}
          style={
            {
              "--sv-object-position": objectPosition,
              "--sv-mobile-object-position": mobileObjectPosition,
              ...(videoVars ? videoVars(progress) : {})
            } as React.CSSProperties
          }
        >
          {shouldLoadVideo ? <source src={videoSrc} type="video/mp4" /> : null}
        </video>
        <div className="scroll-video-scrim" aria-hidden="true" />
        <div className="scroll-video-copy">{copy}</div>
      </div>
    </section>
  );
}

export function scrollBeat(progress: number, from: number, to: number) {
  if (to <= from) {
    return progress >= from ? 1 : 0;
  }
  const value = (progress - from) / (to - from);
  return Math.min(1, Math.max(0, value));
}

export function beatOpacity(progress: number, inStart: number, inEnd: number, outStart: number, outEnd: number) {
  const fadeIn = scrollBeat(progress, inStart, inEnd);
  const fadeOut = 1 - scrollBeat(progress, outStart, outEnd);
  return Math.min(fadeIn, fadeOut);
}

/** Visible immediately at progress 0 (no fade-in), fades out over [outStart, outEnd]. */
export function openingOpacity(progress: number, outStart: number, outEnd: number) {
  return 1 - scrollBeat(progress, outStart, outEnd);
}
