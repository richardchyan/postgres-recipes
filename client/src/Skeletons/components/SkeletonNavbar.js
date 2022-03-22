import React from "react";
import SkeletonText from "./SkeletonText";

const SkeletonNavbar = () => {
  return (
    <>
      <nav className="flex flex-col md:flex-row lg:justify-between items-center space-y-4 md:space-y-0 lg:space-x-4 px-2 lg:px-32 py-2 lg:py-8 m-auto">
        <h1 className="text-5xl font-poppins uppercase tracking-wide text-sky-700 underline dark:text-white">
          Recipes List
        </h1>
        <SkeletonText height="8" width="1/2" />
      </nav>
    </>
  );
};

export default SkeletonNavbar;
