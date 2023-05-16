import { Link } from 'react-router-dom'
import { dateFormat } from '@/utils'
import avatarImage from '@/assets/images/avatar.png'

const Userinfo = ({ author, date }) => {
  return (
    <Link to={`/profile/${author.username}`} className='flex justify-start items-center gap-3'>
      <img
        src={
          author?.image && author?.image !== 'https://api.realworld.io/images/demo-avatar.png'
            ? author?.image
            : avatarImage
        }
        className='w-8 h-8 rounded-full'
      />
      <div className='flex flex-col'>
        <div className='text-gray-500 text-sm'>{author?.username}</div>
        <div className='text-xs text-gray-400'>{dateFormat(date)}</div>
      </div>
    </Link>
  )
}

export default Userinfo
