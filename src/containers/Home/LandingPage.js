import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Particles from "@/assets/Particles/Particles";
import Glass from "@/components/Glass/Glass";

const LandingPage = () => {
  return (
    <div>
      <Glass>
        <div className="flex-col py-32 items-center justify-center  overflow-hidden">
          <NavBar />
          <div className="flex items-center justify-center">
            <h1 className="text-[4.5rem]  font-semibold">
              Creative Mi<span className="text-red-600">nds Gra</span>phics
            </h1>
          </div>
          <div className="my-16 text-xs text-gray-500 text-center animate-fade-in">
            Where Imagination Flourishes and Design Excellence Reshapes the
            <br />
            Possibilities, Together.
          </div>
        </div>
        <h2 className="text-center flex  items-center justify-center  overflow-hidden space-x-2"></h2>
        <Particles />
      </Glass>
    </div>
  );
};

export default LandingPage;
