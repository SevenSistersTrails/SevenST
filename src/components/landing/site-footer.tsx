import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--sst-border)] bg-[var(--sst-ink)] text-[var(--sst-surface-muted)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold text-white">SevenSistersTrails</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--sst-surface-muted)]">
              Self-drive vehicle rentals across Shillong, Guwahati, and the
              Northeast — book onboarded fleets or unlock local vendor contacts.
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm"
          >
            <Link href="#offerings" className="hover:text-white">
              Offerings
            </Link>
            <Link href="#how-it-works" className="hover:text-white">
              How it works
            </Link>
            <Link href="#regions" className="hover:text-white">
              Regions
            </Link>
          </nav>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-[var(--sst-surface-muted)]">
          © {year} SevenSistersTrails. Marketplace features are in development.
        </p>
      </div>
    </footer>
  );
}
