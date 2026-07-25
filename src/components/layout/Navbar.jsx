import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { practiceAreas } from "../../data/practiceAreas";

const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Practice Areas", to: "/practice-areas", mega: true },
  { label: "Our Team", to: "/team" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex flex-col leading-none" onClick={() => setMobileOpen(false)}>
            <span className="font-display text-xl tracking-tight text-parchment">Omotola & Partners</span>
            <span className="citation text-brass-light mt-1">Attorneys &amp; Solicitors</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.mega ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-sm text-parchment/85 hover:text-brass-light transition-colors py-2"
                    aria-expanded={megaOpen}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                  </button>

                  {megaOpen && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[640px]">
                      <div className="rounded-lg border border-hairline bg-ink shadow-2xl shadow-black/40 p-6 grid grid-cols-2 gap-x-8 gap-y-1">
                        {practiceAreas.slice(0, 10).map((area) => (
                          <Link
                            key={area.slug}
                            to={`/practice-areas/${area.slug}`}
                            className="group flex items-baseline justify-between gap-3 py-2 border-b border-hairline/60"
                          >
                            <span className="text-sm text-parchment/85 group-hover:text-brass-light transition-colors">
                              {area.name}
                            </span>
                            <span className="citation text-slate-light shrink-0">{area.ref}</span>
                          </Link>
                        ))}
                        <Link
                          to="/practice-areas"
                          className="col-span-2 mt-3 flex items-center gap-2 text-sm text-brass-light hover:text-brass transition-colors"
                        >
                          View all practice areas <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm transition-colors py-2 ${
                      isActive ? "text-brass-light" : "text-parchment/85 hover:text-brass-light"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="citation rounded-full border border-brass px-5 py-2.5 text-brass-light hover:bg-brass hover:text-ink transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden text-parchment"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-ink border-t border-hairline">
          <nav className="flex flex-col px-6 py-6 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-parchment/85 border-b border-hairline/60 text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="citation mt-4 text-center rounded-full border border-brass px-5 py-3 text-brass-light"
            >
              Schedule Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
