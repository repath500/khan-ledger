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
  Handshake,
  HouseLine,
  UsersThree
} from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Khan Ledger I", href: "#vehicle" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Holdings", href: "#holdings" },
  { label: "Partners", href: "#partners" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Entries", href: "#entries" }
];

const metrics = [
  { value: "5 years", label: "First vehicle term" },
  { value: "€110,400", label: "Planned contributions (5 yr)" },
  { value: "4", label: "General Partners" },
  { value: "4 cities", label: "Cross-border presence" }
];

const allocations = [
  {
    name: "Vanguard S&P 500",
    shortName: "S&P 500",
    pct: 35,
    focus: "Core US market compounding. Main growth engine of Khan Ledger I.",
    color: "#0B3D2E",
    cardColor: "#B99044"
  },
  {
    name: "Global non-US ETFs",
    shortName: "Global ex-US",
    pct: 20,
    focus: "Europe, Asia, and emerging markets. Non-American equity diversification.",
    color: "#2A6041",
    cardColor: "rgba(185,144,68,0.65)"
  },
  {
    name: "Gold ETC",
    shortName: "Gold ETC",
    pct: 10,
    focus: "Hard-asset hedge against crisis, currency stress, and inflation fear.",
    color: "#B99044",
    cardColor: "rgba(185,144,68,0.48)"
  },
  {
    name: "Quality / Dividend Equity",
    shortName: "Quality/Div",
    pct: 10,
    focus: "Stable company exposure. Lower-volatility equity tilt from profitable businesses.",
    color: "#4E642F",
    cardColor: "rgba(244,239,229,0.56)"
  },
  {
    name: "Defensive Bonds / Money Market",
    shortName: "Defensive",
    pct: 10,
    focus: "Portfolio ballast and rebalancing power during drawdowns and uncertainty.",
    color: "#6B7C5E",
    cardColor: "rgba(244,239,229,0.40)"
  },
  {
    name: "Silver ETC",
    shortName: "Silver ETC",
    pct: 5,
    focus: "Higher-volatility precious metal exposure with industrial demand upside.",
    color: "#A8A49B",
    cardColor: "rgba(200,190,182,0.55)"
  },
  {
    name: "Oil / Energy Tactical",
    shortName: "Oil/Energy",
    pct: 5,
    focus: "Small tactical exposure to energy shocks, commodity cycles, and geopolitical upside.",
    color: "#8B6914",
    cardColor: "rgba(200,160,80,0.45)"
  },
  {
    name: "RK+ Opportunity Sleeve",
    shortName: "Opportunity",
    pct: 5,
    focus: "Angel, operator-led, and private opportunities reviewed directly by the brothers.",
    color: "#A0522D",
    cardColor: "rgba(244,239,229,0.26)"
  }
];

const scenarios = [
  {
    label: "Bull Case",
    rate: "15%",
    value: "€139,723",
    gain: "+€29,323",
    note: "Strong rally. Opportunity sleeve delivers at least one win."
  },
  {
    label: "Strong Case",
    rate: "10%",
    value: "€129,248",
    gain: "+€18,848",
    note: "Good market conditions. Commodities hold their ground."
  },
  {
    label: "Base Case",
    rate: "7%",
    value: "€123,310",
    gain: "+€12,910",
    note: "Moderate global growth. Equities steady, metals stable."
  },
  {
    label: "Defensive",
    rate: "3%",
    value: "€115,776",
    gain: "+€5,376",
    note: "Conservative conditions. Bonds outperform equities."
  }
];

