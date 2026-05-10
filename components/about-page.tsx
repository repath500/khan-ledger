"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function BrandIcon() {
  return (
    <svg className="brand-icon" viewBox="0 0 36 36" aria-hidden="true" fill="none">
      <rect width="36" height="36" rx="3" fill="currentColor" />
      <rect x="16.5" y="8" width="3" height="20" fill="#B99044" />
      <rect x="8" y="16.5" width="20" height="3" fill="#B99044" />
    </svg>
  );
}

const bengalLessons = [
  "How customers judge quality — immediately",
  "How delivery platforms compress margins",
  "How pricing shapes perception",
  "How suppliers determine consistency",
  "How reputation is built order by order",
  "How cashflow feels in real time",
  "How family teamwork holds under pressure",
  "How local business rewards reliability",
];

const landStrategy = [
  "Record gathering & documentation",
  "Title and legal clarity",
  "Land mapping",
  "Local management systems",
  "Agricultural productivity review",
  "Development potential assessment",
  "Family asset protection",
  "Cross-border opportunity evaluation",
];

const plusMeaning = [
  { symbol: "RK", desc: "The brothers — Rahath, Repath, Reyad, Rehan" },
  { symbol: "+", desc: "The wider Khan family and next generation" },
  { symbol: "IE+BD", desc: "Ireland and Bangladesh — two homes, one capital platform" },
  { symbol: "Pub+Priv", desc: "Public markets plus private opportunities" },
  { symbol: "Prop+Land", desc: "Property plus ancestral land as real-asset foundation" },
  { symbol: "Ops+Cap", desc: "Operating discipline meeting capital allocation" },
];

const brothers = [
  {
    name: "Rahath Khan",
    location: "Frankfurt",
    craft: "Mechanical Engineering",
    lens: "Systems thinking, load-path judgement, and the patience to stress-test ideas before capital moves.",
  },
  {
    name: "Reyad Khan",
    location: "London",
    craft: "Health & Safety",
    lens: "Operational risk, site realities, and uncomfortable questions that catch single points of failure early.",
  },
  {
    name: "Repath Khan",
    location: "Ireland",
    craft: "Product & Strategy",
    lens: "Builder of LeemerChat.com and critique.sh — clarity, feedback loops, and honest iteration applied to capital.",
  },
  {
    name: "Rehan Khan",
    location: "Sanofi",
    craft: "Science",
    lens: "Laboratory-grade diligence — evidence before conviction, and data before scale.",
  },
];

