import Link from "next/link";

const navItems = [
  { href: "#offerings", label: "Offerings" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#regions", label: "Regions" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--sst-border)] bg-[var(--sst-surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[var(--sst-ink)]"
        >
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--sst-primary)] text-xs font-bold text-white"
          >
            SST
          </span>
          <span className="hidden sm:inline">SevenSistersTrails</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-sm font-medium text-[var(--sst-muted)] md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--sst-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#list-fleet"
            className="hidden rounded-full border border-[var(--sst-border)] px-4 py-2 text-sm font-medium text-[var(--sst-ink)] transition-colors hover:border-[var(--sst-primary)] hover:text-[var(--sst-primary)] sm:inline-block"
          >
            List your fleet
          </Link>
          <Link
            href="#explore"
            className="rounded-full bg-[var(--sst-primary)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--sst-primary-hover)]"
          >
            Explore rentals
          </Link>
        </div>
      </div>
    </header>
  );
}
