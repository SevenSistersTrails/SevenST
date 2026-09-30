import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="explore"
      className="relative overflow-hidden border-b border-[var(--sst-border)] bg-[var(--sst-hero-bg)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--sst-primary-glow),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[var(--sst-accent)]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[var(--sst-primary)]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div>
          <p className="inline-flex items-center rounded-full border border-[var(--sst-primary)]/25 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--sst-primary)]">
            Launch focus · Northeast India
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--sst-ink)] sm:text-5xl lg:text-[3.25rem]">
            Self-drive the Seven Sisters on your terms
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--sst-muted)]">
            Self-drive vehicle rentals in Shillong, Guwahati, and the Northeast.
            Book local fleets with on-platform checkout, or find vendors who list
            with us when commission booking is not their model.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#offerings"
              className="inline-flex items-center justify-center rounded-full bg-[var(--sst-primary)] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[var(--sst-primary-hover)]"
            >
              See how it works
            </Link>
            <Link
              href="#list-fleet"
              className="inline-flex items-center justify-center rounded-full border border-[var(--sst-border)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--sst-ink)] transition-colors hover:border-[var(--sst-primary)]"
            >
              I&apos;m a vehicle owner
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-[var(--sst-border)] pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-[var(--sst-muted)]">
                For renters
              </dt>
              <dd className="mt-1 text-sm font-semibold text-[var(--sst-ink)]">
                Browse &amp; book self-drive
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-[var(--sst-muted)]">
                For owners
              </dt>
              <dd className="mt-1 text-sm font-semibold text-[var(--sst-ink)]">
                Fleet or directory listing
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-xs font-medium uppercase tracking-wide text-[var(--sst-muted)]">
                Geography
              </dt>
              <dd className="mt-1 text-sm font-semibold text-[var(--sst-ink)]">
                Shillong · Guwahati · NE states
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-2xl border border-[var(--sst-border)] bg-white/90 p-6 shadow-xl shadow-[var(--sst-primary)]/10 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--sst-muted)]">
              Two-sided marketplace
            </p>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-4 rounded-xl bg-[var(--sst-hero-bg)] p-4">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--sst-primary)] text-sm font-bold text-white"
                >
                  A
                </span>
                <div>
                  <p className="font-semibold text-[var(--sst-ink)]">
                    Onboarded fleet
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--sst-muted)]">
                    Zoomcar-style inventory with bookable slots and platform
                    checkout.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 rounded-xl bg-[var(--sst-hero-bg)] p-4">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--sst-accent)] text-sm font-bold text-[var(--sst-ink)]"
                >
                  B
                </span>
                <div>
                  <p className="font-semibold text-[var(--sst-ink)]">
                    Vendor directory
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--sst-muted)]">
                    NoBroker-style listings — pay a small fee to unlock owner
                    contact details.
                  </p>
                </div>
              </li>
            </ul>
            <p className="mt-5 text-center text-xs text-[var(--sst-muted)]">
              Booking and payments coming in a later release.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
