import { BackgroundMesh } from "@/components/BackgroundMesh";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/Card";
import { StatusBadge } from "@/components/vote/StatusBadge";
import { VoteSplitBar } from "@/components/vote/VoteSplitBar";
import { Tally } from "@/components/vote/Tally";
import { PartyVoteRow } from "@/components/vote/PartyVoteRow";
import { MPDot, VOTE_COLORS, VOTE_LABELS, VOTE_LETTERS } from "@/components/vote/MPDot";
import { Timeline } from "@/components/vote/Timeline";
import { voteDetail } from "@/lib/mock-data";

// ── Section wrapper ────────────────────────────────────────────────────────────

function SectionCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={`p-6 sm:p-9 mb-3 ${className ?? ""}`}>{children}</Card>
  );
}

function SectionHeading({
  children,
  hint,
}: {
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
      <h3 className="text-lg font-semibold text-white tracking-tight">
        {children}
      </h3>
      {hint && <span className="text-sm text-white/35">{hint}</span>}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function VoteDetailPage() {
  const vote = voteDetail;
  const { for: forCount, against, abstain, absent } = vote.result;
  const totalVotes = forCount + against + abstain + absent;

  return (
    <>
      <BackgroundMesh />
      <Nav />

      <main className="mx-auto max-w-[1000px] px-4 sm:px-7 pt-28 pb-12">
        {/* ── Breadcrumb ── */}
        <nav
          className="mb-1 flex flex-wrap items-center gap-1.5 text-sm text-white/35 pt-2"
          aria-label="Brautin"
        >
          <a href="#" className="hover:text-white/70 transition-colors">
            Atkvæðagreiðslur
          </a>
          <span className="opacity-40">›</span>
          <a href="#" className="hover:text-white/70 transition-colors">
            {vote.session}
          </a>
          <span className="opacity-40">›</span>
          <span className="text-white/50 truncate max-w-[20ch] sm:max-w-none">
            {vote.title}
          </span>
        </nav>

        {/* ── Vote header ── */}
        <header className="py-8 sm:py-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <StatusBadge status={vote.status} />
            <div className="flex flex-wrap items-center gap-2 text-sm text-white/40">
              <span>{vote.date}</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>{vote.reading}</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>{vote.billNumber}</span>
            </div>
          </div>
          <h1 className="mb-3 text-balance text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-white max-w-[22ch]">
            {vote.title}
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-prose">
            {vote.subtitle}
          </p>
        </header>

        {/* ── Í stuttu máli — summary card ── */}
        <Card className="relative overflow-hidden mb-3 px-8 py-8 sm:px-9 sm:py-9">
          {/* Blue accent bar */}
          <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full bg-gradient-to-b from-blue-400 to-blue-600" />
          <div className="pl-5">
            {/* Eyebrow */}
            <div className="mb-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              Í stuttu máli
            </div>
            <h2 className="mb-5 text-xl font-semibold tracking-tight text-white">
              {vote.summary.heading}
            </h2>
            <div className="flex flex-col gap-4">
              {vote.summary.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-white/60 max-w-prose"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Card>

        {/* ── Quick facts grid ── */}
        <div className="mb-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              ),
              label: "Flutningsmaður",
              value: vote.quickFacts.sponsor,
            },
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              ),
              label: "Nefnd",
              value: vote.quickFacts.committee,
            },
            {
              icon: (
                <>
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </>
              ),
              label: "Lagt fram",
              value: vote.quickFacts.introduced,
            },
            {
              icon: (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </>
              ),
              label: "Umsagnir",
              value: vote.quickFacts.submissions,
            },
          ].map(({ icon, label, value }) => (
            <Card key={label} className="px-5 py-4">
              <div className="mb-1.5 flex items-center gap-1.5 text-xs text-white/35">
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  {icon}
                </svg>
                {label}
              </div>
              <div className="text-sm font-semibold text-white/85 leading-snug">
                {value}
              </div>
            </Card>
          ))}
        </div>

        {/* ── Niðurstaða ── */}
        <SectionCard>
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-lg font-semibold text-white tracking-tight">
              Niðurstaða
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Á althingi.is
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>

          <div className="mb-6">
            <VoteSplitBar
              for={forCount}
              against={against}
              abstain={abstain}
              absent={absent}
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            <Tally variant="for" count={forCount} total={totalVotes} />
            <Tally variant="against" count={against} total={totalVotes} />
            <Tally variant="abstain" count={abstain} total={totalVotes} />
            <Tally variant="absent" count={absent} total={totalVotes} />
          </div>
        </SectionCard>

        {/* ── Eftir flokkum ── */}
        <SectionCard>
          <SectionHeading hint="Hvernig hver þingflokkur greiddi atkvæði">
            Eftir flokkum
          </SectionHeading>
          <div>
            {vote.partyBreakdown.map((party) => (
              <PartyVoteRow
                key={party.partyName}
                partyName={party.partyName}
                color={party.color}
                mps={party.mps}
              />
            ))}
          </div>
        </SectionCard>

        {/* ── Hver greiddi atkvæði hvernig? ── */}
        <SectionCard>
          <SectionHeading hint="Smelltu á þingmann til að sjá heildarferil">
            Hver greiddi atkvæði hvernig?
          </SectionHeading>

          {/* Legend */}
          <div className="mb-6 flex flex-wrap gap-4 text-sm text-white/50">
            {(["for", "against", "abstain", "absent"] as const).map((v) => (
              <span key={v} className="inline-flex items-center gap-2">
                <span
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[0.55rem] font-bold text-white"
                  style={{ backgroundColor: VOTE_COLORS[v] }}
                >
                  {VOTE_LETTERS[v]}
                </span>
                {VOTE_LABELS[v]}
              </span>
            ))}
          </div>

          {/* MP groups */}
          <div className="flex flex-col gap-6">
            {vote.partyBreakdown.map((party) => (
              <div key={party.partyName}>
                <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-white/45">
                  <span
                    className="h-2 w-2 rounded-sm"
                    style={{ backgroundColor: party.color }}
                  />
                  {party.partyName}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {party.mps.map((mp, i) => (
                    <MPDot key={i} name={mp.name} vote={mp.vote} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* ── Ferill málsins ── */}
        <SectionCard>
          <SectionHeading>Ferill málsins</SectionHeading>
          <Timeline items={vote.timeline} />
        </SectionCard>

        {/* ── Source strip ── */}
        <Card className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 text-sm text-white/35">
          <span>
            Öll gögn sótt beint úr opinni gagnaveitu Alþingis · Uppfært fyrir 2 klst.
          </span>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            Skoða upprunaleg gögn
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </Card>
      </main>

      <Footer />
    </>
  );
}
