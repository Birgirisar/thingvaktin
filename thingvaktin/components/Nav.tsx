import { AlthingiLogo } from "./AlthingiLogo";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Þingmenn", href: "#" },
  { label: "Atkvæðagreiðslur", href: "#" },
  { label: "Nefndir", href: "#" },
  { label: "Fundargerðir", href: "#" },
];

export function Nav() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass rounded-full flex items-center gap-2 px-4 py-2.5 w-full max-w-3xl">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0 mr-2">
          <AlthingiLogo className="h-7 w-auto" />
          <span className="hidden sm:block text-sm font-semibold text-white/90 tracking-wide">
            Þingvaktin
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-0.5 flex-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-sm text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 flex-shrink-0">
          {/* Theme toggle */}
          <ThemeToggle />

          {/* Live pill */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1.5 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
            Þing situr
          </span>
        </div>
      </nav>
    </header>
  );
}
