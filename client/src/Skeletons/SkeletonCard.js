import React from 'react'
import SkeletonAvatar from './components/SkeletonAvatar';
import SkeletonImage from './components/SkeletonImage';
import SkeletonText from './components/SkeletonText';
import SkeletonTitle from './components/SkeletonTitle';

const SkeletonCard = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-50">
      {/* <!-- card --> */}
      <div className="w-80 h-80 bg-white rounded shadow-2xl border-2 border-black">
        {/* <!--      image --> */}
        <SkeletonImage />
        <div className="p-5">
          <SkeletonAvatar />
          <SkeletonTitle />
          <div className="grid grid-cols-3 gap-1">
            <SkeletonText colspan="col-span-2" />
            <SkeletonText />
            <SkeletonText colspan="col-span-3" />
            <SkeletonText />
            <SkeletonText colspan="col-span-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard