import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri'
import cx from 'clsx'
import { mutations } from '@/hooks'

const PreviewFavorite = ({ slug, favorited, favoritesCount }) => {
  const { mutate, isLoading } = mutations.Favorite.useFavorite(slug, favorited)

  return (
    <button
      className={cx(
        'px-3 py-1 flex justify-center items-center gap-1 border rounded text-sm',
        {
          'border-green-300 text-green-500 bg-gray-50 hover:bg-green-300 hover:text-white':
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
      {favorited ? <RiHeart3Fill /> : <RiHeart3Line />}
      <span>{favoritesCount}</span>
    </button>
  )
}

export default PreviewFavorite
