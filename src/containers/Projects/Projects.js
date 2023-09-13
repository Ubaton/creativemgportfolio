import React from "react";
import { Card } from "@/components/Card/Card";
import Glass from "@/components/Glass/Glass";
import { Navigation } from "@/components/Nav/Nav";

const work = [
  {
    title: "Creative Minds Graphics (Pty) Ltd",
    category: "Graphic Design",
    description:
      "A leading design and creative agency specializing in web development, graphic design, video editing, and branding strategies. We turn your ideas into captivating visual experiences.",
    year: 2011,
    project: "Project X",
    // image: "../../assets/images/cmg.png",
  },
  {
    title: "Creative Minds Graphics (Pty) Ltd",
    category: "Web Development",
    description:
      "An innovative tech startup focused on developing cutting-edge software solutions for businesses. We're committed to driving digital transformation.",
    year: 2019,
    project: "Project Y",
  },
  {
    title: "Creative Minds Graphics (Pty) Ltd",
    category: "Graphic Design",
    description:
      "A full-service marketing agency offering a wide range of services, including SEO, social media marketing, and content creation. We help businesses grow their online presence.",
    year: 2021,
    project: "Project Z",
  },
  {
    title: "Creative Minds Graphics (Pty) Ltd",
    category: "Projects",
    description:
      "A full-service marketing agency offering a wide range of services, including SEO, social media marketing, and content creation. We help businesses grow their online presence.",
    year: 2021,
    project: "Project A",
  },
];

const Projects = () => {
  // Get unique categories from the work items
  const uniqueCategories = [...new Set(work.map((w) => w.category))];

  return (
    <>
      <Navigation />
      <Glass>
        <div className="overflow-y-auto max-h-screen py-20">
          <h1 className="text-center text-4xl font-semibold">Projects</h1>

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
                          {/* <img src={w.image} alt={w.title} /> */}
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
        </div>
      </Glass>
    </>
  );
};

export default Projects;
