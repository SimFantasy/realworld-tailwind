import { ArticlePreview, Loading, Pagination } from '@/components'
import { PAGE_SIZE } from '@/constants/config'

const ArticleList = ({ data, isLoading, page, setPage }) => {
  if (isLoading)
    return (
      <div className='flex justify-center items-center p-6'>
        <Loading />
      </div>
    )

  const totalPage = Math.ceil(data?.articlesCount / PAGE_SIZE)

  const handleChangePage = newPage => {
    setPage(newPage)
  }
  return (
    <div className='flex flex-col'>
      {data?.articles.length === 0 ? (
        <div className='flex justify-center items-center p-6 text-gray-400'>
          No articles are here... yet.
        </div>
      ) : (
        data?.articles.map(article => <ArticlePreview key={article.slug} {...article} />)
      )}
      <div className='w-full flex justify-center items-center p-6'>
        <Pagination totalPage={totalPage} page={page} onChange={handleChangePage} />
      </div>
    </div>
  )
}

export default ArticleList
