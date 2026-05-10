import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  title: "About | RK+ Holdings",
  description:
    "The story behind RK+ Holdings — family capital built from migration, restaurants, land, and hard work. Learn about the Khan brothers, Bengal Curry House, and the vision behind Khan Ledger I.",
};

export default function About() {
  return <AboutPage />;
}