export function AboutPage() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("[data-hero]", {
        y: 36,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 44, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.92,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
              once: true,
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="site-shell about-shell" ref={rootRef}>
      <div className="paper-grain" aria-hidden="true" />

      <nav className="nav-shell about-nav" aria-label="Primary navigation">
        <Link className="brand-mark" href="/" aria-label="RK+ Holdings home">
          <span className="brand-mark__icon">
            <BrandIcon />
          </span>
          <span className="brand-mark__wordmark">
            <span className="brand-mark__name">RK+</span>
            <span className="brand-mark__sub">Holdings</span>
          </span>
        </Link>
        <div className="nav-links">
          <Link href="/#vehicle">Khan Ledger I</Link>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/#partners">Partners</Link>
          <Link href="/#entries">Entries</Link>
        </div>
        <Link className="contact-back" href="/">
          <ArrowRight
            size={13}
            weight="bold"
            style={{ transform: "rotate(180deg)" }}
          />
          Home
        </Link>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className="about-hero">
        <div className="about-hero__left">
          <p className="eyebrow" data-hero>
            About RK+ Holdings
          </p>
          <h1 className="about-hero__headline" data-hero>
            Family capital,
            <br />
            built from work.
          </h1>
          <p className="about-hero__sub" data-hero>
            RK+ Holdings is the private family capital platform of the Khan
            brothers — a family-backed group built across Ireland, London,
            Frankfurt, and Bangladesh.
          </p>
          <p className="geo-line" data-hero>
            Ireland · London · Frankfurt · Sylhet · Moulvibazar
          </p>
        </div>

        <div className="about-hero__toc" data-hero>
          <p className="about-toc__label">This page</p>
          <ol className="about-toc">
            <li>
              <a href="#foundation">
                <span className="about-toc__num">I</span>
                The Foundation
              </a>
            </li>
            <li>
              <a href="#bengal">
                <span className="about-toc__num">II</span>
                The Business Classroom
              </a>
            </li>
            <li>
              <a href="#roots">
                <span className="about-toc__num">III</span>
                Roots &amp; Land
              </a>
            </li>
            <li>
              <a href="#name">
                <span className="about-toc__num">IV</span>
                The Name &amp; Vision
              </a>
            </li>
            <li>
              <a href="#ledger">
                <span className="about-toc__num">V</span>
                Khan Ledger I
              </a>
            </li>
          </ol>
        </div>
      </header>

      {/* ── Opening statement ─────────────────────────────────── */}
      <div className="about-statement" data-reveal>
        <blockquote className="about-statement__quote">
          <p>
            RK+ exists to organise family ambition into a long-term capital
            structure: public markets, global ETFs, private opportunities,
            property, land, and cross-border deal flow. It is not a public
            investment fund. It is a private family platform in formation.
          </p>
        </blockquote>
        <div className="about-statement__rule" aria-hidden="true" />
      </div>

      {/* ── Chapter I: The Foundation ─────────────────────────── */}
      <section className="about-chapter" id="foundation">
        <div className="about-chapter__marker" data-reveal>
          <span className="about-chapter__num">I</span>
          <span className="about-chapter__title">The Foundation</span>
        </div>

        <div className="about-split" data-reveal>
          <div className="about-split__lead">
            <h2 className="about-h2">
              The story begins with work before capital.
            </h2>
          </div>
          <div className="about-split__copy">
            <p>
              The brothers&rsquo; father, Masud Khan, came to Ireland and built
              through hospitality, restaurants, local business, and long hours.
              That foundation created more than income. It created a mindset:
              serve customers properly, understand cashflow, respect pressure,
              move quickly, and treat opportunity as something earned rather than
              expected.
            </p>
            <p>
              That operating mindset carried into the next generation. The Khan
              brothers grew up around business, family responsibility, and the
              practical realities of building from the ground up. Across the
              extended family, that foundation produced professionals, graduates,
              doctors, nurses, engineers, scientists, operators, and business
              owners across Ireland, the UK, Germany, and Bangladesh.
            </p>
            <p>
              RK+ was created to turn that scattered family energy into a more
              deliberate capital system. Not just work. Not just income. Not just
              saving. <strong>Ownership.</strong>
            </p>
          </div>
        </div>

        <div className="about-trio" data-reveal>
          <div className="about-trio__item">
            <p className="about-trio__label">Foundation</p>
            <p className="about-trio__value">
              Migration, restaurants, and hard work
            </p>
          </div>
          <div className="about-trio__item">
            <p className="about-trio__label">Mindset inherited</p>
            <p className="about-trio__value">
              Cashflow, customers, reputation, speed
            </p>
          </div>
          <div className="about-trio__item">
            <p className="about-trio__label">What RK+ builds</p>
            <p className="about-trio__value">
              Capital, ownership, and generational intent
            </p>
          </div>
        </div>
      </section>

      {/* ── Chapter II: Bengal Curry House ───────────────────── */}
      <section className="about-chapter about-chapter--tinted" id="bengal">
        <div className="about-chapter__marker" data-reveal>
          <span className="about-chapter__num">II</span>
          <span className="about-chapter__title">The Business Classroom</span>
        </div>

        <div className="about-bengal-head" data-reveal>
          <h2 className="about-h2">
            Bengal Curry House<br />was not just a takeaway.
          </h2>
          <p className="about-bengal-subhead">
            Waterford&rsquo;s highest-rated Indian takeaway on Just Eat at close of
            2023. Unit 27, Lisduggan Shopping Centre. A daily exam in quality,
            timing, and discipline.
          </p>
        </div>

        <div className="about-bengal-body" data-reveal>
          <div className="about-bengal-intro">
            <p className="eyebrow-sm">What it taught the brothers</p>
            <p>
              Bengal Curry House was a business classroom that ran six days a
              week. Every supplier call, every delivery window, every negative
              review and five-star comment was a data point. The family ran it
              together — and under pressure, that is how trust is actually built.
            </p>
            <p>
              RK+ carries those operating lessons into markets, ventures,
              property, and land. The discipline is the same. Only the asset
              class changes.
            </p>
          </div>
          <ul className="about-lessons">
            {bengalLessons.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </div>

        <div className="about-bengal-footnote" data-reveal>
          <p className="eyebrow-sm">Context</p>
          <p>
            Bengal Curry House operated under Repath Enterprises Limited
            (incorporated 2023), with Repath, Reyad, and Rehan Khan each
            contributing across founder, management, and operations roles. It
            was not the first family business experience and will not be the
            last. For RK+, it represents one visible chapter in a wider story —
            and the lesson bank it built is permanent.
          </p>
        </div>
      </section>

      {/* ── Chapter III: Roots & Land ─────────────────────────── */}
      <section className="about-chapter" id="roots">
        <div className="about-chapter__marker" data-reveal>
          <span className="about-chapter__num">III</span>
          <span className="about-chapter__title">Roots &amp; Land</span>
        </div>

        <div className="about-split" data-reveal>
          <div className="about-split__lead">
            <h2 className="about-h2">
              Sylhet, Moulvibazar, and the land that came before capital.
            </h2>
          </div>
          <div className="about-split__copy">
            <p>
              The RK brothers are from a family rooted in Sylhet / Moulvibazar,
              Bangladesh, with a long relationship to land, farming, and
              community. They are grandsons of the late Hajji Ahmed Khan — a
              respected local figure, farmer, and community leader in the
              Moulvibazar region.
            </p>
            <p>
              Land is not abstract to the family. Land is history,
              responsibility, identity, and long-term value. The brothers already
              hold direct ownership exposure to significant land assets in
              Bangladesh — including hundreds of acres connected to the
              family&rsquo;s ancestral home — before considering future
              inheritance.
            </p>
            <p>
              For RK+, this is not &ldquo;land on a balance sheet&rdquo;. It is
              a living asset base that requires documentation, protection, and
              careful stewardship.
            </p>
          </div>
        </div>

        <div className="about-land-advantage" data-reveal>
          <p className="about-land-advantage__callout">
            Most young capital projects start with only cash. RK+ starts with
            family business experience, international presence, and real land
            exposure.
          </p>
        </div>

        <div className="about-land-strategy" data-reveal>
          <p className="eyebrow-sm">RK+ Bangladesh Land Strategy</p>
          <div className="about-land-strategy__grid">
            {landStrategy.map((item) => (
              <div className="about-land-strategy__item" key={item}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chapter IV: The Name & Vision ────────────────────── */}
      <section className="about-chapter about-chapter--dark" id="name">
        <div className="about-chapter__marker about-chapter__marker--light" data-reveal>
          <span className="about-chapter__num">IV</span>
          <span className="about-chapter__title">The Name &amp; The Vision</span>
        </div>

        <div className="about-name-head" data-reveal>
          <h2 className="about-h2 about-h2--light">The &ldquo;+&rdquo; matters.</h2>
          <p className="about-name-sub">
            The name RK+ comes from the initials shared across the Khan brothers.
            The plus sign is the entire point.
          </p>
        </div>

        <div className="about-plus-grid" data-reveal>
          {plusMeaning.map((item) => (
            <div className="about-plus-item" key={item.symbol}>
              <span className="about-plus-item__symbol">{item.symbol}</span>
              <p className="about-plus-item__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="about-vision-quote" data-reveal>
          <p>
            Today, RK+ begins with the brothers. Tomorrow, it can include future
            family members, new vehicles, property strategies, venture
            opportunities, partnerships, and legacy assets. RK+ is designed to
            expand — not just in capital, but in people, cities, and
            generations.
          </p>
        </blockquote>
      </section>

      {/* ── The Brothers ─────────────────────────────────────── */}
      <section className="about-chapter" id="brothers">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">General Partners</p>
          <h2>One family. Four cities. Shared capital.</h2>
        </div>
        <p className="about-brothers-intro" data-reveal>
          RK+ is led by the Khan brothers — each carrying the same initials: RK.
          They are not interchangeable. Each brings a distinct professional
          discipline to bear on every capital decision.
        </p>
        <div className="about-brothers">
          {brothers.map((b, i) => (
            <article className="about-brother" key={b.name} data-reveal>
              <div className="about-brother__index">0{i + 1}</div>
              <div className="about-brother__body">
                <div className="about-brother__meta">
                  <span className="about-brother__craft">{b.craft}</span>
                  <span className="about-brother__location">{b.location}</span>
                </div>
                <h3 className="about-brother__name">{b.name}</h3>
                <p className="about-brother__lens">{b.lens}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="about-next-gen" data-reveal>
          <p className="eyebrow-sm">Next Generation</p>
          <p>
            RK+ is not closed around the first four brothers. The family
            includes younger members, and the long-term goal is to build a
            structure that future RK family members can learn from, contribute
            to, and eventually help grow. This is a family operating system in
            formation — not a five-year experiment.
          </p>
        </div>
      </section>

      {/* ── Chapter V: Khan Ledger I ─────────────────────────── */}
      <section className="about-chapter about-chapter--tinted" id="ledger">
        <div className="about-chapter__marker" data-reveal>
          <span className="about-chapter__num">V</span>
          <span className="about-chapter__title">Khan Ledger I</span>
        </div>

        <div className="about-ledger" data-reveal>
          <div className="about-ledger__copy">
            <h2 className="about-h2">The first formal vehicle.</h2>
            <p>
              Khan Ledger I is a five-year monthly investment mandate designed to
              turn regular family contributions into a structured portfolio. It
              is the first RK+ internal capital vehicle — not a savings challenge
              and not a one-off property bet.
            </p>
            <p>
              The strategy allocates capital across Vanguard S&P 500 exposure,
              global non-US ETFs, precious metals, energy, and a small
              opportunity sleeve for founders and operator-led deals.
            </p>
            <p>
              The purpose is not to chase hype. The purpose is to build
              allocation discipline early — and prove that a family can move from
              informal conversations to a real capital system.
            </p>
            <Link href="/#vehicle" className="about-ledger__link">
              Explore the full mandate
              <ArrowRight size={13} weight="bold" />
            </Link>
          </div>

          <div className="about-ledger__card">
            <div className="about-ledger__card-head">
              <span className="vehicle-label">Khan Ledger I</span>
              <span className="vehicle-status">Formation</span>
            </div>
            <div className="about-ledger__stats">
              <div className="about-ledger__stat">
                <span>Vehicle type</span>
                <strong>Monthly investment mandate</strong>
              </div>
              <div className="about-ledger__stat">
                <span>Term</span>
                <strong>5 years (2026–2030)</strong>
              </div>
              <div className="about-ledger__stat">
                <span>Planned contributions</span>
                <strong>€110,400</strong>
              </div>
              <div className="about-ledger__stat">
                <span>Rebalancing</span>
                <strong>Quarterly</strong>
              </div>
              <div className="about-ledger__stat">
                <span>Allocation review</span>
                <strong>Annual</strong>
              </div>
              <div className="about-ledger__stat">
                <span>Geography</span>
                <strong>IE · UK · DE · BD</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section className="about-cta">
        <div className="about-cta__inner" data-reveal>
          <p className="eyebrow">Connect with RK+</p>
          <h2 className="about-cta__headline">
            We are actively open to founders,
            operators, and asset owners.
          </h2>
          <p className="about-cta__body">
            RK+ does not manage outside capital and does not offer financial
            advice. But we are genuinely open to conversations about ventures,
            property, land, and operator-led deals that align with our platform.
          </p>
          <div className="about-cta__actions">
            <Link className="button button--primary" href="/contact">
              <span>Send an Opportunity</span>
              <span className="button__icon">
                <ArrowRight size={14} weight="bold" />
              </span>
            </Link>
            <Link className="button button--secondary" href="/">
              <span>Back to Holdings</span>
              <span className="button__icon">
                <ArrowRight size={14} weight="bold" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <span className="footer-rk">RK+</span>
          <strong>Holdings</strong>
        </div>
        <p>
          RK+ Holdings and Khan Ledger I are private family capital projects. We
          do not manage outside capital, offer financial advice, or operate as a
          regulated investment fund. Public documentation is shared for
          transparency, learning, and relationship-building only.
        </p>
        <span className="footer-geo">
          Ireland · London · Frankfurt · Sylhet · Moulvibazar
        </span>
      </footer>
    </main>
  );
}
