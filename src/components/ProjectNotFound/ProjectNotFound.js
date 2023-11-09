import Particles from "../../assets/Particles/Particles";
import Link from "next/link";
import React from "react";
import Glass from "../Glass/Glass";

const ProjectNotFound = () => {
  return (
    <>
      <Glass>
        <div className="flex items-center justify-center min-h-screen p-12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-zinc-50 text-4xl font-semibold ">ERROR 404</h1>
            <h2 className="text-zinc-50 text-6xl font-semibold pb-4">
              Project not found
            </h2>
            <span className="flex flex-row space-x-4">
              <Link href="/">
                <button className="middle none center mr-3 rounded-lg bg-gradient-to-r from-zinc-200 to-zinc-400 hover:bg-zinc-200 py-3 px-6 font-sans text-xs font-bold uppercase text-zinc-700 shadow-md shadow-zinc-500/20 transition-all hover:shadow-lg hover:shadow-zinc-300/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  GO BACK HOME
                </button>
              </Link>
              <Link href="/projects">
                <button className="middle none center mr-3 rounded-lg bg-gradient-to-r from-zinc-200 to-zinc-400 hover:bg-zinc-200 py-3 px-6 font-sans text-xs font-bold uppercase text-zinc-700 shadow-md shadow-zinc-500/20 transition-all hover:shadow-lg hover:shadow-zinc-300/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  PROJECTS
                </button>
              </Link>
            </span>
          </div>
        </div>
        <Particles />
      </Glass>
    </>
  );
};

export default ProjectNotFound;
