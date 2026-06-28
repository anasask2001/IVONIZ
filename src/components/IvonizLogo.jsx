export default function IvonizLogo({ dark = false, size = "md" }) {
  const sizes = {
    sm: { fontSize: "15px", letterSpacing: "0.16em" },
    md: { fontSize: "19px", letterSpacing: "0.18em" },
    lg: { fontSize: "24px", letterSpacing: "0.18em" },
  };

  const s = sizes[size] ?? sizes.md;

  return (
    <span
      aria-label="Ivoniz"
      style={{
        fontWeight: 900,
        fontSize: s.fontSize,
        letterSpacing: s.letterSpacing,
        textTransform: "uppercase",
        lineHeight: 1,
        color: dark ? "#ffffff" : "#000000",
      }}
    >
      IVONIZ
    </span>
  );
}
