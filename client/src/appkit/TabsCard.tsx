import React, { useState } from 'react';

type Tab = {
  label: string;
  content: JSX.Element;
};

const TabsCard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const tabs: Tab[] = [
    { label: '🚀 Trend', content: <p>Content for preview tab</p> },
    { label: 'Suggestion', content: <p>Content for HTML tab</p> },
  ];

  return (
    <div className="grid items-start">
      <div className="tabs z-10 -mb-px">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            className={`tab tab-lifted ${activeTab === index ? 'tab-active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="x relative overflow-x-auto p-5 shadow-lg rounded-b-lg border border-base-300">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default TabsCard;
