import type { Metadata } from "next";
import About from "@/components/about";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Alpha Club UAE - Our mission, vision, and the premium lifestyle experience we offer to our members.",
  openGraph: {
    title: "About Us | Alpha Club UAE",
    description: "Learn about Alpha Club UAE - Our mission, vision, and the premium lifestyle experience we offer to our members.",
  },
  twitter: {
    title: "About Us | Alpha Club UAE",
    description: "Learn about Alpha Club UAE - Our mission, vision, and the premium lifestyle experience we offer to our members.",
  },
};

export default function Page() {
  return <About />;
}
