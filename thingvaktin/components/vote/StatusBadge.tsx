type Props = {
  status: "samþykkt" | "fellt";
  size?: "sm" | "md";
};

export function StatusBadge({ status, size = "md" }: Props) {
  const passed = status === "samþykkt";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full font-semibold ${
        size === "md" ? "px-3.5 py-1.5 text-sm" : "px-2.5 py-1 text-xs"
      } ${
        passed
          ? "bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/25"
          : "bg-red-500/15 text-red-400 ring-1 ring-red-500/20"
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
      {passed ? "Samþykkt" : "Felld"}
    </span>
  );
}
