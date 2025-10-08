import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "This starter saved us weeks. The design is clean and the code is a joy to work with.",
    name: "Avery W.",
    role: "Founder, Paperline",
  },
  {
    quote:
      "The components are thoughtfully built and the defaults are perfect for shipping fast.",
    name: "Kai L.",
    role: "CTO, Nova",
  },
  {
    quote:
      "Responsive, accessible, and easy to extend. Exactly what we needed.",
    name: "Morgan S.",
    role: "Product Lead, Lumen",
  },
] as const;

export function HomeTestimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Card key={i}>
            <CardHeader />
            <CardContent>
              <blockquote className="text-pretty leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{t.name}</span>{" "}
                &middot; {t.role}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
