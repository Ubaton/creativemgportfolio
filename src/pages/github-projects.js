import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Card } from "@/components/Card/Card";

const GithubProjects = ({ projects }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projects) {
      setLoading(false);
    }
  }, [projects]);

  return (
    <div>
      <h1>My GitHub Projects</h1>
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
          <ul className="grid grid-cols-3 gap-4">
            {projects.map((project) => (
              <Card
                key={project.id}
                style={{
                  width: `${Math.floor(Math.random() * 5 + 2)}rem`,
                  height: `${Math.floor(Math.random() * 5 + 2)}rem`,
                }}
              >
                <div className="p-4">
                  <li>
                    <Link
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </Link>
                    <p>Stargazers: {project.stargazers_count}</p>
                  </li>
                </div>
              </Card>
            ))}
          </ul>
        ) : (
          <p>No GitHub projects available.</p>
        )}
      </ul>
    </div>
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
