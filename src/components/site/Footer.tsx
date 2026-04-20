import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background py-12">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
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
        <div>
          <div className="font-display text-sm font-semibold">Connect</div>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <Instagram className="h-4 w-4" />
                <span>Instagram Page</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
                <span>WhatsApp Group</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Hyrly. All rights reserved.</div>
        <div className="flex gap-5"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
      </div>
    </footer>
  );
};
