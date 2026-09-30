const offerings = [
  {
    title: "Self-drive booking",
    audience: "Renters",
    description:
      "Create a profile, share licence and identity details, browse available vehicles, and book fleets that are fully onboarded on the platform.",
    monetization: "Commission on completed bookings",
    accent: "primary" as const,
  },
  {
    title: "Onboarded vehicle listings",
    audience: "Companies & individuals",
    description:
      "List inventory with live bookable availability. Customers book on-platform; you receive the booking amount minus platform commission.",
    monetization: "Owner payout after commission",
    accent: "primary" as const,
  },
  {
    title: "Vendor directory",
    audience: "Owners who skip commission",
    description:
      "Minimal onboarding with contact number and business address. Vehicles described in text; customers pay a small fee to unlock your details.",
    monetization: "Lead unlock fee paid by customer",
    accent: "accent" as const,
  },
] as const;

export function OfferingsSection() {
  return (
    <section id="offerings" className="scroll-mt-20 bg-[var(--sst-surface)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--sst-ink)] sm:text-4xl">
            Flexible supply, one discovery layer
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--sst-muted)]">
            Tourists and locals need self-drive access without forcing every
            rental shop into the same commission model. SevenSistersTrails
            captures both onboarded fleets and directory-only vendors.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {offerings.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-2xl border border-[var(--sst-border)] bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--sst-muted)]">
                {item.audience}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--sst-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--sst-muted)]">
                {item.description}
              </p>
              <p
                className={`mt-6 rounded-lg px-3 py-2 text-xs font-medium ${
                  item.accent === "accent"
                    ? "bg-[var(--sst-accent-soft)] text-[var(--sst-ink)]"
                    : "bg-[var(--sst-primary-soft)] text-[var(--sst-primary)]"
                }`}
              >
                {item.monetization}
              </p>
            </li>
          ))}
        </ul>

        <div
          id="list-fleet"
          className="mt-14 scroll-mt-24 rounded-2xl border border-dashed border-[var(--sst-primary)]/40 bg-[var(--sst-primary-soft)] p-8 text-center sm:p-10"
        >
          <h3 className="text-xl font-semibold text-[var(--sst-ink)]">
            Owners: two paths, one signup story (soon)
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--sst-muted)]">
            Rental companies and private owners can join as a bookable fleet or
            as a directory vendor with contact details paywalled for customers.
            Owner onboarding is not live yet — this landing page marks the
            product direction.
          </p>
          <p className="mt-6 inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--sst-muted)]">
            Owner portal · Coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
