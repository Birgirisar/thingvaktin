import { VoteSplitBar } from "./VoteSplitBar";

type Counts = { for: number; against: number; abstain: number; absent: number };

function tallyCounts(
  mps: { vote: "for" | "against" | "abstain" | "absent" }[]
): Counts {
  const c: Counts = { for: 0, against: 0, abstain: 0, absent: 0 };
  for (const mp of mps) c[mp.vote]++;
  return c;
}

type Props = {
  partyName: string;
  color: string;
  mps: { vote: "for" | "against" | "abstain" | "absent" }[];
};

export function PartyVoteRow({ partyName, color, mps }: Props) {
  const c = tallyCounts(mps);
  const total = mps.length;
  const dominant = Math.max(c.for, c.against, c.abstain, c.absent);
  const unity = total > 0 ? dominant / total : 0;
  const isUnified = unity >= 0.75;

  const parts = [
    c.for > 0 ? `${c.for} með` : null,
    c.against > 0 ? `${c.against} á móti` : null,
    c.abstain > 0 ? `${c.abstain} hjá` : null,
    c.absent > 0 ? `${c.absent} fjarv.` : null,
  ].filter(Boolean);

  return (
    <div className="grid grid-cols-1 gap-2.5 py-3 border-b border-white/6 last:border-0 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-4">
      {/* Party name */}
      <div className="flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 flex-shrink-0 rounded-sm"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm font-medium text-white/85">{partyName}</span>
        <span className="text-xs text-white/30">· {total}</span>
      </div>

      {/* Split bar */}
      <VoteSplitBar
        for={c.for}
        against={c.against}
        abstain={c.abstain}
        absent={c.absent}
        size="sm"
      />

      {/* Summary */}
      <div className="flex flex-wrap items-center gap-1.5 text-xs text-white/40 md:justify-end">
        <span>{parts.join(" · ")}</span>
        <span
          className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
            isUnified
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-orange-500/15 text-orange-400"
          }`}
        >
          {unity === 1 ? "Samstaða" : isUnified ? "Nærri samstaða" : "Skipting"}
        </span>
      </div>
    </div>
  );
}
