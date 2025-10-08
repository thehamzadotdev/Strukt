"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + social */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/placeholder-logo.svg"
                alt=""
                aria-hidden="true"
                className="h-6 w-6"
              />
              <span className="text-base font-semibold">Strukt</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Build, launch, and scale your product faster with our all‑in‑one
              platform.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <nav aria-labelledby="footer-product">
            <h3 id="footer-product" className="text-sm font-medium">
              Product
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/#features"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#integrations"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="/#changelog"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-labelledby="footer-company">
            <h3 id="footer-company" className="text-sm font-medium">
              Company
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources + Newsletter */}
          <div>
            <nav aria-labelledby="footer-resources">
              <h3 id="footer-resources" className="text-sm font-medium">
                Resources
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="/#docs"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#guides"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#support"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#status"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Status
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="mt-6" aria-labelledby="footer-subscribe">
              <h3 id="footer-subscribe" className="text-sm font-medium">
                Subscribe
              </h3>
              <form
                className="mt-3 flex max-w-sm items-center gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1"
                />
                <Button type="submit">
                  <Mail className="mr-2 h-4 w-4" />
                  Join
                </Button>
              </form>
              <p className="mt-2 text-xs text-muted-foreground">
                By subscribing, you agree to our{" "}
                <Link
                  href="/#privacy"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Strukt. All rights reserved.
            </p>
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  href="/#privacy"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/#terms"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/#cookies"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
