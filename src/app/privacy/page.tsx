import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyClient";


export const metadata: Metadata = {
  title: "Privacy Policy | Keshava Games",
  description: "Read Keshava Games Privacy Policy. Learn how we collect, use and protect your data.",
};

export default function PrivacyPolicy() {
  return (
     <PrivacyPolicyClient />
  );
}