import fetcher from './fetcher'

const User = {
  login: async user => await fetcher.post('/users/login', { user }),
  register: async user => await fetcher.post('/users', { user }),
  view: async () => fetcher('/user'),
  update: async user => {
    console.log('user', user)
    return fetcher.put('/user', { user })
  }
}

const Profile = {
  view: async username => await fetcher(`/profiles/${username}`),
  follow: async username => await fetcher.post(`/profiles/${username}/follow`),
  unfollow: async username => await fetcher.delete(`/profiles/${username}/follow`)
}

const Article = {
  feed: async (limit, offset) => await fetcher('/articles/feed', { params: { limit, offset } }),
  global: async (limit, offset) => await fetcher('/articles', { params: { limit, offset } }),
  my: async (limit, offset, author) =>
    await fetcher('/articles', { params: { limit, offset, author } }),
  favorited: async (limit, offset, favorited) =>
    await fetcher('/articles', { params: { limit, offset, favorited } }),
  create: async article => await fetcher.post('/articles', { article }),
  view: async slug => await fetcher(`/articles/${slug}`),
  update: async (slug, article) => await fetcher.put(`/articles/${slug}`, { article }),
  delete: async slug => await fetcher.delete(`/articles/${slug}`)
}

const Comment = {
  all: async slug => await fetcher(`/articles/${slug}/comments`),
  create: async (slug, body) =>
    await fetcher.post(`/articles/${slug}/comments`, { comment: { body } }),
  delete: async (slug, id) => await fetcher.delete(`/articles/${slug}/comments/${id}`)
}

const Favorite = {
  favorite: async slug => await fetcher.post(`/articles/${slug}/favorite`),
  unfavorite: async slug => await fetcher.delete(`/articles/${slug}/favorite`)
}

const Default = {
  tags: async () => await fetcher('/tags')
}

export default {
  User,
  Profile,
  Article,
  Comment,
  Favorite,
  Default
}
