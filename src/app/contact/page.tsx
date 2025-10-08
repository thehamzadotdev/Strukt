import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/sections/contact-form";

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-balance">
            Contact us
          </h1>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Questions, feedback, or partnership ideas? Send us a message and
            we’ll get back to you.
          </p>
        </header>
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  );
}
