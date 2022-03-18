import React from 'react'
import SkeletonButton from './components/SkeletonButton'
import SkeletonText from './components/SkeletonText'
import SkeletonTitle from './components/SkeletonTitle'

const SkeletonRecipe = () => {
  return (
    <div className="max-w-screen-md m-auto border-2 border-gray-200 p-8 rounded">
       <SkeletonTitle align="auto" width="1/2" />
       <div className="grid grid-cols-3 gap-2">
         <SkeletonText colspan="col-span-2" />
         <SkeletonText colspan="col-span-3"/>
         <SkeletonText />
       </div>
      <div className="flex justify-center space-x-4 mt-4">
         <SkeletonButton />
         <SkeletonButton />
      </div>
    </div>
  )
}

export default SkeletonRecipe