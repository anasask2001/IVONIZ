"use client";

import dynamic from "next/dynamic";

/* Interactive widget hidden behind a floating button — not needed
   for first paint. Skips SSR/static prerender entirely and
   code-splits its JS (speech recognition, abuse/romantic detection,
   etc.) out of the bundle every page would otherwise pay for. */
const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });

export default function ChatWidgetLoader() {
  return <ChatWidget />;
}
