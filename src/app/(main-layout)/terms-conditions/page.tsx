import type { Metadata } from "next";
import TremsAndConditions from "@/components/terms&conditions";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review Alpha Club UAE's terms and conditions for membership, use of our website, and participation in our programs and events.",
  openGraph: {
    title: "Terms & Conditions | Alpha Club UAE",
    description: "Review Alpha Club UAE's terms and conditions for membership, use of our website, and participation in our programs and events.",
  },
  twitter: {
    title: "Terms & Conditions | Alpha Club UAE",
    description: "Review Alpha Club UAE's terms and conditions for membership, use of our website, and participation in our programs and events.",
  },
};

export default function Page() {
  return <TremsAndConditions />;
}
