"use client";

import { useState } from "react";
import Link from "next/link";
import { useAppShell } from "./AppShell";

function MobileNavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className="rounded p-2 text-card transition-colors hover:bg-card/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:hidden"
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="h-6 w-6"
        >
          {isMenuOpen ? (
            <path d="m6 6 12 12M18 6 6 18" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="flex basis-full flex-col gap-1 border-t border-card/20 bg-pine py-3 text-card/90 md:hidden"
        >
          <Link
            href="#about"
            className="rounded px-3 py-3 transition-colors hover:bg-card/10 hover:text-card"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            href="#vehicles"
            className="rounded px-3 py-3 transition-colors hover:bg-card/10 hover:text-card"
            onClick={closeMenu}
          >
            Vehicles
          </Link>
        </div>
      )}
    </>
  );
}

export default function Navbar() {
  const { navbarLinksVisible } = useAppShell();

  return (
    <header className="sticky top-0 z-20 bg-pine px-6 py-4 text-card md:fixed md:inset-x-0 md:top-0 sm:px-10 lg:px-16">
      <nav
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" className="text-lg font-bold tracking-tight">
          SST
        </Link>
        {navbarLinksVisible && (
          <>
            <div className="hidden items-center gap-8 text-md text-card/80 md:flex">
              <Link href="#about" className="transition-colors hover:text-card">
                About Us
              </Link>
              <Link
                href="#vehicles"
                className="transition-colors hover:text-card"
              >
                Vehicles
              </Link>
            </div>
            <MobileNavigationMenu />
          </>
        )}
      </nav>
    </header>
  );
}
