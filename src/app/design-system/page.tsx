const palette = [
  {
    name: "Clay",
    role: "Primary action",
    value: "#C45C3E",
    variable: "--palette-clay",
    utilities: "bg-clay · text-clay · border-clay",
    usage: "Primary calls to action, booking, and payment actions.",
  },
  {
    name: "Pine",
    role: "Primary brand",
    value: "#1F4A3A",
    variable: "--palette-pine",
    utilities: "bg-pine · text-pine · border-pine",
    usage: "Brand surfaces, headings, and trust-building emphasis.",
  },
  {
    name: "Gold (Muga)",
    role: "Highlight / accent",
    value: "#C4A35A",
    variable: "--palette-gold",
    utilities: "bg-gold · text-gold · border-gold",
    usage: "Badges and small highlights. Avoid for body text and primary buttons.",
  },
  {
    name: "Slate",
    role: "Secondary UI",
    value: "#5B6E7A",
    variable: "--palette-slate",
    utilities: "bg-slate · text-slate · border-slate",
    usage: "Supporting text, filters, secondary actions, and locked-contact UI.",
  },
  {
    name: "Mist",
    role: "Page background",
    value: "#F4EFE6",
    variable: "--palette-mist",
    utilities: "bg-mist · text-mist · border-mist",
    usage: "Warm neutral page backgrounds.",
  },
  {
    name: "Card",
    role: "Raised surface",
    value: "#FBF8F3",
    variable: "--palette-card",
    utilities: "bg-card · text-card · border-card",
    usage: "Cards, forms, and light text on dark brand surfaces.",
  },
  {
    name: "Charcoal",
    role: "Primary text",
    value: "#1C1917",
    variable: "--palette-charcoal",
    utilities: "bg-charcoal · text-charcoal · border-charcoal",
    usage: "Body copy and strong text on light surfaces.",
  },
] as const;

const semanticTokens = [
  {
    role: "Background alias",
    variable: "--background",
    value: "#f4efe6",
    utility: "bg-background",
    preview: "surface",
  },
  {
    role: "Foreground alias",
    variable: "--foreground",
    value: "#1c1917",
    utility: "text-foreground",
    preview: "text",
  },
  {
    role: "Page surface",
    variable: "--surface-page",
    value: "var(--background)",
    utility: "bg-surface-page",
    preview: "surface",
  },
  {
    role: "Default surface",
    variable: "--surface-default",
    value: "var(--palette-card)",
    utility: "bg-surface-default",
    preview: "surface",
  },
  {
    role: "Inverse surface",
    variable: "--surface-inverse",
    value: "var(--palette-pine)",
    utility: "bg-surface-inverse",
    preview: "surface",
  },
  {
    role: "Primary text",
    variable: "--text-primary",
    value: "var(--foreground)",
    utility: "text-text-primary",
    preview: "text",
  },
  {
    role: "Secondary text",
    variable: "--text-secondary",
    value: "var(--palette-slate)",
    utility: "text-text-secondary",
    preview: "text",
  },
  {
    role: "Inverse text",
    variable: "--text-inverse",
    value: "var(--palette-card)",
    utility: "text-text-inverse",
    preview: "inverse-text",
  },
  {
    role: "Default border",
    variable: "--border-default",
    value: "color-mix(in srgb, var(--palette-slate) 25%, var(--palette-card))",
    utility: "border-border-default",
    preview: "border",
  },
  {
    role: "Primary action",
    variable: "--action-primary",
    value: "var(--palette-clay)",
    utility: "bg-action-primary",
    preview: "action",
  },
  {
    role: "Primary action hover",
    variable: "--action-primary-hover",
    value: "color-mix(in srgb, var(--palette-clay) 85%, var(--palette-charcoal))",
    utility: "bg-action-primary-hover",
    preview: "action-hover",
  },
  {
    role: "Brand action",
    variable: "--action-brand",
    value: "var(--palette-pine)",
    utility: "bg-action-brand",
    preview: "action",
  },
  {
    role: "Accent action",
    variable: "--action-accent",
    value: "var(--palette-gold)",
    utility: "bg-action-accent",
    preview: "accent-action",
  },
  {
    role: "Secondary action",
    variable: "--action-secondary",
    value: "var(--palette-slate)",
    utility: "bg-action-secondary",
    preview: "action",
  },
] as const;

