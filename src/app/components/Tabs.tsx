"use client";

import type { TabOption, TabsProps } from "../utilities/types";

export default function Tabs<T extends TabOption>({
  tabs,
  activeTab,
  onTabChange,
  ariaLabel,
  compact = false,
}: TabsProps<T>) {
  const activeDescription = tabs.find(
    (tab) => tab.label === activeTab,
  )?.description;

  if (tabs.length === 0) {
    return null;
  }

  return (
    <div className="flex w-full flex-col-reverse items-center gap-3">
      <div
        className="grid w-full max-w-lg grid-cols-2 border-2 border-pine bg-card text-pine md:flex md:w-auto md:max-w-none"
        role="tablist"
        aria-label={ariaLabel}
        style={{ direction: "ltr" }}
      >
        {tabs.map((tab, index) => {
          const isActive = tab.label === activeTab;
          const isInFirstRow = index < Math.ceil(tabs.length / 2);

          return (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onTabChange(tab.label)}
              className={`flex min-w-0 items-center justify-center gap-1 px-2 ${compact ? "py-3" : "py-4"} text-sm font-semibold transition-colors md:gap-3 md:px-8 md:text-base ${index === 0 ? "border-r-2 border-pine" : ""} ${isInFirstRow ? "border-b-2 border-pine md:border-b-0" : ""} ${isActive ? "bg-pine text-card ring-2 ring-inset ring-gold" : "bg-card text-pine hover:bg-mist"}`}
            >
              {tab.label}
              {isActive && (
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-gold md:inline">
                  Active
                </span>
              )}
            </button>
          );
        })}
      </div>
      {activeDescription && (
        <p className="max-w-2xl text-center text-lg font-bold leading-6 text-card">
          {activeDescription}
        </p>
      )}
    </div>
  );
}
