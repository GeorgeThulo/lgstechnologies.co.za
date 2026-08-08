"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useEmailSentTracker } from "./hooks/useEmailSentTracker";

type NavKey = "Services" | "About" | "Contact" | "Terms";

const brandBlue = "#165d82";

const navItems: Array<{ label: NavKey; title: string; accent: string }> = [
  { label: "About", title: "About", accent: brandBlue },
  { label: "Services", title: "Services", accent: brandBlue },
  { label: "Contact", title: "Contact", accent: brandBlue },
  { label: "Terms", title: "T&C's", accent: brandBlue },
];

type ServiceItem = {
  label: string;
  price: string;
};

type ServiceCard = {
  title: string;
  items: ServiceItem[];
};

const serviceCards: ServiceCard[] = [
  {
    title: "UI/UX",
    items: [
      { label: "USER INTERFACES", price: "R 2,400" },
      { label: "USER EXPERIENCE", price: "R 3,800" },
    ],
  },
  {
    title: "DATA",
    items: [
      { label: "DATA ANALYSIS", price: "R 2,800" },
      { label: "DATA MANAGEMENT", price: "R 3,400" },
    ],
  },
  {
    title: "DOMAIN",
    items: [
      { label: "DOMAIN REGISTRATION", price: "R 79 / yr" },
      { label: "DOMAIN CONFIGURATION", price: "R 399" },
    ],
  },
  {
    title: "BRANDING",
    items: [
      { label: "LOGO DESIGN", price: "R 1,450" },
      { label: "BRAND DESIGN", price: "R 4,200" },
    ],
  },
  {
    title: "GOOGLE",
    items: [
      { label: "Google Business Profile", price: "R 550" },
      { label: "Setup & Optimization", price: "R 650" },
    ],
  },
];

