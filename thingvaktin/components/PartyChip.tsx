import { cn } from "@/lib/utils";

type PartyChipProps = {
  label: string;
  color: string;
  active?: boolean;
};

export function PartyChip({ label, color, active = false }: PartyChipProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all",
        "glass-sm hover:bg-white/10",
        active ? "ring-1 ring-white/40" : "opacity-70 hover:opacity-100"
      )}
    >
      <span
        className="h-2 w-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
      />
      {label}
    </button>
  );
}
