import CommonCardBox from '@common/components/card/CommonCardBox'
import styled from '@emotion/styled'
import {IImgCard} from '@common/components/card/interface/card.interface'

/**
 * Img card 컴포넌트
 * @property { string } propsName 설명
 * @returns React.JSX.Element
 */
const ImgCard = ({src, alt}: IImgCard) => {
  return (
    <CommonCardBox>
      <Img src={src} loading="lazy" alt={alt} />
    </CommonCardBox>
  )
}

export default ImgCard

const Img = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`
