import { Link } from 'react-router-dom'
import { RiCoreosFill } from 'react-icons/ri'
import { NavBar } from '@/components'

const Header = () => {
  return (
    <div className='w-full h-14 bg-white'>
      <div className='container flex justify-between items-center h-full'>
        <Link to='/' className='flex justify-between items-center gap-2 text-green-600'>
          <RiCoreosFill size='32' />
          <span className='text-green-900 text-2xl font-semibold'>Conduit</span>
        </Link>
        <NavBar />
      </div>
    </div>
  )
}

export default Header
