"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Buildings,
  CalendarBlank,
  ChartLineUp,
  Coins,
  CompassRose,
  FileText,
  Handshake,
  HouseLine,
  MapPinLine,
  ShieldCheck,
  Sparkle,
  UsersThree,
  Wallet
} from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navItems = ["Ledger", "Portfolio", "Entries", "Allocation", "Story"];

const metrics = [
  { value: "€400", label: "monthly commitment" },
  { value: "€100", label: "from each brother" },
  { value: "€5k", label: "first reserve target" },
  { value: "2026", label: "public record begins" }
];

const allocations = [
  { name: "Index", value: 35, amount: "€140", color: "var(--green)" },
  { name: "Reserve", value: 35, amount: "€140", color: "var(--olive)" },
  { name: "Property", value: 20, amount: "€80", color: "var(--gold)" },
  { name: "Land", value: 5, amount: "€20", color: "var(--sage)" },
  { name: "Private", value: 5, amount: "€20", color: "var(--ink)" }
];

const buckets = [
  {
    icon: ChartLineUp,
    title: "Markets",
    subtitle: "Long-term index investing",
    allocation: "35%",
    amount: "€140 / month",
    note: "Quiet compounding through S&P 500 or global index-style exposure."
  },
  {
    icon: ShieldCheck,
    title: "Reserve",
    subtitle: "Safety and opportunity",
    allocation: "35%",
    amount: "€140 / month",
    note: "Liquid cash for admin costs, due diligence, deposits, and optionality."
  },
  {
    icon: HouseLine,
    title: "Property",
    subtitle: "House and acquisition pot",
    allocation: "20%",
    amount: "€80 / month",
    note: "A ring-fenced track for Irish property research, legal costs, and future deposits."
  },
  {
    icon: MapPinLine,
    title: "Bangladesh Assets",
    subtitle: "Land records and family assets",
    allocation: "5%",
    amount: "€20 / month",
    note: "Documentation, mapping, legal review, and long-term thinking around Sylhet roots."
  },
  {
    icon: Handshake,
    title: "Private Bets",
    subtitle: "Small founder and business experiments",
    allocation: "5%",
    amount: "€20 / month",
    note: "Controlled high-risk opportunities that can be fully explained and fully lost."
  }
];

const years = [
  ["Year 1", "€100", "€400", "€4,800"],
  ["Year 2", "€200", "€800", "€9,600"],
  ["Year 3", "€400", "€1,600", "€19,200"],
  ["Year 4", "€800", "€3,200", "€38,400"],
  ["Year 5", "€1,600", "€6,400", "€76,800"]
];

const entries = [
  {
    id: "001",
    title: "The First €400",
    date: "May 2026",
    line: "The number is small. The system is the point."
  },
  {
    id: "002",
    title: "Why Every Euro Has a Job",
    date: "June 2026",
    line: "Risk is allowed, but only inside the right bucket."
  },
  {
    id: "003",
    title: "From Waterford to Sylhet",
    date: "July 2026",
    line: "Family business taught us that records matter before scale."
  }
];

const principles = [
  "Start small, stay serious",
  "Family first, money second",
  "Every euro has a job",
  "Risk belongs in buckets",
  "Document decisions",
  "Build between Ireland and Bangladesh"
];

function Monogram() {
  return (
    <svg className="monogram" viewBox="0 0 96 96" aria-hidden="true">
      <path d="M18 78V18h9v27l26-27h12L38 46l30 32H55L27 49v29H18Z" />
      <path d="M69 18v60h-9V18h9Z" />
      <path d="M31 72c12-8 25-8 37 0" fill="none" strokeWidth="3" />
      <circle cx="48" cy="58" r="4.5" />
    </svg>
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
        <ArrowRight size={16} weight="bold" />
      </span>
    </a>
  );
}

