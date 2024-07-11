import React from 'react'
import styled from '@emotion/styled'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Input, {InputProps} from '@mui/joy/Input'
import {useMemo} from 'react'
import {SlClose} from 'react-icons/sl'

/** label input 인터페이스 */
interface ILabelInput extends Omit<InputProps, 'value' | 'onChange'> {
  /** input 상단 라벨 */
  label: string
  /** input value */
  value: string
  /** onChange 이벤트는 value string 만을 제공해줌  */
  onChange: (value: string) => void
}

/**
 * label input 컴포넌트
 * @property { string } label input label
 * @property { value } label input value
 * @property { (value: string) => void } onChange onChange 이벤트
 * @returns React.JSX.Element
 */
const LabelInput = (props: ILabelInput) => {
  const {label, value, onChange} = props

  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  /** value 초기화 이벤트 */
  const textDeleteHandler = () => {
    onChange('')
  }

  /** text 길이에 따라 지우기 버튼 활성화 */
  const isIconButton = useMemo(() => {
    const isValue = value?.length > 0
    return isValue ? (
      <Button type="button" onClick={textDeleteHandler}>
        <SlClose color={`var(--Modern-Gray)`} />
      </Button>
    ) : (
      <></>
    )
  }, [value?.length])

  return (
    <Form required color="primary">
      <FormLabel required={false}>{label}</FormLabel>
      <Input
        {...props}
        onChange={onChangeEvent}
        endDecorator={isIconButton}
        value={value}
        autoComplete="off"
        fullWidth
        size="md"
        variant="plain"
        sx={{
          '--Input-focusedThickness': 0,
        }}
      />
    </Form>
  )
}

export default LabelInput

const Form = styled(FormControl)`
  border-radius: 0;
  position: relative;
  .MuiFormLabel-root {
    padding-left: 1rem;
    font-size: 10px;
    color: var(--Faded-Ash);
  }
  .MuiInput-root {
    color: var(--Faded-Ash);
    border-radius: 0;
    background-color: transparent;
    &::placeholder {
      color: var(--Faded-Ash);
    }
  }
  border-bottom: 1px solid var(--Main-B-Color);
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 2px;
`
