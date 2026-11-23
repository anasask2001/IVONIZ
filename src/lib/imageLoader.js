/* Custom next/image loader for the static export (no image server).
   Pre-generated smaller copies (made with sharp) are picked per screen width:
   - /Portfolios/<name>.webp  → <name>-640.webp and <name>-828.webp
   - /clients/<name>.webp     → <name>-828.webp
   Large screens get the original. Every other image is served as-is.
   When adding an image to these folders, also save its smaller copies. */
export default function imageLoader({ src, width }) {
  if (src.endsWith(".webp")) {
    if (src.startsWith("/Portfolios/")) {
      if (width <= 640) return src.replace(/\.webp$/, "-640.webp");
      if (width <= 828) return src.replace(/\.webp$/, "-828.webp");
    }
    if (src.startsWith("/clients/") && width <= 828) {
      return src.replace(/\.webp$/, "-828.webp");
    }
  }
  return src;
}
