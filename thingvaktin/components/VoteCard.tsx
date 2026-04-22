import { type Vote } from "@/lib/mock-data";
import { Card } from "./Card";

function VoteBar({
  forCount,
  against,
  abstain,
}: {
  forCount: number;
  against: number;
  abstain: number;
}) {
  const total = forCount + against + abstain;
  const forPct = (forCount / total) * 100;
  const againstPct = (against / total) * 100;
  const abstainPct = (abstain / total) * 100;

  return (
    <div className="flex h-1.5 w-full overflow-hidden rounded-full gap-px">
      <div
        className="rounded-l-full"
        style={{
          width: `${forPct}%`,
          backgroundColor: "#22c55e",
        }}
      />
      <div
        style={{
          width: `${againstPct}%`,
          backgroundColor: "#ef4444",
        }}
      />
      <div
        className="rounded-r-full"
        style={{
          width: `${abstainPct}%`,
          backgroundColor: "rgba(255,255,255,0.2)",
        }}
      />
    </div>
  );
}

type Props = { vote: Vote };

export function VoteCard({ vote }: Props) {
  const passed = vote.result === "samþykkt";
  const total = vote.for + vote.against + vote.abstain;

  return (
    <Card as="article" className="p-5 flex flex-col gap-4 hover:bg-white/10 transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-medium text-white/35 uppercase tracking-wider">
          {vote.category}
        </span>
        <span
          className={`flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            passed
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {passed ? "Samþykkt" : "Fellt"}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-medium text-white leading-snug line-clamp-3">
        {vote.title}
      </h3>

      {/* Vote bar */}
      <VoteBar forCount={vote.for} against={vote.against} abstain={vote.abstain} />

      {/* Counts */}
      <div className="flex items-center justify-between text-xs text-white/40">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-semibold text-white/70">{vote.for}</span>
          <span>já</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          <span className="font-semibold text-white/70">{vote.against}</span>
          <span>nei</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="font-semibold text-white/70">{vote.abstain}</span>
          <span>fjarstaddir</span>
        </div>
        <span className="text-white/20">{total} alls</span>
      </div>

      {/* Footer */}
      <div className="border-t border-white/8 pt-3 text-xs text-white/25">
        {vote.date}
      </div>
    </Card>
  );
}
