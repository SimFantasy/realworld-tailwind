import { queries } from '@/hooks'
import { Loading } from '@/components'

const Tags = () => {
  const { data, isLoading } = queries.Default.useTags()
  return (
    <div className='flex flex-col w-full bg-white border rounded'>
      <div className='px-4 py-3 text-gray-800 font-semibold'>Popular Tags</div>
      {isLoading ? (
        <div className='flex justify-center items-center p-6'>
          <Loading />
        </div>
      ) : (
        <div className='flex justify-start flex-wrap gap-2 p-4 pt-2'>
          {data.tags.map(tag => (
            <span
              className='px-3 py-0.5 rounded-xl bg-green-100 text-sm text-gray-600 hover:bg-green-200 hover:text-greay-800 cursor-pointer'
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Tags
