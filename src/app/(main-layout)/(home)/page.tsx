import type { Metadata } from "next";
import HomePage from "@/components/home";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Alpha Club UAE - Your premier lifestyle club in the UAE with exclusive benefits, events, and offers.",
  openGraph: {
    title: "Alpha Club UAE - Premium Lifestyle Club",
    description: "Welcome to Alpha Club UAE - Your premier lifestyle club in the UAE with exclusive benefits, events, and offers.",
  },
  twitter: {
    title: "Alpha Club UAE - Premium Lifestyle Club",
    description: "Welcome to Alpha Club UAE - Your premier lifestyle club in the UAE with exclusive benefits, events, and offers.",
  },
};

export default function Home() {
  return <HomePage />;
}
