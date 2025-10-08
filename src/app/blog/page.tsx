import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { BlogList } from "@/components/sections/blog-list";

export default function BlogPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-balance">
            Blog
          </h1>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Insights, guides, and updates from the team.
          </p>
        </header>
        <BlogList />
      </main>
      <SiteFooter />
    </>
  );
}
