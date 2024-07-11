import {styled} from '@mui/joy'
import Card from '@mui/joy/Card/Card'

/** 기본 카드 박스 인터페이스 */
interface ICommonCardBox {
  children: React.ReactNode
}

/**
 * 기본 카드 박스
 * @property { React.ReactNode } children 요소
 * @returns React.JSX.Element
 * @description
 *  부모의 사이즈를 따라감
 * @description
 *  컨텐츠는 중앙정렬
 */
const CommonCardBox = (props: ICommonCardBox) => {
  const {children} = props
  return <CardEmotion variant="plain">{children}</CardEmotion>
}

export default CommonCardBox

const CardEmotion = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
`
