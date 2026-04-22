import { type VoteType } from "@/lib/mock-data";

const VOTE_COLORS: Record<VoteType, string> = {
  for: "#22c55e",
  against: "#ef4444",
  abstain: "#6E7784",
  absent: "#f97316",
};

const VOTE_LETTERS: Record<VoteType, string> = {
  for: "M",
  against: "Á",
  abstain: "H",
  absent: "F",
};

const VOTE_LABELS: Record<VoteType, string> = {
  for: "Með",
  against: "Á móti",
  abstain: "Sat hjá",
  absent: "Fjarverandi",
};

type Props = {
  name: string;
  vote: VoteType;
};

export function MPDot({ name, vote }: Props) {
  return (
    <span
      className="mp-tooltip inline-flex h-7 w-7 flex-shrink-0 cursor-default items-center justify-center rounded-full text-[0.63rem] font-bold text-white transition-transform duration-150 hover:z-10 hover:scale-125"
      style={{
        backgroundColor: VOTE_COLORS[vote],
        boxShadow: "0 0 0 1.5px rgba(255,255,255,0.18)",
      }}
      data-name={name}
      data-pos={VOTE_LABELS[vote]}
    >
      {VOTE_LETTERS[vote]}
    </span>
  );
}

export { VOTE_COLORS, VOTE_LABELS, VOTE_LETTERS };
