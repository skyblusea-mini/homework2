import MainHeader from "@src/common/components/header/MainHeader"
import PaddingWContainer from "@src/common/layout/PaddingWContainer"
import SearchBar from "../components/SearchBar"
import ArtistGrid from "../components/ArtistGrid"
import { Box } from "@mui/joy"
import BottomNav from "../components/BottonNav"

/**
 * 홈 메인 페이지
 */
const HomePage = () => {
  return (
    <>
      <MainHeader />
      <PaddingWContainer>
        <SearchBar />
        <Box sx={{ mt: 'var(--margin-md)' }}>
          <ArtistGrid title="My Artist" artists={[artists[0]]} />
          <ArtistGrid title="Artist" artists={artists} />
        </Box>
      </PaddingWContainer>
      <BottomNav />
    </>
  )
}

export default HomePage


const artists = [
  {
    id: '1',
    name: '상연',
    img: 'https://i.namu.wiki/i/8LKPzzwI20fWaGhOfC1rUoDD4OVTESdSYuZ3LX_-rkFrOOD4o0WfZ7YRJio8zEFFb4lPIFkQD_ysM5-2DsxoNQ.webp',
  },
  {
    id: '2',
    name: '상연',
    img: 'https://i.namu.wiki/i/8LKPzzwI20fWaGhOfC1rUoDD4OVTESdSYuZ3LX_-rkFrOOD4o0WfZ7YRJio8zEFFb4lPIFkQD_ysM5-2DsxoNQ.webp',
  },
  {
    id: '3',
    name: '상연',
    img: 'https://i.namu.wiki/i/8LKPzzwI20fWaGhOfC1rUoDD4OVTESdSYuZ3LX_-rkFrOOD4o0WfZ7YRJio8zEFFb4lPIFkQD_ysM5-2DsxoNQ.webp',
  },
  {
    id: '4',
    name: '상연',
    img: 'https://i.namu.wiki/i/8LKPzzwI20fWaGhOfC1rUoDD4OVTESdSYuZ3LX_-rkFrOOD4o0WfZ7YRJio8zEFFb4lPIFkQD_ysM5-2DsxoNQ.webp',
  },
  {
    id: '5',
    name: '상연',
    img: 'https://i.namu.wiki/i/8LKPzzwI20fWaGhOfC1rUoDD4OVTESdSYuZ3LX_-rkFrOOD4o0WfZ7YRJio8zEFFb4lPIFkQD_ysM5-2DsxoNQ.webp',
  },
  {
    id: '6',
    name: '상연',
    img: 'https://i.namu.wiki/i/8LKPzzwI20fWaGhOfC1rUoDD4OVTESdSYuZ3LX_-rkFrOOD4o0WfZ7YRJio8zEFFb4lPIFkQD_ysM5-2DsxoNQ.webp',
  },
  {
    id: '7',
    name: '상연',
    img: 'https://i.namu.wiki/i/8LKPzzwI20fWaGhOfC1rUoDD4OVTESdSYuZ3LX_-rkFrOOD4o0WfZ7YRJio8zEFFb4lPIFkQD_ysM5-2DsxoNQ.webp',
  },
  {
    id: '8',
    name: '상연',
    img: 'https://i.namu.wiki/i/8LKPzzwI20fWaGhOfC1rUoDD4OVTESdSYuZ3LX_-rkFrOOD4o0WfZ7YRJio8zEFFb4lPIFkQD_ysM5-2DsxoNQ.webp',
  },
  {
    id: '9',
    name: '상연',
    img: 'https://i.namu.wiki/i/8LKPzzwI20fWaGhOfC1rUoDD4OVTESdSYuZ3LX_-rkFrOOD4o0WfZ7YRJio8zEFFb4lPIFkQD_ysM5-2DsxoNQ.webp',
  },
  {
    id: '10',
    name: '상연',
    img: 'https://i.namu.wiki/i/8LKPzzwI20fWaGhOfC1rUoDD4OVTESdSYuZ3LX_-rkFrOOD4o0WfZ7YRJio8zEFFb4lPIFkQD_ysM5-2DsxoNQ.webp',
  },
  {
    id: '11',
    name: '상연',
    img: 'https://i.namu.wiki/i/8LKPzzwI20fWaGhOfC1rUoDD4OVTESdSYuZ3LX_-rkFrOOD4o0WfZ7YRJio8zEFFb4lPIFkQD_ysM5-2DsxoNQ.webp',
  },
  {
    id: '12',
    name: '상연',
    img: 'https://i.namu.wiki/i/8LKPzzwI20fWaGhOfC1rUoDD4OVTESdSYuZ3LX_-rkFrOOD4o0WfZ7YRJio8zEFFb4lPIFkQD_ysM5-2DsxoNQ.webp',
  },
]