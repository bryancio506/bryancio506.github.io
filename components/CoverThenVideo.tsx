'use client';

import { useEffect, useRef, useState } from 'react';

// Shows a cover image for a few seconds, then crossfades to a looping video and stays there.
// The dots let the visitor switch back and forth by hand.
export default function CoverThenVideo({
  image,
  video,
  poster,
  alt,
  delayMs = 4000,
}: {
  image: string;
  video: string;
  poster?: string;
  alt: string;
  delayMs?: number;
}) {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setTimeout(() => setShowVideo(true), delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (showVideo) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [showVideo]);

  const slides = [
    { label: 'Cover', active: !showVideo, onClick: () => setShowVideo(false) },
    { label: 'Live chat demo', active: showVideo, onClick: () => setShowVideo(true) },
  ];

  return (
    <>
      <video
        ref={videoRef}
        src={video}
        poster={poster}
        loop
        muted
        playsInline
        preload="auto"
        aria-label={`${alt} — live chat demo`}
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
          showVideo ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
          showVideo ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      />
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/35 px-2.5 py-1.5 backdrop-blur">
        {slides.map((s) => (
          <button
            key={s.label}
            type="button"
            onClick={s.onClick}
            aria-label={s.label}
            aria-pressed={s.active}
            className={`h-1.5 rounded-full transition-all ${s.active ? 'w-5 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </>
  );
}
