import React, { useState } from "react";
import { Card } from "@/components/Card/Card"; // Update with correct paths
import Glass from "@/components/Glass/Glass"; // Update with correct paths
import { Navigation } from "@/components/Nav/Nav"; // Update with correct paths
import work from "./workData"; // Import your work data or update the path
import Badge from "../../components/Badge/Badge"; // Update with correct path
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loadMoreCounts, setLoadMoreCounts] = useState({});

  // Get unique categories from the work items
  const uniqueCategories = [...new Set(work.map((w) => w.category))];

  // Function to load more items in a category
  const loadMore = (category) => {
    const currentCount = loadMoreCounts[category] || 0;
    setLoadMoreCounts({
      ...loadMoreCounts,
      [category]: currentCount + 3,
    });
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
                <option key={category} value={category}>
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
                                <p className="text-sm pt-2">{w.description}</p>
                                <hr className="my-2"></hr>
                                <p className="text-xs text-gray-600">
                                  {w.year}
                                </p>
                                <p>{w.project}</p>
                              </div>
                            </Card>
                          </Link>
                        </div>
                      ))}
                  </div>
                  {work.filter((w) => w.category === category).length >
                    6 + (loadMoreCounts[category] || 0) && (
                    <div className="text-center mt-4">
                      <button
                        className="text-zinc-700 bg-zinc-200 rounded-md py-2 px-6"
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
