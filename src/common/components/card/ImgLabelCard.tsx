import Box from '@mui/joy/Box'
import ImgCard from '@common/components/card/ImgCard'
import {IImgCard} from '@common/components/card/interface/card.interface'
import CommonTypo, {TTypo} from '@common/components/typo/CommonTypo'
import styled from '@emotion/styled'
import {CSSProperties} from 'react'

/** 이미지 라벨 카드 컴포넌트 인터페이스 */
interface IImgLabelCard extends IImgCard {
  label: string
  labelOption?: TTypo
  style?: CSSProperties
}

/**
 * 이미지 라벨 카드 컴포넌트
 * @property { string } label
 * @property { TTypo } labelOption label text 옵션
 * @returns React.JSX.Element
 */
const ImgLabelCard = ({src, alt, label, labelOption, style}: IImgLabelCard) => {
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
      <Space />
      <CommonTypo sx={style} {...labelOption}>
        {label}
      </CommonTypo>
    </Box>
  )
}

export default ImgLabelCard

const Space = styled.div`
  margin-top: 16px;
`
