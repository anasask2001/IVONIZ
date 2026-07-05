"use client";

import { useEffect, useRef, useState } from "react";

/**
 * <video> that defers its network request until it's near the
 * viewport, instead of eagerly downloading on page load just because
 * `autoPlay` is set. Keeps autoplay/loop/muted/playsInline behavior
 * once mounted. Pass the same props you'd give a plain <video>.
 */
export default function LazyVideo({ src, className, style, ...rest }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  /* iOS Safari (and the spec, strictly) won't pick up a <source>
     added after the <video> has already mounted unless load() is
     called explicitly -- without this the element just sits empty,
     so autoplay silently never starts on iPhone. */
  useEffect(() => {
    if (!shouldLoad || !ref.current) return;
    ref.current.load();
    const playPromise = ref.current.play();
    if (playPromise) playPromise.catch(() => {});
  }, [shouldLoad]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      className={className}
      style={style}
      {...rest}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
