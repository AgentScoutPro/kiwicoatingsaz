import Image from "next/image";
import type { StoryMediaConfig } from "@/lib/home-page-content";

export function StoryMedia({
  media,
  className,
  sizes = "(max-width: 760px) 100vw, 50vw"
}: {
  media: StoryMediaConfig;
  className?: string;
  sizes?: string;
}) {
  const hasMedia = Boolean(media.videoSrc || media.imageSrc);

  return (
    <figure
      className={["story-media", className].filter(Boolean).join(" ")}
      style={media.aspect ? { aspectRatio: media.aspect } : undefined}
      data-story-media={media.mediaId}
      data-sticky-candidate
    >
      {media.videoSrc ? (
        <video
          aria-label={media.alt}
          controls={false}
          muted
          autoPlay
          playsInline
          poster={media.posterSrc}
          preload={media.priority ? "auto" : "metadata"}
          style={{ objectPosition: media.position }}
        >
          <source src={media.videoSrc} type="video/mp4" />
        </video>
      ) : media.imageSrc ? (
        <Image
          src={media.imageSrc}
          alt={media.alt}
          fill
          sizes={sizes}
          priority={media.priority}
          style={{ objectFit: "cover", objectPosition: media.position ?? "center" }}
        />
      ) : (
        <div className="story-media-empty" aria-hidden="true" />
      )}
      {hasMedia && media.overlay ? (
        <div className={`story-media-overlay story-media-overlay-${media.overlay}`} aria-hidden="true" />
      ) : null}
      {media.caption ? <figcaption className="story-media-caption">{media.caption}</figcaption> : null}
    </figure>
  );
}
