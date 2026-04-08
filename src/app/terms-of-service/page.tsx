
import { Metadata } from "next";
import TermsOfServiceClient from "./termsClient";

export const metadata: Metadata = {
  title: "Terms of Service | Keshava Games",
  description: "Keshava Games Terms and Conditions. Rules for using our games and website.",
};

export default function TermsOfService() {
  return (
    <TermsOfServiceClient />
  );
}