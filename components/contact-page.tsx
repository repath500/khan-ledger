"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Buildings,
  CompassRose,
  EnvelopeSimple,
  HouseLine,
  MapPinLine,
  PaperPlaneTilt,
  SealCheck,
  UsersThree
} from "@phosphor-icons/react";

const contactEmail = "repath500@gmail.com";

const opportunityTypes = [
  { label: "Property", icon: HouseLine },
  { label: "Bangladesh land", icon: MapPinLine },
  { label: "Founder / startup", icon: UsersThree },
  { label: "Local business", icon: Buildings },
  { label: "Other opportunity", icon: CompassRose }
];

function BrandIcon() {
  return (
    <svg className="brand-icon" viewBox="0 0 36 36" aria-hidden="true" fill="none">
      <rect width="36" height="36" rx="3" fill="currentColor" />
      <rect x="16.5" y="8" width="3" height="20" fill="#B99044" />
      <rect x="8" y="16.5" width="20" height="3" fill="#B99044" />
    </svg>
  );
}

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Property",
    message: ""
  });
  const [status, setStatus] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = `RK+ Holdings opportunity: ${form.type || "General"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Opportunity type: ${form.type}`,
      "",
      form.message
    ].join("\n");

    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Opening your email app with the message prepared.");
    window.location.href = mailtoHref;
  }

  return (
    <main className="site-shell contact-shell">
      <div className="paper-grain" aria-hidden="true" />

      <nav className="nav-shell contact-nav" aria-label="Contact navigation">
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
          <Link href="/#family">Family</Link>
          <Link href="/#entries">Entries</Link>
        </div>
        <Link className="contact-back" href="/">
          <ArrowLeft size={14} weight="bold" />
          Back
        </Link>
      </nav>

      <section className="contact-hero">
        <div className="contact-copy">
          <p className="eyebrow">Send an Opportunity</p>
          <h1>Share an opportunity with a clear record.</h1>
          <p className="hero-lede">
            Send property leads, land questions, founder notes, local business
            ideas, or useful introductions. RK+ reviews opportunities as a
            private family capital platform — not as a fund or outside-money
            manager.
          </p>
          <div className="contact-email-pill">
            <EnvelopeSimple size={18} weight="light" />
            <span>{contactEmail}</span>
          </div>
        </div>

        <div className="contact-form-shell">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                required
                placeholder="you@example.com"
              />
            </div>

            <fieldset className="type-picker">
              <legend>Opportunity type</legend>
              {opportunityTypes.map((item) => {
                const Icon = item.icon;
                return (
                  <label key={item.label}>
                    <input
                      type="radio"
                      name="type"
                      value={item.label}
                      checked={form.type === item.label}
                      onChange={(e) => updateField("type", e.target.value)}
                    />
                    <span>
                      <Icon size={16} weight="light" />
                      {item.label}
                    </span>
                  </label>
                );
              })}
            </fieldset>

            <div className="form-field form-field--full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                required
                rows={7}
                placeholder="What is it, who is involved, where is it based, and why should we look at it?"
              />
            </div>

            <button className="button button--primary contact-submit" type="submit">
              <span>Prepare email</span>
              <span className="button__icon">
                <PaperPlaneTilt size={15} weight="bold" />
              </span>
            </button>

            <a className="direct-email-link" href={mailtoHref}>
              Open email directly
              <ArrowRight size={14} weight="bold" />
            </a>

            <p className="form-status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
      </section>

      <section className="contact-principles">
        <article>
          <SealCheck size={24} weight="light" />
          <h2>What helps us review faster</h2>
          <p>
            Clear numbers, location, timeline, who is involved, what could go
            wrong, and why the opportunity fits a long-term family capital
            platform with roots in Ireland and Bangladesh.
          </p>
        </article>
        <article>
          <SealCheck size={24} weight="light" />
          <h2>What this is not</h2>
          <p>
            RK+ Holdings does not raise capital, manage outside money, or
            provide financial advice. Contact is for opportunities, leads,
            introductions, and relationship-building only.
          </p>
        </article>
      </section>
    </main>
  );
}
