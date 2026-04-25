import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";
import { LINKS } from "@/config/links";

const nav: { label: string; to?: string; children?: { label: string; to: string; desc?: string }[] }[] = [
  { label: "Home", to: "/" },
  { label: "Games", to: "/games" },
  { label: "Guide", to: "/how-to-play" },
  {
    label: "Account",
    children: [
      { label: "Login", to: "/yaarwin-login", desc: "Secure access to your account" },
      { label: "Register", to: "/yaarwin-register", desc: "Create your verified account" },
      { label: "Download", to: "/yaarwin-download", desc: "Install the official app" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Giftcodes", to: "/yaarwin-giftcode", desc: "Latest verified codes" },
      { label: "Giftcodes Guide", to: "/giftcodes-guide", desc: "How redemption works" },
      { label: "About", to: "/about", desc: "Our editorial mission" },
      { label: "Contact", to: "/contact", desc: "Reach our support team" },
    ],
  },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Trust strip */}
      <div className="hidden md:block border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container-wide flex items-center justify-between h-9 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-primary" /> Verified platform · Editorial team reviewed · Updated regularly</div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
            <Link to="/disclaimer" className="hover:text-foreground">Disclaimer</Link>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-background/85 border-b border-border" : "bg-background/40 backdrop-blur-sm"}`}>
        <div className="container-wide flex items-center justify-between h-16">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
            {nav.map((g) =>
              g.children ? (
                <div key={g.label} className="relative" onMouseEnter={() => setDropdown(g.label)} onMouseLeave={() => setDropdown(null)}>
                  <button className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                    {g.label} <ChevronDown size={14} className={`transition-transform ${dropdown === g.label ? "rotate-180" : ""}`} />
                  </button>
                  {dropdown === g.label && (
                    <div className="absolute top-full left-0 pt-2 min-w-[280px] animate-fade-in">
                      <div className="card-elev !p-2 shadow-elevated">
                        {g.children.map((c) => (
                          <NavLink key={c.to} to={c.to}
                            className={({ isActive }) => `block px-3 py-2.5 rounded-md transition-colors ${isActive ? "bg-secondary text-foreground" : "hover:bg-secondary/60"}`}>
                            <div className="text-sm font-semibold text-foreground">{c.label}</div>
                            {c.desc && <div className="text-[11px] text-muted-foreground mt-0.5">{c.desc}</div>}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink key={g.to} to={g.to!}
                  className={({ isActive }) => `px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  {g.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a href={LINKS.login} className="btn-secondary !py-2 !px-4 text-sm">Login</a>
            <a href={LINKS.register} className="btn-primary !py-2 !px-4 text-sm">Register</a>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="lg:hidden p-2 rounded-md text-foreground" aria-label="Toggle navigation">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-xl animate-fade-in">
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {nav.map((g) =>
                g.children ? (
                  <details key={g.label}>
                    <summary className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground cursor-pointer">
                      {g.label} <ChevronDown size={16} className="transition-transform" />
                    </summary>
                    <div className="pl-4 mt-1 space-y-1">
                      {g.children.map((c) => (
                        <Link key={c.to} to={c.to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground">{c.label}</Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link key={g.to} to={g.to!} onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground">{g.label}</Link>
                )
              )}
              <div className="pt-3 grid grid-cols-2 gap-2">
                <a href={LINKS.login} className="btn-secondary !py-2.5 text-sm justify-center">Login</a>
                <a href={LINKS.register} className="btn-primary !py-2.5 text-sm justify-center">Register</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
