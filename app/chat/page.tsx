import type { Metadata } from "next";
import ChatPage from "@/components/chat-page";

export const metadata: Metadata = {
  title: "Born Chat | LeemerLabs",
  description: "Born Chat — AI conversations powered by Born-9b."
};

export default function Page() {
  return <ChatPage />;
}
