import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PricingGrid } from "@/components/sections/pricing-grid";

export default function PricingPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-6xl px-4 py-16">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Choose the plan that fits your needs today and scale as you grow.
          </p>
        </header>
        <section className="mt-10">
          <PricingGrid />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
