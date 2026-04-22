import { AlthingiLogo } from "./AlthingiLogo";

const footerLinks = [
  { label: "Þingmenn", href: "#" },
  { label: "Atkvæðagreiðslur", href: "#" },
  { label: "Nefndir", href: "#" },
  { label: "Fundargerðir", href: "#" },
  { label: "Um Þingvaktina", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/8">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <AlthingiLogo className="h-8 w-auto" />
              <span className="text-sm font-semibold text-white/70">
                Þingvaktin
              </span>
            </div>
            <p className="max-w-xs text-xs text-white/30 leading-relaxed">
              Óháð gagnsæniverkefni um starfsemi Alþingis Íslands. Gögn frá
              opinberri XML-þjónustu Alþingis.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/35 hover:text-white/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-1 border-t border-white/6 pt-6 text-xs text-white/20 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Þingvaktin. Öll réttindi áskilin.</span>
          <span>Gögn: Alþingi Íslands — althingi.is</span>
        </div>
      </div>
    </footer>
  );
}
