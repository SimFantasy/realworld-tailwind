import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri'
import cx from 'clsx'
import { mutations } from '@/hooks'

const DetailFavorite = ({ slug, favorited, favoritesCount }) => {
  const { mutate, isLoading } = mutations.Favorite.useDetailFavorite(slug, favorited)

  return (
    <button
      className={cx(
        'px-3 py-1 flex justify-center items-center gap-1 border rounded text-sm',
        {
          'border-green-500 text-green-500 bg-transparent hover:border-green-300 hover:text-green-300':
            !favorited
        },
        {
          'border-green-500 text-white bg-green-500 hover:bg-green-600 hover:border-green-600':
            favorited
        }
      )}
      onClick={() => mutate()}
      disabled={isLoading}
    >
      {favorited ? (
        <>
          <RiHeart3Fill />
          <span>Unfavorite Article ({favoritesCount})</span>
        </>
      ) : (
        <>
          <RiHeart3Line />
          <span>favorite Article ({favoritesCount})</span>
        </>
      )}
    </button>
  )
}

export default DetailFavorite
