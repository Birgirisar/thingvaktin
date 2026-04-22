import { BackgroundMesh } from "@/components/BackgroundMesh";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PartyTag } from "@/components/PartyTag";
import { StatCard } from "@/components/StatCard";
import { MPProfileTabs } from "@/components/mp/MPProfileTabs";
import { mpProfile } from "@/lib/mock-data";

export default function MPProfilePage() {
  const mp = mpProfile;

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
            Þingmenn
          </a>
          <span className="opacity-40">›</span>
          <a href="#" className="hover:text-white/70 transition-colors">
            {mp.partyName}
          </a>
          <span className="opacity-40">›</span>
          <span className="text-white/50 truncate max-w-[20ch] sm:max-w-none">
            {mp.name}
          </span>
        </nav>

        {/* ── Profile header ── */}
        <header className="py-8 sm:py-10 grid grid-cols-[auto_1fr] gap-6 sm:gap-9 sm:grid-cols-[180px_1fr_auto] items-start">
          {/* Photo placeholder */}
          <div
            className="h-28 w-28 sm:h-44 sm:w-44 flex-shrink-0 rounded-2xl sm:rounded-[28px] flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${mp.partyColor}55 0%, ${mp.partyColor}bb 100%)`,
              boxShadow: "0 20px 40px -20px rgba(0,0,0,0.6)",
            }}
          >
            <span className="text-4xl sm:text-6xl font-semibold text-white/90 tracking-tight">
              {mp.initials}
            </span>
          </div>

          {/* Meta */}
          <div className="pt-1">
            <div className="mb-3">
              <PartyTag name={mp.partyName} color={mp.partyColor} />
            </div>
            <h1 className="mb-2 text-3xl sm:text-5xl font-semibold leading-tight tracking-tight text-white">
              {mp.name}
            </h1>
            <p className="mb-5 text-base text-white/45">{mp.constituency}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/55">
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5 text-white/30 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {mp.facts.born}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5 text-white/30 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {mp.facts.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5 text-white/30 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l8-4v18" />
                  <path d="M19 21V11l-6-4" />
                </svg>
                {mp.facts.committeeRole}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="h-3.5 w-3.5 text-white/30 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {mp.facts.yearsInParliament}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="col-span-2 sm:col-span-1 flex sm:flex-col gap-2 sm:pt-1">
            <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-b from-blue-500 to-blue-700 shadow-lg hover:-translate-y-px transition-transform">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Fylgjast með
            </button>
            <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white/70 glass hover:text-white transition-colors">
              Bera saman
            </button>
          </div>
        </header>

        {/* ── Key stats ── */}
        <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard
            label="Mæting"
            icon={<polyline points="20 6 9 17 4 12" />}
            value={mp.stats.attendance}
            unit="%"
            bar={mp.stats.attendance}
          />
          <StatCard
            label="Atkvæði greidd"
            icon={
              <>
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </>
            }
            value={mp.stats.votesCast}
            detail={`af ${mp.stats.totalVotes} alls`}
          />
          <StatCard
            label="Ræður"
            icon={
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            }
            value={mp.stats.speeches}
            detail={mp.stats.speechTime}
          />
          <StatCard
            label="Flutt mál"
            icon={
              <>
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </>
            }
            value={mp.stats.billsSponsored}
            detail={`${mp.stats.billsPassed} samþykkt`}
          />
        </div>

        {/* ── Tabs + content ── */}
        <MPProfileTabs mp={mp} />
      </main>

      <Footer />
    </>
  );
}
