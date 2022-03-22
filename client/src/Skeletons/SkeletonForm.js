import React from 'react'
import SkeletonButton from './components/SkeletonButton'
import SkeletonText from './components/SkeletonText'
import SkeletonTitle from './components/SkeletonTitle'

const SkeletonForm = () => {
  return (
    <div className="max-w-screen-md m-auto border-gray-200 border-2 p-4 my-10 rounded animate-pulse">
       <SkeletonTitle width="1/2" />
       <div className="flex flex-col space-y-8">
          <SkeletonText height="8"/>
          <SkeletonText height="8"/>
          <SkeletonText height="8"/>
          <SkeletonText height="8"/>
       </div>
       <SkeletonButton align="auto" />
      </div>
  )
}

export default SkeletonForm