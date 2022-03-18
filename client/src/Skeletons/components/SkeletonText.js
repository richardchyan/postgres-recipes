import React from 'react'

const SkeletonText = ({ colspan, height = "4" }) => {
  return (
    <div className={`bg-gray-200 rounded-md h-${height} ${colspan}`}>

    </div>
  )
}

export default SkeletonText