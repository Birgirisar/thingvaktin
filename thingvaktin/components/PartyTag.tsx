type Props = {
  name: string;
  color: string;
};

export function PartyTag({ name, color }: Props) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
      style={{
        backgroundColor: `${color}22`,
        color,
      }}
    >
      <span
        className="h-2 w-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
      />
      {name}
    </span>
  );
}
