import type { Metadata } from "next";
import PrivacyPolicy from "@/components/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Alpha Club UAE's privacy policy to understand how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Alpha Club UAE",
    description: "Read Alpha Club UAE's privacy policy to understand how we collect, use, and protect your personal information.",
  },
  twitter: {
    title: "Privacy Policy | Alpha Club UAE",
    description: "Read Alpha Club UAE's privacy policy to understand how we collect, use, and protect your personal information.",
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}
