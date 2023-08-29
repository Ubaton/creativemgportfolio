import React from "react";

const Glass = ({ children }) => {
  return (
    <div className="fixed inset-0 z-10 bg-opacity-35 backdrop-blur-md bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.08)] to-transparent">
      {children}
    </div>
  );
};

export default Glass;
