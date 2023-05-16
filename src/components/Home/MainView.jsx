import { useState, useEffect } from 'react'
import cx from 'clsx'
import { ArticleList } from '@/components'
import { queries, useAuth } from '@/hooks'
import { actions } from '@/store/keyParam'
import { PAGE_SIZE } from '@/constants/config'

const MainView = () => {
  const { isAuth } = useAuth()
  const [currentTab, setCurrentTab] = useState('global')
  const [globalPage, setGlobalPage] = useState(1)
  const [feedPage, setFeedPage] = useState(1)

  const glboaloffset = (globalPage - 1) * PAGE_SIZE
  const feedoffset = (feedPage - 1) * PAGE_SIZE

  const { data: globalData, isLoading: glboalIsLoading } =
    queries.Article.useArticlesGlobal(glboaloffset)

  const { data: feedData, isLoading: feedIsLoading } = queries.Article.useArticlesFeed(feedoffset)

  useEffect(() => {
    if (currentTab === 'global') {
      actions.setKey('/articles', glboaloffset)
    } else {
      actions.setKey('/articles/feed', feedoffset)
    }
  }, [glboaloffset, feedoffset, currentTab])

  return (
    <div className='flex flex-col w-full'>
      <div className='tabs'>
        <div
          className={cx('tab-item', { active: currentTab === 'feed' })}
          onClick={() => setCurrentTab('feed')}
        >
          You Feed
        </div>
        <div
          className={cx('tab-item', { active: currentTab === 'global' })}
          onClick={() => setCurrentTab('global')}
        >
          Global Feed
        </div>
      </div>
      <div className='my-6'>
        {currentTab === 'global' ? (
          <ArticleList
            data={globalData}
            isLoading={glboalIsLoading}
            page={globalPage}
            setPage={setGlobalPage}
          />
        ) : (
          <ArticleList
            data={feedData}
            isLoading={feedIsLoading}
            page={feedPage}
            setPage={setFeedPage}
          />
        )}
      </div>
    </div>
  )
}

export default MainView
