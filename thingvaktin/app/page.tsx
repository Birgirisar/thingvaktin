import { BackgroundMesh } from "@/components/BackgroundMesh";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SeatDistribution } from "@/components/SeatDistribution";
import { VoteCard } from "@/components/VoteCard";
import { MPCard } from "@/components/MPCard";
import { PartyChip } from "@/components/PartyChip";
import { Footer } from "@/components/Footer";
import { recentVotes, mps, parties } from "@/lib/mock-data";

function SectionHeader({
  eyebrow,
  title,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 flex items-end justify-between">
      <div>
        <p className="mb-1 text-xs font-semibold tracking-widest text-white/30 uppercase">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      {href && linkLabel && (
        <a
          href={href}
          className="text-sm text-white/35 hover:text-white/70 transition-colors flex items-center gap-1"
        >
          {linkLabel}
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <BackgroundMesh />
      <Nav />

      <main>
        {/* ── Hero ── */}
        <Hero />

        {/* ── Seat distribution ── */}
        <SeatDistribution />

        {/* ── Þessa vikuna ── */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              eyebrow="Þingið"
              title="Þessa vikuna"
              href="#"
              linkLabel="Allar atkvæðagreiðslur"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recentVotes.map((vote) => (
                <VoteCard key={vote.id} vote={vote} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Þingmenn ── */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              eyebrow="Þingið"
              title="Þingmenn"
              href="#"
              linkLabel="Allir þingmenn"
            />

            {/* Party filter chips */}
            <div className="mb-6 flex flex-wrap gap-2">
              <PartyChip label="Allir" color="rgba(255,255,255,0.5)" active />
              {parties.map((party) => (
                <PartyChip
                  key={party.id}
                  label={party.abbreviation}
                  color={party.color}
                />
              ))}
            </div>

            {/* MP grid */}
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {mps.map((mp) => (
                <MPCard key={mp.id} mp={mp} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
