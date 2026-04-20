import { Star, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const talent = [
  { name: "Aanya Sharma", role: "Data Entry Specialist", city: "Bengaluru", rate: "₹450/hr", rating: 4.9, jobs: 184, skills: ["Excel", "Typing 80wpm", "Hindi/English"], available: "Today" },
  { name: "Rahul Verma", role: "Virtual Assistant", city: "Mumbai", rate: "₹600/hr", rating: 4.8, jobs: 92, skills: ["Calendar", "Email", "Research"], available: "Tomorrow" },
  { name: "Priya Iyer", role: "Tele-caller (Sales)", city: "Pune", rate: "₹380/hr", rating: 5.0, jobs: 230, skills: ["Outbound", "CRM", "Tamil"], available: "This week" },
];

export const Talent = () => {
  return (
    <section id="talent" className="py-24">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-sm font-medium uppercase tracking-widest text-accent">Featured talent</div>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Ready to start this week.</h2>
          </div>
          <Button variant="outline">View all 9,400+ profiles</Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {talent.map((t) => (
            <article key={t.name} className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero font-display text-xl font-semibold text-primary-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium">
                  <Star className="h-3 w-3 fill-accent text-accent" /> {t.rating}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{t.city}</span>
                <span className="flex items-center gap-1 text-accent"><Check className="h-3.5 w-3.5" />Verified</span>
                <span>{t.jobs} jobs</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.skills.map(s => (
                  <span key={s} className="rounded-full border border-border bg-background px-3 py-1 text-xs">{s}</span>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-border/60 pt-5">
                <div>
                  <div className="font-display text-2xl font-semibold text-primary">{t.rate}</div>
                  <div className="text-xs text-muted-foreground">Available {t.available}</div>
                </div>
                <Button variant="hero" size="sm">Hire</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
