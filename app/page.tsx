"use client";

import { useMemo, useState } from "react";

type NavKey = "Home" | "Services" | "About" | "Contact";

const navItems: Array<{ label: NavKey; accent: string }> = [
  { label: "Home", accent: "#7c3aed" },
  { label: "Services", accent: "#0f766e" },
  { label: "About", accent: "#ea580c" },
  { label: "Contact", accent: "#2563eb" },
];

const serviceCards = [
  {
    title: "Product strategy",
    description: "From positioning to roadmap planning, we shape ideas into clear next steps.",
  },
  {
    title: "Design systems",
    description: "Consistent interfaces and reusable patterns that scale with your product.",
  },
  {
    title: "Development",
    description: "Fast-moving builds with thoughtful architecture and polished execution.",
  },
  {
    title: "Launch support",
    description: "We stay close through rollout, refinement, and continuous optimization.",
  },
];

export default function Home() {
  const [activeNav, setActiveNav] = useState<NavKey>("Home");
  const [hoveredNav, setHoveredNav] = useState<NavKey | null>(null);

  const accent = useMemo(() => {
    return navItems.find((item) => item.label === (hoveredNav ?? activeNav))?.accent ?? "#7c3aed";
  }, [activeNav, hoveredNav]);

  const viewCopy: Record<NavKey, { eyebrow: string; title: string; body: string; cta: string }> = {
    Home: {
      eyebrow: "Digital product studio",
      title: "Build a polished web presence that feels premium from the first click.",
      body: "We combine smart strategy, elegant interfaces, and a refined launch experience for modern brands.",
      cta: "Explore services",
    },
    Services: {
      eyebrow: "Focused delivery",
      title: "A service experience that adapts the interface without losing the navigation.",
      body: "The header stays visible while the workspace shifts into a richer service view with clearer modules.",
      cta: "Open service hub",
    },
    About: {
      eyebrow: "Collaborative approach",
      title: "A close-knit team that turns ideas into reliable digital products.",
      body: "We blend clarity, design precision, and modern development to make every launch feel effortless.",
      cta: "Meet the team",
    },
    Contact: {
      eyebrow: "Let's talk",
      title: "Ready to map your next product milestone? We would love to hear about it.",
      body: "Tell us about your goals and we will shape a clear plan with a compelling experience.",
      cta: "Schedule a call",
    },
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(248,250,252,0.9))] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="h-5 w-5 rounded-full border-[3px]" style={{ borderColor: accent }} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">LG</p>
              <p className="text-base font-semibold text-slate-900">Technologies</p>
            </div>
          </div>

          <nav className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 p-2 shadow-sm">
            {navItems.map((item) => {
              const isActive = activeNav === item.label || hoveredNav === item.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  onMouseEnter={() => setHoveredNav(item.label)}
                  onMouseLeave={() => setHoveredNav(null)}
                  onClick={() => setActiveNav(item.label)}
                  className="rounded-full px-4 py-2 text-sm font-medium transition-all"
                  style={{
                    color: isActive ? item.accent : "#475569",
                    backgroundColor: isActive ? `${item.accent}14` : "transparent",
                    border: isActive ? `1px solid ${item.accent}40` : "1px solid transparent",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 lg:px-8 lg:py-12">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-slate-200/80 bg-white/80 p-8 shadow-[0_25px_70px_-35px_rgba(15,23,42,0.35)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              {viewCopy[activeNav].eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              {viewCopy[activeNav].title}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              {viewCopy[activeNav].body}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setActiveNav("Services")}
                className="rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: accent }}
              >
                {viewCopy[activeNav].cta}
              </button>
              <button
                type="button"
                onClick={() => setActiveNav("Contact")}
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400"
              >
                Start a conversation
              </button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Projects launched", value: "24+" },
                { label: "Average delivery", value: "6 weeks" },
                { label: "Client retention", value: "96%" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-semibold text-slate-950">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.85)]">
            <div className="mb-5 flex items-center justify-between text-sm text-slate-400">
              <span>Live interface preview</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em]">
                {activeNav}
              </span>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="flex items-center justify-center rounded-[24px] border border-white/10 bg-slate-900/80 p-4">
                  <div className="relative h-44 w-44">
                    <div
                      className="absolute inset-0 rounded-full border-[10px]"
                      style={{ borderColor: accent }}
                    />
                    <div
                      className="absolute left-8 top-8 h-20 w-20 rounded-[28px]"
                      style={{ backgroundColor: accent }}
                    />
                    <div
                      className="absolute bottom-5 right-4 h-0 w-0 border-x-[26px] border-b-[44px] border-x-transparent"
                      style={{ borderBottomColor: accent }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Module</p>
                    <p className="mt-2 text-lg font-semibold">{activeNav === "Services" ? "Service navigator" : "Brand showcase"}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Accent</p>
                    <p className="mt-2 text-lg font-semibold">Hovering the header shifts the palette instantly</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">State</p>
                    <p className="mt-2 text-lg font-semibold">Click Services to reveal the alternate interface</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {activeNav === "Services" ? (
          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.25)] backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Service interface</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">A richer workspace that keeps the same header in place.</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {serviceCards.map((card) => (
                  <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-lg font-semibold text-slate-900">{card.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200/80 bg-slate-950 p-8 text-white shadow-[0_25px_70px_-35px_rgba(15,23,42,0.75)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Delivery view</p>
              <h3 className="mt-3 text-2xl font-semibold">Adaptive launch support for ambitious ideas</h3>
              <div className="mt-6 space-y-3">
                {[
                  { title: "Discovery", text: "We map the problem, audience, and business objective before design begins." },
                  { title: "Execution", text: "Our team shapes the interface, content, and technical flow together." },
                  { title: "Growth", text: "We refine the experience after launch so it keeps improving." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.08] p-4">
                    <p className="text-base font-semibold">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="rounded-[32px] border border-slate-200/80 bg-white/80 p-8 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.25)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Overview</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">A polished front door for a modern digital brand.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              The experience stays elegant and lightweight while giving you room to expand into deeper views when needed.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
