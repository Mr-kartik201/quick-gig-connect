export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background py-12">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground font-display text-lg font-semibold">h</div>
            <span className="font-display text-xl font-semibold">Hyrly</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">Short-term hiring made human. Built for India's flexible workforce.</p>
        </div>
        {[
          { title: "Hire", links: ["Browse talent", "Post a job", "Pricing", "Enterprise"] },
          { title: "Work", links: ["Find gigs", "Become verified", "Worker app", "Payments"] },
          { title: "Company", links: ["About", "Careers", "Trust & safety", "Contact"] },
        ].map(col => (
          <div key={col.title}>
            <div className="font-display text-sm font-semibold">{col.title}</div>
            <ul className="mt-4 space-y-2.5">
              {col.links.map(l => (
                <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Hyrly. All rights reserved.</div>
        <div className="flex gap-5"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
      </div>
    </footer>
  );
};
