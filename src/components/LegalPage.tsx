import { CtaBanner } from "./CtaBanner";

export type LegalSection = { id: string; heading: string; body: React.ReactNode };

export function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className="bg-background">
      <section className="border-b border-border bg-surface-cyan/40">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            {title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:grid lg:grid-cols-12 lg:gap-12">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              On this page
            </div>
            <ul className="space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-muted-foreground hover:text-[--brand-cyan] transition-colors" style={{ ["--brand-cyan" as string]: "var(--brand-cyan)" }}
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-9 max-w-3xl">
          <div className="space-y-12">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="reveal-area scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a:hover]:text-[--brand-navy-hover] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="QUESTIONS?"
        title="Need to get in touch?"
        description="Our team is happy to clarify anything in this document or help you with a specific request."
        primary={{ label: "Contact us", to: "/contact" }}
        secondary={{ label: "Back to home", to: "/" }}
      />
    </main>
  );
}
