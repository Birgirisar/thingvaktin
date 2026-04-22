import { type MP, parties } from "@/lib/mock-data";
import { Card } from "./Card";

type Props = { mp: MP };

export function MPCard({ mp }: Props) {
  const party = parties.find((p) => p.id === mp.partyId);

  return (
    <Card
      as="article"
      className="p-4 flex flex-col items-center text-center gap-3 hover:bg-white/10 transition-colors cursor-pointer"
    >
      {/* Avatar */}
      <div
        className="h-14 w-14 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
        style={{
          background: party
            ? `linear-gradient(135deg, ${party.color}cc, ${party.color}66)`
            : "rgba(255,255,255,0.1)",
          boxShadow: party ? `0 0 0 2px ${party.color}44` : undefined,
          outline: party ? `2px solid ${party.color}` : undefined,
          outlineOffset: "2px",
        }}
      >
        {mp.initials}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-semibold text-white leading-tight">
          {mp.name}
        </p>
        {party && (
          <p className="text-xs font-medium" style={{ color: party.color }}>
            {party.abbreviation} · {party.name}
          </p>
        )}
        <p className="text-xs text-white/35 mt-0.5">{mp.constituency}</p>
      </div>
    </Card>
  );
}
