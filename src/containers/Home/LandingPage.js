import React from "react";
import { AlertTriangle } from "lucide-react";
import NavBar from "@/components/NavBar/NavBar";
import Particles from "@/assets/Particles/Particles";
import Glass from "@/components/Glass/Glass";

const LandingPage = () => {
  return (
    <div>
      <Glass>
        <div className="flex-col py-20 items-center justify-center  overflow-hidden">
          <NavBar />
          <div className="flex items-center justify-center">
            <h1 className="text-[4.5rem]  font-semibold">
              Creative Mi<span className="text-red-600">nds Gra</span>phics
            </h1>
          </div>
          <div className="my-16 text-xs text-gray-500 text-center animate-fade-in">
            Where Imagination thrives, design excellence redefines together.
          </div>
        </div>
        <h2 className="text-center flex  items-center justify-center  overflow-hidden space-x-2">
          <span className="text-amber-400 ">
            <AlertTriangle />
          </span>
          <span>IN PRODUCTION</span>
        </h2>
        <Particles />
      </Glass>
    </div>
  );
};

export default LandingPage;
