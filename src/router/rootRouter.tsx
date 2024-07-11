import MainLayout from '@src/common/layout/MainLayout'
import { createBrowserRouter } from 'react-router-dom'
import homeRouter from '@router/home/homeRouter'
import path from '@common/constants/router.constants'

/** root Router */
const rootRouter = createBrowserRouter([
  {
    path: path.home,
    element: <MainLayout />,
    children: [...homeRouter]
  }
])

export default rootRouter
