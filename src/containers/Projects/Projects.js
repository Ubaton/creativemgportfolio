import React from "react";
import { Card } from "@/components/Card/Card";
import Glass from "@/components/Glass/Glass";
import { Navigation } from "@/components/Nav/Nav";
import work from "./workData";
import Badge from "../../components/Badge/Badge";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  // Get unique categories from the work items
  const uniqueCategories = [...new Set(work.map((w) => w.category))];

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
                      <Link href={`/projects/${index}`}>
                        <Card>
                          {(w.category === "Web Development" ||
                            w.category === "Projects") && <Badge />}

                          <div className="p-4">
                            <h1 className="text-lg font-semibold pb-2">
                              {w.title}
                            </h1>
                            <div className="flex items-center justify-center rounded-lg">
                              <Image
                                className="rounded-lg"
                                src={w.image}
                                alt={w.title}
                                width={300}
                                height={200}
                                priority={true}
                              />
                            </div>
                            <p className="text-sm pt-2">{w.description}</p>
                            <hr className="my-2"></hr>
                            <p className="text-xs text-gray-600">{w.year}</p>
                            <p>{w.project}</p>
                          </div>
                        </Card>
                      </Link>
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
