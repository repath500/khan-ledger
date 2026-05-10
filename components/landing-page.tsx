"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Buildings,
  ChartLineUp,
  Coins,
  CompassRose,
  FileText,
  Globe,
  Handshake,
  HouseLine,
  Mountains,
  Pulse,
  TreeStructure,
  UsersThree
} from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Khan Ledger I", href: "#vehicle" },
  { label: "Partners", href: "#partners" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Entries", href: "#entries" }
];

const pillars = [
  {
    icon: ChartLineUp,
    title: "Markets",
    desc: "Global equities, ETFs, precious metals, and energy exposure through Khan Ledger I.",
    accent: "var(--green)"
  },
  {
    icon: TreeStructure,
    title: "Ventures",
    desc: "Angel cheques, operator-led deals, and founder-backed opportunities.",
    accent: "var(--gold)"
  },
  {
    icon: HouseLine,
    title: "Property",
    desc: "Ireland, UK, and Bangladesh real estate interests and development.",
    accent: "var(--olive)"
  },
  {
    icon: Mountains,
    title: "Land",
    desc: "Ancestral holdings in Moulvibazar — heritage, agriculture, and long-term value.",
    accent: "var(--green-mid)"
  }
];

const allocations = [
  { name: "S&P 500", pct: 35, color: "#0B3D2E" },
  { name: "Global ex-US", pct: 20, color: "#2A6041" },
  { name: "Gold ETC", pct: 10, color: "#B99044" },
  { name: "Quality / Dividend", pct: 10, color: "#4E642F" },
  { name: "Defensive Bonds", pct: 10, color: "#6B7C5E" },
  { name: "Silver ETC", pct: 5, color: "#A8A49B" },
  { name: "Oil / Energy", pct: 5, color: "#8B6914" },
  { name: "Opportunity Sleeve", pct: 5, color: "#A0522D" }
];

const scenarios = [
  { label: "Bull", rate: "15%", value: "€139,723" },
  { label: "Strong", rate: "10%", value: "€129,248" },
  { label: "Base", rate: "7%", value: "€123,310" },
  { label: "Defensive", rate: "3%", value: "€115,776" }
];

const brothers = [
  {
    name: "Rahath Khan",
    location: "Frankfurt",
    initials: "RK",
    role: "Engineering & Property Oversight",
    lens: "Systems thinking. Long-range discipline. Major commitment stress-testing."
  },
  {
    name: "Reyad Khan",
    location: "London",
    initials: "RK",
    role: "Operations & Risk Controls",
    lens: "Business density. Operational hazards. Execution realism."
  },
  {
    name: "Repath Khan",
    location: "Ireland",
    initials: "RK",
    role: "Strategy & Allocation",
    lens: "Capital allocation. Technology. Angel deal flow. Public documentation."
  },
  {
    name: "Rehan Khan",
    location: "Sanofi",
    initials: "RK",
    role: "Evidence & Diligence",
    lens: "Laboratory-grade diligence. Healthcare opportunities. Signal from hype."
  }
];

const opportunityTypes = [
  { icon: UsersThree, title: "Founders & Startups" },
  { icon: Buildings, title: "Local Businesses" },
  { icon: HouseLine, title: "Property & Land" },
  { icon: Handshake, title: "Angel & Private Deals" },
  { icon: CompassRose, title: "Bangladesh Ventures" },
  { icon: ChartLineUp, title: "Operator-led Deals" }
];

const entries = [
  {
    id: "001",
    slug: "why-rk-exists",
    title: "Why RK+ Exists",
    date: "May 2026",
    line: "The brief history of a family that worked, and what we are building from here."
  },
  {
    id: "002",
    slug: "khan-ledger-i-the-mandate",
    title: "Khan Ledger I — The Mandate",
    date: "May 2026",
    line: "How we structured the first vehicle, the allocation rationale, and our five-year discipline plan."
  },
  {
    id: "003",
    slug: "our-first-allocation-strategy",
    title: "Our First Allocation Strategy",
    date: "June 2026",
    line: "From Vanguard to Bangladesh land — the thinking behind every bucket in Khan Ledger I."
  }
] as const;

function BrandIcon() {
  return (
    <svg className="brand-icon" viewBox="0 0 36 36" aria-hidden="true" fill="none">
      <rect width="36" height="36" rx="3" fill="currentColor" />
      <rect x="16.5" y="8" width="3" height="20" fill="#B99044" />
      <rect x="8" y="16.5" width="20" height="3" fill="#B99044" />
    </svg>
  );
}

function AllocationRing({ segments }: { segments: { name: string; pct: number; color: string }[] }) {
  const size = 200;
  const strokeWidth = 28;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <svg
      className="alloc-ring"
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="Portfolio allocation"
    >
      {segments.map((s) => {
        const dash = (s.pct / 100) * circumference;
        const gap = circumference - dash;
        const currentOffset = offset;
        offset += dash;
        return (
          <circle
            key={s.name}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={s.color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={-currentOffset}
            strokeLinecap="butt"
            style={{ transition: "stroke-dashoffset 1s ease" }}
          />
        );
      })}
      <text
        x="50%"
        y="46%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="alloc-ring__label"
      >
        €110,400
      </text>
      <text
        x="50%"
        y="58%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="alloc-ring__sub"
      >
        5-year plan
      </text>
    </svg>
  );
}

