import React from "react";

const SkeletonText = ({height, width}) => {
  return (
    <div
      className={`bg-gray-200 rounded-md h-${height} w-${width} animate-pulse`}
    ></div>
  );
};

export default SkeletonText;
