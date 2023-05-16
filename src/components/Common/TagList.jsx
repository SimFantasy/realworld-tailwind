import React from 'react'

const TagList = ({ tagList }) => {
  return (
    <>
      {tagList?.map(tag => (
        <span
          className='px-2 text-sm text-gray-400 rounded-full border border-gray-200 hover:border-gray-300 hover:text-gray-500 cursor-pointer'
          key={tag}
        >
          {tag}
        </span>
      ))}
    </>
  )
}

export default TagList
