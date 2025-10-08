import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeFeatures } from "@/components/sections/home-features";
import { HomeTestimonials } from "@/components/sections/home-testimonial";

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <HomeHero />
        <HomeFeatures />
        <HomeTestimonials />
      </main>
      <SiteFooter />
    </>
  );
}
