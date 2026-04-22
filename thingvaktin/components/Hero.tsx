import { AlthingiLogo } from "./AlthingiLogo";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center px-4 pt-24 pb-8">
      {/* Watermark logo behind content */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <AlthingiLogo
          className="h-[55vw] max-h-[600px] w-auto opacity-[0.03]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full">
        {/* Eyebrow */}
        <div
          className="mb-6 animate-fade-in-up"
          style={{ animationDelay: "0ms" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-sm px-4 py-1.5 text-xs font-semibold tracking-widest text-white/60 uppercase">
            <span className="h-px w-4 bg-white/30" />
            Alþingi Íslands
            <span className="h-px w-4 bg-white/30" />
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mb-5 animate-fade-in-up text-balance text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white"
          style={{ animationDelay: "80ms" }}
        >
          Allt sem gerist á Alþingi,{" "}
          <span className="text-althingi-light">á einum stað.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="mb-10 animate-fade-in-up max-w-xl text-base sm:text-lg text-white/50 leading-relaxed"
          style={{ animationDelay: "160ms" }}
        >
          Fylgstu með atkvæðagreiðslum, þingmönnum og málum á Alþingi í
          rauntíma. Gagnsæni í þjónustu lýðræðisins.
        </p>

        {/* Search bar */}
        <div
          className="animate-fade-in-up w-full max-w-xl"
          style={{ animationDelay: "240ms" }}
        >
          <div className="glass rounded-2xl flex items-center gap-3 px-5 py-4 focus-within:ring-1 focus-within:ring-white/20 transition-all">
            <svg
              className="h-5 w-5 flex-shrink-0 text-white/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 15.803 7.5 7.5 0 0 0 15.803 15.803Z"
              />
            </svg>
            <input
              type="search"
              placeholder="Leita að þingmanni, máli eða atkvæðagreiðslu…"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
              aria-label="Leita"
            />
            <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded px-2 text-xs text-white/20 font-mono glass-sm">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="mt-12 animate-fade-in-up flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
          style={{ animationDelay: "320ms" }}
        >
          {[
            ["63", "þingmenn"],
            ["12", "nefndir"],
            ["847", "mál í vinnslu"],
            ["4.203", "atkvæðagreiðslur"],
          ].map(([num, label]) => (
            <div key={label} className="flex flex-col items-center gap-0.5">
              <span className="text-xl font-bold text-white/80">{num}</span>
              <span className="text-xs text-white/35">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
