import { FileText, Users, Handshake } from "lucide-react";

const steps = [
  { icon: FileText, title: "Post your gig", desc: "Tell us what you need, when you need it, and your budget. Takes under 90 seconds." },
  { icon: Users, title: "Review matches", desc: "We hand-pick 5–10 verified candidates within an hour. Compare ratings, rates, and availability." },
  { icon: Handshake, title: "Hire & pay safely", desc: "Chat, confirm, and release payment only when the work is done. Zero platform fee for one-day gigs." },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="bg-gradient-soft py-24">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="text-sm font-medium uppercase tracking-widest text-accent">How it works</div>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl text-balance">From need to hire in under an hour.</h2>
            <p className="mt-5 text-muted-foreground">Built for speed and trust. Every worker is ID-verified, rated, and backed by our completion guarantee.</p>
          </div>
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="relative flex gap-6 rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition-all hover:shadow-elegant">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground shadow-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-xs uppercase tracking-widest text-muted-foreground">Step 0{i + 1}</div>
                  <div className="mt-1 font-display text-2xl font-semibold">{s.title}</div>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
