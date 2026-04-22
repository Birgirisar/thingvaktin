import { parties, type Party } from "@/lib/mock-data";

function SeatColumn({
  party,
  seatIndex,
}: {
  party: Party;
  seatIndex: number;
}) {
  return (
    <div
      className="flex-1 min-w-0 rounded-sm origin-bottom animate-seat-up"
      style={{
        backgroundColor: party.color,
        animationDelay: `${seatIndex * 12}ms`,
        minHeight: "2.5rem",
      }}
      title={`${party.name} (${party.abbreviation})`}
    />
  );
}

export function SeatDistribution() {
  const seatList: Party[] = parties.flatMap((p) =>
    Array.from({ length: p.seats }, () => p)
  );

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold tracking-widest text-white/30 uppercase">
              Alþingi
            </p>
            <h2 className="text-2xl font-bold text-white">Þingsætaskipan</h2>
          </div>
          <span className="text-sm text-white/35">
            {parties.reduce((s, p) => s + p.seats, 0)} þingsæti
          </span>
        </div>

        {/* Seat columns */}
        <div className="glass rounded-2xl p-6">
          <div className="flex gap-1 h-12 items-end">
            {seatList.map((party, i) => (
              <SeatColumn key={i} party={party} seatIndex={i} />
            ))}
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
            {parties.map((party) => (
              <div
                key={party.id}
                className="flex items-center gap-2"
              >
                <span
                  className="h-3 w-3 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: party.color }}
                />
                <span className="text-xs font-medium text-white/60">
                  {party.abbreviation}
                </span>
                <span className="text-xs text-white/30">{party.seats}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
