"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Buildings,
  CompassRose,
  EnvelopeSimple,
  MapPinLine,
  PaperPlaneTilt,
  SealCheck,
  UsersThree
} from "@phosphor-icons/react";

const contactEmail = "repath500@gmail.com";

const opportunityTypes = [
  { label: "Property", icon: Buildings },
  { label: "Bangladesh land", icon: MapPinLine },
  { label: "Founder / startup", icon: UsersThree },
  { label: "Local business", icon: CompassRose }
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

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Property",
    message: ""
  });
  const [status, setStatus] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = `Khan Ledger opportunity: ${form.type || "General"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Opportunity type: ${form.type}`,
      "",
      form.message
    ].join("\n");

    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  function updateField(
    field: keyof typeof form,
    value: string
  ) {
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
        <Link className="brand-mark" href="/" aria-label="Khan Ledger home">
          <span className="brand-mark__icon">
            <Monogram />
          </span>
          <span>Khan Ledger</span>
        </Link>
        <div className="nav-links">
          <Link href="/#ledger">Ledger</Link>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/#entries">Entries</Link>
          <Link href="/#story">Story</Link>
        </div>
        <Link className="contact-back" href="/">
          <ArrowLeft size={16} weight="bold" />
          Home
        </Link>
      </nav>

      <section className="contact-hero">
        <div className="contact-copy">
          <p className="eyebrow">Contact Khan Ledger</p>
          <h1>Share an opportunity with a clear record.</h1>
          <p className="hero-lede">
            Send property leads, land questions, founder notes, local business
            ideas, or useful introductions. We review opportunities as a family
            capital journal, not as a fund or outside-money manager.
          </p>
          <div className="contact-email-pill">
            <EnvelopeSimple size={20} weight="light" />
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
                onChange={(event) => updateField("name", event.target.value)}
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
                onChange={(event) => updateField("email", event.target.value)}
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
                      onChange={(event) => updateField("type", event.target.value)}
                    />
                    <span>
                      <Icon size={18} weight="light" />
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
                onChange={(event) => updateField("message", event.target.value)}
                required
                rows={7}
                placeholder="What is it, who is involved, where is it based, and why should we look at it?"
              />
            </div>

            <button className="button button--primary contact-submit" type="submit">
              <span>Prepare email</span>
              <span className="button__icon">
                <PaperPlaneTilt size={16} weight="bold" />
              </span>
            </button>

            <a className="direct-email-link" href={mailtoHref}>
              Open email directly
              <ArrowRight size={16} weight="bold" />
            </a>

            <p className="form-status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
      </section>

      <section className="contact-principles">
        <article>
          <SealCheck size={26} weight="light" />
          <h2>What helps us review faster</h2>
          <p>
            Clear numbers, location, timeline, who is involved, what could go
            wrong, and why the opportunity fits a family-built long-term ledger.
          </p>
        </article>
        <article>
          <SealCheck size={26} weight="light" />
          <h2>What this is not</h2>
          <p>
            Khan Ledger does not raise capital, manage outside money, or provide
            financial advice. Contact is for ideas, leads, introductions, and
            documentation.
          </p>
        </article>
      </section>
    </main>
  );
}
