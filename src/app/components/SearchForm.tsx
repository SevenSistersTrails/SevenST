"use client";

import { useState, type KeyboardEvent } from "react";
import { getMatchingLocations } from "../utilities/helperFunctions";

const locations = [
  "Dhan Khéti",
  "Malki",
  "Police Bazaar",
  "Laitumkhrah",
  "Mawlai",
  "Nongthymmai",
  "Jaiaw",
  "Lachumiere",
  "Motphran",
  "Polo",
];

export default function SearchForm() {
  const [location, setLocation] = useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const matchingLocations = getMatchingLocations(locations, location);

  function handleLocationKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown" && matchingLocations.length > 0) {
      event.preventDefault();
      setIsSuggestionsOpen(true);
      setActiveSuggestion((current) =>
        current >= matchingLocations.length - 1 ? 0 : current + 1,
      );
    } else if (event.key === "ArrowUp" && matchingLocations.length > 0) {
      event.preventDefault();
      setIsSuggestionsOpen(true);
      setActiveSuggestion((current) =>
        current <= 0 ? matchingLocations.length - 1 : current - 1,
      );
    } else if (
      event.key === "Enter" &&
      isSuggestionsOpen &&
      activeSuggestion >= 0
    ) {
      event.preventDefault();
      setLocation(matchingLocations[activeSuggestion]);
      setIsSuggestionsOpen(false);
      setActiveSuggestion(-1);
    } else if (event.key === "Escape") {
      setIsSuggestionsOpen(false);
      setActiveSuggestion(-1);
    }
  }

  return (
    <form
      action="#vehicles"
      className="mx-auto mt-12 flex w-full max-w-5xl flex-col items-stretch gap-1.5 lg:flex-row lg:items-end lg:gap-4"
    >
      <div className="relative min-w-0 flex-1">
        <label
          htmlFor="location"
          className="mb-2 block text-base font-semibold text-text-inverse"
        >
          Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          role="combobox"
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={isSuggestionsOpen && matchingLocations.length > 0}
          aria-controls="location-suggestions"
          aria-activedescendant={
            activeSuggestion >= 0
              ? `location-suggestion-${activeSuggestion}`
              : undefined
          }
          placeholder="Where would you like to go?"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
            setIsSuggestionsOpen(true);
            setActiveSuggestion(-1);
          }}
          onFocus={() => setIsSuggestionsOpen(true)}
          onBlur={() => setIsSuggestionsOpen(false)}
          onKeyDown={handleLocationKeyDown}
          className="box-border block h-12 w-full border border-pine/20 bg-card px-4 text-charcoal shadow-sm placeholder:text-slate focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        />
        {isSuggestionsOpen && matchingLocations.length > 0 && (
          <ul
            id="location-suggestions"
            role="listbox"
            aria-label="Shillong location suggestions"
            className="absolute inset-x-0 top-full z-30 mt-1 max-h-60 overflow-y-auto border border-pine/20 bg-card py-1 shadow-lg"
          >
            {matchingLocations.map((name, index) => (
              <li
                key={name}
                id={`location-suggestion-${index}`}
                role="option"
                aria-selected={index === activeSuggestion}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  setLocation(name);
                  setIsSuggestionsOpen(false);
                  setActiveSuggestion(-1);
                }}
                className={`cursor-pointer px-4 py-2 text-sm text-charcoal ${index === activeSuggestion ? "bg-mist" : "hover:bg-mist"}`}
              >
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <span
        aria-hidden="true"
        className="flex h-3 rotate-90 items-center justify-center text-xl font-bold leading-none text-card/75 lg:h-12 lg:rotate-0 lg:text-4xl"
      >
        →
      </span>
      <div className="min-w-0 flex-1">
        <label
          htmlFor="start-date"
          className="mb-2 block text-base font-semibold text-text-inverse"
        >
          Start date
        </label>
        <input
          id="start-date"
          name="startDate"
          type="datetime-local"
          className="h-12 w-full border border-pine/20 bg-card px-4 text-charcoal shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        />
      </div>
      <span
        aria-hidden="true"
        className="flex h-3 rotate-90 items-center justify-center text-xl font-bold leading-none text-card/75 lg:h-12 lg:rotate-0 lg:text-4xl"
      >
        →
      </span>
      <div className="min-w-0 flex-1">
        <label
          htmlFor="end-date"
          className="mb-2 block text-base font-semibold text-text-inverse"
        >
          End date
        </label>
        <input
          id="end-date"
          name="endDate"
          type="datetime-local"
          className="h-12 w-full border border-pine/20 bg-card px-4 text-charcoal shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        />
      </div>
      <span
        aria-hidden="true"
        className="flex h-3 rotate-90 items-center justify-center text-xl font-bold leading-none text-card/75 lg:h-12 lg:rotate-0 lg:text-4xl"
      >
        →
      </span>
      <button
        type="submit"
        className="mt-1.5 h-12 w-full bg-clay px-6 text-center text-base font-bold uppercase text-card transition-colors hover:bg-action-primary-hover lg:mt-0 lg:w-auto"
      >
        Search
      </button>
    </form>
  );
}
