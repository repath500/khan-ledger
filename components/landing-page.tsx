"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Buildings,
  Globe,
  Handshake,
  House,
  MapPin,
  Mountains,
  RocketLaunch,
  Storefront,
  Target,
  TrendUp,
  Users
} from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Platform", href: "#vision" },
  { label: "Khan Ledger I", href: "#vehicle" },
  { label: "Partners", href: "#partners" },
  { label: "Entries", href: "#entries" }
];

const pillars = [
  {
    icon: TrendUp,
    title: "Markets",
    desc: "Global equities, ETFs, metals, and energy exposure."
  },
  {
    icon: RocketLaunch,
    title: "Ventures",
    desc: "Angel investments, operator-led deals, and founder-backed opportunities."
  },
  {
    icon: Buildings,
    title: "Property",
    desc: "Ireland, UK, and Bangladesh real estate development."
  },
  {
    icon: Mountains,
    title: "Land",
    desc: "Ancestral holdings in Moulvibazar — heritage and long-term value."
  }
];

const visionItems = [
  {
    title: "Multiple Vehicles",
    desc: "Khan Ledger I is the first. Future mandates, property strategies, and venture vehicles will follow as the platform matures."
  },
  {
    title: "Cross-Border Reach",
    desc: "Ireland, UK, Germany, and Bangladesh — four countries, distinct opportunities, shared governance."
  },
  {
    title: "Generational Architecture",
    desc: "Designed for family members to join, contribute, and grow with the platform across decades."
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

const brothers = [
  {
    name: "Rahath Khan",
    location: "Frankfurt",
    initials: "RK",
    role: "Engineering & Property",
    lens: "Systems thinking. Long-range discipline. Structural stress-testing."
  },
  {
    name: "Reyad Khan",
    location: "London",
    initials: "RK",
    role: "Operations & Risk",
    lens: "Operational hazards. Execution realism. Risk controls."
  },
  {
    name: "Repath Khan",
    location: "Ireland",
    initials: "RK",
    role: "Strategy & Allocation",
    lens: "Capital allocation. Technology. Deal flow. Public documentation."
  },
  {
    name: "Rehan Khan",
    location: "Sanofi",
    initials: "RK",
    role: "Evidence & Diligence",
    lens: "Laboratory-grade diligence. Data before conviction."
  }
];

const opportunityTypes = [
  { icon: Users, title: "Founders & Startups" },
  { icon: Storefront, title: "Local Businesses" },
  { icon: House, title: "Property & Land" },
  { icon: Handshake, title: "Angel & Private Deals" },
  { icon: MapPin, title: "Bangladesh Ventures" },
  { icon: Target, title: "Operator-led Deals" }
];

const entries = [
  {
    id: "001",
    slug: "why-rk-exists",
    title: "Why RK+ Exists",
    date: "May 2026",
    line: "The family story and what we build from here."
  },
  {
    id: "002",
    slug: "khan-ledger-i-the-mandate",
    title: "Khan Ledger I — The Mandate",
    date: "May 2026",
    line: "Our first vehicle, the rationale, and the five-year plan."
  },
  {
    id: "003",
    slug: "our-first-allocation-strategy",
    title: "Our First Allocation Strategy",
    date: "June 2026",
    line: "The thinking behind every allocation bucket."
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
            style={{ transition: "stroke-dashoffset 1s var(--ease-out)" }}
          />
        );
      })}
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
        y: 40,
        opacity: 0,
        filter: "blur(8px)",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out"
      });

      gsap.from(".pillar-card", {
        y: 48,
        opacity: 0,
        scale: 0.97,
        duration: 0.8,
        stagger: 0.07,
        delay: 0.4,
        ease: "power3.out"
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 36, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 86%", once: true }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".stack-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 40 + i * 8, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%", once: true }
          }
        );
      });

      gsap.from(".vision-item", {
        y: 32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: ".vision-grid", start: "top 82%", once: true }
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
          Send Opportunity <ArrowUpRight size={12} weight="bold" />
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
        <div className="hero__layout">
          <div className="hero__content">
            <p className="eyebrow" data-hero>Private Holdings Group</p>
            <h1 data-hero>
              Capital for<br />the long arc.
            </h1>
            <p className="hero__tagline" data-hero>
              RK+ Holdings is a private family capital platform investing across public markets, private ventures, property, and ancestral land — built by four brothers across four cities.
            </p>
            <div className="hero__actions" data-hero>
              <a className="button button--primary" href="#vision">
                <span>Our Platform</span>
                <span className="button__icon"><ArrowUpRight size={14} weight="bold" /></span>
              </a>
              <a className="button button--secondary" href="/contact">
                <span>Send Opportunity</span>
                <span className="button__icon"><ArrowUpRight size={14} weight="bold" /></span>
              </a>
            </div>
          </div>
          <div className="hero__visual" data-hero>
            <div className="hero__card">
              <span className="hero__card-label">Investment Verticals</span>
              <div className="hero__card-items">
                {pillars.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div className="hero__card-item" key={p.title}>
                      <Icon size={20} weight="regular" />
                      <span>{p.title}</span>
                    </div>
                  );
                })}
              </div>
              <div className="hero__card-geo">
                <Globe size={13} weight="regular" />
                <span>IE · UK · DE · BD</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pillars">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div className="pillar-card" key={p.title}>
                <div className="pillar-card__icon">
                  <Icon size={22} weight="regular" />
                </div>
                <h3 className="pillar-card__title">{p.title}</h3>
                <p className="pillar-card__desc">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Vision / Platform ── */}
      <section className="section vision-section" id="vision">
        <div className="vision-inner">
          <div className="vision-head" data-reveal>
            <p className="eyebrow eyebrow--light">The Platform</p>
            <h2>Built for decades,<br />not quarters.</h2>
            <p className="vision-sub">
              RK+ Holdings is not a single fund. It is a family capital platform designed to scale across vehicles, asset classes, cities, and generations. Khan Ledger I is just the beginning.
            </p>
          </div>
          <div className="vision-grid">
            {visionItems.map((item) => (
              <div className="vision-item" key={item.title}>
                <h3 className="vision-item__title">{item.title}</h3>
                <p className="vision-item__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Khan Ledger I ── */}
      <section className="section vehicle-section" id="vehicle">
        <div className="vehicle-hero" data-reveal>
          <div className="vehicle-hero__left">
            <p className="eyebrow">Khan Ledger I</p>
            <h2>The first formal<br />investment vehicle.</h2>
            <p className="vehicle-hero__sub">
              A disciplined five-year monthly mandate across global equities, metals, energy, and an opportunity sleeve for founder and operator-led deals.
            </p>
            <div className="vehicle-facts">
              <div className="vehicle-fact">
                <span className="vehicle-fact__value">5 years</span>
                <span className="vehicle-fact__label">2026 – 2030</span>
              </div>
              <div className="vehicle-fact">
                <span className="vehicle-fact__value">Monthly</span>
                <span className="vehicle-fact__label">Deployment</span>
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
      </section>

      {/* ── Partners ── */}
      <section className="section partners-section" id="partners">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">The RK Brothers</p>
          <h2>One family. Four cities.<br />Shared capital.</h2>
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
              <span className="button__icon"><ArrowUpRight size={14} weight="bold" /></span>
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
                  <Icon size={20} weight="regular" />
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
          <h2>The first page,<br />not the highlight reel.</h2>
        </div>
        <div className="entry-stack">
          {entries.map((entry) => (
            <Link key={entry.id} href={`/entries/${entry.slug}`} className="stack-card-link">
              <article className="stack-card">
                <span className="stack-card__id">{entry.id}</span>
                <div className="stack-card__body">
                  <span className="stack-card__date">{entry.date}</span>
                  <h3>{entry.title}</h3>
                  <p>{entry.line}</p>
                </div>
                <ArrowUpRight size={18} weight="regular" className="stack-card__arrow" aria-hidden />
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer-brand">
            <span className="footer-rk">RK+</span>
            <strong>Holdings</strong>
          </div>
          <p className="footer__disc">
            RK+ Holdings and Khan Ledger I are private family capital projects.
            We do not manage outside capital, offer financial advice, or operate
            as a regulated investment fund.
          </p>
          <div className="footer__bottom">
            <span className="footer-geo">
              <Globe size={13} weight="regular" />
              Ireland · London · Frankfurt · Sylhet · Moulvibazar
            </span>
            <div className="footer__links">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
