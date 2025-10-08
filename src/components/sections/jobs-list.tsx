"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Job = {
  id: string;
  title: string;
  location: string;
  description: string;
};

const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    location: "Remote",
    description:
      "Lead the development of our core UI, shape design systems, and collaborate with product to ship delightful features.",
  },
  {
    id: "2",
    title: "Product Designer",
    location: "Remote",
    description:
      "Own end-to-end design for web experiences, from research and prototyping to pixel-perfect implementation.",
  },
  {
    id: "3",
    title: "Developer Advocate",
    location: "Remote",
    description:
      "Create content, demos, and educational materials to help developers succeed with our platform.",
  },
];

export function JobsList() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {jobs.map((job) => {
        const expanded = open === job.id;
        return (
          <Card key={job.id} className={cn(expanded && "border-primary")}>
            <CardHeader className="flex flex-row items-center justify-between gap-4">
              <div>
                <CardTitle className="text-lg">{job.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{job.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setOpen(expanded ? null : job.id)}
                  aria-expanded={expanded}
                  aria-controls={`job-${job.id}-details`}
                >
                  {expanded ? "Hide details" : "View details"}
                </Button>
                <Button>Apply Now</Button>
              </div>
            </CardHeader>
            <CardContent
              id={`job-${job.id}-details`}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300",
                expanded
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
