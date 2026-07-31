import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics | Samrose's Academy — Crèche to Upper Primary" },
      {
        name: "description",
        content:
          "Explore the academic framework at Samrose's Academy: Crèche, Nursery, Kindergarten, Lower and Upper Primary, with STEM, small class sizes and continuous assessment.",
      },
      { property: "og:title", content: "Academics | Samrose's Academy" },
      {
        property: "og:description",
        content:
          "Academic excellence built on character and innovation — five learning stages across our Early Grade and Main campuses in Ahenema Kokoben.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Academics,
});

const PILLARS = [
  {
    title: "Integrated STEM & Digital Learning",
    text: "We blend modern technology with standard curriculum practices, ensuring pupils build essential digital skills from an early age.",
  },
  {
    title: "Small Class Sizes & Individual Attention",
    text: "Our balanced teacher-to-student ratio guarantees that every child's unique learning pace is recognized and supported.",
  },
  {
    title: "Continuous Assessment & Progress Tracking",
    text: "Parents receive transparent, real-time insights into their child's academic journey via our integrated school management portal.",
  },
];

const STAGES = [
  {
    name: "Crèche",
    range: "Ages 3 Months – 2 Years",
    site: "Old Site",
    accent: "bg-crimson",
    focus: "Early Sensory & Social Nurturing",
    overview:
      "A safe, loving home-away-from-home where early cognitive and motor skills are cultivated through structured play, music, storytelling, and individual care.",
    pillars: [
      "Sensory exploration and motor skill development",
      "Language foundation through songs and interactive stories",
      "Social interaction and emotional confidence building",
    ],
  },
  {
    name: "Nursery",
    range: "Nursery 1 – Nursery 2",
    site: "Old Site",
    accent: "bg-navy",
    focus: "Early Language Development & Guided Social Learning",
    overview:
      "Bridging the gap between crèche and formal schooling. Nursery focuses on building early vocabulary, fine motor coordination, social sharing, and structured classroom routines in a warm, encouraging environment.",
    pillars: [
      "Introduction to letters, sounds, and number recognition",
      "Fine motor skill exercises (tracing, coloring, and building blocks)",
      "Independent habits, etiquette, and group activity participation",
    ],
  },
  {
    name: "Kindergarten",
    range: "KG 1 – KG 2",
    site: "New Site",
    accent: "bg-crimson",
    focus: "Foundational Literacy & Creative Discovery",
    overview:
      "Transitioning young minds into structured learning through inquiry, phonics, and hands-on activities that foster independent thinking and effective communication.",
    pillars: [
      "Early Phonics, Reading & Expressive Writing",
      "Numeracy, Shapes & Logic Puzzles",
      "Creative Arts, Physical Education & Social Etiquette",
    ],
  },
  {
    name: "Lower Primary",
    range: "Basic 1 – Basic 3",
    site: "New Site",
    accent: "bg-navy",
    focus: "Core Competency & Active Literacy",
    overview:
      "Strengthening core academic subjects while encouraging pupils to ask questions, work collaboratively, and apply classroom lessons to real-world context.",
    pillars: [
      "Comprehensive Literacy & Public Speaking",
      "Mental Mathematics & Quantitative Reasoning",
      "Introductory Integrated Science & Environmental Studies",
      "Basic ICT Skills & Digital Literacy",
    ],
  },
  {
    name: "Upper Primary",
    range: "Basic 4 – Basic 6",
    site: "New Site",
    accent: "bg-crimson",
    focus: "Advanced Academic Preparation & Leadership",
    overview:
      "Preparing students for secondary education through rigorous academic standards, analytical thinking, STEM projects, and personal leadership responsibility.",
    pillars: [
      "Advanced Mathematics & Applied Science",
      "Creative Writing, Grammar & Literature",
      "ICT, Coding Concepts & Problem Solving",
      "Ghanaian Language, Citizenship & Social Studies",
    ],
  },
];

function Academics() {
  const [open, setOpen] = useState<string | null>(STAGES[0]!.name);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        {/* Intro */}
        <section className="bg-slate-soft py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
              Academics
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Nurturing Excellence at Every Stage
            </h1>
            <h2 className="mt-6 font-serif text-xl font-bold text-navy sm:text-2xl">
              Academic Excellence Built on Character &amp; Innovation
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              At Samrose&apos;s Academy, our academic framework is designed to spark curiosity from
              early childhood through to upper primary excellence. Grounded in holistic development,
              our curriculum combines rigorous foundational learning with practical problem-solving,
              critical thinking, and character building across both our Early Grade (Old Site) and
              Main (New Site) campuses in Ahenema Kokoben.
            </p>
          </div>
        </section>

        {/* Stages */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
              Five Learning Stages
            </span>
            <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
              A Journey Shaped Around How Children Grow
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Select a stage to view its focus, overview and key learning pillars.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {STAGES.map((s) => {
              const isOpen = open === s.name;
              return (
                <article
                  key={s.name}
                  className="overflow-hidden rounded-lg border border-border bg-card shadow-card"
                >
                  <div className={`h-1 w-full ${s.accent}`} />
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : s.name)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-soft sm:px-8"
                    >
                      <span className="min-w-0">
                        <span className="block font-serif text-lg font-bold sm:text-xl">
                          {s.name}{" "}
                          <span className="font-sans text-sm font-medium text-muted-foreground">
                            ({s.range})
                          </span>
                        </span>
                        <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-crimson">
                          {s.site}
                        </span>
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-navy transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </h3>
                  {isOpen ? (
                    <div className="border-t border-border px-6 py-7 sm:px-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Core Focus
                      </p>
                      <p className="mt-1 font-serif text-lg font-bold text-navy">{s.focus}</p>
                      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                        {s.overview}
                      </p>
                      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Key Learning Pillars
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {s.pillars.map((p) => (
                          <li key={p} className="flex gap-3 text-sm leading-relaxed">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>

        {/* Pillars */}
        <section className="bg-slate-soft py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
                Teaching Philosophy
              </span>
              <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
                Academic Pillars &amp; Teaching Philosophy
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Three core commitments that shape every classroom at Samrose&apos;s Academy.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {PILLARS.map((p, i) => (
                <article
                  key={p.title}
                  className="rounded-lg border border-border bg-card p-8 shadow-card"
                >
                  <span className="font-serif text-3xl font-bold text-crimson/30">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold">{p.title}</h3>
                  <div className="my-5 h-px w-12 bg-crimson" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
