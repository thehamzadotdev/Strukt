"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {toast} from "sonner"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!values.name || !values.email || !values.message) {
      toast("Missing fields", {
        description: "Please fill out all fields.",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
      return;
    }
    setSubmitting(true);
    try {
      // Simulate submit
      await new Promise((r) => setTimeout(r, 800));
      toast("Message sent", {
        description: "Thanks! We’ll reply soon.",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
      setValues({ name: "", email: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Jane Doe"
          autoComplete="name"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="How can we help?"
          rows={6}
        />
      </div>
      <div className="flex items-center justify-end">
        <Button type="submit" disabled={submitting} aria-disabled={submitting}>
          {submitting ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
