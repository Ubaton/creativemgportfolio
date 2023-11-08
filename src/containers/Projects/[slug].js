import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const GithubProjects = ({ projects }) => {
  // Create a loading state to track the loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // When the projects prop is available, set loading to false
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
        ) : (
          // If not loading, render the projects
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <Link
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
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

  // If there's an error, return an empty array of projects
  return {
    props: {
      projects: [],
    },
  };
}

export default GithubProjects;
