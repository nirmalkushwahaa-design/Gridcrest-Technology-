import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function PagePlaceholder({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <main className="min-h-[70vh] bg-background">
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-32">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{description}</p>
        <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface-cyan/40 p-10">
          <p className="text-sm text-muted-foreground">
            This page is part of the GridCrest site structure and will be built out next from
            the project brief.
          </p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-2.5 transition-all"
          >
            Back to home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
