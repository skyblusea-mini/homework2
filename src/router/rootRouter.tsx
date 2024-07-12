import MainLayout from '@src/common/layout/MainLayout'
import { createBrowserRouter } from 'react-router-dom'
import path from '@common/constants/router.constants'
// import Mypage from '@src/feature/mypage/page/Mypage'
import HomePage from '@src/feature/home/page/HomePage'

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
    ],
  },
])

export default rootRouter
