import Link from "next/link";
import type { LedgerEntry } from "@/lib/entry-articles";

function BackIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 256 256" aria-hidden="true" className="entry-back-icon">
      <path
        fill="currentColor"
        d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8Z"
      />
    </svg>
  );
}

function BrandIcon() {
  return (
    <svg className="brand-icon" viewBox="0 0 36 36" aria-hidden="true" fill="none">
      <rect width="36" height="36" rx="3" fill="currentColor" />
      <rect x="16.5" y="8" width="3" height="20" fill="#B99044" />
      <rect x="8" y="16.5" width="20" height="3" fill="#B99044" />
    </svg>
  );
}

function estimateReadingTime(paragraphs: string[]): number {
  const words = paragraphs.join(" ").split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function LedgerEntryPage({ entry }: { entry: LedgerEntry }) {
  const readingTime = estimateReadingTime(entry.paragraphs);

  return (
    <main className="site-shell entry-shell">
      <div className="paper-grain" aria-hidden="true" />

      <nav className="nav-shell entry-nav" aria-label="Entry navigation">
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
          <Link href="/about">About</Link>
          <Link href="/#vehicle">Khan Ledger I</Link>
          <Link href="/#entries">Entries</Link>
        </div>
        <Link className="contact-back" href="/#entries">
          <BackIcon />
          Entries
        </Link>
      </nav>

      <article className="entry-article">
        <header className="entry-article__head">
          <p className="eyebrow">Entry {entry.id}</p>
          <p className="entry-article__date">{entry.date}</p>
          <h1>{entry.title}</h1>
          <p className="entry-article__dek">{entry.dek}</p>
          <span className="entry-article__reading">{readingTime} min read</span>
        </header>
        <div className="entry-article__prose">
          {entry.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className="entry-article__foot">
          <Link href="/">Return to RK+ Holdings</Link>
        </p>
      </article>
    </main>
  );
}
