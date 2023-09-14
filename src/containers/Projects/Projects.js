import React from "react";
import { Card } from "@/components/Card/Card";
import Glass from "@/components/Glass/Glass";
import { Navigation } from "@/components/Nav/Nav";
import work from "./workData";
import { AlertTriangle } from "lucide-react";

const Projects = () => {
  // Get unique categories from the work items
  const uniqueCategories = [...new Set(work.map((w) => w.category))];

  // Create a mapping of category names to image URLs
  const categoryImages = {
    "Graphic Design": "/assets/images/graphicdesign.png",
    "Web Development": "/assets/images/webdev.png",
    Projects: "/assets/images/projects.png",
  };

  return (
    <>
      <Navigation />
      <Glass>
        <div className="overflow-y-auto max-h-screen py-20">
          <h1 className="text-center text-4xl font-semibold">Projects Space</h1>

          {/* Render category sections with dividers */}
          {uniqueCategories.map((category, categoryIndex) => (
            <div key={category}>
              {categoryIndex !== 0 && (
                <hr className="my-6 border-t-2 border-zinc-800 mx-20 " />
              )}
              <h1 className="text-center text-2xl font-semibold mt-8">
                {category}
              </h1>
              <div className="flex flex-wrap justify-center">
                {work
                  .filter((w) => w.category === category)
                  .map((w, index) => (
                    <div className="px-4 py-4" key={index}>
                      <Card>
                        <div className="p-4">
                          <h1 className="text-lg font-semibold">{w.title}</h1>
                          <img
                            src={categoryImages[category]}
                            alt={w.title}
                            width={"300px"}
                            height={"100px"}
                          />
                          <p className="text-sm">{w.description}</p>
                          <hr className="my-2"></hr>
                          <p className="text-xs text-gray-600">{w.year}</p>
                          <p>{w.project}</p>
                        </div>
                      </Card>
                    </div>
                  ))}
              </div>
            </div>
          ))}
          <p className="flex items-center justify-center text-amber-400 text-center">
            <span className="px-2">
              <AlertTriangle />
            </span>{" "}
            IN PRODUCTION
          </p>
        </div>
      </Glass>
    </>
  );
};

export default Projects;
