import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Send an Opportunity | RK+ Holdings",
  description:
    "Share a property, land, founder, or local business opportunity with RK+ Holdings — the private family capital platform of the Khan brothers."
};

export default function Contact() {
  return <ContactPage />;
}
