import React, { useState, useMemo, useEffect } from "react";
import { SKILLS, SKILLS_TABS } from "../utils/data";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showScrollButton, setShowScrollButton] = useState(false);

  const filteredSkills = useMemo(() => {
    return activeTab === "all"
      ? shuffleArray([...SKILLS])
      : SKILLS.filter((skill) => skill.type === activeTab);
  }, [activeTab]);

  const handleSkillClick = (type) => {
    setActiveTab(type);
  };

  const scrollToTabs = () => {
    const tabsElement = document.getElementById("tabs");
    if (tabsElement) {
      window.scrollTo({ top: tabsElement.offsetTop, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const tabsElement = document.getElementById("tabs");
      if (tabsElement) {
        setShowScrollButton(window.scrollY > tabsElement.offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="tabs" className="container mx-auto text-center px-4">
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {SKILLS_TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 border-2 border-yellow-900 rounded-full ${
              activeTab === tab.value
                ? "bg-gradient-to-b from-yellow-400 to-yellow-700 text-white font-semibold"
                : "text-yellow-800 font-semibold"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-left max-w-7xl container mx-auto text-center">
        <div
          className={`grid gap-4 ${
            activeTab === "all" || activeTab === "technologies"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {filteredSkills.map((skill, index) => {
            const { title, icon: Icon, description, type } = skill;
            return (
              <div
                key={index}
                className={`mb-4 p-4 flex flex-col items-center text-center rounded-lg ${
                  activeTab !== "all" ? "border-2 border-yellow-900" : ""
                }`}
                onClick={() => handleSkillClick(type)}
              >
                <p className="font-semibold cursor-pointer">{title}</p>
                <Icon
                  size={30}
                  className={`text-yellow-800 sm:text-24 my-2 cursor-pointer ${
                    activeTab === "all"
                      ? "hover:scale-150 transition-transform duration-200"
                      : ""
                  }`}
                />
                {activeTab !== "all" && (
                  <p className="text-center">
                    {description.split("\n").map((line, i) => (
                      <span key={i}>
                        {line.trim()}
                        {i < description.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <p className="text-xs text-center mx-auto py-2">
          *reference on request
        </p>
        {showScrollButton && (
          <button
            onClick={scrollToTabs}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center text-yellow-900 font-semibold text-2xl border-2 border-yellow-900 rounded-full mb-20"
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
};

export default Tabs;
