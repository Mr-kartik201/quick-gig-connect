import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const PostJobCTA = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero px-8 py-20 text-primary-foreground shadow-elegant md:px-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-10 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="inline-flex rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium backdrop-blur">
                Free for the first 30 days
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-5xl text-balance">
                Have a gig that needs filling tomorrow?
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/80">
                Post once. Get a shortlist of vetted candidates within the hour. Pay only when the work is done.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="secondary" size="xl">
                  Post your gig
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/10">
                  Talk to sales
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "0%", v: "fee on 1-day gigs" },
                { k: "27 min", v: "average match time" },
                { k: "9.4k+", v: "verified workers" },
                { k: "4.9/5", v: "client rating" },
              ].map(s => (
                <div key={s.v} className="rounded-2xl bg-primary-foreground/10 p-5 backdrop-blur">
                  <div className="font-display text-3xl font-semibold">{s.k}</div>
                  <div className="mt-1 text-sm text-primary-foreground/75">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
