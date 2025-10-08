import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { JobsList } from "@/components/sections/jobs-list";

export default function JobsPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Join Our Team
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We’re hiring talented people to build amazing things.
          </p>
        </header>

        <section className="mt-10">
          <JobsList />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
