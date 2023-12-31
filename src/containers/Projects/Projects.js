import React, { useState } from "react";
import { Card } from "@/components/Card/Card";
import Glass from "@/components/Glass/Glass";
import { Navigation } from "@/components/Nav/Nav";
import work from "./workData";
import Badge from "../../components/Badge/Badge";
import Image from "next/image";
import Link from "next/link";
import GithubProjects from "./[slug]";

import Github from "../../assets/icons/Github.png";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loadMoreCounts, setLoadMoreCounts] = useState({});
  const uniqueCategories = [...new Set(work.map((w) => w.category))];

  const loadMore = (category) => {
    const currentCount = loadMoreCounts[category] || 0;
    setLoadMoreCounts({
      ...loadMoreCounts,
      [category]: currentCount + 3,
    });
  };

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
              title="Choose an option"
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
                      .map((w) => (
                        <div className="px-4 py-4" key={w.id}>
                          {w.url ? (
                            <Link
                              href={`/projects/${w.id}`}
                              key={w.id}
                              as={`/projects/${w.id}`}
                            >
                              <Card>
                                {w.category === "Projects" && <Badge />}

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
                                      as="image"
                                      rel="preload"
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
                            <Link href={`/projects/${w.id}`} key={w.id}>
                              <Card>
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
                                      as="image"
                                      rel="preload"
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
          <div className="flex justify-center items-center gap-4">
            <Card>
              <div className="flex flex-col items-center justify-center  w-full h-full p-4">
                <Badge />
                <h1 className="text-lg font-semibold p-3">
                  My GitHub Projects Page
                </h1>
                <Link href="github-projects">
                  <p className="text-center ">Projects</p>
                  <Image
                    src={Github}
                    alt=""
                    className="w-[150px]"
                    priority={true}
                  />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </Glass>
    </>
  );
};

export default Projects;
