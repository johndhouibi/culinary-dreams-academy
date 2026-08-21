import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/formation-pizzaiolo", label: "Pizzaïolo & Fast Food" },
  { to: "/formation-cuisine", label: "Cuisine & Pâtisserie" },
  { to: "/a-propos", label: "L'Académie" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/70 font-display text-sm text-gold">
            AMC
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg">Académie Master Class</span>
            <span className="block text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
              Kélibia · Tunisie
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" hash="inscription" className="btn-gold !px-5 !py-2.5 text-sm">
            Inscription
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          className="lg:hidden text-gold"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 px-5 pb-5 pt-2 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/40 py-3 text-sm text-muted-foreground"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            hash="inscription"
            onClick={() => setOpen(false)}
            className="btn-gold mt-4 w-full text-sm"
          >
            Inscription
          </Link>
        </nav>
      )}
    </header>
  );
}
