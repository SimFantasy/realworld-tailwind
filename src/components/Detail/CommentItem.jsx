import { dateFormat } from '@/utils'
import { RiDeleteBin6Line } from 'react-icons/ri'
import toast from 'react-hot-toast'
import { mutations, useAuth } from '@/hooks'

const CommentItem = ({ slug, id, body, author, date }) => {
  const { authUser } = useAuth()
  const canDelete = author?.username === authUser?.user.username

  const { mutate, isLoading } = mutations.Comment.useCommentDelete(slug, id)
  const handleDelete = () => {
    mutate()
    toast.success('comment delete success ~')
  }
  return (
    <div className='flex flex-col border border-gray-300 rounded'>
      <div className='p-3 bg-white text-gray-500 rounded-t'>{body}</div>
      <div className='flex justify-between items-center bg-gray-200 p-3'>
        <div className='flex justify-start items-center gap-2 text-xs'>
          <img src={author?.image} className='w-6 h-6 rounded-full' />
          <span className='text-gray-500'>{author?.username}</span>
          <span className='text-gray-400'>{dateFormat(date)}</span>
        </div>
        {canDelete && (
          <button
            className='flex justify-center items-center h-8 w-8 text-gray-400 hover:text-red-500'
            disabled={isLoading}
            onClick={handleDelete}
          >
            <RiDeleteBin6Line size={16} />
          </button>
        )}
      </div>
    </div>
  )
}

export default CommentItem
