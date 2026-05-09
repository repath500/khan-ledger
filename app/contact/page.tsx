import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Contact | Khan Ledger",
  description:
    "Share a property, land, founder, or local business opportunity with Khan Ledger."
};

export default function Contact() {
  return <ContactPage />;
}
