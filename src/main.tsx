import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import rootRouter from '@router/rootRouter'
import GlobalStyle from '@common/styles/GlobalStyle'
import MUIThemeProvider from '@common/styles/MUItheme'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <MUIThemeProvider>
    <GlobalStyle />
    <RouterProvider router={rootRouter} />
  </MUIThemeProvider>
)
