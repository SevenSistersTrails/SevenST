const launchRegions = [
  {
    name: "Shillong & Meghalaya",
    detail: "Hill roads, waterfalls, and city breaks — self-drive demand from tourists and locals.",
  },
  {
    name: "Guwahati & Assam",
    detail: "Gateway city for the Northeast; airport and rail connections for longer loops.",
  },
  {
    name: "Other northeastern states",
    detail: "Expand discovery across the Seven Sisters as supply and operations allow.",
  },
] as const;

const expansionNote =
  "West Bengal expansion is intended only after the northeastern test proves out.";

export function RegionsSection() {
  return (
    <section id="regions" className="scroll-mt-20 bg-[var(--sst-surface)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--sst-ink)] sm:text-4xl">
              Built for tourist-heavy Northeast cities first
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--sst-muted)]">
              Near-term goal: become the default rental discovery and booking
              layer for self-drive transport in Shillong, Guwahati, and
              surrounding northeastern markets — without requiring every local
              owner to accept Zoomcar-style commission.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--sst-muted)]">
              {expansionNote}
            </p>
          </div>

          <ul className="space-y-4">
            {launchRegions.map((region) => (
              <li
                key={region.name}
                className="rounded-2xl border border-[var(--sst-border)] bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold text-[var(--sst-ink)]">
                  {region.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--sst-muted)]">
                  {region.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 rounded-2xl bg-[var(--sst-ink)] px-8 py-10 text-center sm:px-12">
          <p className="text-lg font-semibold text-white">
            Ready to explore when we launch booking
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--sst-surface-muted)]">
            Vehicle search, checkout, and vendor unlock flows are not wired yet.
            This page describes the product we are building.
          </p>
          <p className="mt-6 text-sm font-medium text-[var(--sst-accent)]">
            Explore rentals · Coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
