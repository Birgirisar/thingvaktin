"use client";

import { useState } from "react";
import { type MPProfile, type VoteType } from "@/lib/mock-data";
import { CircularProgress } from "@/components/CircularProgress";
import { ActivityHeatmap } from "@/components/ActivityHeatmap";
import { Card } from "@/components/Card";
import { useTheme } from "@/components/ThemeProvider";

const POSITION_CONFIG: Record<
  VoteType,
  { label: string; className: string }
> = {
  for: { label: "Með", className: "bg-emerald-500/15 text-emerald-400" },
  against: { label: "Á móti", className: "bg-red-500/15 text-red-400" },
  abstain: { label: "Sat hjá", className: "bg-white/8 text-white/55" },
  absent: { label: "Fjarverandi", className: "bg-orange-500/15 text-orange-400" },
};

type TabId = "overview" | "votes" | "speeches" | "attendance" | "interests";
type PositionFilter = VoteType | "all";
type TimeFilter = "current" | "term" | "all";

const TABS: { id: TabId; label: string; countKey?: keyof MPProfile["stats"] }[] = [
  { id: "overview", label: "Yfirlit" },
  { id: "votes", label: "Atkvæði", countKey: "votesCast" },
  { id: "speeches", label: "Ræður", countKey: "speeches" },
  { id: "attendance", label: "Mæting" },
  { id: "interests", label: "Hagsmunir" },
];