const termsSections = [
  {
    title: "1. Introduction & Acceptance",
    content: [
      "These Terms and Conditions (“Terms”) govern your use of the LGS Technologies website and the purchase of any digital services offered by LGS Technologies (“LGS”, “we”, “us”, or “our”), based in Cape Town, South Africa.",
      "By browsing this website, requesting a quote, or purchasing a service, you (“Client”, “you”) agree to be bound by these Terms. If you do not agree, please do not use our services.",
    ],
  },
  {
    title: "2. Services Overview",
    content: [
      "LGS provides digital solutions including UI/UX design, data analysis and management, domain registration and configuration, branding and logo design, and Google Business Profile setup and optimization.",
      "Service descriptions and listed prices on our Services page are indicative starting points. Final scope, deliverables, and pricing are confirmed in writing before work begins.",
    ],
  },
  {
    title: "3. UI/UX Design Services",
    content: [
      "User Interface (UI) and User Experience (UX) services include wireframes, screen layouts, prototypes, and design assets delivered in agreed formats (e.g. Figma, PDF, or exported assets).",
      "Two rounds of revisions are included unless otherwise agreed. Additional revision rounds may be billed at our standard hourly rate.",
      "LGS retains the right to display completed UI/UX work in our portfolio unless a confidentiality agreement states otherwise.",
    ],
  },
  {
    title: "4. Data Analysis & Management",
    content: [
      "Data services may include report generation, dashboard setup, data cleaning, and ongoing data management support as scoped in your agreement.",
      "You are responsible for providing accurate, lawful access to any data sources required. LGS is not liable for decisions made based on analysis outputs.",
      "We treat client data as confidential and will not share it with third parties except where required to deliver the service or by law.",
    ],
  },
  {
    title: "5. Domain Registration & Configuration",
    content: [
      "Domain registration is subject to availability and registry rules (.co.za, .com, etc.). Registration fees are annual and renewals are the Client’s responsibility unless managed under a separate agreement.",
      "Domain configuration includes DNS setup, email routing, and related technical settings as agreed in scope.",
      "LGS acts as a registration facilitator. Domain ownership remains with the Client. We are not responsible for domain loss due to expired payment, incorrect registrant details, or third-party registry actions.",
    ],
  },
  {
    title: "6. Branding & Logo Design",
    content: [
      "Logo and brand design deliverables include agreed file formats (vector and raster) upon full payment. Usage rights transfer to the Client upon final payment unless otherwise specified.",
      "LGS retains the right to display completed branding work in our portfolio. Stock elements or licensed fonts used in designs remain subject to their respective licences.",
      "Concepts not selected by the Client remain the property of LGS and may not be used without a separate licensing agreement.",
    ],
  },
  {
    title: "7. Google Business Profile Services",
    content: [
      "Google Business Profile (GBP) setup and optimization is performed on Google’s platform. LGS does not control Google’s policies, verification processes, or listing approvals.",
      "The Client must provide accurate business information and authorize LGS to manage the profile where required. Suspensions or removals by Google are outside our control.",
      "Ongoing GBP management, if not included in your package, may be offered as a separate monthly service.",
    ],
  },
  {
    title: "8. Pricing, Payment & Refunds",
    content: [
      "All prices are quoted in South African Rand (ZAR) unless stated otherwise. A deposit may be required before work commences; the balance is due upon delivery or as set out in your invoice.",
      "Payments are non-refundable once work has started, except where LGS fails to deliver agreed scope. Domain registration fees are non-refundable once submitted to a registry.",
      "Late payments may pause delivery. We reserve the right to withhold deliverables until outstanding amounts are settled.",
    ],
  },
  {
    title: "9. Client Responsibilities",
    content: [
      "You agree to provide timely feedback, content, credentials, and approvals needed to complete your project. Delays caused by the Client may extend delivery timelines.",
      "You warrant that any materials you supply (text, images, logos, data) do not infringe third-party rights and that you have authority to use them.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    content: [
      "LGS provides services on a best-effort basis. We do not guarantee specific business outcomes such as search rankings, sales increases, or Google listing approval.",
      "To the fullest extent permitted by South African law, LGS’s total liability for any claim arising from our services is limited to the amount paid by you for the specific service in question.",
    ],
  },
  {
    title: "11. Cancellation & Termination",
    content: [
      "Either party may terminate a project with written notice. Work completed up to the termination date will be invoiced. Deposits cover work already performed and are non-refundable.",
      "LGS may suspend or terminate services if the Client breaches these Terms or fails to make payment.",
    ],
  },
  {
    title: "12. Governing Law & Contact",
    content: [
      "These Terms are governed by the laws of the Republic of South Africa. Any disputes will be subject to the jurisdiction of South African courts.",
      "For questions about these Terms or our services, contact us at hello@lgstechnologies.co.za or +27 81 436 6424.",
      "LGS may update these Terms from time to time. The version published on this website at the time of your purchase applies to your agreement.",
    ],
  },
];

