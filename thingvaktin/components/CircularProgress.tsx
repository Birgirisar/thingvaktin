type Props = {
  value: number;
  color: string;
  label: string;
};

export function CircularProgress({ value, color, label }: Props) {
  const r = 70;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - value / 100);

  return (
    <div className="relative h-44 w-44 mx-auto mb-5">
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="12"
        />
        <circle
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="loyalty-fill"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <strong className="text-[2.5rem] font-semibold leading-none tabular-nums tracking-tight text-white">
          {value}%
        </strong>
        <span className="mt-1.5 text-xs text-white/40">{label}</span>
      </div>
    </div>
  );
}
