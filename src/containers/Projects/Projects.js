import React, { useState } from "react";
import { Card } from "@/components/Card/Card";
import Glass from "@/components/Glass/Glass";
import { Navigation } from "@/components/Nav/Nav";
import work from "./workData";
import Badge from "../../components/Badge/Badge";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loadMoreCounts, setLoadMoreCounts] = useState({});

  const openProject = (url) => {
    window.open(url, "_blank"); // This will open the URL in a new tab/window.
  };

  const uniqueCategories = [...new Set(work.map((w) => w.category))];

  const truncateDescription = (description, maxWords) => {
    const words = description.split(" ");

    if (words.length > maxWords) {
      const truncatedDescription = words.slice(0, maxWords).join(" ");
      return `${truncatedDescription} ...`;
    }

    return description;
  };

  return (
    <>
      <Navigation />
      <Glass>
        <div className="overflow-y-auto max-h-screen py-20">
          <h1 className="text-center text-4xl font-semibold">Projects Space</h1>

          {/* Category Selector Dropdown */}
          <div className="text-center text-zinc-700">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="py-2 px-6 rounded-lg m-4"
            >
              <option value="">All Categories</option>
              {uniqueCategories.map((category) => (
                <option className="bg-zinc-100" key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Render category sections with dividers based on the selected category */}
          {uniqueCategories.map((category, categoryIndex) => (
            <div key={category}>
              {categoryIndex !== 0 && (
                <hr className="my-6 border-t-2 border-zinc-800 mx-20" />
              )}
              {selectedCategory === category || !selectedCategory ? (
                <>
                  <h1 className="text-center text-2xl font-semibold mt-8">
                    {category}
                  </h1>
                  <div className="flex flex-wrap justify-center">
                    {work
                      .filter((w) => w.category === category)
                      .slice(0, 6 + (loadMoreCounts[category] || 0))
                      .map((w, index) => (
                        <div className="px-4 py-4" key={index}>
                          {w.url ? (
                            // If the project has a URL, create a clickable link.
                            <Link
                              href={w.url
                                .replace(/^url\(['"]?/, "")
                                .replace(/['"]?\)$/, "")}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
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
                                  <p className="text-sm pt-2">
                                    {truncateDescription(w.description, 20)}
                                  </p>
                                  <hr className="my-2"></hr>
                                  <p className="text-xs text-gray-600">
                                    {w.year}
                                  </p>
                                  <p>{w.project}</p>
                                </div>
                              </Card>
                            </Link>
                          ) : (
                            // If the project doesn't have a URL, use Link to navigate.
                            <Link href={`/projects/${index}`} key={w.id}>
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
                                  <p className="text-sm pt-2">
                                    {truncateDescription(w.description, 20)}
                                  </p>
                                  <hr className="my-2"></hr>
                                  <p className="text-xs text-gray-600">
                                    {w.year}
                                  </p>
                                  <p>{w.project}</p>
                                </div>
                              </Card>
                            </Link>
                          )}
                        </div>
                      ))}
                  </div>
                  {work.filter((w) => w.category === category).length >
                    6 + (loadMoreCounts[category] || 0) && (
                    <div className="text-center mt-4">
                      <button
                        className="text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700"
                        onClick={() => loadMore(category)}
                      >
                        Load More
                      </button>
                    </div>
                  )}
                </>
              ) : null}
            </div>
          ))}
        </div>
      </Glass>
    </>
  );
};

export default Projects;
