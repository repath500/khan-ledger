/** Long-form journal entries for RK+ Holdings (landing “Entries” section). */

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
  dek: "The brief history of a family that worked, and what we are building from here.",
  paragraphs: [
    `RK+ Holdings exists because four brothers decided that “someday we will invest properly” was no longer good enough. Our father, Masud Khan, built a life in Ireland through restaurants, hospitality, and relentless work — not theory. We grew up watching cashflow, reputation, suppliers, and night shifts matter more than slide decks. Bengal Curry House in Waterford was one visible chapter: it taught us that a family business is a daily exam in quality, timing, and discipline. RK+ is the attempt to carry that same seriousness into capital allocation — markets, ventures, property, land — without pretending we are a bank or a fund.`,
    `We are not interchangeable copies of one another. Rahath is a mechanical engineer based in Frankfurt; he brings structure, systems thinking, and the patience to stress-test whether an idea survives contact with physics and long timelines. Reyad is a health and safety specialist in London; his instinct is to spot single points of failure before they become expensive — in operations, sites, and real-world execution. Repath is building LeemerChat.com and critique.sh from Ireland — products that force clarity, feedback loops, and honest iteration — and he carries that builder mindset into memos, allocation reviews, and how we document decisions in public. Rehan is an early-career scientist at Sanofi; he understands rigour, evidence, and how disciplined experimentation translates into outcomes — a mindset we want beside any venture or operating conversation.`,
    `That combination matters because RK+ is deliberately cross-border and cross-domain. Ireland, London, Frankfurt, Sylhet, and Moulvibazar are not decorative pins on a map; they are where obligations, opportunities, and identity actually live. We carry land and heritage in Bangladesh not as a trophy asset but as responsibility — documentation, stewardship, and long-term thinking about what productive land can become for the family and the communities tied to it.`,
    `We could have stayed informal forever — WhatsApp threads, occasional bets on stocks, scattered ideas about property. Informality feels lighter, but it confuses memory: who agreed to what, which risk was accepted, and whether we are compounding or merely drifting. RK+ is an operating system for family capital: clear vehicles, written mandates, scheduled reviews, and enough humility to admit when we are wrong. Khan Ledger I is the first liquid expression of that idea — a five-year monthly rhythm — but RK+ as a whole also holds illiquid truth: land, houses, businesses, and private opportunities that do not clear through an app.`,
    `None of this is performance for strangers. We publish pages because transparency trains judgement — and because founders, cousins, and collaborators should know how we think before they trust us with time or capital. RK+ exists to prove that a working family can graduate from hustle alone to a deliberate capital stack: global breadth, hard-asset grounding, and room for asymmetric bets reviewed by people who actually operate. If we succeed, the next generation inherits more than stories. They inherit a playbook — and the discipline to rewrite it when the world changes.`,
    `That is the covenant behind the plus sign in RK+: brothers and kin adding perspective, capital, and accountability across decades — not a single heroic quarter.`
  ]
};

const khanLedgerMandate: LedgerEntry = {
  slug: "khan-ledger-i-the-mandate",
  id: "002",
  title: "Khan Ledger I — The Mandate",
  date: "May 2026",
  dek: "How we structured the first vehicle, the allocation rationale, and our five-year discipline plan.",
  paragraphs: [
    `Khan Ledger I is RK+’s first formal investment vehicle: a five-year monthly contribution plan designed to turn intention into accounting reality. It is not marketed to outsiders, not an Irish UCITS fund, and not a substitute for personal financial advice. It is a family ledger — capital scheduled month by month, allocated across global equities, diversification sleeves, precious metals, defensive liquidity, energy exposure, and a small opportunity bucket for founder-led and operator-led deals that clear our review.`,
    `The mandate begins with rhythm. Families rarely fail because they lack intelligence; they fail because contributions are optional when bills arrive. Khan Ledger I fixes the rhythm first: a staged monthly commitment that ramps through the early years so discipline scales alongside conviction. The headline contribution schedule totals €110,400 across five years before any returns — not because that number is magical, but because it is concrete enough to argue about, track in a spreadsheet, and reconcile quarterly.`,
    `Allocation follows function. A large sleeve sits in broad US equity exposure because, for all known imperfections, American public markets remain the deepest engine of diversified corporate earnings growth we can access at scale. Non-US ETFs exist because sovereignty and sector cycles still matter — Europe, Asia, and emerging markets hedge cultural and political concentration without pretending we can forecast next year’s winner. Gold and silver are not crypto substitutes; they are crisis and currency-stress ballast with different failure modes than equities. A defensive bonds and money-market sleeve exists so we can rebalance when fear spikes rather than panic-selling structured plans into headlines.`,
    `The energy sleeve is intentionally tactical — small, cyclical, and willing to be wrong — because commodity shocks still reshape portfolios even in a climate-transition century. Finally, the RK+ opportunity sleeve is the brothers’ admission that spreadsheets alone will not capture every edge we see: a restaurant turnaround, a software tool with real users, a land-adjacent partnership, an introduction that becomes a deal. Repath’s product work on LeemerChat.com and critique.sh is part of that muscle — shipping, measuring, iterating — while Rahath’s engineering lens filters mechanical and structural risk, Reyad’s health-and-safety practice catches operational blind spots, and Rehan’s scientific training demands evidence before we scale conviction.`,
    `Governance is intentionally lean and loud where it matters. Quarterly rebalancing stops drift from becoming destiny; annual allocation review forces us to argue with last year’s selves. We write the mandate in plain language because if a cousin cannot understand it, we have not finished explaining it. Khan Ledger I ends its first term in 2030 with something invaluable whether markets smile or not: a documented habit of putting capital to work on schedule — and a family that proved it could hold the line together.`,
    `We may adjust wiring over time — tax considerations, domicile, access to certain listings — but the spine stays the same: scheduled capital, diversified machinery, written rules, and brothers who treat the ledger like an instrument panel rather than a gambling slip.`,
    `Read it as a mandate to stay curious without becoming careless — and to keep Khan Ledger I boring enough to survive bad years and bold enough to capture good ones.`
  ]
};