export default function Home() {
  const [activeNav, setActiveNav] = useState<NavKey>("About");
  const [hoveredNav, setHoveredNav] = useState<NavKey | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Record<string, string[]>>({});
  const [fromEmail, setFromEmail] = useState("");
  const [toEmail, setToEmail] = useState("admin@lgstechnologies.co.za");
  const [messageText, setMessageText] = useState("");
  const { hasSentEmail, triggerSendEmail, resetEmailStatus } = useEmailSentTracker();
  const [purchaseSelection, setPurchaseSelection] = useState<{
    category: string;
    items: Array<{ label: string; price: string }>;
  } | null>(null);

  const toggleItemSelection = (cardTitle: string, itemLabel: string) => {
    setSelectedItems((prev) => {
      const current = prev[cardTitle] ?? [];
      const next = current.includes(itemLabel)
        ? current.filter((label) => label !== itemLabel)
        : [...current, itemLabel];

      return { ...prev, [cardTitle]: next };
    });
  };

  const openContactModal = (selection?: { category: string; items: Array<{ label: string; price: string }> }) => {
    setPurchaseSelection(selection ?? null);
    setToEmail("admin@lgstechnologies.co.za");
    setFromEmail("");
    resetEmailStatus();

    if (selection) {
      const itemsFormatted = selection.items.map((item) => `- ${item.label} (${item.price})`).join("\n");
      setMessageText(
        `Hi LGS Technologies,\n\nI would like to purchase the following service(s):\n\nCategory: ${selection.category}\nSelected Services:\n${itemsFormatted}\n\nPlease get back to me with the next steps.`
      );
    } else {
      setMessageText("Hi LGS Technologies,\n\nI would like to inquire about your services.");
    }

    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
    setPurchaseSelection(null);
    resetEmailStatus();
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = purchaseSelection
      ? `Purchase Request: ${purchaseSelection.category}`
      : "General Inquiry";
    
    const body = `From: ${fromEmail}\n\n${messageText}`;
    const mailtoUrl = `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    triggerSendEmail(mailtoUrl);
  };

  const accent = useMemo(() => {
    return navItems.find((item) => item.label === (hoveredNav ?? activeNav))?.accent ?? "#155e75";
  }, [activeNav, hoveredNav]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/lgs-logo.png"
              alt="LGS logo"
              width={100}
              height={48}
            />
            <div>
              <p className="text-sm font-semibold uppercase text-[#165d82]">LGS</p>
              <p className="text-[#165d82] font-semibold">Technologies</p>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <nav className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => {
                const isActive = activeNav === item.label || hoveredNav === item.label;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onMouseEnter={() => setHoveredNav(item.label)}
                    onMouseLeave={() => setHoveredNav(null)}
                    onClick={() => {
                      setActiveNav(item.label);
                      setMenuOpen(false);
                    }}
                    className="relative text-sm font-semibold transition"
                    style={{ color: isActive ? accent : "#334155" }}
                  >
                    {item.title}
                    {isActive ? (
                      <span className="absolute inset-x-0 -bottom-1 flex justify-center">
                        <span className="block h-1.5 w-14 rounded-full border-t-4 border-[#165d82]" />
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </nav>

            <button
              type="button"
              className="hidden rounded-3xl bg-[#165d82] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#144962] lg:inline-flex"
              onClick={() => openContactModal()}
            >
              Sign in
            </button>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`lg:hidden ${menuOpen ? "block" : "hidden"} border-t border-slate-200 bg-white/95 px-4 py-4`}>
          <div className="space-y-3">
            {navItems.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    setActiveNav(item.label);
                    setMenuOpen(false);
                  }}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                  style={{
                    color: isActive ? accent : "#334155",
                    backgroundColor: isActive ? "#e2f0fb" : undefined,
                  }}
                >
                  {item.title}
                </button>
              );
            })}
            <button
              type="button"
              className="w-full rounded-3xl bg-[#165d82] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#144962]"
              onClick={() => openContactModal()}
            >
              Sign in
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {activeNav === "About" ? (
          <section className="grid gap-6 xl:grid-cols-[1.25fr_0.9fr]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.15)]" style={{ clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)" }}>
              <h1 className="text-3xl font-semibold tracking-tight text-[#165d82]">About Us</h1>
              <p className="mt-6 text-xl font-semibold text-[#14546c]">Empowering Businesses Through Technology</p>
              <div className="mt-6 space-y-5 text-sm leading-8 text-[#134a65]">
                <p>
                  LGS is a digital solutions company dedicated to helping businesses succeed in today’s digital world. We specialize in creating professional websites, building strong brands, improving online visibility, and providing strategic business and data insights.
                </p>
                <p>
                  From securing your domain and setting up business email to designing high-performing websites and delivering data-driven strategies, we offer end-to-end digital services that help businesses operate more efficiently, attract more customers, and achieve sustainable growth.
                </p>
                <p className="font-semibold text-[#0f4c65]">Build. Brand. Grow. That’s our commitment to every client.</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {serviceCards.slice(0, 4).map((card) => (
                <div key={card.title} className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.18)] text-center" style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)" }}>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#165d82]">{card.title}</p>
                  <div className="mx-auto mt-4 h-2 w-14 rounded-full bg-[#165d82]" />
                  <div className="mt-6 space-y-3 text-2xl font-semibold tracking-tight text-[#134a65]">
                    {card.items.map((item) => (
                      <p key={item.label}>{item.label}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : activeNav === "Services" ? (
          <section className="space-y-8">
            <div className="flex flex-col items-start gap-2 sm:items-end sm:text-right">
              <p className="text-sm uppercase tracking-[0.3em] text-[#165d82]">Services</p>
              <h1 className="text-4xl font-semibold tracking-tight text-[#165d82]">Services</h1>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {serviceCards.map((card) => {
                const selectedLabels = selectedItems[card.title] ?? [];
                const hasSelection = selectedLabels.length > 0;

                return (
                  <div key={card.title} className="relative flex h-full flex-col justify-between rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.22)]" style={{ clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)" }}>
                    <div className="text-center">
                      <p className="text-sm uppercase tracking-[0.35em] text-[#125c79] drop-shadow-[0_2px_12px_rgba(18,92,121,0.18)]">{card.title}</p>
                      <div className="mx-auto mt-4 h-2 w-16 rounded-full bg-[#0f5469]" />
                      <fieldset className="mt-6 space-y-3 text-left">
                        <legend className="sr-only">{card.title} service options</legend>
                        {card.items.map((item) => {
                          const isSelected = selectedLabels.includes(item.label);

                          return (
                            <label
                              key={item.label}
                              className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 transition ${
                                isSelected
                                  ? "border-[#165d82] bg-[#e2f0fb]"
                                  : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => toggleItemSelection(card.title, item.label)}
                                className="h-4 w-4 shrink-0 accent-[#165d82]"
                              />
                              <span className="flex-1 text-sm font-semibold leading-tight text-[#14546c] sm:text-base">
                                {item.label}
                              </span>
                              <span className="shrink-0 text-sm font-semibold text-[#165d82] sm:text-base">
                                {item.price}
                              </span>
                            </label>
                          );
                        })}
                      </fieldset>
                    </div>
                    <button
                      type="button"
                      disabled={!hasSelection}
                      className="mt-8 self-center rounded-full bg-[#165d82] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_25px_-12px_rgba(22,93,130,0.45)] transition hover:bg-[#0f4c61] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                      onClick={() => {
                        const items = card.items
                          .filter((entry) => selectedLabels.includes(entry.label))
                          .map((entry) => ({ label: entry.label, price: entry.price }));

                        if (items.length === 0) return;

                        openContactModal({
                          category: card.title,
                          items,
                        });
                      }}
                    >
                      Purchase
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        ) : activeNav === "Contact" ? (
          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.15)]" style={{ clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)" }}>
              <h1 className="text-3xl font-semibold tracking-tight text-[#165d82]">Contact</h1>
              <p className="mt-6 text-sm leading-8 text-[#14546c]">
                Ready to start your digital transformation? Reach out and we’ll help you create a stronger brand, a better website, and a more effective online presence.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-[#165d82]">Email</p>
                <p className="mt-2 text-lg text-[#14546c]">admin@lgstechnologies.co.za</p>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-[#165d82]">Phone</p>
                <p className="mt-2 text-lg text-[#14546c]">+27 81 436 6424</p>
              </div>
            </div>
          </section>
        ) : activeNav === "Terms" ? (
          <section className="space-y-8">
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.15)]" style={{ clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)" }}>
              <p className="text-sm uppercase tracking-[0.3em] text-[#165d82]">Legal</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#165d82]">Terms &amp; Conditions</h1>
              <p className="mt-4 text-sm leading-8 text-[#14546c]">
                Please read these terms carefully before purchasing any LGS Technologies service. They apply to all products and services listed on our Services page.
              </p>
              <p className="mt-2 text-xs text-slate-500">Last updated: July 2026</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {termsSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.12)]"
                >
                  <h2 className="text-lg font-semibold text-[#165d82]">{section.title}</h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-[#14546c]">
                    {section.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="grid gap-6 xl:grid-cols-[1.25fr_0.9fr]">
            <div className="grid gap-6 md:grid-cols-2">
              {serviceCards.slice(0, 4).map((card) => (
                <div key={card.title} className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.18)] text-center" style={{ clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)" }}>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#165d82]">{card.title}</p>
                  <div className="mx-auto mt-4 h-2 w-14 rounded-full bg-[#165d82]" />
                  <div className="mt-6 space-y-3 text-2xl font-semibold tracking-tight text-[#134a65]">
                    {card.items.map((item) => (
                      <p key={item.label}>{item.label}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {showContactModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
          <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[28px] border border-slate-200 bg-white p-5 sm:p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-[#165d82]">
                  {purchaseSelection ? "Purchase Order" : "Contact Us"}
                </p>
                <h2 className="mt-1 text-xl sm:text-2xl font-semibold text-slate-950">
                  {purchaseSelection ? "Send Order Inquiry" : "Send a Message"}
                </h2>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
                onClick={closeContactModal}
                aria-label="Close contact modal"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSendEmail} className="mt-5 sm:mt-6 space-y-4">
              <div>
                <label htmlFor="from-email" className="block text-xs font-semibold uppercase tracking-wider text-[#165d82]">
                  From (Your Email)
                </label>
                <input
                  id="from-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-base sm:text-sm text-slate-900 shadow-sm focus:border-[#165d82] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#165d82]/20"
                />
              </div>

              <div>
                <label htmlFor="to-email" className="block text-xs font-semibold uppercase tracking-wider text-[#165d82]">
                  To
                </label>
                <input
                  id="to-email"
                  type="email"
                  required
                  value={toEmail}
                  onChange={(e) => setToEmail(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-slate-300 bg-slate-100 px-4 py-3 text-base sm:text-sm font-semibold text-slate-700 shadow-sm focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message-text" className="block text-xs font-semibold uppercase tracking-wider text-[#165d82]">
                  Message
                </label>
                <textarea
                  id="message-text"
                  required
                  rows={4}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="mt-1 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-base sm:text-sm text-slate-900 shadow-sm focus:border-[#165d82] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#165d82]/20"
                />
              </div>

              {hasSentEmail ? (
                <div className="rounded-2xl bg-emerald-50 p-3.5 text-xs sm:text-sm text-emerald-800 font-medium">
                  ✓ Email client dispatched! The <strong>Done</strong> button is now unlocked.
                </div>
              ) : null}

              <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-2.5 sm:gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeContactModal}
                  className="w-full sm:w-auto min-h-[44px] justify-center flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Cancel
                </button>
                {!hasSentEmail ? (
                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[44px] justify-center flex items-center rounded-full bg-[#165d82] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#144962]"
                  >
                    Send
                  </button>
                ) : null}
                <button
                  type="button"
                  disabled={!hasSentEmail}
                  onClick={closeContactModal}
                  className={`w-full sm:w-auto min-h-[44px] justify-center flex items-center rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                    hasSentEmail
                      ? "bg-emerald-600 text-white shadow-md hover:bg-emerald-700 cursor-pointer"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300"
                  }`}
                >
                  Done
                </button>
              </div>

              {!hasSentEmail ? (
                <p className="mt-1 text-center sm:text-right text-xs text-slate-500">
                  * Click <strong>Send</strong> to launch your email client and enable <strong>Done</strong>.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
