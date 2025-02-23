import React from "react";
import { FaCogs, FaArrowRight } from "react-icons/fa";

const Learnings = () => {
  const journeyItems = [
    {
      date: "2025",
      title: "exploring ai & ml",
      description: "",
      icon: FaCogs,
      type: "milestone",
      inProgress: true,
    },
    {
      date: "march 2024",
      title: "from PM to dev",
      preview:
        "how I transitioned careers while maintaining my project management skills...",
      icon: FaCogs,
      type: "blog",
    },
    {
      date: "2024",
      title: "into the cloud computing",
      description: "exploring aws services and cloud architecture",
      icon: FaCogs,
      type: "milestone",
      inProgress: true,
    },
    {
      date: "february 2024",
      title: "understanding cloud architecture",
      preview:
        "fundamentals of cloud computing and key takeaways",
      icon: FaCogs,
      type: "blog",
    },
    {
      date: "2023",
      title: "software development",
      description:
        "full-stack journey",
      icon: FaCogs,
      type: "milestone",
      achievements: ["node.js projects", "full-stack portfolio"],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 bg-transparent">
      <h2 className="text-3xl text-black text-center mb-12">learnings</h2>

      <div className="max-w-5xl mx-auto">
        
        <div className="h-96 overflow-y-auto pr-4">
          <div className="relative pb-4">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-yellow-600 ml-8" />
            <div className="space-y-8">
              {journeyItems.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute -left-1 top-0 z-10 bg-white p-1">
                    <item.icon className="w-6 h-6 text-yellow-600" />
                  </div>

                  {item.type === "milestone" ? (
                    // milestone item
                    <div>
                      <div className="mb-2">
                        <span className="text-sm text-yellow-600">
                          {item.date}
                        </span>
                        <h3 className="text-xl font-semibold">
                          {item.title}
                          {item.inProgress && (
                            <span className="ml-2 text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                              in progress
                            </span>
                          )}
                        </h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                      {item.achievements && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="text-sm bg-yellow-50 text-yellow-800 px-2 py-1 rounded-full"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // blog post item
                    <div className="group cursor-pointer">
                      <span className="text-sm text-yellow-600">
                        {item.date}
                      </span>
                      <h4 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.preview}</p>
                      <button className="mt-4 text-yellow-600 group-hover:text-yellow-800 flex items-center gap-1">
                        read more <FaArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learnings;
