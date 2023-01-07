import React, { useState } from 'react';

type Tab = {
  label: string;
  content: JSX.Element;
};


const TabsCard: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

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
