import React from 'react'

const SkeletonTitle = ({ align, width }) => {
  return (
    <div className={`h-8 w-${width} bg-gray-200 mb-4 rounded-md m-${align}`}>

    </div>
  )
}

export default SkeletonTitle