function LedgerMap() {
  return (
    <div className="map-panel" aria-label="Sylhet to Ireland visual route">
      <svg viewBox="0 0 760 360" role="img">
        <defs>
          <linearGradient id="route" x1="0" x2="1">
            <stop offset="0%" stopColor="#B58B42" />
            <stop offset="100%" stopColor="#174D36" />
          </linearGradient>
        </defs>
        <path className="map-line line-one" d="M56 186C145 114 230 135 305 184c84 55 156 62 256-20 55-44 101-53 147-37" />
        <path className="map-line line-two" d="M64 240c105-39 203-22 292 30 111 65 209 35 336-71" />
        <path className="route-line" d="M126 222C254 65 471 86 630 154" />
        <circle className="route-dot" cx="126" cy="222" r="7" />
        <circle className="route-dot" cx="630" cy="154" r="7" />
        <text x="94" y="258">Sylhet</text>
        <text x="596" y="130">Ireland</text>
      </svg>
    </div>
  );
}

function LedgerTexture() {
  return (
    <div className="ledger-texture" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} />
      ))}
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
        y: 34,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out"
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 64, opacity: 0, filter: "blur(12px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".stack-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 96 + index * 18, opacity: 0, scale: 0.96 },
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
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".map-panel",
          start: "top 75%",
          once: true
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="site-shell" ref={rootRef}>
      <div className="paper-grain" aria-hidden="true" />

      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Khan Ledger home">
          <span className="brand-mark__icon">
            <Monogram />
          </span>
          <span>Khan Ledger</span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
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
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{ transitionDelay: `${index * 55 + 90}ms` }}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>

      <section className="hero-section" id="top">
        <div className="hero-visual" data-hero>
          <div className="hero-card-shell">
            <div className="hero-card">
              <LedgerTexture />
              <div className="hero-card__top">
                <Monogram />
                <span>A public record of family capital</span>
              </div>
              <div className="hero-card__quote">
                This is our journal. This is our future. This is our legacy.
              </div>
              <div className="hero-card__rule" />
            </div>
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow" data-hero>
            Public Family Capital Journal
          </p>
          <h1 data-hero>A public family capital journal, built month by month.</h1>
          <p className="hero-lede" data-hero>
            We are the Khan brothers from Sylhet, Bangladesh, based in Ireland,
            documenting how a shared monthly commitment becomes a long-term family
            portfolio across index investing, cash reserves, property, Bangladesh
            land, and private opportunities.
          </p>
          <div className="hero-actions" data-hero>
            <MagneticButton href="#ledger">View the ledger</MagneticButton>
            <MagneticButton href="#entries" variant="secondary">
              Read entry 001
            </MagneticButton>
          </div>
          <p className="plain-disclaimer" data-hero>
            Not a fund. Not financial advice. Not managing outside money.
          </p>
        </div>
      </section>

      <section className="metrics-strip" aria-label="Current Khan Ledger snapshot">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label} data-reveal>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="section allocation-section" id="ledger">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">The Ledger</p>
          <h2>Every euro has a job before it leaves the account.</h2>
        </div>
        <div className="allocation-shell" data-reveal>
          <div className="allocation-panel">
            <div className="allocation-bar" aria-label="Starting allocation model">
              {allocations.map((item) => (
                <span
                  key={item.name}
                  style={{ width: `${item.value}%`, background: item.color }}
                  title={`${item.name} ${item.value}%`}
                />
              ))}
            </div>
            <div className="allocation-legend">
              {allocations.map((item) => (
                <div key={item.name}>
                  <span style={{ background: item.color }} />
                  <strong>{item.value}%</strong>
                  <small>
                    {item.name} · {item.amount}
                  </small>
                </div>
              ))}
            </div>
          </div>
          <aside className="reserve-card">
            <div className="reserve-icon">
              <Wallet size={25} weight="light" />
            </div>
            <p>First milestone</p>
            <strong>€5,000 reserve</strong>
            <div className="progress-track">
              <span />
            </div>
            <small>Starting with discipline before scale.</small>
          </aside>
        </div>
      </section>

      <section className="section buckets-section" id="portfolio">
        <div className="section-heading wide" data-reveal>
          <p className="eyebrow">Portfolio Buckets</p>
          <h2>The portfolio is divided into buckets. Each bucket has a job.</h2>
        </div>
        <div className="bucket-grid">
          {buckets.map((bucket, index) => {
            const Icon = bucket.icon;
            return (
              <article className={`bucket-card bucket-card--${index + 1}`} key={bucket.title} data-reveal>
                <div className="bucket-card__icon">
                  <Icon size={26} weight="light" />
                </div>
                <div>
                  <h3>{bucket.title}</h3>
                  <p>{bucket.subtitle}</p>
                </div>
                <div className="bucket-card__meta">
                  <strong>{bucket.allocation}</strong>
                  <span>{bucket.amount}</span>
                </div>
                <small>{bucket.note}</small>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section compounding-section" id="allocation">
        <div className="compound-copy" data-reveal>
          <p className="eyebrow">Commitment Path</p>
          <h2>The first year looks small. The fifth year looks serious.</h2>
          <p>
            The yearly increase is an ambition, not a forced rule. The point is to
            build a system that can scale with income, confidence, and opportunity
            while keeping family trust intact.
          </p>
          <div className="total-card">
            <Coins size={28} weight="light" />
            <span>Total five-year contributions before returns</span>
            <strong>€148,800</strong>
          </div>
        </div>
        <div className="year-table-shell" data-reveal>
          <table className="year-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Brother / month</th>
                <th>Total / month</th>
                <th>Total / year</th>
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

      <section className="section story-section" id="story">
        <div className="story-copy" data-reveal>
          <p className="eyebrow">From Waterford to Sylhet</p>
          <h2>Family business taught us the reality of pressure, records, and responsibility.</h2>
          <p>
            Bengal Curry House in Waterford gave us real experience with customers,
            suppliers, delivery platforms, long hours, cashflow, reputation, and
            family teamwork. Khan Ledger is the next structure: smaller, quieter,
            and built to compound over decades.
          </p>
        </div>
        <LedgerMap />
      </section>

      <section className="section entries-section" id="entries">
        <div className="entries-head" data-reveal>
          <p className="eyebrow">Entries</p>
          <h2>Most people show the result. We want to show the first page.</h2>
        </div>
        <div className="entry-stack">
          {entries.map((entry) => (
            <article className="stack-card" key={entry.id}>
              <span>{entry.id}</span>
              <div>
                <p>{entry.date}</p>
                <h3>{entry.title}</h3>
                <small>{entry.line}</small>
              </div>
              <ArrowRight size={22} weight="light" />
            </article>
          ))}
        </div>
      </section>

      <section className="section principles-section">
        <div className="principle-card" data-reveal>
          <BookOpen size={34} weight="light" />
          <h2>Principles before opportunities.</h2>
          <p>
            The Ledger only works if the family stays aligned. No investment is
            worth damaging trust, and every meaningful decision should leave a
            written record.
          </p>
        </div>
        <div className="principles-list" data-reveal>
          {principles.map((principle) => (
            <div key={principle}>
              <Sparkle size={16} weight="fill" />
              <span>{principle}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section opportunity-section">
        <div className="opportunity-panel" data-reveal>
          <div>
            <p className="eyebrow">Open Record</p>
            <h2>We are open to seeing opportunities, not taking outside capital.</h2>
          </div>
          <div className="opportunity-types">
            <span>
              <Buildings size={18} weight="light" /> Property
            </span>
            <span>
              <CompassRose size={18} weight="light" /> Land and agri ideas
            </span>
            <span>
              <UsersThree size={18} weight="light" /> Founders
            </span>
            <span>
              <CalendarBlank size={18} weight="light" /> Local businesses
            </span>
          </div>
          <MagneticButton href="mailto:hello@khanledger.com">Share an opportunity</MagneticButton>
        </div>
      </section>

      <footer className="footer">
        <div>
          <Monogram />
          <strong>Khan Ledger</strong>
        </div>
        <p>
          Khan Ledger is a personal family documentation project. We are not a
          regulated investment fund, financial adviser, investment manager, or
          public investment product. We do not manage outside capital. Nothing on
          this site is financial advice.
        </p>
        <span>
          <FileText size={16} weight="light" /> Four brothers. One ledger. A lifetime of compounding.
        </span>
      </footer>
    </main>
  );
}
