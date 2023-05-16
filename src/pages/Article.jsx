import { queries } from '@/hooks'
import { Loading, ArticleMeta, TagList, Comment } from '@/components'

const Article = () => {
  const { data, isLoading } = queries.Article.useArticle()

  if (isLoading)
    return (
      <div className='flex justify-center items-center p-6'>
        <Loading />
      </div>
    )

  return (
    <div className='flex flex-col'>
      <div className='py-6 min-h-[120px] bg-gray-800'>
        <div className='container flex flex-col gap-4 text-white'>
          <h2 className='text-2xl font-semibold'>{data?.article?.title}</h2>
          <ArticleMeta
            slug={data?.article?.slug}
            author={data?.article?.author}
            createdAt={data?.article?.createdAt}
            favorited={data?.article?.favorited}
            favoritesCount={data?.article?.favoritesCount}
          />
        </div>
      </div>

      <div className='container flex flex-col py-6'>
        <article className='prose prose-lg max-w-none w-full'>{data?.article?.body}</article>
        <div className='flex justify-start items-center gap-2 h-10 my-6'>
          <TagList tagList={data?.article?.tagList} />
        </div>

        <div className='flex justify-center items-center py-6 border-t border-gray-200'>
          <ArticleMeta
            slug={data?.article?.slug}
            author={data?.article?.author}
            createdAt={data?.article?.createdAt}
            favorited={data?.article?.favorited}
            favoritesCount={data?.article?.favoritesCount}
          />
        </div>

        <div className='w-[60vw] mx-auto'>
          <Comment slug={data?.article?.slug} author={data?.article?.author} />
        </div>
      </div>
    </div>
  )
}

export default Article
