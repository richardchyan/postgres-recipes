import React from 'react'

const SkeletonButton = ({ align }) => {
  return (
    <div className={`bg-gray-200 w-12 h-8 rounded-md mt-4 m-${align}`}>
       
    </div>
  )
}

export default SkeletonButton