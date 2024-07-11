import Box from '@mui/joy/Box'
import ImgCard from '@common/components/card/ImgCard'
import { IImgCard } from '@common/components/card/interface/card.interface'
import CommonTypo, { TTypo } from '@common/components/typo/CommonTypo'
import styled from '@emotion/styled'
import { CSSProperties } from 'react'

/** 이미지 라벨 카드 컴포넌트 인터페이스 */
interface IImgLabelCard extends IImgCard {
  label: string
  labelOption?: TTypo
  spacing?: number
  style?: CSSProperties
}

/**
 * 이미지 라벨 카드 컴포넌트
 * @property { string } label
 * @property { TTypo } labelOption label text 옵션
 * @returns React.JSX.Element
 */
const ImgLabelCard = ({ src, alt, label, labelOption, style, spacing }: IImgLabelCard) => {
  const spacingToNumber = spacing ?? 8

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ImgCard src={src} alt={alt} />
      <Space spacing={spacingToNumber} />
      <CommonTypo sx={style} {...labelOption}>
        {label}
      </CommonTypo>
    </Box>
  )
}

export default ImgLabelCard

interface SpaceProps {
  spacing?: number
}
/** 이미지와 라벨사이 간격 컴포넌트
 * @property { number } spacing 간격
*/
const Space = styled.div<SpaceProps>`
  margin-top : ${props => props.spacing}px;
`
