type Props = {
  label: string;
  icon: React.ReactNode;
  value: React.ReactNode;
  unit?: string;
  detail?: React.ReactNode;
  bar?: number;
};

export function StatCard({ label, icon, value, unit, detail, bar }: Props) {
  return (
    <div className="glass rounded-2xl px-5 py-5">
      <div className="mb-3 flex items-center gap-1.5 text-xs text-white/40">
        <svg
          className="h-3 w-3 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
        {label}
      </div>
      <div className="mb-0.5 text-[2.25rem] font-semibold leading-none tabular-nums tracking-tight text-white">
        {value}
        {unit && (
          <span className="text-base font-medium text-white/35 ml-1">{unit}</span>
        )}
      </div>
      {bar !== undefined && (
        <div className="mt-2.5 h-1 rounded-full overflow-hidden bg-white/8">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-300"
            style={{ width: `${bar}%` }}
          />
        </div>
      )}
      {detail && (
        <div className="mt-1.5 text-xs text-white/35">{detail}</div>
      )}
    </div>
  );
}
