import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
};

const posts: Post[] = [
  {
    slug: "introducing-our-all-in-one-platform",
    title: "Introducing our all‑in‑one platform",
    excerpt:
      "Ship faster with built‑in auth, billing, analytics, and more. Here’s a deep dive into how we designed it.",
    date: "2025-09-15",
    readingTime: "6 min read",
  },
  {
    slug: "pricing-updates-and-usage-tips",
    title: "Pricing updates and usage tips",
    excerpt:
      "A transparent look at changes in our pricing and practical tips for getting the most out of your plan.",
    date: "2025-08-10",
    readingTime: "4 min read",
  },
  {
    slug: "how-we-built-our-jobs-experience",
    title: "How we built our Jobs experience",
    excerpt:
      "Behind the scenes of our careers page and the systems that power hiring at scale.",
    date: "2025-07-02",
    readingTime: "7 min read",
  },
];

export function BlogList() {
  return (
    <section aria-labelledby="blog-list">
      <h2 id="blog-list" className="sr-only">
        Latest posts
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                  {" • "}
                  {post.readingTime}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium hover:underline"
                    aria-label={`Read: ${post.title}`}
                  >
                    Read more →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
}
