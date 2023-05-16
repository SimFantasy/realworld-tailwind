import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import api from '@/service/apis'
import { PAGE_SIZE } from '@/constants/config'
import { useAuth } from '@/hooks'

const User = {
  useUserQuery: () => useQuery(['/user'], api.User.view)
}

const Profile = {
  useProfile: () => {
    const { username } = useParams()
    return useQuery([`/profile/${username}`], () => api.Profile.view(username))
  }
}

const Article = {
  useArticlesGlobal: offset => {
    return useQuery(['/articles', offset], () => api.Article.global(PAGE_SIZE, offset), {
      keepPreviousData: true
    })
  },
  useArticlesFeed: offset => {
    const { isAuth } = useAuth()
    return useQuery(['/articles/feed', offset], () => api.Article.feed(PAGE_SIZE, offset), {
      keepPreviousData: true,
      enabled: !!isAuth
    })
  },
  useArticle: options => {
    const { slug } = useParams()
    return useQuery(['/article', slug], () => api.Article.view(slug), options)
  },
  useArticleMy: (offset, author, options) => {
    return useQuery(
      [`/articles/${author}`, offset],
      () => api.Article.my(PAGE_SIZE, offset, author),
      options
    )
  },
  useArticleFavorited: (offset, favorited, options) => {
    return useQuery(
      [`/articles/${favorited}/favorited`, offset],
      () => api.Article.favorited(PAGE_SIZE, offset, favorited),
      options
    )
  }
}

const Comment = {
  useComment: slug => useQuery([`/articles/${slug}/comments`], () => api.Comment.all(slug))
}

const Default = {
  useTags: () => useQuery(['/tags'], api.Default.tags)
}

export default { User, Profile, Article, Comment, Default }
