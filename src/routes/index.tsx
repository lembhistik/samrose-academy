import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";
import heroAsset from "@/assets/hero.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samroses Academy | Crèche, Kindergarten & Primary Education" },
      {
        name: "description",
        content:
          "Crèche, Kindergarten, Lower & Upper Primary education at Samrose's Academy, Ahenema Kokoben. Holistic academic growth, discipline and creative development.",
      },
      { property: "og:title", content: "Samroses Academy | Crèche, Kindergarten & Primary Education" },
      {
        property: "og:description",
        content:
          "Crèche, Kindergarten, Lower & Upper Primary education at Samrose's Academy, Ahenema Kokoben. Holistic academic growth, discipline and creative development.",
      },
    ],
  }),
  component: Home,
});

const NAV = [
  "Academics",
  "Campuses",
  "Admissions",
  "Campus Life",
  "About Us",
];

const DIVISIONS = [
  {
    name: "Crèche",
    accent: "bg-crimson",
    text: "Warm, safe environment for early sensory development and individual care.",
  },
  {
    name: "Kindergarten",
    accent: "bg-navy",
    text: "Play-based learning designed to build confidence, early language, and social skills.",
  },
  {
    name: "Lower Primary",
    label: "Basic 1–3",
    accent: "bg-crimson",
    text: "Core literacy, numeracy, critical thinking, and structured learning.",
  },
  {
    name: "Upper Primary",
    label: "Basic 4–6",
    accent: "bg-navy",
    text: "Advanced academic focus, STEM foundation, and leadership preparation.",
  },
];

function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Announcement */}
      <div className="bg-navy px-4 py-2.5 text-center text-xs tracking-wide text-navy-foreground sm:text-sm">
        Admissions Open across Early Grade &amp; Primary Campuses{" "}
        <span className="text-crimson">|</span> Located at Ahenema Kokoben
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
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
          </a>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 lg:flex">
              {NAV.map((item) => (
                <a
                  key={item}
                  href="#top"
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-crimson"
                >
                  {item}
                </a>
              ))}
            </nav>
            <a
              href="#admissions"
              className="shrink-0 rounded-md bg-crimson px-5 py-2.5 text-sm font-semibold text-crimson-foreground shadow-card transition-opacity hover:opacity-90"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Pupils in red uniforms on the Samrose's Academy campus grounds"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 md:py-40">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-crimson-foreground/80">
            Ahenema Kokoben • Ashanti Region
          </p>
          <h1 className="font-serif text-4xl font-bold leading-[1.05] text-navy-foreground sm:text-6xl md:text-7xl">
            MODELLING GREATNESS
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
            Welcome to SAMROSE&apos;S ACADEMY in Ahenema Kokoben. Dedicated to holistic
            academic growth, discipline, and creative development.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#divisions"
              className="rounded-md bg-crimson px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-crimson-foreground shadow-elevated transition-opacity hover:opacity-90"
            >
              Explore Divisions
            </a>
            <a
              href="#admissions"
              className="rounded-md border border-navy-foreground/70 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-navy-foreground transition-colors hover:bg-navy-foreground hover:text-navy"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section id="divisions" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
            Academic Divisions
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            Nurturing Excellence at Every Stage
          </h2>
          <p className="mt-4 text-muted-foreground">
            A four-stage learning journey shaped around how children grow.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIVISIONS.map((d) => (
            <article
              key={d.name}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className={`h-1 w-full ${d.accent}`} />
              <div className="p-7">
                <h3 className="font-serif text-xl font-bold">{d.name}</h3>
                {d.label ? (
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-crimson">
                    {d.label}
                  </p>
                ) : null}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Campuses */}
      <section id="campuses" className="bg-slate-soft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
              Dual Campus · Ahenema Kokoben
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
              Specialized Learning Environments
            </h2>
            <p className="mt-4 text-muted-foreground">
              Two dedicated sites crafted specifically for different growth stages.
            </p>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {[
              {
                title: "Early Grade Campus",
                site: "Old Site",
                scope: "Crèche & Early Learning",
                highlights:
                  "Secure child-safe play zones, early reading nooks, and dedicated rest areas for young learners.",
              },
              {
                title: "Main Campus",
                site: "New Site",
                scope: "Kindergarten & Primary School",
                highlights:
                  "Spacious classrooms, ICT media center, sports facilities, and science/learning labs.",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="rounded-lg border border-border bg-card p-9 shadow-card"
              >
                <span className="inline-block rounded-full bg-navy px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-foreground">
                  {c.site}
                </span>
                <h3 className="mt-5 font-serif text-2xl font-bold sm:text-3xl">{c.title}</h3>
                <p className="mt-2 text-sm font-semibold text-crimson">{c.scope}</p>
                <div className="my-6 h-px w-16 bg-crimson" />
                <p className="text-sm leading-relaxed text-muted-foreground">{c.highlights}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portal banner */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 md:py-24">
        <div className="relative overflow-hidden rounded-xl bg-navy p-10 shadow-elevated md:p-16">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-crimson/25" />
          <div className="absolute bottom-0 left-0 h-1.5 w-40 bg-crimson" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
                Digital School Management
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-navy-foreground sm:text-4xl">
                One portal for parents, teachers &amp; administration
              </h2>
              <p className="mt-4 max-w-2xl text-navy-foreground/75">
                Real-time student tracking, grades and report cards, fee management, and direct
                parent–teacher communication — all through samroseacademy.com.
              </p>
            </div>
            <a
              href="https://samroseacademy.com"
              className="justify-self-start rounded-md bg-crimson px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-crimson-foreground transition-opacity hover:opacity-90"
            >
              Access School Portal
            </a>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="bg-slate-soft py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-xl border border-border bg-card p-8 shadow-card sm:p-12">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
                Admissions Inquiry
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
                Begin Your Journey at Samrose&apos;s Academy
              </h2>
            </div>
            <form
              className="mt-10 grid gap-5 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <Field label="Parent Full Name" className="sm:col-span-2">
                <input
                  required
                  maxLength={100}
                  type="text"
                  className={inputClass}
                  placeholder="e.g. Akosua Mensah"
                />
              </Field>
              <Field label="Phone Number">
                <input
                  required
                  maxLength={20}
                  type="tel"
                  className={inputClass}
                  placeholder="0558344599"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  maxLength={255}
                  type="email"
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Child's Division">
                <select required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select a division
                  </option>
                  <option>Crèche</option>
                  <option>Kindergarten</option>
                  <option>Lower Primary (Basic 1–3)</option>
                  <option>Upper Primary (Basic 4–6)</option>
                </select>
              </Field>
              <Field label="Preferred Campus Visit Date">
                <input required type="date" className={inputClass} />
              </Field>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-md bg-crimson px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-crimson-foreground transition-opacity hover:opacity-90"
                >
                  Submit Inquiry
                </button>
                {submitted ? (
                  <p className="mt-4 text-center text-sm font-medium text-navy">
                    Thank you — our admissions team will contact you shortly.
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <FooterCol
              title="Quick Links"
              items={["Academics", "Campuses", "Portal", "Admissions"]}
            />
            <FooterCol
              title="Divisions"
              items={["Crèche", "Kindergarten", "Lower Primary", "Upper Primary"]}
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
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-crimson focus:ring-2 focus:ring-crimson/25";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-crimson">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm text-navy-foreground/75">
        {items.map((i) => (
          <li key={i}>
            <a href="#top" className="transition-colors hover:text-crimson-foreground">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
