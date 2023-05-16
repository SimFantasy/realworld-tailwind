import { createBrowserRouter, Navigate } from 'react-router-dom'
import { CheckAuth } from '@/components'

import { Layout } from '@/components'
import { Home, Auth, Profile, Editor, Settings, Article } from '@/pages'

const router = createBrowserRouter([
  { path: '/', element: <Navigate to='/home' /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/login', element: <Auth /> },
      { path: '/register', element: <Auth /> },
      { path: '/profile/:username', element: <Profile /> },
      {
        path: '/profile/@:username',
        element: (
          <CheckAuth>
            <Profile />
          </CheckAuth>
        )
      },
      {
        path: '/create',
        element: (
          <CheckAuth>
            <Editor />
          </CheckAuth>
        )
      },
      {
        path: '/update/:slug',
        element: (
          <CheckAuth>
            <Editor />
          </CheckAuth>
        )
      },
      {
        path: '/settings',
        element: (
          <CheckAuth>
            <Settings />
          </CheckAuth>
        )
      },
      { path: '/article/:slug', element: <Article /> }
    ]
  }
])

export default router
