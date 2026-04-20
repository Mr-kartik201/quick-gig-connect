import { Keyboard, FileSpreadsheet, PenTool, Megaphone, Bike, GraduationCap, Headphones, Camera } from "lucide-react";

const categories = [
  { icon: Keyboard, name: "Data Entry", count: "2,340 pros", tag: "1–7 days" },
  { icon: FileSpreadsheet, name: "Virtual Assistant", count: "1,180 pros", tag: "Weekly" },
  { icon: PenTool, name: "Content Writer", count: "960 pros", tag: "1–30 days" },
  { icon: Megaphone, name: "Promoter / Sales", count: "1,540 pros", tag: "Daily" },
  { icon: Bike, name: "Delivery Partner", count: "3,210 pros", tag: "1+ days" },
  { icon: GraduationCap, name: "Tutor", count: "780 pros", tag: "Hourly" },
  { icon: Headphones, name: "Tele-caller", count: "1,460 pros", tag: "Weekly" },
  { icon: Camera, name: "Event Photographer", count: "420 pros", tag: "1–2 days" },
];

export const Categories = () => {
  return (
    <section id="categories" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-medium uppercase tracking-widest text-accent">Categories</div>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Talent for every short gig.</h2>
          <p className="mt-4 text-muted-foreground">Browse the most-hired roles. Filter by skill, language, and city in one tap.</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <button
              key={c.name}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-hero opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-transform duration-500 group-hover:scale-110 group-hover:bg-gradient-hero group-hover:text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-display text-lg font-semibold">{c.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.count}</div>
              <div className="mt-4 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{c.tag}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