function CityMap() {
  return (
    <div className="city-map" aria-label="RK+ presence across Ireland, London, Frankfurt, Sylhet and Moulvibazar">
      <svg viewBox="0 0 700 280" role="img">
        <defs>
          <linearGradient id="mapRoute" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#B99044" />
            <stop offset="100%" stopColor="#4E642F" />
          </linearGradient>
        </defs>
        <path className="map-bg-line" d="M60 180 C150 110 240 130 310 178 c 90 56 162 60 258-18 54-44 100-52 144-36" />
        <path className="map-bg-line" d="M66 238 c108-40 206-24 296 28 112 66 210 34 338-72" />
        <path className="route-line" d="M 106 165 C 150 152, 195 145, 245 138 C 320 130, 430 145, 510 158 C 545 164, 568 162, 590 158" />
        <circle className="city-dot" cx="106" cy="165" r="5.5" />
        <circle className="city-dot" cx="175" cy="152" r="5.5" />
        <circle className="city-dot" cx="248" cy="138" r="5.5" />
        <circle className="city-dot city-dot--bd" cx="560" cy="160" r="5.5" />
        <circle className="city-dot city-dot--bd" cx="593" cy="158" r="5.5" />
        <text x="76" y="186" className="city-label">Ireland</text>
        <text x="147" y="170" className="city-label">London</text>
        <text x="218" y="126" className="city-label">Frankfurt</text>
        <text x="530" y="148" className="city-label">Sylhet</text>
        <text x="565" y="178" className="city-label city-label--sm">Moulvibazar</text>
      </svg>
    </div>
  );
}

