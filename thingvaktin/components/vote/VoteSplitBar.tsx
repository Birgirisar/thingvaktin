import { cn } from "@/lib/utils";

type Props = {
  for: number;
  against: number;
  abstain: number;
  absent: number;
  size?: "sm" | "md";
};

export function VoteSplitBar({
  for: forCount,
  against,
  abstain,
  absent,
  size = "md",
}: Props) {
  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-full bg-white/5",
        size === "md" ? "h-3" : "h-2.5"
      )}
    >
      {forCount > 0 && (
        <div
          className="bg-gradient-to-r from-emerald-600 to-emerald-500"
          style={{ flex: forCount }}
        />
      )}
      {against > 0 && (
        <div
          className="bg-gradient-to-r from-red-600 to-red-500"
          style={{ flex: against }}
        />
      )}
      {abstain > 0 && (
        <div className="bg-white/25" style={{ flex: abstain }} />
      )}
      {absent > 0 && (
        <div className="bg-orange-500" style={{ flex: absent }} />
      )}
    </div>
  );
}
