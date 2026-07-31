import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";

export const NAV: { label: string; to: string; hash?: string }[] = [
  { label: "Academics", to: "/academics" },
  { label: "Campuses", to: "/", hash: "campuses" },
  { label: "Admissions", to: "/", hash: "admissions" },
  { label: "Campus Life", to: "/", hash: "divisions" },
  { label: "About Us", to: "/", hash: "top" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement */}
      <div className="bg-navy px-4 py-2.5 text-center text-xs tracking-wide text-navy-foreground sm:text-sm">
        Admissions Open across Early Grade &amp; Primary Campuses{" "}
        <span className="text-crimson">|</span> Located at Ahenema Kokoben
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Samrose's Academy crest"
              className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-14 sm:w-14"
            />
            <span className="min-w-0">
              <span className="block truncate font-serif text-base font-bold leading-tight tracking-tight sm:text-lg">
                SAMROSE&apos;S ACADEMY
              </span>
              <span className="block truncate text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Modelling Greatness
              </span>
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 lg:flex">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  hash={item.hash}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-crimson"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/"
              hash="admissions"
              className="hidden shrink-0 rounded-md bg-crimson px-5 py-2.5 text-sm font-semibold text-crimson-foreground shadow-card transition-opacity hover:opacity-90 lg:inline-block"
            >
              Enroll Now
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-navy transition-colors hover:bg-slate-soft lg:hidden"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen ? (
          <nav className="border-t border-border bg-background px-4 pb-4 pt-2 sm:px-6 lg:hidden">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-border/60 py-3 text-sm font-medium text-foreground/85 transition-colors hover:text-crimson"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
    </>
  );
}
