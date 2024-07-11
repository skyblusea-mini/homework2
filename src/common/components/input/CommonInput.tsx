import {styled} from '@mui/joy/styles'
import InputBase, {InputProps} from '@mui/joy/Input'

/** 기본 input 요소 인터페이스 */
interface ICommonInput extends InputProps {}

/**
 * 기본 input 요소
 * @returns React.JSX.Element
 */
const CommonInput = (props: ICommonInput) => {
  return (
    <InputEmotion
      fullWidth
      {...props}
      sx={{
        '--Input-focusedThickness': 0,
      }}
    />
  )
}

export default CommonInput

const InputEmotion = styled(InputBase)`
  border: none;
  border-radius: 12px;
  background-color: var(--Sup-G-Color);
  .MuiInput-input {
    color: var(--Faded-Ash);
    font-size: 13px;
    background-color: var(--Sup-G-Color);
    &::placeholder {
      color: var(--Faded-Ash);
    }
  }
`
