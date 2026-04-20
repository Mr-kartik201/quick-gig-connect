import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Talent } from "@/components/site/Talent";
import { PostJobCTA } from "@/components/site/PostJobCTA";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Hyrly — Hire short-term help, from a day to a month";
    const meta = document.querySelector('meta[name="description"]') ?? (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute("content", "Hire vetted, ready-to-start talent for 1-day to 30-day gigs — data entry, virtual assistants, drivers, tutors and more. Match in under an hour.");
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      <HowItWorks />
      <Talent />
      <PostJobCTA />
      <Footer />
    </main>
  );
};

export default Index;
