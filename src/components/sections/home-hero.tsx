import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          Build faster with a minimal, elegant SaaS starter
        </h1>
        <p className="mt-4 text-pretty text-muted-foreground md:text-lg leading-relaxed">
          A clean foundation with perfect typography, responsive components, and
          production-ready pages.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/pricing">Get Started</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
