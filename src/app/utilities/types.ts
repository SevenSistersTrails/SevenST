import type { ReactNode } from "react";

export type TabOption = {
  label: string;
  description?: string;
};

export type TabsProps<T extends TabOption> = {
  tabs: readonly T[];
  activeTab: T["label"];
  onTabChange: (tab: T["label"]) => void;
  ariaLabel: string;
  compact?: boolean;
};

export type TabPanel<T> = {
  label: string;
  content: T;
};

export type TabContentProps<T> = {
  activeTab: string;
  panels: readonly TabPanel<T>[];
  renderContent: (content: T) => ReactNode;
};

export type Mode = "Normal Mode" | "Advanced Mode";

export type ModeTabsProps = {
  activeMode: Mode;
  onModeChange: (mode: Mode) => void;
};

export type VehicleTabLabel =
  | "Four Wheeler"
  | "Two Wheeler"
  | "Vendors"
  | "Taxis";

export type VehicleCard = {
  name: string;
  description: string;
};

export type AppShellContextValue = {
  navbarLinksVisible: boolean;
  setNavbarLinksVisible: (visible: boolean) => void;
};

export type AppShellProps = {
  children: ReactNode;
};
