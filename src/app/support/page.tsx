
import { Metadata } from "next";
import SupportClient from "./SupportClient";

export const metadata: Metadata = {
  title: "Support | Keshava Games - Email & Live Chat Help",
  description: "Need help with Keshava Games? Contact our support team via email (reply within 24-48 hours) or chat live on Facebook Messenger. Fast and friendly player support.",
  keywords: ["keshava games support", "game support", "customer support", "help center", "contact keshavas games"],
  openGraph: {
    title: "Support - Keshava Games",
    description: "Get fast help for Keshava Games. Email support and Facebook Messenger available.",
    images: "/og-support.jpg",   // Add this image later in public folder
  },
};

export default function SupportPage() {
  return (
      <SupportClient />
  );
}