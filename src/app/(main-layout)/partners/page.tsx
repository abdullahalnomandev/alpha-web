import type { Metadata } from "next";
import Partners from "@/components/partners";

export const metadata: Metadata = {
  title: "Our Partners",
  description: "Discover Alpha Club UAE's exclusive partners and the special offers available to our members across the UAE.",
  openGraph: {
    title: "Our Partners | Alpha Club UAE",
    description: "Discover Alpha Club UAE's exclusive partners and the special offers available to our members across the UAE.",
  },
  twitter: {
    title: "Our Partners | Alpha Club UAE",
    description: "Discover Alpha Club UAE's exclusive partners and the special offers available to our members across the UAE.",
  },
};

export default function Page() {
  return <Partners />;
}
