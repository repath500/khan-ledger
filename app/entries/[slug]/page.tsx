import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LedgerEntryPage } from "@/components/ledger-entry-page";
import { ENTRY_SLUGS, getLedgerEntry } from "@/lib/entry-articles";

export function generateStaticParams() {
  return ENTRY_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getLedgerEntry(slug);
  if (!entry) {
    return { title: "Entry | RK+ Holdings" };
  }
  return {
    title: `${entry.title} | RK+ Holdings`,
    description: entry.dek
  };
}

export default async function EntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getLedgerEntry(slug);
  if (!entry) {
    notFound();
  }
  return <LedgerEntryPage entry={entry} />;
}
