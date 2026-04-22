type Props = {
  className?: string;
};

export function AlthingiLogo({ className }: Props) {
  // logo-white applies brightness(0) invert(1) in dark mode;
  // [data-theme="light"] .logo-white overrides it to filter: none
  // so the logo shows its original dark blue in light mode.
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src="/althingi-logo.svg"
      alt="Alþingi"
      className={`logo-white ${className ?? ""}`}
    />
  );
}
