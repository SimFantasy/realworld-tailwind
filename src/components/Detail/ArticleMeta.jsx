import { useNavigate } from 'react-router-dom'
import { RiEdit2Line, RiDeleteBin6Line } from 'react-icons/ri'
import toast from 'react-hot-toast'
import { Userinfo, DetailFavorite, DetaiFollow } from '@/components'
import { useAuth, mutations } from '@/hooks'

const ArticleMeta = ({ slug, author, createdAt, favorited, favoritesCount }) => {
  const navigate = useNavigate()
  const { authUser } = useAuth()
  const canEdit = authUser.user.username === author.username

  const handleEdit = () => {
    navigate(`/update/${slug}`)
  }

  const { mutate, isLoading } = mutations.Article.useArticleDelete()

  const handleDelete = () => {
    mutate(slug, {
      onSuccess: () => {
        toast.success('Article delete success ~')
        navigate('/home')
      }
    })
  }

  return (
    <div className='flex justify-start items-center gap-4 h-10'>
      <Userinfo author={author} date={createdAt} />
      {canEdit ? (
        <>
          <button
            className='px-3 py-1 flex justify-center items-center gap-1 border rounded text-sm border-blue-300 text-blue-300 bg-transparent hover:border-blue-200 hover:text-blue-100'
            onClick={handleEdit}
          >
            <RiEdit2Line />
            <span>Edit Article</span>
          </button>
          <button
            className='px-3 py-1 flex justify-center items-center gap-1 border rounded text-sm border-red-300 text-red-300 bg-transparent hover:border-red-200 hover:text-red-100'
            disabled={isLoading}
            onClick={handleDelete}
          >
            <RiDeleteBin6Line />
            <span>Delete Article</span>
          </button>
        </>
      ) : (
        <>
          <DetaiFollow slug={slug} username={author?.username} following={author?.following} />
          <DetailFavorite slug={slug} favorited={favorited} favoritesCount={favoritesCount} />
        </>
      )}
    </div>
  )
}

export default ArticleMeta
