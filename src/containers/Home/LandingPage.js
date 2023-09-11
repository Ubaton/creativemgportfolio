import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Particles from "@/assets/Particles/Particles";
import Glass from "@/components/Glass/Glass";

const LandingPage = () => {
  return (
    <div>
      <Glass>
        <div className="flex flex-col py-32 items-center justify-center  overflow-hidden">
          <NavBar />
          <div className="flex p-4 text-center items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-semibold">
              Creative Mi
              <span className="text-red-600">nds Gra</span>
              phics
            </h1>
          </div>
          <div className="my-16 p-2 text-xs text-gray-500 text-center animate-fade-in">
            <p>
              Where Imagination Flourishes and Design Excellence Reshapes the{" "}
              <br />
              Possibilities, Together.
            </p>
          </div>
        </div>
        <h2 className="text-center flex  items-center justify-center  overflow-hidden space-x-2"></h2>
        <Particles />
      </Glass>
    </div>
  );
};

export default LandingPage;
