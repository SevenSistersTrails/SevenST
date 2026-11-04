import { MODE_TABS } from "../utilities/constants";
import type { ModeTabsProps } from "../utilities/types";
import Tabs from "./Tabs";

export default function ModeTabs({
  activeMode,
  onModeChange,
}: ModeTabsProps) {
  return (
    <Tabs
      tabs={MODE_TABS}
      ariaLabel="Search mode"
      activeTab={activeMode}
      onTabChange={onModeChange}
      compact
    />
  );
}