export function MPProfileTabs({ mp }: { mp: MPProfile }) {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [posFilter, setPosFilter] = useState<PositionFilter>("all");
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("current");
  const [query, setQuery] = useState("");

  const activeTabCls =
    theme === "dark"
      ? "bg-white/90 text-[#050b1f] shadow-sm"
      : "bg-[#0a1220] text-white shadow-sm";
  const activeFilterCls =
    theme === "dark" ? "bg-white/90 text-[#050b1f]" : "bg-[#0a1220]/85 text-white";

  const filteredVotes = mp.votesHistory.filter((v) => {
    const matchPos = posFilter === "all" || v.position === posFilter;
    const matchQ = !query || v.title.toLowerCase().includes(query.toLowerCase());
    return matchPos && matchQ;
  });

  return (
    <div>
      {/* Sticky tabs pill */}
      <div
        className="sticky top-20 z-40 py-2 pb-5"
        style={{
          background:
            "linear-gradient(180deg, var(--color-bg-base) 0%, var(--color-bg-base) 60%, transparent 100%)",
        }}
      >
        <div className="inline-flex gap-0.5 p-1.5 glass rounded-full overflow-x-auto max-w-full">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id ? activeTabCls : "text-white/55 hover:text-white"
              }`}
            >
              {tab.label}
              {tab.countKey !== undefined && (
                <span className="text-[0.72rem] opacity-55 tabular-nums">
                  {mp.stats[tab.countKey]}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Overview ── */}
      {activeTab === "overview" && (
        <div className="animate-fade-in-up">
          <div className="mb-3 grid grid-cols-1 gap-3 lg:grid-cols-[1.4fr_1fr]">
            {/* Recent votes */}
            <Card className="p-6 sm:p-7">
              <div className="mb-5 flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-white tracking-tight">
                  Nýlegar atkvæðagreiðslur
                </h3>
                <span className="text-xs text-white/35">Síðustu 8</span>
              </div>
              <div className="flex flex-col">
                {mp.votesHistory.slice(0, 8).map((vote, i) => {
                  const pos = POSITION_CONFIG[vote.position];
                  return (
                    <div
                      key={i}
                      className="grid grid-cols-[80px_1fr_auto] items-center gap-3 py-3 border-b border-white/6 last:border-0"
                    >
                      <span className="text-xs tabular-nums text-white/35">
                        {vote.date}
                      </span>
                      <span className="text-sm font-medium text-white/80 leading-snug">
                        {vote.title}
                      </span>
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${pos.className}`}
                      >
                        {pos.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Party loyalty */}
            <Card className="p-6 sm:p-7">
              <h3 className="mb-1 text-base font-semibold text-white tracking-tight">
                Flokkshollusta
              </h3>
              <div className="mt-6">
                <CircularProgress
                  value={mp.partyLoyalty}
                  color={mp.partyColor}
                  label="með flokknum"
                />
                <p className="text-sm text-center text-white/40 leading-relaxed">
                  {mp.name.split(" ")[0]} greiðir atkvæði með{" "}
                  <strong className="text-white/70 font-medium">
                    {mp.partyName}
                  </strong>{" "}
                  í {mp.partyLoyalty}% tilvika. Þingmeðaltal er{" "}
                  {mp.partyAvgLoyalty}%.
                </p>
              </div>
            </Card>
          </div>

          <div className="mb-3 grid grid-cols-1 gap-3 lg:grid-cols-[1.4fr_1fr]">
            {/* Topics */}
            <Card className="p-6 sm:p-7">
              <div className="mb-5 flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-white tracking-tight">
                  Helstu málaflokkar
                </h3>
                <span className="text-xs text-white/35">
                  Eftir ræðutíma og málum
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {mp.topics.map((t) => (
                  <span
                    key={t.topic}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-300"
                  >
                    {t.topic}
                    <span className="ml-1.5 text-[0.72rem] opacity-55 tabular-nums">
                      {t.weight}%
                    </span>
                  </span>
                ))}
              </div>
            </Card>

            {/* Activity heatmap */}
            <Card className="p-6 sm:p-7">
              <h3 className="mb-5 text-base font-semibold text-white tracking-tight">
                Virkni síðustu 6 mánuði
              </h3>
              <ActivityHeatmap pattern={mp.activityPattern} />
            </Card>
          </div>
        </div>
      )}

      {/* ── Votes ── */}
      {activeTab === "votes" && (
        <div className="animate-fade-in-up">
          <div className="mb-4 flex flex-wrap gap-2 items-center">
            <FilterGroup
              options={[
                { id: "all", label: "Allt" },
                { id: "for", label: "Með" },
                { id: "against", label: "Á móti" },
                { id: "abstain", label: "Sat hjá" },
                { id: "absent", label: "Fjarverandi" },
              ]}
              active={posFilter}
              onChange={(v) => setPosFilter(v as PositionFilter)}
            />
            <FilterGroup
              options={[
                { id: "current", label: "Þetta þing" },
                { id: "term", label: "Allt kjörtímabilið" },
                { id: "all-time", label: "Frá upphafi" },
              ]}
              active={timeFilter}
              onChange={(v) => setTimeFilter(v as TimeFilter)}
            />
            <div className="flex-1 min-w-[180px] flex items-center gap-2 px-4 py-2 glass rounded-full">
              <svg
                className="h-3.5 w-3.5 text-white/30 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.5" y2="16.5" />
              </svg>
              <input
                type="text"
                placeholder="Leita í atkvæðum..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder:text-white/25 outline-none"
              />
            </div>
          </div>

          <Card className="overflow-hidden">
            {filteredVotes.map((vote, i) => {
              const pos = POSITION_CONFIG[vote.position];
              return (
                <div
                  key={i}
                  className="grid grid-cols-[80px_1fr_120px_100px] items-center gap-3 px-6 py-4 border-b border-white/6 last:border-0 hover:bg-white/3 transition-colors cursor-pointer sm:grid-cols-[90px_1fr_130px_110px]"
                >
                  <span className="text-xs tabular-nums text-white/35">
                    {vote.date}
                  </span>
                  <span className="text-sm font-medium text-white/80 leading-snug">
                    {vote.title}
                  </span>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${pos.className}`}
                  >
                    {pos.label}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white/40">
                    <span
                      className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                        vote.outcome === "samþykkt"
                          ? "bg-emerald-400"
                          : "bg-red-400"
                      }`}
                    />
                    {vote.outcome === "samþykkt" ? "Samþykkt" : "Felld"}
                  </span>
                </div>
              );
            })}
            {filteredVotes.length === 0 && (
              <div className="py-16 text-center text-sm text-white/30">
                Engin atkvæði fundust
              </div>
            )}
          </Card>
        </div>
      )}

      {/* ── Placeholder tabs ── */}
      {activeTab === "speeches" && (
        <div className="animate-fade-in-up">
          <Card className="py-16 text-center">
            <h3 className="mb-2 text-base font-semibold text-white">Ræður</h3>
            <p className="text-sm text-white/40">
              Hér birtast allar {mp.stats.speeches} ræður{" "}
              {mp.name.split(" ")[0]} með tengli í upptökur og umræður.
            </p>
          </Card>
        </div>
      )}
      {activeTab === "attendance" && (
        <div className="animate-fade-in-up">
          <Card className="py-16 text-center">
            <h3 className="mb-2 text-base font-semibold text-white">Mæting</h3>
            <p className="text-sm text-white/40">
              Mætingarmunstur eftir mánuðum, með samhengi (þingfrí,
              nefndarstörf, erlendar ferðir).
            </p>
          </Card>
        </div>
      )}
      {activeTab === "interests" && (
        <div className="animate-fade-in-up">
          <Card className="py-16 text-center">
            <h3 className="mb-2 text-base font-semibold text-white">
              Hagsmunaskrá
            </h3>
            <p className="text-sm text-white/40">
              Fjárhagslegar skráningar, hlutabréfaeign, stjórnarsetur og aðrar
              hagsmunaupplýsingar.
            </p>
          </Card>
        </div>
      )}
    </div>
  );
}

function FilterGroup({
  options,
  active,
  onChange,
}: {
  options: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
}) {
  const { theme } = useTheme();
  const activeCls =
    theme === "dark" ? "bg-white/90 text-[#050b1f]" : "bg-[#0a1220]/85 text-white";

  return (
    <div className="inline-flex gap-0.5 p-1 glass rounded-full">
      {options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onChange(opt.id)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
            active === opt.id ? activeCls : "text-white/55 hover:text-white"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
