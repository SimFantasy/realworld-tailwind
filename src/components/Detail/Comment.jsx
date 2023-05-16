import { CommentEditor, CommentItem, Loading } from '@/components'
import { queries } from '@/hooks'

const Comment = ({ slug, author }) => {
  const { data, isLoading } = queries.Comment.useComment(slug)

  return (
    <div className='flex flex-col gap-6'>
      <CommentEditor slug={slug} avatar={author?.image} />
      <div className='flex flex-col gap-4'>
        {isLoading ? (
          <div className='flex justify-center items-center p-4'>
            <Loading />
          </div>
        ) : (
          data?.comments?.map(comment => <CommentItem key={comment.id} slug={slug} {...comment} />)
        )}
      </div>
    </div>
  )
}

export default Comment
