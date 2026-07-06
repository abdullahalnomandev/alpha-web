import type { Metadata } from "next";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Alpha Club UAE - Find our contact details, location, and how to reach us for inquiries or membership support.",
  openGraph: {
    title: "Contact Us | Alpha Club UAE",
    description: "Get in touch with Alpha Club UAE - Find our contact details, location, and how to reach us for inquiries or membership support.",
  },
  twitter: {
    title: "Contact Us | Alpha Club UAE",
    description: "Get in touch with Alpha Club UAE - Find our contact details, location, and how to reach us for inquiries or membership support.",
  },
};

export default function Page() {
  return <Contact />;
}
