import React, { useState, useMemo, useEffect, useCallback } from "react";
import { SKILLS, SKILLS_TABS } from "../utils/data";
import { FaArrowUp, FaQuoteLeft } from "react-icons/fa";
import Testimonials from "./Testimonials";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const TabButton = ({ tab, activeTab, setActiveTab }) => (
  <button
    key={tab.value}
    onClick={() => setActiveTab(tab.value)}
    className={`px-4 py-2 border-2 border-yellow-900 rounded-full ${
      activeTab === tab.value
        ? "bg-gradient-to-b from-yellow-500 to-yellow-800 text-white font-semibold"
        : "text-yellow-800 font-semibold"
    }`}
  >
    {tab.label}{" "}
    {tab.value === "testimonials" && (
      <FaQuoteLeft size={18} className="inline-block text-sm text-yellow-900 ml-2" />
    )}
  </button>
);

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

  const handleScroll = useCallback(() => {
    const tabsElement = document.getElementById("tabs");
    const referenceElement = document.getElementById("reference");
    if (tabsElement && referenceElement) {
      const showButton =
        window.scrollY > tabsElement.offsetTop &&
        window.scrollY < referenceElement.offsetTop;
      setShowScrollButton(showButton);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div id="tabs" className="container mx-auto text-center px-4">
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {SKILLS_TABS.map((tab) => (
          <TabButton
            key={tab.value}
            tab={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      <div className="text-left max-w-7xl container mx-auto text-center">
        {activeTab === "testimonials" ? (
          <Testimonials />
        ) : (
          <div
            className={`grid gap-4 ${
              activeTab === "all"
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
                : activeTab === "technologies"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : activeTab === "achievements"
                ? "grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2"
                : activeTab === "experience"
                ? "grid-cols-1"
                : activeTab === "skills"
                ? "grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3"
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
        )}
        {showScrollButton && (
          <button
            onClick={scrollToTabs}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center text-yellow-800 font-semibold text-xl rounded-full mb-20"
          >
            <FaArrowUp />
          </button>
        )}
        {activeTab !== "testimonials" && activeTab !== "skills" && (
          <p id="reference" className="text-xs text-center mx-auto py-2">
            *reference on request
          </p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
