import { useEffect, useState } from 'react'
import { ProfileBanner, Loading, ArticleList } from '@/components'
import cx from 'clsx'
import { queries } from '@/hooks'
import { actions } from '@/store/keyParam'
import { PAGE_SIZE } from '@/constants/config'

const Profile = () => {
  const [currentTab, setCurrentTab] = useState('favorited')
  const [myPage, setMyPage] = useState(1)
  const [favoritedPage, setFavoritedPage] = useState(1)
  const myOffset = (myPage - 1) * PAGE_SIZE
  const favoritedOffset = (favoritedPage - 1) * PAGE_SIZE

  const { data, isLoading, isSuccess } = queries.Profile.useProfile()
  const author = data?.profile?.username
  const favorited = data?.profile?.username
  const { data: myData, isLoading: myIsLoading } = queries.Article.useArticleMy(myOffset, author)
  const { data: favoritedData, isLoading: favoritedIsLoaidng } =
    queries.Article.useArticleFavorited(favoritedOffset, favorited)

  useEffect(() => {
    if (currentTab === 'favorited') {
      actions.setKey(`/articles/${favorited}/favorited`, favoritedOffset)
    } else {
      actions.setKey(`/articles/${author}`, myOffset)
    }
  }, [favoritedOffset, myOffset, currentTab, author, favorited])

  return (
    <div className='flex flex-col gap-10'>
      {isLoading || myIsLoading ? (
        <div className='flex justify-center items-center p-6'>
          <Loading />
        </div>
      ) : (
        <>
          <ProfileBanner {...data?.profile} />

          <div className='container flex flex-col'>
            <div className='tabs'>
              <div
                className={cx('tab-item', { active: currentTab === 'my' })}
                onClick={() => setCurrentTab('my')}
              >
                My Article
              </div>
              <div
                className={cx('tab-item', { active: currentTab === 'favorited' })}
                onClick={() => setCurrentTab('favorited')}
              >
                Favorite Article
              </div>
            </div>
          </div>

          <div className='container'>
            {currentTab === 'favorited' ? (
              <ArticleList
                data={favoritedData}
                isLoading={favoritedIsLoaidng}
                page={favoritedPage}
                setPage={setFavoritedPage}
              />
            ) : (
              <ArticleList
                data={myData}
                isLoading={myIsLoading}
                page={myPage}
                setPage={setMyPage}
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Profile
