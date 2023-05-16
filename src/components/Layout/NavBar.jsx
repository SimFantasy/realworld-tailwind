import { NavLink, useNavigate } from 'react-router-dom'
import { RiShutDownLine, RiSettingsLine, RiPencilLine } from 'react-icons/ri'
import toast from 'react-hot-toast'
import { useAuth } from '@/hooks'
import avatarImage from '@/assets/images/avatar.png'

const NavBar = () => {
  const { isAuth, logout, authUser } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    toast.success('logout success ~')
    navigate('/login')
  }
  return (
    <nav className='navs flex justify-end items-center gap-4 text-gray-400'>
      <NavLink to='/home'>Home</NavLink>
      {isAuth && (
        <>
          <NavLink to='/create' className='flex justify-center items-center gap-2'>
            <RiPencilLine />
            New Article
          </NavLink>
          <NavLink to='/settings' className='flex justify-center items-center gap-2'>
            <RiSettingsLine />
            Settings
          </NavLink>
          <NavLink
            to={`/profile/${authUser?.user?.username}`}
            className='flex justify-start items-center gap-2'
          >
            <img
              src={authUser?.user?.image ? authUser?.user?.image : avatarImage}
              className='w-8 h-8 rounded-full'
            />
            <span className='text-gray-700'>{authUser?.user?.username}</span>
          </NavLink>
          <div
            className='w-8 h-8 flex justify-center items-center text-gray-400 bg-green-100 hover:bg-green-400 hover:text-white cursor-pointer rounded-md'
            onClick={handleLogout}
          >
            <RiShutDownLine size={16} />
          </div>
        </>
      )}

      {!isAuth && (
        <>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </>
      )}
    </nav>
  )
}

export default NavBar