const firstAllocationStrategy: LedgerEntry = {
  slug: "our-first-allocation-strategy",
  id: "003",
  title: "Our First Allocation Strategy",
  date: "June 2026",
  dek: "From Vanguard to Bangladesh land — the thinking behind every bucket in Khan Ledger I.",
  paragraphs: [
    `When people hear “allocation,” they picture pie charts. For RK+, allocation is the translation layer between what we believe and what we actually own. Khan Ledger I’s first strategy spreads monthly flows across eight sleeves — from Vanguard-flavoured core US equity through global ex-US ETFs, gold and silver, quality dividend tilt, defensive yield, oil and energy tactically, and a final RK+ opportunity sleeve — because no single asset class owns every season. We are not chasing complexity for its own sake; we are admitting that life spans regimes.`,
    `The US equity sleeve is the workhorse. Broad S&P-style exposure is not a religion; it is liquidity, depth, and a diversified claim on global earnings that happen to list in America. We pair it with international ETFs because our lives are already geographically concentrated — Ireland residency, London ties, Frankfurt engineering work, Bangladesh roots — and the portfolio should not replicate that concentration blindly.`,
    `Precious metals split into gold and silver with different jobs. Gold is the older hedge — monetary fear, currency stress, and the moments when trust in policy fluctuates faster than GDP. Silver carries more industrial torque; it can overshoot in both directions. Together they are not a prediction that inflation wins forever; they are insurance that behaves differently than shares when correlations break.`,
    `Defensive bonds and money-market instruments are explicitly boring — and that is the point. They exist so that when equities stumble, we have dry powder and emotional runway. The energy sleeve stays small because commodity timing humbles everyone; we want exposure without betting the farm on one rig count print.`,
    `The RK+ opportunity sleeve is where operator judgement enters. This is the slice that can go to zero on a failed angel bet — and it is also where asymmetric outcomes live when we back founders we understand. Repath’s dual focus on LeemerChat.com and critique.sh keeps our family close to modern software craft: shipping, user pain, and honest critique instead of hype. Rahath’s mechanical engineering background keeps capital expenditure and physical systems honest. Reyad’s health and safety expertise means we ask sharper questions about workplaces, sites, and duty of care before we bless anything messy. Rehan’s science career reminds us that “promising” is not the same as proven — data has to arrive.`,
    `Finally, Khan Ledger I is only the liquid layer. RK+ Holdings as a whole still weights Bangladesh land, Ireland and UK property, and private stakes as real-asset ballast — the kind of wealth that does not refresh on a stock ticker but anchors generations when politics and exchange rates move. Vanguard and ancestral acres are not opposites in our story; they are answers to different questions. Liquid markets teach discipline and compounding; land teaches patience and identity. The first allocation strategy is honest about both: earn the future in public markets, respect the past in soil — and keep enough flexibility to say yes when a worthy opportunity knocks.`,
    `When we rebalance, we are not chasing fame — we are aligning buckets with the risks we agreed to carry and the upside we believe remains reasonable over years, not weekends.`
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
