import MainLayout from '@src/common/layout/MainLayout'
import { createBrowserRouter } from 'react-router-dom'
import path from '@common/constants/router.constants'
// import Mypage from '@src/feature/mypage/page/Mypage'
import HomePage from '@src/feature/home/page/HomePage'
import ArtistPage from '@src/feature/artist/[id]/ArtistPage'
import ArtistFeedPage from '@src/feature/artist/[id]/feed/ArtistFeedPage'

/** root Router */
const rootRouter: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: path.home.root,
        element: <HomePage />,
      },
      {
        path: path.mypage.root,
        // element: <Mypage />,
      },
      {
        path: "/artist/:id",
        element: <ArtistPage />,
      },
      {
        path: "/artist/:id/feed",
        element: <ArtistFeedPage />,
      },
    ],
  },
])

export default rootRouter
