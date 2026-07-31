import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, CheckSquare, Download, CalendarDays } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions | Samrose's Academy — Crèche to Primary Enrollment" },
      {
        name: "description",
        content:
          "Apply to Samrose's Academy in Ahenema Kokoben. Four-step admissions process, document checklist, age placement guidelines and answers to parents' most common questions.",
      },
      { property: "og:title", content: "Admissions | Samrose's Academy" },
      {
        property: "og:description",
        content:
          "Begin your child's journey at Samrose's Academy — Crèche, Nursery, Kindergarten and Primary admissions across our Ahenema Kokoben campuses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Admissions,
});

const STEPS = [
  {
    title: "Submit an Inquiry or Visit Us",
    text: "Fill out our online admissions form or visit either of our campuses in Ahenema Kokoben (Old Site for Early Grade; New Site for Kindergarten & Primary) to pick up an application packet.",
  },
  {
    title: "Campus Tour & Interaction",
    text: "Schedule a guided tour to experience our facilities firsthand. For prospective pupils entering Kindergarten or Primary levels, a brief, friendly placement assessment is conducted to understand their learning needs.",
  },
  {
    title: "Document Submission",
    text: "Submit the completed application form alongside required supporting documents (see checklist below).",
  },
  {
    title: "Offer of Admission & Enrollment",
    text: "Upon successful review and assessment, an official admission letter and fee schedule will be issued. Secure your child's spot by completing the registration process.",
  },
];

const DOCUMENTS = [
  "Completed Samrose\u2019s Academy Application Form",
  "Copy of Child\u2019s Birth Certificate",
  "Child\u2019s Health & Immunization Record",
  "2 Recent Passport-Sized Photographs of the Child",
  "Previous Academic Reports / Terminal Reports (For Lower & Upper Primary applicants)",
  "Passport-sized photograph of Parent / Guardian",
];

const PLACEMENT = [
  { level: "Crèche", age: "3 Months – 2 Years", campus: "Old Site (Early Grade Campus)" },
  { level: "Nursery 1 & 2", age: "2 – 3+ Years", campus: "Old Site (Early Grade Campus)" },
  { level: "Kindergarten (KG 1 & 2)", age: "4 – 5 Years", campus: "New Site (Main Campus)" },
  { level: "Lower Primary (Basic 1 – 3)", age: "6 – 8 Years", campus: "New Site (Main Campus)" },
  { level: "Upper Primary (Basic 4 – 6)", age: "9 – 11+ Years", campus: "New Site (Main Campus)" },
];

const FAQS = [
  {
    q: "When does admission open for the new academic session?",
    a: "Admissions are open year-round, with primary intake occurring at the start of each academic term. Early application is encouraged as spaces in our Crèche and Primary classes fill quickly.",
  },
  {
    q: "Do you offer campus tours before applying?",
    a: "Yes! We encourage parents to tour our Old Site and New Site facilities in Ahenema Kokoben to see our learning environment in action. Tours can be booked online or via phone.",
  },
  {
    q: "Is there an assessment test for early grade pupils?",
    a: "No formal academic testing is required for Crèche or Nursery. For Kindergarten and Primary applicants, we conduct an informal placement assessment to gauge their literacy and numeracy baseline.",
  },
];

function Admissions() {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0]!.q);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="bg-navy py-16 text-navy-foreground md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
              Admissions
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Begin Your Child&apos;s Journey at Samrose&apos;s Academy
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/80">
              Welcoming new pupils into our Crèche, Nursery, Kindergarten, and Primary programs
              across our Ahenema Kokoben campuses.
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="#documents"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-crimson px-6 py-3 text-sm font-semibold text-crimson-foreground shadow-card transition-opacity hover:opacity-90"
              >
                <Download size={17} /> Download Application Form (PDF)
              </a>
              <Link
                to="/"
                hash="admissions"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-foreground/30 px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
              >
                <CalendarDays size={17} /> Schedule a Campus Tour
              </Link>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
              The Process
            </span>
            <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
              A Simple 4-Step Admissions Process
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <article
                key={s.title}
                className="rounded-lg border border-border bg-card p-7 shadow-card"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy font-serif text-lg font-bold text-navy-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-serif text-lg font-bold">{s.title}</h3>
                <div className="my-4 h-px w-12 bg-crimson" />
                <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section id="documents" className="scroll-mt-24 bg-slate-soft py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
                Checklist
              </span>
              <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
                Required Application Documents
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Please come prepared with the following items.
              </p>
            </div>
            <ul className="mt-10 space-y-3">
              {DOCUMENTS.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card px-5 py-4 shadow-card"
                >
                  <CheckSquare size={20} className="mt-0.5 shrink-0 text-crimson" />
                  <span className="text-sm leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Placement */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
              Placement
            </span>
            <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
              Age Placement Guidelines
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-border shadow-card">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-navy text-navy-foreground">
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em]">
                    Level
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em]">
                    Age Requirement
                  </th>
                  <th className="hidden px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em] sm:table-cell">
                    Campus Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {PLACEMENT.map((row) => (
                  <tr key={row.level} className="border-t border-border bg-card">
                    <td className="px-5 py-4 font-serif text-sm font-bold text-navy">
                      {row.level}
                      <span className="mt-1 block font-sans text-xs font-normal text-muted-foreground sm:hidden">
                        {row.campus}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row.age}</td>
                    <td className="hidden px-5 py-4 text-sm text-muted-foreground sm:table-cell">
                      {row.campus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-soft py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
                FAQ
              </span>
              <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-10 space-y-4">
              {FAQS.map((f) => {
                const isOpen = openFaq === f.q;
                return (
                  <article
                    key={f.q}
                    className="overflow-hidden rounded-lg border border-border bg-card shadow-card"
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : f.q)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-serif text-base font-bold transition-colors hover:bg-slate-soft"
                      >
                        <span>{f.q}</span>
                        <ChevronDown
                          size={20}
                          className={`shrink-0 text-navy transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </h3>
                    {isOpen ? (
                      <p className="border-t border-border px-6 py-5 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
