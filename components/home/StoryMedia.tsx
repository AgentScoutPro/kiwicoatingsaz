import type { StoryMediaConfig } from "@/lib/home-page-content";

export function StoryMedia({ media, className }: { media: StoryMediaConfig; className?: string }) {
  return (
    <figure
      className={["story-media", className].filter(Boolean).join(" ")}
      data-story-media={media.mediaId}
      data-sticky-candidate
    >
      {media.videoSrc ? (
        <video
          aria-label={media.alt}
          controls={false}
          muted
          playsInline
          poster={media.posterSrc}
          preload={media.priority ? "metadata" : "none"}
        >
          <source src={media.videoSrc} />
        </video>
      ) : null}
      {!media.videoSrc && media.imageSrc ? (
        <img
          alt={media.alt}
          loading={media.priority ? "eager" : "lazy"}
          src={media.imageSrc}
        />
      ) : null}
      {!media.videoSrc && !media.imageSrc ? <div className="story-media-empty" aria-hidden="true" /> : null}
    </figure>
  );
}
