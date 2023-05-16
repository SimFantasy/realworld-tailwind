import { Link } from 'react-router-dom'
import { RiCoreosFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className='w-full h-14'>
      <div className='container flex justify-between items-center text-sm text-gray-400'>
        <Link to='/' className='flex justify-start items-center gap-2 text-gray-300'>
          <RiCoreosFill size={24} />
          <span className='text-lg font-semibold'>Conduit</span>
        </Link>
        <span className='text-gray-300 text-sm'>
          An interactive learning project from <a href='#'>Thinkster</a>. Code &amp; design licensed
          under MIT.
        </span>
      </div>
    </footer>
  )
}

export default Footer
