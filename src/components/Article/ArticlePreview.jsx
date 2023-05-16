import { Link } from 'react-router-dom'
import { Userinfo, PreviewFavorite, TagList } from '@/components'
import { RiArrowRightSLine } from 'react-icons/ri'

const ArticlePreview = ({
  slug,
  title,
  description,
  author,
  createdAt,
  favorited,
  favoritesCount,
  tagList
}) => {
  return (
    <div className='flex flex-col pb-6 mb-6 border-b border-gray-200 border-dashed'>
      <div className='flex justify-between items-center h-10'>
        <Userinfo author={author} date={createdAt} />
        <PreviewFavorite slug={slug} favorited={favorited} favoritesCount={favoritesCount} />
      </div>

      <Link
        to={`/article/${slug}`}
        className='mt-4 mb-2 text-xl text-gray-800 hover:text-green-600 font-semibold line-clamp-2'
      >
        {title}
      </Link>

      <div className='text-gray-500 leading-6 line-clamp-4'>{description}</div>

      <div className='flex justify-between items-center mt-4'>
        <Link
          to={`/article/${slug}`}
          className='flex justify-start items-center gap-1 text-gray-400 hover:text-green-600'
        >
          Read more
          <RiArrowRightSLine />
        </Link>

        <div className='flex justify-end items-center gap-2'>
          <TagList tagList={tagList} />
        </div>
      </div>
    </div>
  )
}

export default ArticlePreview
