import type { Metadata } from "next";
import Sponsor from "@/components/sponsors";

export const metadata: Metadata = {
  title: "Our Sponsors",
  description: "Meet the sponsors of Alpha Club UAE - Supporting our premium lifestyle events and benefits for members.",
  openGraph: {
    title: "Our Sponsors | Alpha Club UAE",
    description: "Meet the sponsors of Alpha Club UAE - Supporting our premium lifestyle events and benefits for members.",
  },
  twitter: {
    title: "Our Sponsors | Alpha Club UAE",
    description: "Meet the sponsors of Alpha Club UAE - Supporting our premium lifestyle events and benefits for members.",
  },
};

export default function Page() {
  return <Sponsor />;
}
