import { useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

const Pagination = ({ totalPage, page, onChange }) => {
  const [currentPage, setCurrentPage] = useState(page)

  const handleClick = newPage => {
    setCurrentPage(newPage)
    onChange(newPage)
  }

  const pages = []

  if (totalPage <= 5) {
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i)
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(totalPage)
    } else if (currentPage >= totalPage - 2) {
      pages.push(1)
      pages.push('...')
      for (let i = totalPage - 4; i <= totalPage; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      pages.push('...')
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(totalPage)
    }
  }

  return (
    <div className='pagination'>
      <button onClick={() => handleClick(1)}>
        <RiArrowLeftSLine size={24} />
      </button>

      {pages.map((p, index) => {
        if (p === '...') {
          return <span key={index}>...</span>
        }

        return (
          <button
            key={index}
            className={p === currentPage ? 'active' : ''}
            onClick={() => handleClick(p)}
            disabled={p === currentPage}
          >
            {p}
          </button>
        )
      })}
      <button onClick={() => handleClick(totalPage)}>
        <RiArrowRightSLine size={24} />
      </button>
    </div>
  )
}
export default Pagination
