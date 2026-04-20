import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ShieldCheck, Clock } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-mesh">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="container grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Verified talent for 1-day to 30-day gigs
          </div>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-balance md:text-6xl lg:text-7xl">
            Hire help for a <span className="italic text-primary">day</span>,
            <br /> a week, or a month.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground text-balance">
            From data-entry assistants to weekend drivers — find vetted, ready-to-start talent in minutes. No long contracts. No agency fees.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="xl">
              Post a job — it's free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="xl">Browse talent</Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> ID-verified workers</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Average match in 27 min</div>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-hero opacity-10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-elegant">
            <img
              src={heroImg}
              alt="Professional working on a short-term gig"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Floating cards */}
          <div className="absolute -left-6 top-10 hidden animate-float rounded-2xl border border-border/60 bg-card p-4 shadow-elegant md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 font-display text-accent">A</div>
              <div>
                <div className="text-sm font-semibold">Aanya — Data Entry</div>
                <div className="text-xs text-muted-foreground">Available today · ₹450/hr</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-2 hidden animate-float rounded-2xl border border-border/60 bg-card p-4 shadow-elegant md:block" style={{ animationDelay: "1.5s" }}>
            <div className="text-xs text-muted-foreground">This month</div>
            <div className="font-display text-2xl font-semibold text-primary">12,480 gigs filled</div>
          </div>
        </div>
      </div>
    </section>
  );
};
