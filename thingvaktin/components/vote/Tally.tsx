type TallyVariant = "for" | "against" | "abstain" | "absent";

const CONFIG: Record<
  TallyVariant,
  { label: string; color: string; bg: string; ring: string }
> = {
  for: {
    label: "Með",
    color: "#22c55e",
    bg: "bg-emerald-500/10",
    ring: "ring-emerald-500/20",
  },
  against: {
    label: "Á móti",
    color: "#ef4444",
    bg: "bg-red-500/10",
    ring: "ring-red-500/20",
  },
  abstain: {
    label: "Sátu hjá",
    color: "rgba(255,255,255,0.45)",
    bg: "bg-white/5",
    ring: "ring-white/10",
  },
  absent: {
    label: "Fjarverandi",
    color: "#f97316",
    bg: "bg-orange-500/10",
    ring: "ring-orange-500/20",
  },
};

type Props = {
  variant: TallyVariant;
  count: number;
  total: number;
};

export function Tally({ variant, count, total }: Props) {
  const { label, color, bg, ring } = CONFIG[variant];
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;

  return (
    <div className={`rounded-2xl p-4 ring-1 ${bg} ${ring}`}>
      <div className="mb-2 flex items-center gap-1.5">
        <span
          className="h-2 w-2 flex-shrink-0 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-xs text-white/50">{label}</span>
      </div>
      <div
        className="text-3xl font-semibold tabular-nums leading-none"
        style={{ color }}
      >
        {count}
      </div>
      <div className="mt-1 text-xs tabular-nums text-white/35">{pct}%</div>
    </div>
  );
}
