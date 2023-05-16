import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/service/apis'
import { actions } from '@/store/keyParam'
import { useParams } from 'react-router-dom'

const User = {
  useUserUpdate: () => {
    const queryClient = useQueryClient()
    return useMutation(api.User.update, {
      onSuccess: () => {
        queryClient.invalidateQueries(['/user'])
      }
    })
  },
  useLogin: options => useMutation(api.User.login, options),
  useRegister: options => useMutation(api.User.register, options)
}

const Profile = {
  useFollow: (slug, username, following) => {
    const queryClient = useQueryClient()
    return useMutation(
      following ? () => api.Profile.unfollow(username) : () => api.Profile.follow(username),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['/article', slug])
        }
      }
    )
  },
  useProfileFollow: (username, following) => {
    const queryClient = useQueryClient()
    return useMutation(
      following ? () => api.Profile.unfollow(username) : () => api.Profile.follow(username),
      {
        onSuccess: () => {
          queryClient.invalidateQueries([`/profile/${username}`])
        }
      }
    )
  }
}

const Article = {
  useArticleCreate: options => useMutation(api.Article.create, options),
  useArticleUpdate: options => {
    const { slug } = useParams()
    return useMutation(body => api.Article.update(slug, body), options)
  },
  useArticleDelete: options => useMutation(api.Article.delete, options)
}

const Comment = {
  useCommentCreate: slug => {
    const queryClient = useQueryClient()
    return useMutation(body => api.Comment.create(slug, body), {
      onSuccess: () => {
        queryClient.invalidateQueries([`/articles/${slug}/comments`])
      }
    })
  },
  useCommentDelete: (slug, id) => {
    const queryClient = useQueryClient()
    return useMutation(() => api.Comment.delete(slug, id), {
      onSuccess: () => {
        queryClient.invalidateQueries([`/articles/${slug}/comments`])
      }
    })
  }
}

const Favorite = {
  useFavorite: (slug, favorited) => {
    const queryClient = useQueryClient()
    const key = actions.getKey()

    return useMutation(
      favorited ? () => api.Favorite.unfavorite(slug) : () => api.Favorite.favorite(slug),
      {
        onSuccess: () => queryClient.invalidateQueries(key)
      }
    )
  },
  useDetailFavorite: (slug, favorited) => {
    const queryClient = useQueryClient()
    return useMutation(
      favorited ? () => api.Favorite.unfavorite(slug) : () => api.Favorite.favorite(slug),
      {
        onSuccess: () => queryClient.invalidateQueries(['/article', slug])
      }
    )
  }
}

export default { User, Profile, Article, Comment, Favorite }
