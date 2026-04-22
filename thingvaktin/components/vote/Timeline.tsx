import { cn } from "@/lib/utils";
import { type TimelineItem } from "@/lib/mock-data";

type Props = {
  items: TimelineItem[];
};

export function Timeline({ items }: Props) {
  return (
    <div className="relative pl-6">
      {/* Vertical guide line */}
      <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-white/10" />

      {items.map((item, i) => (
        <div key={i} className="relative pb-7 last:pb-0">
          {/* Dot */}
          <div
            className={cn(
              "absolute -left-[21px] top-1 h-3 w-3 rounded-full border-2",
              item.isCurrent
                ? "border-blue-400 bg-blue-400"
                : "border-white/25 bg-bg-base"
            )}
            style={
              item.isCurrent
                ? { boxShadow: "0 0 0 4px rgba(96,165,250,0.2)" }
                : undefined
            }
          />

          <p className="mb-0.5 text-xs tabular-nums text-white/35">
            {item.date}
          </p>
          <p
            className={cn(
              "mb-1 text-sm font-medium leading-snug",
              item.isCurrent ? "text-white" : "text-white/70"
            )}
          >
            {item.title}
          </p>
          <p className="text-sm leading-relaxed text-white/40">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
