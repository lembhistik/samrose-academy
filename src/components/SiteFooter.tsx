import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.asset.json";

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-crimson">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm text-navy-foreground/75">
        {items.map((i) => (
          <li key={i}>
            <Link to="/academics" className="transition-colors hover:text-crimson-foreground">
              {i}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={logoAsset.url}
                alt="Samrose's Academy crest"
                className="h-14 w-14 shrink-0 rounded-full object-cover"
              />
              <span className="font-serif text-lg font-bold leading-tight">
                SAMROSE&apos;S
                <br />
                ACADEMY
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-navy-foreground/70">
              Modelling greatness through holistic academic growth, discipline, and creative
              development for every child we teach.
            </p>
          </div>
          <FooterCol title="Quick Links" items={["Academics", "Campuses", "Portal", "Admissions"]} />
          <FooterCol
            title="Divisions"
            items={["Crèche", "Nursery", "Kindergarten", "Lower Primary", "Upper Primary"]}
          />
          <div>
            <h3 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-crimson">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-navy-foreground/75">
              <li>Ahenema Kokoben, Ashanti Region, Ghana</li>
              <li>Old Site (Early Grade) | New Site (KG &amp; Primary)</li>
              <li>
                <a
                  href="mailto:samrosesacademysra@gmail.com"
                  className="hover:text-crimson-foreground"
                >
                  samrosesacademysra@gmail.com
                </a>
              </li>
              <li>
                Enquiries:{" "}
                <a href="tel:0558344599" className="font-semibold hover:text-crimson-foreground">
                  0558344599
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-foreground/15 py-6 text-center text-xs text-navy-foreground/60">
        © 2026 SAMROSE&apos;S ACADEMY. All Rights Reserved.
      </div>
    </footer>
  );
}
