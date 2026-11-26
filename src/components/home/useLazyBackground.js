"use client";

import { useEffect } from "react";

/*
 * Sets a CSS background image only when the element comes within ~300px of the
 * viewport, so large decorative backgrounds (the About page's animated WebPs,
 * 270–440 KB) don't download with the page.
 */
export default function useLazyBackground(ref, url) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !url) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        el.style.backgroundImage = `url("${url}")`;
        io.disconnect();
      }
    }, { rootMargin: "300px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, url]);
}
