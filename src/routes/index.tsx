import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, CheckSquare, Download, CalendarDays } from "lucide-react";
import heroAsset from "@/assets/hero.asset.json";
import mainCampusAsset from "@/assets/main-campus.asset.json";
import earlyGradeAsset from "@/assets/early-grade-campus.asset.json";
import gallery1 from "@/assets/gallery-1.asset.json";
import gallery2 from "@/assets/gallery-2.asset.json";
import gallery3 from "@/assets/gallery-3.asset.json";
import gallery4 from "@/assets/gallery-4.asset.json";
import gallery5 from "@/assets/gallery-5.asset.json";
import gallery6 from "@/assets/gallery-6.asset.json";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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

const DIVISIONS = [
  {
    name: "Crèche",
    label: "3 Months – 2 Years",
    accent: "bg-crimson",
    text: "Warm, safe environment for early sensory development and individual care.",
  },
  {
    name: "Nursery",
    label: "Nursery 1–2",
    accent: "bg-navy",
    text: "Early vocabulary, fine motor coordination and classroom routines before formal school.",
  },
  {
    name: "Kindergarten",
    label: "KG 1–2",
    accent: "bg-crimson",
    text: "Play-based learning designed to build confidence, early language, and social skills.",
  },
  {
    name: "Lower Primary",
    label: "Basic 1–3",
    accent: "bg-navy",
    text: "Core literacy, numeracy, critical thinking, and structured learning.",
  },
  {
    name: "Upper Primary",
    label: "Basic 4–6",
    accent: "bg-crimson",
    text: "Advanced academic focus, STEM foundation, and leadership preparation.",
  },
];

const ACTIVITIES = [
  {
    icon: "🎨",
    title: "Creative & Performing Arts",
    text: "Music, drama, drawing, and cultural performance clubs to foster self-expression.",
  },
  {
    icon: "⚽",
    title: "Sports & Physical Education",
    text: "Track events, soccer, and structured physical activities designed for coordination, health, and teamwork.",
  },
  {
    icon: "💻",
    title: "ICT & Innovation Club",
    text: "Hands-on introductory tech and problem-solving projects for primary students.",
  },
  {
    icon: "📖",
    title: "Literacy & Debate Society",
    text: "Building public speaking confidence, reading habits, and vocabulary from lower primary onwards.",
  },
];

const GALLERY = [
  { src: gallery1.url, alt: "Pupils on the grounds in front of the colourful Main Campus block" },
  { src: gallery2.url, alt: "Pupils presenting a painted flower-tree artwork during a creative arts session" },
  { src: gallery3.url, alt: "Young learners gathered around a table for a painting and craft activity" },
  { src: gallery4.url, alt: "Pupils playing football on the school field beside the cafeteria" },
  { src: gallery5.url, alt: "Primary pupils holding a handcrafted rooster sculpture outside the campus" },
  { src: gallery6.url, alt: "KG Two class displaying their printmaking handprint project" },
];

const ACADEMICS_PILLARS = [
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

const ACADEMICS_STAGES = [
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

const ADMISSIONS_STEPS = [
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

const ADMISSIONS_DOCUMENTS = [
  "Completed Samrose’s Academy Application Form",
  "Copy of Child’s Birth Certificate",
  "Child’s Health & Immunization Record",
  "2 Recent Passport-Sized Photographs of the Child",
  "Previous Academic Reports / Terminal Reports (For Lower & Upper Primary applicants)",
  "Passport-sized photograph of Parent / Guardian",
];

const ADMISSIONS_PLACEMENT = [
  { level: "Crèche", age: "3 Months – 2 Years", campus: "Old Site (Early Grade Campus)" },
  { level: "Nursery 1 & 2", age: "2 – 3+ Years", campus: "Old Site (Early Grade Campus)" },
  { level: "Kindergarten (KG 1 & 2)", age: "4 – 5 Years", campus: "New Site (Main Campus)" },
  { level: "Lower Primary (Basic 1 – 3)", age: "6 – 8 Years", campus: "New Site (Main Campus)" },
  { level: "Upper Primary (Basic 4 – 6)", age: "9 – 11+ Years", campus: "New Site (Main Campus)" },
];

const ADMISSIONS_FAQS = [
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

function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [openStage, setOpenStage] = useState<string | null>("Crèche");
  const [openFaq, setOpenFaq] = useState<string | null>("When does admission open for the new academic session?");


  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Pupils in red uniforms on the Samrose's Academy campus grounds"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/60 to-black/70" />
        <div className="relative mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 md:py-40">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-crimson-foreground/80">
            Ahenema Kokoben • Kumasi
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
              href="#admissions-inquiry"
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
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIVISIONS.map((d) => (
            <Link
              key={d.name}
              to="/academics"
              className="group block overflow-hidden rounded-lg border border-border bg-card shadow-card transition-shadow hover:shadow-elevated"
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
                <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-crimson">
                  View curriculum →
                </span>
              </div>
            </Link>
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
                image: earlyGradeAsset.url,
                alt: "Early Grade Campus courtyard during a Samrose's Academy graduation ceremony",
                highlights:
                  "Secure child-safe play zones, early reading nooks, and dedicated rest areas for young learners.",
              },
              {
                title: "Main Campus",
                site: "New Site",
                scope: "Kindergarten & Primary School",
                image: mainCampusAsset.url,
                alt: "Main Campus three-storey block with colourful pillars at Ahenema Kokoben",
                highlights:
                  "Spacious classrooms, ICT media center, sports facilities, and science/learning labs.",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="overflow-hidden rounded-lg border border-border bg-card shadow-card"
              >
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover sm:h-72"
                />
                <div className="p-9">
                  <span className="inline-block rounded-full bg-navy px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-foreground">
                    {c.site}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-bold sm:text-3xl">{c.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-crimson">{c.scope}</p>
                  <div className="my-6 h-px w-16 bg-crimson" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.highlights}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery + activities */}
      <section id="gallery" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
            Our Gallery
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            Co-Curricular &amp; Extracurricular Activities
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACTIVITIES.map((a) => (
            <article
              key={a.title}
              className="rounded-lg border border-border bg-card p-7 shadow-card transition-shadow hover:shadow-elevated"
            >
              <span className="text-2xl" aria-hidden="true">
                {a.icon}
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g) => (
            <figure
              key={g.src}
              className="overflow-hidden rounded-lg border border-border bg-card shadow-card"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* Academics */}
      <section id="academics" className="bg-slate-soft py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
            Academics
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Nurturing Excellence at Every Stage
          </h2>
          <h3 className="mt-6 font-serif text-xl font-bold text-navy sm:text-2xl">
            Academic Excellence Built on Character &amp; Innovation
          </h3>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            At Samrose&apos;s Academy, our academic framework is designed to spark curiosity from
            early childhood through to upper primary excellence. Grounded in holistic development,
            our curriculum combines rigorous foundational learning with practical problem-solving,
            critical thinking, and character building across both our Early Grade (Old Site) and
            Main (New Site) campuses in Ahenema Kokoben.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 md:mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
              Five Learning Stages
            </span>
            <h4 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
              A Journey Shaped Around How Children Grow
            </h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Select a stage to view its focus, overview and key learning pillars.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {ACADEMICS_STAGES.map((s) => {
              const isOpen = openStage === s.name;
              return (
                <article
                  key={s.name}
                  className="overflow-hidden rounded-lg border border-border bg-card shadow-card"
                >
                  <div className={`h-1 w-full ${s.accent}`} />
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenStage(isOpen ? null : s.name)}
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
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8 md:mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
              Teaching Philosophy
            </span>
            <h4 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
              Academic Pillars &amp; Teaching Philosophy
            </h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Three core commitments that shape every classroom at Samrose&apos;s Academy.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ACADEMICS_PILLARS.map((p, i) => (
              <article
                key={p.title}
                className="rounded-lg border border-border bg-card p-8 shadow-card"
              >
                <span className="font-serif text-3xl font-bold text-crimson/30">
                  0{i + 1}
                </span>
                <h5 className="mt-4 font-serif text-lg font-bold">{p.title}</h5>
                <div className="my-5 h-px w-12 bg-crimson" />
                <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="bg-background py-20 md:py-28">
        <div className="bg-navy py-16 text-navy-foreground md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
              Admissions
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Begin Your Child&apos;s Journey at Samrose&apos;s Academy
            </h2>
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
                hash="admissions-inquiry"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-foreground/30 px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
              >
                <CalendarDays size={17} /> Schedule a Campus Tour
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
              The Process
            </span>
            <h3 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
              A Simple 4-Step Admissions Process
            </h3>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ADMISSIONS_STEPS.map((s, i) => (
              <article
                key={s.title}
                className="rounded-lg border border-border bg-card p-7 shadow-card"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy font-serif text-lg font-bold text-navy-foreground">
                  {i + 1}
                </span>
                <h4 className="mt-5 font-serif text-lg font-bold">{s.title}</h4>
                <div className="my-4 h-px w-12 bg-crimson" />
                <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="documents" className="scroll-mt-24 bg-slate-soft py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
                Checklist
              </span>
              <h3 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
                Required Application Documents
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Please come prepared with the following items.
              </p>
            </div>
            <ul className="mt-10 space-y-3">
              {ADMISSIONS_DOCUMENTS.map((d) => (
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
        </div>

        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
              Placement
            </span>
            <h3 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
              Age Placement Guidelines
            </h3>
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
                {ADMISSIONS_PLACEMENT.map((row) => (
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
        </div>

        <div className="bg-slate-soft py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
                FAQ
              </span>
              <h3 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="mt-10 space-y-4">
              {ADMISSIONS_FAQS.map((f) => {
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

      {/* Admissions Inquiry */}
      <section id="admissions-inquiry" className="bg-slate-soft py-20 md:py-28">
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

      <SiteFooter />
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
