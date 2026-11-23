/* Custom next/image loader for the static export (no image server).
   Portfolio screenshots have pre-generated copies at 640px and 828px
   (<name>-640.webp, <name>-828.webp, made with sharp); each screen gets the
   smallest copy that covers it, large screens the 1200px original.
   Every other image is served as-is. To add a screenshot, save the 1200px
   .webp plus its -640 and -828 copies in /public/Portfolios. */
export default function imageLoader({ src, width }) {
  if (src.startsWith("/Portfolios/") && src.endsWith(".webp")) {
    if (width <= 640) return src.replace(/\.webp$/, "-640.webp");
    if (width <= 828) return src.replace(/\.webp$/, "-828.webp");
  }
  return src;
}