const holdingsDistribution = [
  {
    name: "Bangladesh Land",
    pct: 25,
    description:
      "Long-term family land assets, agricultural value, heritage holdings, and future development potential across Moulvibazar and the ancestral estate.",
    color: "#4E642F"
  },
  {
    name: "S&P 500 / Public Markets",
    pct: 20,
    description:
      "Core liquid equity exposure through broad US market investing. Khan Ledger I is the primary vehicle.",
    color: "#0B3D2E"
  },
  {
    name: "Property / Real Estate",
    pct: 20,
    description:
      "Ireland, UK, and Bangladesh property interests, future acquisitions, renovation projects, and real-asset-backed growth.",
    color: "#8C7860"
  },
  {
    name: "Private Equity / Ventures",
    pct: 15,
    description:
      "Angel investments, founder opportunities, private deals, small equity stakes, and operator-led acquisitions.",
    color: "#B99044"
  },
  {
    name: "Cash Reserves",
    pct: 10,
    description:
      "Liquidity for flexibility, legal and admin costs, deposits on opportunities, and fast-moving capital deployment.",
    color: "#D8D4C8"
  },
  {
    name: "Global ETFs / International",
    pct: 10,
    description:
      "Non-US market exposure across Europe, Asia, and emerging markets. Global diversification away from single-country risk.",
    color: "#174D36"
  }
];

const brothers = [
  {
    name: "Rahath Khan",
    role: "General Partner",
    location: "Frankfurt",
    bio: "Mechanical engineer and eldest brother. Rahath brings systems thinking, load-path judgement, and long-range discipline to RK+ — from how physical assets behave to how major property and land commitments should be stress-tested before capital moves.",
    focus: [
      "Engineering-led feasibility review",
      "Property and land oversight",
      "Long-term capital discipline",
      "Europe-based opportunity awareness",
      "Senior review of major commitments"
    ]
  },
  {
    name: "Reyad Khan",
    role: "General Partner",
    location: "London",
    bio: "Health and safety specialist based in London. Reyad connects RK+ to global business density while forcing uncomfortable operational questions early — hazards, controls, site realities — before capital meets concrete and contracts.",
    focus: [
      "London opportunity network",
      "Operational risk and controls mindset",
      "Site and workplace feasibility",
      "Founder and small-business conversations",
      "Execution realism checks"
    ]
  },
  {
    name: "Repath Khan",
    role: "General Partner",
    location: "Ireland",
    bio: "Initiator of Khan Ledger I and builder of LeemerChat.com and critique.sh — products that reward clarity, structured critique, and honest iteration. Repath carries that operator mindset into allocation memos, public documentation, and venture conversations.",
    focus: [
      "Strategy and capital allocation",
      "Technology and AI opportunities",
      "Angel and startup deal flow",
      "Public documentation and brand",
      "Portfolio systems and reporting"
    ]
  },
  {
    name: "Rehan Khan",
    role: "General Partner",
    location: "Sanofi",
    bio: "Scientist at Sanofi — early-career, evidence-led, and trained to separate signal from hype. Rehan brings laboratory-grade diligence to venture claims, healthcare-adjacent opportunities, and any thesis that leans on science without data.",
    focus: [
      "Evidence and diligence culture",
      "Healthcare and science-linked opportunities",
      "Structured experimentation mindset",
      "Quality systems thinking",
      "Practical support for backed businesses"
    ]
  }
];

const opportunityTypes = [
  {
    icon: UsersThree,
    title: "Founders & Startups",
    items: [
      "AI tools and software products",
      "Local business technology",
      "Student founder projects",
      "Creator tools and commerce",
      "Logistics and food technology"
    ]
  },
  {
    icon: Buildings,
    title: "Local Businesses",
    items: [
      "Food and hospitality",
      "Takeaway and restaurant operations",
      "Businesses needing digital uplift",
      "Small cashflow businesses",
      "Trades-related businesses"
    ]
  },
  {
    icon: HouseLine,
    title: "Property & Land",
    items: [
      "Ireland property opportunities",
      "UK property introductions",
      "Bangladesh land opportunities",
      "Renovation and development projects",
      "Small commercial units"
    ]
  },
  {
    icon: Handshake,
    title: "Angel & Private Deals",
    items: [
      "Small angel cheques",
      "Revenue-share opportunities",
      "Joint ventures",
      "Acquisition conversations",
      "Operator-backed deals"
    ]
  },
  {
    icon: CompassRose,
    title: "Bangladesh Ventures",
    items: [
      "Diaspora-linked businesses",
      "Agriculture and land projects",
      "Land development ideas",
      "Family asset partnerships",
      "Local enterprise opportunities"
    ]
  },
  {
    icon: ChartLineUp,
    title: "Operator-led Deals",
    items: [
      "Businesses with real customers",
      "Cashflow-positive operations",
      "Asset-backed deals",
      "Industry partnerships",
      "Digital ventures"
    ]
  }
];

