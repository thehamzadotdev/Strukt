import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Tier = {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Basic",
    price: "$0",
    features: ["Essentials", "Email support", "Community access"],
  },
  {
    name: "Pro",
    price: "$19",
    highlighted: true,
    features: [
      "Everything in Basic",
      "Advanced components",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Contact",
    features: ["Custom terms", "SLA", "Dedicated support"],
  },
];

export function PricingGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          className={tier.highlighted ? "border-primary bg-muted/50" : ""}
        >
          <CardHeader>
            <CardTitle className="text-lg">{tier.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">
              {tier.price}
              {tier.price !== "Contact" && (
                <span className="text-base font-normal text-muted-foreground">
                  /mo
                </span>
              )}
            </p>
            <ul className="mt-4 space-y-2">
              {tier.features.map((f) => (
                <li
                  key={f}
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  • {f}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Start Free Trial</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
