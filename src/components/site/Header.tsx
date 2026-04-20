import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#categories", label: "Categories" },
  { href: "#how", label: "How it works" },
  { href: "#talent", label: "Talent" },
  { href: "#pricing", label: "Pricing" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground font-display text-lg font-semibold">h</div>
          <span className="font-display text-xl font-semibold tracking-tight">Hyrly</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button variant="hero" size="sm">Post a job</Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="p-2" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container flex flex-col gap-4 py-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground">{l.label}</a>
            ))}
            <Button variant="hero" size="sm" className="w-full">Post a job</Button>
          </div>
        </div>
      )}
    </header>
  );
};
