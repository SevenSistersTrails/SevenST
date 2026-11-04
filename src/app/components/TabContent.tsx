import type { TabContentProps } from "../utilities/types";

export default function TabContent<T>({
  activeTab,
  panels,
  renderContent,
}: TabContentProps<T>) {
  const activePanel = panels.find((panel) => panel.label === activeTab);

  if (!activePanel) {
    return null;
  }

  return (
    <div role="tabpanel" aria-label={`${activePanel.label} content`}>
      {renderContent(activePanel.content)}
    </div>
  );
}
