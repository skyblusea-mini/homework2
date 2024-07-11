import styled from '@emotion/styled'
import { Button } from '@mui/joy'
import { Outlet } from 'react-router-dom'

/** 메인 공통 레이아웃 */
const MainLayout = () => {
  return (
    <AppContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </AppContainer>
  )
}

export default MainLayout

const AppContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: var(--max-w);
  display: flex;
  `

/** AppBar 80px, BottomNav 60px로 설정
 *
*/
const MainContainer = styled.main`
  display: flex;
  flex:1;
  padding-top: var(--header-h);
`