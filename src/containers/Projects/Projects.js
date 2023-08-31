import { Card } from "@/components/Card/Card";
import { Navigation } from "@/components/Nav/Nav";
import React from "react";

const work = [
  {
    title: "Creative Minds Graphics (Pty) Ltd",
  },
];

const Projects = () => {
  return (
    <>
      <Navigation />
      <div>
        {work.map((w, index) => (
          <div className="flex items-center justify-center py-44" key={index}>
            <Card>
              <span className="flex items-center justify-center">
                {w.title}
              </span>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
