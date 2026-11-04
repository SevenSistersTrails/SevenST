"use client";

import { createContext, useContext, useState } from "react";
import Navbar from "./Navbar";
import type { AppShellContextValue, AppShellProps } from "../utilities/types";

const AppShellContext = createContext<AppShellContextValue | null>(null);

export function useAppShell() {
  const context = useContext(AppShellContext);

  if (!context) {
    throw new Error("useAppShell must be used within AppShell");
  }

  return context;
}

export default function AppShell({ children }: AppShellProps) {
  const [navbarLinksVisible, setNavbarLinksVisible] = useState(true);

  return (
    <AppShellContext.Provider
      value={{ navbarLinksVisible, setNavbarLinksVisible }}
    >
      <Navbar />
      {children}
    </AppShellContext.Provider>
  );
}
