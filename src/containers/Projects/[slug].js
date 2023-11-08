import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const GithubProjectDetails = ({ project }) => {
  if (!project || !project.name) {
    return (
      <div>
        <h1>GitHub Project Details</h1>
        <p>Project not found or an error occurred.</p>
        <Link href="/github-projects">Back to GitHub Projects</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>GitHub Project Details</h1>
      <div>
        <h2>{project.name}</h2>
        <p>Description: {project.description}</p>
        <p>Stargazers: {project.stargazers_count}</p>
        <p>Language: {project.language}</p>
        <Link href="/github-projects">Back to GitHub Projects</Link>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query; // This gets the slug from the URL

  try {
    const token = process.env.GITHUB_ACCESS_TOKEN;
    const username = process.env.GITHUB_USERNAME;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Fetch the specific GitHub project details using the GitHub API
    const response = await axios.get(
      `https://api.github.com/repos/${username}/${slug}`,
      config
    );

    if (response.status === 200) {
      const project = response.data;
      return {
        props: {
          project,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching GitHub project details:", error);
  }

  // If there's an error or the project doesn't exist, return an empty project
  return {
    props: {
      project: {},
    },
  };
}

export default GithubProjectDetails;
