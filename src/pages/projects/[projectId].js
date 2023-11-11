import React from "react";
import { useRouter } from "next/router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import work from "../../containers/Projects/workData";
import Image from "next/image";
import Glass from "@/components/Glass/Glass";

import ProjectNotFound from "@/components/ProjectNotFound/ProjectNotFound";

import Link from "next/link";

const ProjectDetails = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const projectIndex = parseInt(projectId, 10);

  if (isNaN(projectIndex) || projectIndex < 0 || projectIndex >= work.length) {
    return (
      <div>
        <ProjectNotFound />
      </div>
    );
  }

  const project = work[projectIndex];

  return (
    <Glass>
      <div className="flex flex-col items-center justify-center min-h-screen mb-8">
        <div className="flex flex-row items-center justify-center">
          <span>
            <Link href="/projects">
              <ArrowLeft />
            </Link>
          </span>
          <h1 className="text-center text-4xl font-semibold p-5">
            Projects Detail
          </h1>
        </div>
        <div className="overflow-hidden p-4 w-96 md:w-4/6 relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-800">
          <h1 className="flex flex-row justify-between text-lg md:text-2xl lg:text-3xl font-semibold">
            <span>{project.title}</span>
            <span className="">
              {project.url && (
                <button className="text-sm md:text-base p-2">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink />
                  </Link>
                </button>
              )}
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 p-4">
            <div className="flex flex-col items-center justify-center rounded-lg md:p-4 pb-0">
              <Image
                className="rounded-lg"
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                priority={true}
                as="image"
                rel="preload"
              />
              <p className="pt-2">{project.category}</p>
            </div>

            <div className="flex flex-row flex-wrap">
              <p className="text-sm md:text-base p-2">{project.description}</p>
              <p className="text-sm md:text-base text-gray-600 p-2">
                Year: {project.year}
              </p>
              <p className="text-sm md:text-base p-2">
                Project Name: {project.project}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Glass>
  );
};

export default ProjectDetails;
