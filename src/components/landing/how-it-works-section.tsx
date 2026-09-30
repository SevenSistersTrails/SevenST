const renterSteps = [
  {
    step: "1",
    title: "Create your profile",
    body: "Sign up and tell us who is driving.",
  },
  {
    step: "2",
    title: "Verify licence & ID",
    body: "Submit driving licence and identity details before booking.",
  },
  {
    step: "3",
    title: "Browse vehicles",
    body: "See bookable fleets and vendor listings in one place.",
  },
  {
    step: "4",
    title: "Book or unlock contact",
    body: "Book onboarded inventory on-platform, or pay a small fee to reach directory vendors.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-y border-[var(--sst-border)] bg-[var(--sst-hero-bg)] py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--sst-ink)] sm:text-4xl">
            How renting works
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--sst-muted)]">
            One customer flow for discovery — with two outcomes depending on
            whether the owner runs bookings through the platform or only wants
            qualified leads.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {renterSteps.map((item) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-[var(--sst-border)] bg-white p-6"
            >
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--sst-primary)] text-sm font-bold text-white"
              >
                {item.step}
              </span>
              <h3 className="mt-4 font-semibold text-[var(--sst-ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--sst-muted)]">
                {item.body}
              </p>
            </li>
          ))}
        </ol>

        <aside className="mt-14 rounded-2xl border border-[var(--sst-border)] bg-white p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-[var(--sst-ink)]">
            Later, if the core model works
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--sst-muted)]">
            Doorstep delivery, trip tracking, a dedicated point of contact,
            GoPro and camera add-ons (with larger security deposits), and
            chauffeur-driven tourist taxis alongside self-drive — all planned as
            follow-on offerings, not part of this first release.
          </p>
        </aside>
      </div>
    </section>
  );
}
