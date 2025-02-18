import React, { useState } from "react";
import { SKILLS, SKILLS_TABS } from "./utils/data";

// to shuffle an array
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? shuffleArray([...SKILLS])
      : SKILLS.filter((skill) => skill.type === activeTab);

  const handleSkillClick = (type) => {
    setActiveTab(type);
  };

  return (
    <div className="container mx-auto text-center px-4">
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {SKILLS_TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 border rounded-full ${
              activeTab === tab.value
                ? "bg-yellow-900 text-white font-semibold"
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
          {filteredSkills.map((skill, index) => (
            <div
              key={index} // index is the key
              className="mb-4 p-4 flex flex-col items-center mx-auto text-center"
              onClick={() => handleSkillClick(skill.type)}
            >
              <p className="font-semibold cursor-pointer" onClick={() => handleSkillClick(skill.type)}>
                {skill.title}
              </p>
              <skill.icon
                size={30}
                className={`text-yellow-800 sm:size-24 my-2 cursor-pointer ${
                  activeTab === "all" ? "hover:scale-125 transition-transform duration-200" : ""
                }`}
                onClick={() => handleSkillClick(skill.type)}
              />
              {activeTab !== "all" && (
                <p className="text-center">
                  {skill.description.split("\n").map((line, i) => (
                    <span key={i}>
                      {line.trim()}
                      {i < skill.description.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;