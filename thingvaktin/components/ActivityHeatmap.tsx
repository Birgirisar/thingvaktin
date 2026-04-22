const LEVEL_CLASSES = [
  "bg-white/6",
  "bg-emerald-500/20",
  "bg-emerald-500/45",
  "bg-emerald-500/70",
  "bg-emerald-500",
];

const LEVEL_LABELS = ["engin", "lítil", "miðlungs", "mikil", "mjög mikil"];

type Props = {
  pattern: number[];
};

export function ActivityHeatmap({ pattern }: Props) {
  return (
    <div>
      <div
        className="grid gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${pattern.length}, 1fr)` }}
      >
        {pattern.map((level, i) => (
          <div
            key={i}
            className={`aspect-square rounded-[3px] cursor-default hover:scale-125 hover:z-10 relative transition-transform duration-150 ${LEVEL_CLASSES[level] ?? LEVEL_CLASSES[0]}`}
            title={`Vika ${i + 1}: ${LEVEL_LABELS[level] ?? "engin"} virkni`}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-xs text-white/35">
        <span>Minni</span>
        <div className="flex gap-[2px]">
          {LEVEL_CLASSES.map((cls, i) => (
            <div key={i} className={`h-2.5 w-2.5 rounded-[2px] ${cls}`} />
          ))}
        </div>
        <span>Meiri</span>
      </div>
    </div>
  );
}