export function LandingPage() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-hero]", {
        y: 36,
        opacity: 0,
        filter: "blur(6px)",
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out"
      });

      gsap.from(".pillar-card", {
        y: 60,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        stagger: 0.08,
        delay: 0.5,
        ease: "power3.out"
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 44, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".stack-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60 + i * 12, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%", once: true }
          }
        );
      });

      gsap.to(".route-line", {
        strokeDashoffset: 0,
        duration: 2.4,
        ease: "power2.out",
        scrollTrigger: { trigger: ".city-map", start: "top 76%", once: true }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="site-shell" ref={rootRef}>
      <div className="paper-grain" aria-hidden="true" />

      {/* ── Navigation ── */}
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="RK+ Holdings home">
          <span className="brand-mark__icon"><BrandIcon /></span>
          <span className="brand-mark__wordmark">
            <span className="brand-mark__name">RK+</span>
            <span className="brand-mark__sub">Holdings</span>
          </span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </div>
        <a className="nav-cta" href="/contact">
          Send Opportunity <ArrowRight size={12} weight="bold" />
        </a>
        <button
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        {navItems.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            style={{ transitionDelay: `${i * 55 + 90}ms` }}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="/contact"
          style={{ transitionDelay: `${navItems.length * 55 + 90}ms` }}
          onClick={() => setMenuOpen(false)}
        >
          Send Opportunity
        </a>
      </div>

      {/* ── Hero ── */}
      <section className="hero" id="top">
        <div className="hero__inner">
          <p className="eyebrow" data-hero>Private Family Capital</p>
          <h1 data-hero>
            Family capital across markets, ventures, property, and land.
          </h1>
          <p className="hero__tagline" data-hero>
            Four brothers. Four cities. One platform for long-term wealth across public markets, private ventures, property, and ancestral land.
          </p>
          <div className="hero__actions" data-hero>
            <a className="button button--primary" href="#vehicle">
              <span>Explore Khan Ledger I</span>
              <span className="button__icon"><ArrowRight size={14} weight="bold" /></span>
            </a>
            <a className="button button--secondary" href="/contact">
              <span>Send an Opportunity</span>
              <span className="button__icon"><ArrowRight size={14} weight="bold" /></span>
            </a>
          </div>
        </div>

        <div className="pillars">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div className="pillar-card" key={p.title}>
                <div className="pillar-card__icon" style={{ color: p.accent }}>
                  <Icon size={28} weight="light" />
                </div>
                <h3 className="pillar-card__title">{p.title}</h3>
                <p className="pillar-card__desc">{p.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="hero__geo" data-hero>
          <Globe size={14} weight="bold" />
          Ireland · London · Frankfurt · Sylhet · Moulvibazar
        </p>
      </section>

      {/* ── Khan Ledger I ── */}
      <section className="section vehicle-section" id="vehicle">
        <div className="vehicle-hero" data-reveal>
          <div className="vehicle-hero__left">
            <p className="eyebrow">Khan Ledger I</p>
            <h2>Five-year monthly<br />investment mandate.</h2>
            <p className="vehicle-hero__sub">
              Not a savings pot. Not a fund. A disciplined monthly contribution system across global markets, metals, energy, and an opportunity sleeve for founders and operators.
            </p>
            <div className="vehicle-facts">
              <div className="vehicle-fact">
                <span className="vehicle-fact__value">€110,400</span>
                <span className="vehicle-fact__label">Planned 5yr contributions</span>
              </div>
              <div className="vehicle-fact">
                <span className="vehicle-fact__value">5 years</span>
                <span className="vehicle-fact__label">2026 – 2030</span>
              </div>
              <div className="vehicle-fact">
                <span className="vehicle-fact__value">Monthly</span>
                <span className="vehicle-fact__label">Deployment cadence</span>
              </div>
              <div className="vehicle-fact">
                <span className="vehicle-fact__value">Quarterly</span>
                <span className="vehicle-fact__label">Rebalancing</span>
              </div>
            </div>
          </div>

          <div className="vehicle-hero__right">
            <div className="vehicle-visual">
              <AllocationRing segments={allocations} />
              <div className="alloc-legend">
                {allocations.map((a) => (
                  <div className="alloc-legend__item" key={a.name}>
                    <span className="alloc-legend__dot" style={{ background: a.color }} />
                    <span className="alloc-legend__name">{a.name}</span>
                    <span className="alloc-legend__pct">{a.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="scenarios-strip" data-reveal>
          <p className="scenarios-strip__label">
            <Pulse size={16} weight="bold" />
            Compounding scenarios (pre-tax, pre-friction)
          </p>
          <div className="scenarios-strip__items">
            {scenarios.map((s) => (
              <div className="scenario-chip" key={s.label}>
                <span className="scenario-chip__label">{s.label}</span>
                <span className="scenario-chip__value">{s.value}</span>
                <span className="scenario-chip__rate">{s.rate}/yr</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="section partners-section" id="partners">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">The RK Brothers</p>
          <h2>One family. Multiple cities. Shared capital.</h2>
        </div>

        <div className="brothers-row">
          {brothers.map((b) => (
            <article className="bro-card" key={b.name} data-reveal>
              <div className="bro-card__badge">{b.initials}</div>
              <div className="bro-card__meta">
                <span className="bro-card__role">{b.role}</span>
                <span className="bro-card__location">{b.location}</span>
              </div>
              <h3 className="bro-card__name">{b.name}</h3>
              <p className="bro-card__lens">{b.lens}</p>
            </article>
          ))}
        </div>

        <CityMap />
      </section>

      {/* ── Opportunities ── */}
      <section className="section opp-section" id="opportunities">
        <div className="opp-section__inner" data-reveal>
          <div className="opp-section__left">
            <p className="eyebrow">Open to Opportunities</p>
            <h2>Actively reviewing founders, operators, and asset owners.</h2>
            <a className="button button--primary" href="/contact">
              <span>Share an Opportunity</span>
              <span className="button__icon"><ArrowRight size={14} weight="bold" /></span>
            </a>
            <p className="opp-section__note">
              We review opportunities privately. We do not manage outside capital or offer financial advice.
            </p>
          </div>
          <div className="opp-tiles">
            {opportunityTypes.map((opp) => {
              const Icon = opp.icon;
              return (
                <div className="opp-tile" key={opp.title}>
                  <Icon size={22} weight="light" />
                  <span>{opp.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Entries ── */}
      <section className="section entries-section" id="entries">
        <div className="entries-head" data-reveal>
          <p className="eyebrow">Entries</p>
          <h2>We show the first page, not the highlight reel.</h2>
        </div>
        <div className="entry-stack">
          {entries.map((entry) => (
            <Link key={entry.id} href={`/entries/${entry.slug}`} className="stack-card-link">
              <article className="stack-card">
                <span>{entry.id}</span>
                <div>
                  <p>{entry.date}</p>
                  <h3>{entry.title}</h3>
                  <small>{entry.line}</small>
                </div>
                <ArrowRight size={20} weight="light" aria-hidden />
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Commitment strip ── */}
      <section className="commitment-strip" data-reveal>
        <div className="commitment-strip__inner">
          <Coins size={28} weight="light" />
          <div className="commitment-strip__text">
            <span>Five-year contribution schedule</span>
            <strong>€110,400</strong>
          </div>
          <p className="commitment-strip__note">
            Starts at €100/brother/month in Year 1, scaling to €800/brother/month by Year 4–5. Disciplined escalation, not a lump sum.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-brand">
          <span className="footer-rk">RK+</span>
          <strong>Holdings</strong>
        </div>
        <p>
          RK+ Holdings and Khan Ledger I are private family capital projects.
          We do not manage outside capital, offer financial advice, or operate
          as a regulated investment fund. Public documentation is shared for
          transparency, learning, and relationship-building only.
        </p>
        <span className="footer-geo">
          <FileText size={13} weight="light" />
          Ireland · London · Frankfurt · Sylhet · Moulvibazar
        </span>
      </footer>
    </main>
  );
}
