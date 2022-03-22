import React from 'react'
import SkeletonButton from './components/SkeletonButton'
import SkeletonText from './components/SkeletonText'
import SkeletonTitle from './components/SkeletonTitle'

const SkeletonRecipe = () => {
  return (
    <div className="max-w-screen-md m-auto border-2 border-gray-200 p-8 rounded animate-pulse">
       <SkeletonTitle align="auto" />
       <div className="grid grid-cols-3 gap-1">
         <SkeletonText />
         <SkeletonText />
         <SkeletonText />
         <SkeletonText />
         <SkeletonText />
       </div>
      <div className="flex justify-center space-x-4">
         <SkeletonButton />
         <SkeletonButton />
      </div>
    </div>
  )
}

export default SkeletonRecipe