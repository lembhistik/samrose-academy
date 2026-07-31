import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Samrose's Academy — Ahenema Kokoben" },
      {
        name: "description",
        content:
          "Our story, vision, mission and the SAMROSE core values — exceptional basic education grounded in character, discipline and academic rigor across our two Ahenema Kokoben campuses.",
      },
      { property: "og:title", content: "About Us | Samrose's Academy" },
      {
        property: "og:description",
        content:
          "Nurturing purpose, shaping tomorrow's leaders across our Early Grade Campus and Main Campus in Ahenema Kokoben.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    letter: "S",
    title: "Service & Community",
    text: "Teaching empathy, teamwork, and active responsibility toward others.",
  },
  {
    letter: "A",
    title: "Academic Excellence",
    text: "Maintaining high standards in literacy, numeracy, science, and critical thinking.",
  },
  {
    letter: "M",
    title: "Moral Integrity",
    text: "Instilling discipline, honesty, and strong ethical principles from early childhood.",
  },
  {
    letter: "R",
    title: "Respect for All",
    text: "Fostering an inclusive space where every pupil, parent, and teacher is valued.",
  },
  {
    letter: "O",
    title: "Open Innovation",
    text: "Integrating modern digital tools and hands-on learning techniques into the classroom.",
  },
  {
    letter: "S",
    title: "Student Safety & Wellbeing",
    text: "Prioritizing secure, hygienic, and nurturing campus spaces above all else.",
  },
  {
    letter: "E",
    title: "Empathy & Individual Care",
    text: "Recognizing that every child learns at their own pace and catering to their unique needs.",
  },
];

const CAMPUSES = [
  {
    campus: "Old Site (Early Grade Campus)",
    divisions: "Crèche & Nursery",
    focus:
      "Safe, gentle, sensory-rich environment focused on social development, speech, and motor skills.",
  },
  {
    campus: "New Site (Main Campus)",
    divisions: "Kindergarten, Lower & Upper Primary",
    focus:
      "Structured academic rigor, STEM foundation, leadership, sports, and ICT integration.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="bg-navy py-16 text-navy-foreground md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
              About Us
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Nurturing Purpose, Shaping Tomorrow&apos;s Leaders
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/80">
              Providing exceptional basic education grounded in character, discipline, and academic
              rigor across our specialized campuses in Ahenema Kokoben.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
            Our Story
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold leading-snug sm:text-3xl md:text-4xl">
            A Foundation Built on Excellence, Growing Every Step of the Way.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Founded with a vision to revolutionize basic education within the Ahenema Kokoben
              community and beyond, SAMROSE&apos;S ACADEMY began as a dedicated haven for early
              childhood development. Over the years, our commitment to quality care, modern teaching
              methodologies, and character building allowed us to expand into a multi-campus basic
              school institution.
            </p>
            <p className="font-medium text-foreground">
              Today, we proudly operate across two tailored environments:
            </p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="rounded-lg border border-border bg-card p-7 shadow-card">
              <div className="h-1 w-12 bg-crimson" />
              <h3 className="mt-5 font-serif text-lg font-bold">
                The Early Grade Campus (Old Site)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Purpose-built to nurture our youngest learners in Crèche and Nursery with
                personalized attention, warmth, and safe sensory exploration.
              </p>
            </article>
            <article className="rounded-lg border border-border bg-card p-7 shadow-card">
              <div className="h-1 w-12 bg-navy" />
              <h3 className="mt-5 font-serif text-lg font-bold">The Main Campus (New Site)</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Designed for active academic growth, housing our Kindergarten, Lower Primary, and
                Upper Primary students with tech-enabled classrooms and modern facilities.
              </p>
            </article>
          </div>
          <p className="mt-7 text-base leading-relaxed text-muted-foreground">
            We bridge foundational care with high-level academic preparation, ensuring every child
            transitions seamlessly through each milestone of their educational journey.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="bg-slate-soft py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
                Purpose
              </span>
              <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
                Our Vision &amp; Mission
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="rounded-lg border border-border bg-card p-8 shadow-card">
                <h3 className="font-serif text-xl font-bold text-navy">Our Vision</h3>
                <div className="my-5 h-px w-12 bg-crimson" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  To be a premier basic education institution recognized for developing confident,
                  innovative, and morally grounded young minds equipped to excel in a rapidly
                  evolving world.
                </p>
              </article>
              <article className="rounded-lg border border-border bg-card p-8 shadow-card">
                <h3 className="font-serif text-xl font-bold text-navy">Our Mission</h3>
                <div className="my-5 h-px w-12 bg-crimson" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  To nurture every child&apos;s unique potential by delivering a balanced,
                  tech-integrated, and values-driven curriculum within a secure, supportive, and
                  modern learning environment across our campuses.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
              The SAMROSE Pillars
            </span>
            <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
              Our Core Values
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <article
                key={v.title}
                className="flex gap-5 rounded-lg border border-border bg-card p-6 shadow-card"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy font-serif text-xl font-bold text-navy-foreground">
                  {v.letter}
                </span>
                <span className="min-w-0">
                  <h3 className="font-serif text-base font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* Dual campus advantage */}
        <section className="bg-slate-soft py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
                Campuses
              </span>
              <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
                Our Dual-Campus Advantage
              </h2>
            </div>
            <div className="mt-12 overflow-hidden rounded-lg border border-border shadow-card">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-navy text-navy-foreground">
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em]">
                      Campus
                    </th>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em]">
                      Divisions
                    </th>
                    <th className="hidden px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em] md:table-cell">
                      Key Focus &amp; Environment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CAMPUSES.map((c) => (
                    <tr key={c.campus} className="border-t border-border bg-card">
                      <td className="px-5 py-5 font-serif text-sm font-bold text-navy">
                        {c.campus}
                      </td>
                      <td className="px-5 py-5 text-sm text-muted-foreground">
                        {c.divisions}
                        <span className="mt-2 block text-xs md:hidden">{c.focus}</span>
                      </td>
                      <td className="hidden px-5 py-5 text-sm leading-relaxed text-muted-foreground md:table-cell">
                        {c.focus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Leadership welcome */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-crimson">
            Leadership
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold sm:text-3xl md:text-4xl">
            Welcome Message from School Leadership
          </h2>
          <blockquote className="mt-8 border-l-4 border-crimson pl-6 font-serif text-lg font-bold italic leading-relaxed text-navy sm:text-xl">
            &ldquo;At Samrose&apos;s Academy, we do not just teach—we raise leaders who understand the
            power of knowledge and character.&rdquo;
          </blockquote>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p className="font-medium text-foreground">Dear Parents and Guardians,</p>
            <p>
              Choosing the right school for your child is one of the most significant decisions you
              will ever make. At SAMROSE&apos;S ACADEMY, we treat that decision with the utmost
              respect and responsibility. Whether your child is taking their very first steps in our
              Crèche or preparing for secondary school entry in Upper Primary, our dedicated
              educators are committed to guiding them with care, patience, and excellence.
            </p>
            <p>
              We invite you to join our growing family and experience the warmth, discipline, and
              high standards that define our school.
            </p>
            <p className="font-serif font-bold text-navy">— Management, SAMROSE&apos;S ACADEMY</p>
          </div>
          <Link
            to="/admissions"
            className="mt-9 inline-block rounded-md bg-crimson px-6 py-3 text-sm font-semibold text-crimson-foreground shadow-card transition-opacity hover:opacity-90"
          >
            Explore Admissions
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
