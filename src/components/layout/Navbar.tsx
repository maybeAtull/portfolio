"use client";

import { useState } from "react";
import { navLinks, personal } from "../../../content/site-data";
import { SocialIcons } from "../ui/SocialIcons";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
      <nav className="relative flex w-full max-w-3xl items-center justify-between gap-6 rounded-full border border-foreground/10 bg-foreground/10 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <a href="#home" className="font-mono text-sm font-semibold tracking-tight text-foreground">
          {personal.name}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/80 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <SocialIcons />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="absolute inset-x-0 top-full mt-3 rounded-3xl border border-foreground/10 bg-foreground/10 px-6 pb-6 pt-4 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-foreground/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-center">
              <SocialIcons />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
