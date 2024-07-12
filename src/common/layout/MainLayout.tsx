import styled from '@emotion/styled'
import { Button } from '@mui/joy'
import { Outlet } from 'react-router-dom'

/** 메인 공통 레이아웃 */
const MainLayout = () => {
  return (
    <RootContainer>
      <Outlet />
    </RootContainer>
  )
}

export default MainLayout

const RootContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  max-width: var(--max-w);
  box-shadow: 0 0 16px rgba(50, 50, 50, .12);
  background-color: #fff;
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  `