function PaletteCard({
  name,
  role,
  value,
  variable,
  utilities,
  usage,
}: (typeof palette)[number]) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border-default bg-surface-default">
      <div className="h-28" style={{ backgroundColor: value }} />
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-secondary">
              {role}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-text-primary">
              {name}
            </h3>
          </div>
          <code className="font-mono text-xs text-text-secondary">{value}</code>
        </div>
        <p className="text-sm leading-6 text-text-secondary">{usage}</p>
        <div className="border-t border-border-default pt-3">
          <p className="font-mono text-xs text-text-secondary">{variable}</p>
          <p className="mt-1 text-xs leading-5 text-text-primary">{utilities}</p>
        </div>
      </div>
    </article>
  );
}

function TokenCard({
  role,
  variable,
  value,
  utility,
  preview,
}: (typeof semanticTokens)[number]) {
  let example: React.ReactNode;

  switch (preview) {
    case "surface":
      example = (
        <div
          className="flex h-16 items-center justify-center rounded-lg border border-border-default text-sm text-text-primary"
          style={{ backgroundColor: `var(${variable})` }}
        >
          Surface preview
        </div>
      );
      break;
    case "text":
      example = (
        <div className="flex h-16 items-center justify-center rounded-lg border border-border-default bg-card">
          <span style={{ color: `var(${variable})` }}>Text color preview</span>
        </div>
      );
      break;
    case "inverse-text":
      example = (
        <div className="flex h-16 items-center justify-center rounded-lg bg-pine">
          <span style={{ color: `var(${variable})` }}>Text color preview</span>
        </div>
      );
      break;
    case "border":
      example = (
        <div className="flex h-16 items-center justify-center rounded-lg bg-card">
          <span
            className="rounded-lg border-2 px-4 py-2 text-sm text-text-primary"
            style={{ borderColor: `var(${variable})` }}
          >
            Border preview
          </span>
        </div>
      );
      break;
    case "accent-action":
      example = (
        <div
          className="flex h-16 items-center justify-center rounded-lg text-sm font-semibold text-charcoal"
          style={{ backgroundColor: `var(${variable})` }}
        >
          Accent preview
        </div>
      );
      break;
    default:
      example = (
        <div
          className="flex h-16 items-center justify-center rounded-lg text-sm font-semibold text-card"
          style={{ backgroundColor: `var(${variable})` }}
        >
          Action preview
        </div>
      );
  }

  return (
    <article className="rounded-2xl border border-border-default bg-surface-default p-5">
      {example}
      <div className="mt-4">
        <h3 className="font-semibold text-text-primary">{role}</h3>
        <code className="mt-2 block break-words font-mono text-xs leading-5 text-text-secondary">
          {utility}
        </code>
        <p className="mt-1 break-words font-mono text-xs leading-5 text-text-secondary">
          {variable}: {value}
        </p>
      </div>
    </article>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-surface-page px-6 pb-12 pt-28 text-text-primary sm:px-10 lg:px-16 lg:pb-16 lg:pt-32">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14 border-b border-border-default pb-10">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-action-primary">
            Internal / design system
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-pine sm:text-6xl">
            SevenSisters theme tokens
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">
            Browse the complete seven-color palette, semantic surface, text,
            border, and action colors, plus the utility classes available for
            each token.
          </p>
        </header>

        <section aria-labelledby="palette-heading">
          <div className="mb-7">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-secondary">
              01 / core palette
            </p>
            <h2
              id="palette-heading"
              className="mt-2 text-2xl font-semibold tracking-tight"
            >
              The seven base colors
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {palette.map((color) => (
              <PaletteCard key={color.name} {...color} />
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="semantic-heading">
          <div className="mb-7">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-secondary">
              02 / semantic colors
            </p>
            <h2
              id="semantic-heading"
              className="mt-2 text-2xl font-semibold tracking-tight"
            >
              Surfaces, text, borders, and actions
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-text-secondary">
              Prefer semantic tokens when styling by purpose. Their values are
              connected to the core palette and can be adjusted centrally.
              Text previews use the intended light or dark background.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {semanticTokens.map((token) => (
              <TokenCard key={token.variable} {...token} />
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="type-heading">
          <div className="mb-7">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-secondary">
              03 / typography
            </p>
            <h2
              id="type-heading"
              className="mt-2 text-2xl font-semibold tracking-tight"
            >
              Font utilities
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-border-default bg-surface-default p-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-secondary">
                Sans
              </p>
              <p className="mt-3 text-2xl font-semibold">Geist Sans</p>
              <code className="mt-3 block font-mono text-sm text-text-secondary">
                font-sans / --font-geist-sans
              </code>
            </article>
            <article className="rounded-2xl border border-border-default bg-surface-default p-6">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-secondary">
                Monospace
              </p>
              <p className="mt-3 font-mono text-2xl font-semibold">
                Geist Mono
              </p>
              <code className="mt-3 block font-mono text-sm text-text-secondary">
                font-mono / --font-geist-mono
              </code>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
