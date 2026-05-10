/** Long-form journal entries for RK+ Holdings (landing "Entries" section). */

export type LedgerEntry = {
  slug: string;
  id: string;
  title: string;
  date: string;
  dek: string;
  paragraphs: string[];
};

export const ENTRY_SLUGS = [
  "why-rk-exists",
  "khan-ledger-i-the-mandate",
  "our-first-allocation-strategy"
] as const;

export type EntrySlug = (typeof ENTRY_SLUGS)[number];

const whyRkExists: LedgerEntry = {
  slug: "why-rk-exists",
  id: "001",
  title: "Why RK+ Exists",
  date: "May 2026",
  dek: "The family story and what we build from here.",
  paragraphs: [
    `RK+ Holdings exists because four brothers decided that "someday we will invest properly" was no longer good enough. Our father, Masud Khan, built a life in Ireland through restaurants, hospitality, and relentless work. Bengal Curry House in Waterford was one visible chapter — it taught us that a family business is a daily exam in quality, timing, and discipline. RK+ carries that seriousness into capital allocation across markets, ventures, property, and land.`,
    `We are not interchangeable. Rahath brings mechanical engineering and systems thinking from Frankfurt. Reyad catches operational risk and single points of failure from London. Repath builds LeemerChat.com and critique.sh from Ireland — products that demand clarity and honest iteration — and carries that builder mindset into memos and allocation reviews. Rehan applies laboratory-grade diligence at Sanofi, demanding evidence before conviction.`,
    `RK+ is deliberately cross-border. Ireland, London, Frankfurt, Sylhet, and Moulvibazar are where obligations, opportunities, and identity actually live. We carry land and heritage in Bangladesh not as a trophy asset but as responsibility — documentation, stewardship, and long-term thinking about what productive land can become.`,
    `We publish pages because transparency trains judgement. RK+ exists to prove that a working family can graduate from hustle alone to a deliberate capital stack: global breadth, hard-asset grounding, and room for asymmetric bets reviewed by people who actually operate. That is the covenant behind the plus sign — brothers and kin adding perspective, capital, and accountability across decades.`
  ]
};

const khanLedgerMandate: LedgerEntry = {
  slug: "khan-ledger-i-the-mandate",
  id: "002",
  title: "Khan Ledger I — The Mandate",
  date: "May 2026",
  dek: "Our first vehicle, the rationale, and the five-year plan.",
  paragraphs: [
    `Khan Ledger I is RK+'s first formal investment vehicle: a five-year monthly contribution plan that turns intention into accounting reality. It is not marketed to outsiders, not a public fund, and not a substitute for financial advice. It is a family ledger — capital scheduled month by month across global equities, precious metals, energy, and an opportunity bucket for founder-led deals.`,
    `The mandate begins with rhythm. Families rarely fail because they lack intelligence; they fail because contributions are optional when bills arrive. Khan Ledger I fixes rhythm first: a staged monthly commitment that ramps through the early years so discipline scales alongside conviction. The contribution schedule totals €110,400 across five years — concrete enough to track and reconcile quarterly.`,
    `Allocation follows function. A large US equity sleeve provides depth and diversified earnings growth. International ETFs hedge geographic concentration. Gold and silver serve as crisis ballast with different failure modes than equities. Defensive bonds provide dry powder for rebalancing. The energy sleeve stays small and tactical. The RK+ opportunity sleeve is our admission that spreadsheets alone will not capture every edge we see — a restaurant turnaround, a software tool with real users, an introduction that becomes a deal.`,
    `Governance is lean and loud where it matters. Quarterly rebalancing stops drift from becoming destiny. Annual allocation review forces us to argue with last year's selves. We write the mandate in plain language because if a cousin cannot understand it, we have not finished explaining it. Khan Ledger I ends its first term in 2030 with a documented habit of putting capital to work on schedule — and a family that proved it could hold the line together.`
  ]
};

const firstAllocationStrategy: LedgerEntry = {
  slug: "our-first-allocation-strategy",
  id: "003",
  title: "Our First Allocation Strategy",
  date: "June 2026",
  dek: "The thinking behind every allocation bucket.",
  paragraphs: [
    `When people hear "allocation," they picture pie charts. For RK+, allocation is the translation layer between what we believe and what we actually own. Khan Ledger I spreads monthly flows across eight sleeves — from broad US equity through global ETFs, gold and silver, quality dividend tilt, defensive yield, energy, and an opportunity sleeve — because no single asset class owns every season.`,
    `The US equity sleeve is the workhorse: liquidity, depth, and a diversified claim on global earnings. International ETFs hedge our already geographically concentrated lives. Precious metals are insurance that behaves differently than shares when correlations break. Defensive bonds exist so we have dry powder and emotional runway when equities stumble.`,
    `The RK+ opportunity sleeve is where operator judgement enters. This slice can go to zero on a failed angel bet — and it is also where asymmetric outcomes live. Repath's product work keeps us close to modern software craft. Rahath's engineering lens filters structural risk. Reyad's safety expertise sharpens questions about operations. Rehan's science training demands evidence before scale.`,
    `Khan Ledger I is only the liquid layer. RK+ Holdings also weights Bangladesh land, Ireland and UK property, and private stakes as real-asset ballast — wealth that does not refresh on a stock ticker but anchors generations. Liquid markets teach discipline and compounding; land teaches patience and identity. When we rebalance, we are aligning buckets with the risks we agreed to carry and the upside we believe remains reasonable over years, not weekends.`
  ]
};

export const ledgerEntriesBySlug: Record<EntrySlug, LedgerEntry> = {
  "why-rk-exists": whyRkExists,
  "khan-ledger-i-the-mandate": khanLedgerMandate,
  "our-first-allocation-strategy": firstAllocationStrategy
};

export function getLedgerEntry(slug: string): LedgerEntry | undefined {
  return ledgerEntriesBySlug[slug as EntrySlug];
}
