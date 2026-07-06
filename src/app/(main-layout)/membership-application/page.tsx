import type { Metadata } from "next";
import MemberApplication from "@/components/member-application";

export const metadata: Metadata = {
  title: "Membership Application",
  description: "Apply for Alpha Club UAE membership - Join our premium lifestyle community and unlock exclusive benefits, offers, and events.",
  openGraph: {
    title: "Membership Application | Alpha Club UAE",
    description: "Apply for Alpha Club UAE membership - Join our premium lifestyle community and unlock exclusive benefits, offers, and events.",
  },
  twitter: {
    title: "Membership Application | Alpha Club UAE",
    description: "Apply for Alpha Club UAE membership - Join our premium lifestyle community and unlock exclusive benefits, offers, and events.",
  },
};

export default function Page() {
  return <MemberApplication />;
}
