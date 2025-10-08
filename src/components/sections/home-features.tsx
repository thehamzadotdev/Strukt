import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Sparkles, Gauge, Settings } from "lucide-react";

const items = [
  {
    title: "Secure by default",
    Icon: Shield,
    desc: "Best-practice security and sensible defaults baked in.",
  },
  {
    title: "Minimal & fast",
    Icon: Gauge,
    desc: "Lightweight UI with responsive, accessible components.",
  },
  {
    title: "Polished UX",
    Icon: Sparkles,
    desc: "Thoughtful details and delightful interactions.",
  },
  {
    title: "Easy to extend",
    Icon: Settings,
    desc: "Composeable, maintainable code you can grow with.",
  },
] as const;

export function HomeFeatures() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 pb-8 md:pb-12">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, Icon, desc }) => (
          <Card key={title} className="h-full">
            <CardHeader>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <CardTitle className="text-base">{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