const years = [
  ["Year 1", "€100", "€400", "€4,800"],
  ["Year 2", "€200", "€800", "€9,600"],
  ["Year 3", "€400", "€1,600", "€19,200"],
  ["Year 4", "€800", "€3,200", "€38,400"],
  ["Year 5", "€800", "€3,200", "€38,400"]
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

function StackedBar({
  segments
}: {
  segments: { name: string; pct: number; color: string }[];
}) {
  return (
    <div className="stacked-bar" role="img" aria-label="Portfolio allocation bar">
      {segments.map((s) => (
        <span
          key={s.name}
          style={{ width: `${s.pct}%`, background: s.color }}
          title={`${s.name}: ${s.pct}%`}
        />
      ))}
    </div>
  );
}

function CityMap() {
  return (
    <div
      className="city-map"
      aria-label="RK+ presence across Ireland, London, Frankfurt, Sylhet and Moulvibazar"
    >
      <svg viewBox="0 0 700 280" role="img">
        <defs>
          <linearGradient id="mapRoute" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#B99044" />
            <stop offset="100%" stopColor="#4E642F" />
          </linearGradient>
        </defs>
        <path
          className="map-bg-line"
          d="M60 180 C150 110 240 130 310 178 c 90 56 162 60 258-18 54-44 100-52 144-36"
        />
        <path
          className="map-bg-line"
          d="M66 238 c108-40 206-24 296 28 112 66 210 34 338-72"
        />
        <path
          className="route-line"
          d="M 106 165 C 150 152, 195 145, 245 138 C 320 130, 430 145, 510 158 C 545 164, 568 162, 590 158"
        />
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

function MagneticButton({
  children,
  variant = "primary",
  href
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href: string;
}) {
  return (
    <a className={`button button--${variant}`} href={href}>
      <span>{children}</span>
      <span className="button__icon">
        <ArrowRight size={14} weight="bold" />
      </span>
    </a>
  );
}

export function LandingPage() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-hero]", {
        y: 28,
        opacity: 0,
        filter: "blur(8px)",
        duration: 1.1,
        stagger: 0.11,
        ease: "power4.out"
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 48, opacity: 0, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 84%",
              once: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".stack-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 72 + i * 14, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true
            }
          }
        );
      });

      gsap.to(".route-line", {
        strokeDashoffset: 0,
        duration: 2.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".city-map",
          start: "top 76%",
          once: true
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="site-shell" ref={rootRef}>
      <div className="paper-grain" aria-hidden="true" />

      {/* Navigation */}
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="RK+ Holdings home">
          <span className="brand-mark__icon">
            <BrandIcon />
          </span>
          <span className="brand-mark__wordmark">
            <span className="brand-mark__name">RK+</span>
            <span className="brand-mark__sub">Holdings</span>
          </span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="/contact">
          Send Opportunity
          <ArrowRight size={12} weight="bold" />
        </a>
        <button
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        {navItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            style={{ transitionDelay: `${index * 55 + 90}ms` }}
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

      {/* Hero */}
      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow" data-hero>
            RK+ Holdings
          </p>
          <h1 data-hero>
            Family capital across markets, ventures, property, and land.
          </h1>
          <p className="hero-lede" data-hero>
            RK+ is the private capital platform of the Khan brothers —
            Rahath, Repath, Reyad, and Rehan Khan — built across Ireland,
            London, Frankfurt, and Bangladesh.
          </p>
          <p className="hero-lede hero-lede--secondary" data-hero>
            Our first vehicle, Khan Ledger I, is a five-year monthly
            investment mandate across global markets, ETFs, precious metals,
            energy, and a small opportunity sleeve for founders and
            operator-led deals.
          </p>
          <div className="hero-actions" data-hero>
            <MagneticButton href="#vehicle">Explore Khan Ledger I</MagneticButton>
            <MagneticButton href="/contact" variant="secondary">
              Send an Opportunity
            </MagneticButton>
          </div>
          <p className="geo-line" data-hero>
            Ireland · London · Frankfurt · Sylhet · Moulvibazar
          </p>
        </div>

        <div className="hero-vehicle" data-hero>
          <div className="vehicle-card">
            <div className="vehicle-card__head">
              <span className="vehicle-label">Khan Ledger I</span>
              <span className="vehicle-status">Formation</span>
            </div>
            <p className="vehicle-subtitle">
              Five-year monthly investment mandate
            </p>

            <div className="vehicle-rule" />

            <div className="vehicle-stats">
              <div className="vehicle-stat">
                <span>Planned contributions</span>
                <strong>€110,400</strong>
              </div>
              <div className="vehicle-stat">
                <span>Term</span>
                <strong>5 years</strong>
              </div>
              <div className="vehicle-stat">
                <span>Geography</span>
                <strong>IE · UK · DE · BD</strong>
              </div>
              <div className="vehicle-stat">
                <span>Mandate</span>
                <strong>Markets · Metals · Energy · Ventures</strong>
              </div>
            </div>

            <div className="vehicle-rule" />

            <p className="vehicle-alloc-heading">Allocation</p>
            <div className="vehicle-allocs">
              {allocations.map((a) => (
                <div className="vehicle-alloc-row" key={a.name}>
                  <span className="vehicle-alloc-name">{a.shortName}</span>
                  <div className="vehicle-alloc-track">
                    <span
                      className="vehicle-alloc-fill"
                      style={{ width: `${a.pct}%`, background: a.cardColor }}
                    />
                  </div>
                  <span className="vehicle-alloc-pct">{a.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="metrics-strip" aria-label="Khan Ledger I snapshot">
        {metrics.map((m) => (
          <div className="metric" key={m.label} data-reveal>
            <strong>{m.value}</strong>
            <span>{m.label}</span>
          </div>
        ))}
      </section>

      {/* Khan Ledger I — Vehicle Intro */}
      <section className="section vehicle-section" id="vehicle">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Khan Ledger I</p>
          <h2>Monthly capital, globally allocated.</h2>
        </div>
        <div className="vehicle-intro-grid" data-reveal>
          <p>
            Khan Ledger I is the first RK+ monthly investment vehicle — not a
            savings pot and not a fake private equity fund. It is a
            contribution-led portfolio built around global markets, ETFs,
            precious metals, energy exposure, and a small RK+ opportunity
            sleeve for founders and operator-led deals.
          </p>
          <p>
            The mandate is simple: build discipline, stay globally diversified,
            keep exposure to hard assets, and leave room for asymmetric
            opportunities. The goal is to build a capital system that can
            compound, rebalance, and create opportunity flow over five years.
          </p>
        </div>

        <div className="kl1-card" data-reveal>
          <div className="kl1-card__col">
            <p className="kl1-label">Vehicle Type</p>
            <p className="kl1-value">Monthly investment vehicle</p>
          </div>
          <div className="kl1-card__col">
            <p className="kl1-label">Term</p>
            <p className="kl1-value">5 years (2026–2030)</p>
          </div>
          <div className="kl1-card__col">
            <p className="kl1-label">Planned contributions (5 yr)</p>
            <p className="kl1-value">€110,400</p>
          </div>
          <div className="kl1-card__col">
            <p className="kl1-label">Rebalancing</p>
            <p className="kl1-value">Quarterly</p>
          </div>
          <div className="kl1-card__col">
            <p className="kl1-label">Allocation Review</p>
            <p className="kl1-value">Annual</p>
          </div>
          <div className="kl1-card__col">
            <p className="kl1-label">Status</p>
            <p className="kl1-value">Formation</p>
          </div>
        </div>
      </section>

      {/* Portfolio Mandate */}
      <section className="section portfolio-section" id="portfolio">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Portfolio Mandate</p>
          <h2>Khan Ledger I: Monthly capital, globally allocated.</h2>
        </div>
        <p className="portfolio-intro" data-reveal>
          Khan Ledger I is built as a monthly investment vehicle, not a savings
          pot. Every contribution is split across global equity exposure,
          non-US diversification, hard assets, defensive liquidity, energy, and
          a small RK+ opportunity sleeve.
        </p>

        <StackedBar segments={allocations} />

        <div className="portfolio-layout" data-reveal>
          <div className="portfolio-table">
            {allocations.map((a) => (
              <div className="portfolio-row" key={a.name}>
                <div className="portfolio-row__left">
                  <strong className="portfolio-row__pct">{a.pct}%</strong>
                  <span className="portfolio-row__name">{a.name}</span>
                </div>
                <div className="portfolio-row__bar-wrap">
                  <div className="portfolio-bar-track" aria-hidden="true">
                    <span
                      className="portfolio-bar-fill"
                      style={{ width: `${a.pct}%`, background: a.color }}
                    />
                  </div>
                </div>
                <p className="portfolio-row__focus">{a.focus}</p>
              </div>
            ))}
          </div>

          <aside className="portfolio-meta">
            <div className="portfolio-meta__block">
              <p className="portfolio-meta__label">Five-year contribution schedule</p>
              <p className="portfolio-meta__value">€110,400</p>
            </div>
            <div className="portfolio-meta__block">
              <p className="portfolio-meta__label">Deployment</p>
              <p className="portfolio-meta__value">Monthly</p>
            </div>
            <div className="portfolio-meta__block">
              <p className="portfolio-meta__label">Rebalancing</p>
              <p className="portfolio-meta__value">Quarterly</p>
            </div>
            <div className="portfolio-meta__block">
              <p className="portfolio-meta__label">Allocation review</p>
              <p className="portfolio-meta__value">Annual</p>
            </div>
            <div className="portfolio-meta__note">
              <p>
                55% global equities. 15% precious metals. 10% defensive yield.
                5% oil/energy. 5% angel/opportunity.
              </p>
            </div>
            <div className="portfolio-meta__caption">
              Monthly allocation. Rebalanced quarterly. Reviewed annually. No
              guaranteed returns.
            </div>
          </aside>
        </div>
      </section>

      {/* Performance Scenarios */}
      <section className="section scenarios-section" id="scenarios">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Compounding scenarios</p>
          <h2>What the ledger could grow to — before tax and frictions.</h2>
        </div>
        <p className="scenarios-intro" data-reveal>
          Khan Ledger I does not promise returns. It does show what disciplined
          monthly investing might produce under different annual growth paths,
          holding everything else equal — so you can see upside first, stress
          cases second. Amounts are model outputs, not forecasts; real outcomes
          include taxes, fees, FX, and private write-downs that a spreadsheet
          will never perfectly capture.
        </p>

        <div className="scenarios-grid" data-reveal>
          {scenarios.map((s) => (
            <div
              className={`scenario-card${s.label === "Bull Case" ? " scenario-card--highlight" : ""}`}
              key={s.label}
            >
              <p className="scenario-card__label">{s.label}</p>
              <p className="scenario-card__rate">{s.rate} annual return</p>
              <p className="scenario-card__value">{s.value}</p>
              <p className="scenario-card__gain">{s.gain} vs contributions</p>
              <p className="scenario-card__note">{s.note}</p>
            </div>
          ))}
        </div>

        <div className="scenarios-disclaimer scenarios-disclaimer--compact" data-reveal>
          <p>
            Tax treatment depends on your residence and legal structure. Irish ETF
            holdings may be subject to deemed disposal and exit tax (including
            scheduled rate changes). RK+ may evaluate US registration if it
            improves access to certain investments and tax-efficient incentives — confirm
            any structural decision with a qualified cross-border adviser.
          </p>
        </div>
      </section>

      {/* RK+ Holdings Distribution */}
      <section className="section holdings-section" id="holdings">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">RK+ Holdings Distribution</p>
          <h2>The full picture: land, markets, property, and private equity.</h2>
        </div>
        <p className="holdings-intro" data-reveal>
          Khan Ledger I is the liquid monthly investment vehicle. But RK+
          Holdings is weighted toward real assets and long-term ownership —
          Bangladesh land and property forming the foundation, public markets
          providing liquidity and compounding, and private equity creating room
          for asymmetric upside.
        </p>

        <StackedBar segments={holdingsDistribution} />

        <div className="portfolio-table" data-reveal>
          {holdingsDistribution.map((h) => (
            <div className="portfolio-row" key={h.name}>
              <div className="portfolio-row__left">
                <strong className="portfolio-row__pct">{h.pct}%</strong>
                <span className="portfolio-row__name">{h.name}</span>
              </div>
              <div className="portfolio-row__bar-wrap">
                <div className="portfolio-bar-track" aria-hidden="true">
                  <span
                    className="portfolio-bar-fill"
                    style={{ width: `${h.pct}%`, background: h.color }}
                  />
                </div>
              </div>
              <p className="portfolio-row__focus">{h.description}</p>
            </div>
          ))}
        </div>

        <p className="holdings-caption" data-reveal>
          RK+ Holdings is structured across land, property, public markets,
          private equity, cash reserves, and international market exposure —
          built around real assets, liquidity, and selective opportunity-taking.
        </p>
      </section>

      {/* Partners — The RK Brothers */}
      <section className="section partners-section" id="partners">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">The RK Brothers</p>
          <h2>One family. Multiple cities. Shared capital.</h2>
        </div>
        <p className="partners-intro" data-reveal>
          RK+ is led by the Khan brothers — each carrying the same initials:
          RK. The &ldquo;+&rdquo; represents the brothers plus the wider family, future
          generations, and the sum of their combined cities, disciplines, and
          reach.
        </p>
        <div className="brothers-grid">
          {brothers.map((b) => (
            <article className="brother-card" key={b.name} data-reveal>
              <div className="brother-card__head">
                <span className="brother-card__role">{b.role}</span>
                <span className="brother-card__location">{b.location}</span>
              </div>
              <h3 className="brother-card__name">{b.name}</h3>
              <p className="brother-card__bio">{b.bio}</p>
              <ul className="brother-card__focus">
                {b.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="next-gen-note" data-reveal>
          <span className="eyebrow-sm">Next Generation</span>
          <p>
            RK+ is not closed around the first four brothers. The family
            includes a younger brother, and the long-term goal is to build a
            structure that future RK family members can learn from, contribute
            to, and eventually help grow. This is not just a five-year
            experiment — it is a family operating system in formation.
          </p>
        </div>
      </section>

      {/* Family Story */}
      <section className="section family-section" id="family">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Family</p>
          <h2>Built from work, not theory.</h2>
        </div>

        <div className="origin-grid">
          <article className="origin-panel" data-reveal>
            <p className="origin-panel__label">Built From Restaurants, Land, and Work</p>
            <p>
              RK+ is not the family&apos;s first business project. Our father,
              Masud Khan, came to Ireland and worked hard — building through
              restaurants, hospitality, and local enterprise. That work gave
              the family more than income. It gave us an operating mindset.
            </p>
            <p>
              Bengal Curry House in Waterford was one visible chapter. It
              taught us customers, delivery platforms, suppliers, pricing,
              quality control, cashflow, reputation, and the pressure of real
              operations. It was not the first business experience, and it
              will not be the last.
            </p>
            <p>
              RK+ takes those lessons into a wider platform: markets, ventures,
              property, land, and operating businesses.
            </p>
          </article>

          <article className="origin-panel origin-panel--legacy" data-reveal>
            <p className="origin-panel__label">From Moulvibazar Roots to Global Capital</p>
            <p>
              The RK brothers are grandsons of the late Hajji Ahmed Khan —
              a respected local figure, farmer, and community leader from the
              Moulvibazar region of Bangladesh. For the family, land is not an
              abstract asset class. It is history, responsibility, identity,
              and long-term value.
            </p>
            <p>
              The brothers already directly own significant land interests in
              Bangladesh — including hundreds of acres connected to the
              family&apos;s ancestral home — before even considering future
              inheritance. RK+ treats these assets with the seriousness they
              deserve: documentation, legal clarity, agricultural potential,
              development planning, and long-term stewardship.
            </p>
            <p>
              This gives RK+ a different starting point from ordinary young
              investors. We are not only building from cashflow. We are
              building from land, family history, operating knowledge, and
              cross-border access.
            </p>
          </article>
        </div>

        <CityMap />
      </section>

      {/* Opportunities */}
      <section className="section opportunities-section" id="opportunities">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Open to Opportunities</p>
          <h2>We are actively open to founders, operators, and asset owners.</h2>
        </div>
        <p className="opp-intro" data-reveal>
          RK+ is not a passive savings group. Through RK+ Ventures and Khan
          Ledger I, we are open to reviewing opportunities where our capital,
          operating background, technical ability, family network, or
          cross-border position can add value.
        </p>
        <div className="opp-grid">
          {opportunityTypes.map((opp) => {
            const Icon = opp.icon;
            return (
              <article className="opp-card" key={opp.title} data-reveal>
                <div className="opp-card__icon">
                  <Icon size={20} weight="light" />
                </div>
                <h3 className="opp-card__title">{opp.title}</h3>
                <ul className="opp-card__items">
                  {opp.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="opp-cta" data-reveal>
          <MagneticButton href="/contact">Share an Opportunity</MagneticButton>
          <p className="opp-note">
            We review opportunities privately. We do not manage outside capital
            or offer financial advice.
          </p>
        </div>
      </section>

      {/* Five-Year Commitment Plan */}
      <section className="section commitment-section" id="commitment">
        <div className="commitment-copy" data-reveal>
          <p className="eyebrow">Commitment Path</p>
          <h2>The first five years. Disciplined escalation.</h2>
          <p>
            Khan Ledger I begins with a disciplined commitment from the
            brothers and scales yearly. The plan is simple: start with a
            manageable base, double the annual commitment through the early
            years, then maintain and allocate consistently through year five.
          </p>
          <p>
            The amount is not the headline. The structure is. The goal is to
            prove that a family can move from informal conversations to a real
            capital allocation system.
          </p>
          <div className="total-card">
            <Coins size={24} weight="light" />
            <span>Five-year contribution schedule (before returns)</span>
            <strong>€110,400</strong>
          </div>
          <p className="total-note">
            Additional one-off contributions, business proceeds, land income,
            or opportunity-specific capital may be added separately.
          </p>
        </div>
        <div className="year-table-shell" data-reveal>
          <table className="year-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Per Brother / Month</th>
                <th>Total / Month</th>
                <th>Annual Commitment</th>
              </tr>
            </thead>
            <tbody>
              {years.map((year) => (
                <tr key={year[0]}>
                  {year.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Entries */}
      <section className="section entries-section" id="entries">
        <div className="entries-head" data-reveal>
          <p className="eyebrow">Entries</p>
          <h2>Most people show the result. We want to show the first page.</h2>
        </div>
        <div className="entry-stack">
          {entries.map((entry) => (
            <Link
              key={entry.id}
              href={`/entries/${entry.slug}`}
              className="stack-card-link"
            >
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

      {/* Footer */}
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
