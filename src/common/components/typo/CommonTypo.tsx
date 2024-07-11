import {TypographySystem} from '@mui/joy/styles/types/typography'
import Typography, {TypographyProps} from '@mui/joy/Typography'

/** typo 인터페이스 */
export interface TTypo extends TypographyProps {
  /** 형식
   * @description ex) h1, h2, h3
   */
  level?: keyof TypographySystem | 'inherit'
  /** font size */
  fontSize?: number
  /** text */
  children: React.ReactNode
}

/**
 * common typo 컴포넌트
 * @property { TypographySystem | 'inherit' } level ex) h1, h2, h3
 * @property { number } fontSize
 * @property { string } text
 * @returns React.JSX.Element
 */
const CommonTypo = (props: TTypo) => {
  const {children, fontSize, level} = props
  return (
    <Typography level={level} fontSize={fontSize} {...props}>
      {children}
    </Typography>
  )
}

export default CommonTypo
