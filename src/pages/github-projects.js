import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Card } from "@/components/Card/Card";
import ProjectNotFound from "@/components/ProjectNotFound/ProjectNotFound";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Nav/Nav";
import Glass from "@/components/Glass/Glass";

const GithubProjects = ({ projects }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projects) {
      setLoading(false);
    }
  }, [projects]);

  return (
    <>
      <Navigation />
      <Glass>
        <div className="overflow-y-auto max-h-screen">
          <h1 className="text-center text-4xl font-semibold p-4 pt-20">
            My GitHub Projects
          </h1>
          <ul className="flex items-center justify-center">
            {loading ? (
              <div
                className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-zinc-300 rounded-full"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            ) : projects && projects.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className={`w-${Math.floor(
                      Math.random() * 5 + 2
                    )}/5 h-${Math.floor(Math.random() * 5 + 2)}/5`}
                  >
                    <div className="p-4">
                      <span className="flex flex-row items-center justify-between">
                        {" "}
                        <h1 className="text-lg font-semibold p-2">
                          {project.name}
                        </h1>
                        <Link
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink />
                        </Link>
                      </span>
                      <li>
                        {project.description && (
                          <p>
                            <span className=" font-medium text-zinc-500 ">
                              Description:
                            </span>{" "}
                            {project.description}
                          </p>
                        )}

                        {project.readme && (
                          <Link
                            href={project.readme.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <p>Readme</p>
                          </Link>
                        )}

                        <span className="flex flex-row justify-end gap-2">
                          <span className="flex flex-row items-center justify-end gap-2 pt-2">
                            <GitFork className="w-4" /> {project.forks_count}
                          </span>
                          <span className="flex flex-row items-center justify-end gap-2 pt-2">
                            <Star className="w-4" />
                            {project.stargazers_count}
                          </span>
                        </span>
                      </li>
                    </div>
                  </Card>
                ))}
              </ul>
            ) : (
              <div>
                <ProjectNotFound />
              </div>
            )}
          </ul>
        </div>
      </Glass>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    // Fetch your GitHub projects using the GitHub API
    const token = process.env.GITHUB_ACCESS_TOKEN;
    const username = process.env.GITHUB_USERNAME;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      config
    );

    if (response.status === 200) {
      const projects = response.data;
      return {
        props: {
          projects,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
  }

  // If there's an error or no projects, return an empty array of projects
  return {
    props: {
      projects: [],
    },
  };
}

const GithubProjectsPage = ({ projects }) => {
  return (
    <div>
      <GithubProjects projects={projects} />
    </div>
  );
};

export default GithubProjectsPage;
