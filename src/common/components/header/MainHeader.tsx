import styled from "@emotion/styled"
import Logo from '@assets/logo.png'
import { BsQrCodeScan } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { Stack, SvgIcon } from "@mui/joy"


interface MainHeaderProps extends HeaderWrapperProps {

}

/** 메인페이지 헤더
 * @param bgColor - 배경색
 */
export default function MainHeader({ bgColor }: MainHeaderProps) {
    return (
        <HeaderWrapper bgColor={bgColor}>
            <img src={Logo} alt="logo" />
            <Stack direction="row" spacing={2}>
                <SvgIcon color="primary"><BsQrCodeScan /></SvgIcon>
                <SvgIcon color="primary"><FaBell /></SvgIcon>
            </Stack>
        </HeaderWrapper>
    )
}


interface HeaderWrapperProps {
    bgColor?: string
}

/** 기본 헤더 컨테이너
 * @param bgColor - 배경색
 */
const HeaderWrapper = styled.header<HeaderWrapperProps>`
    height: var(--header-h);
    width: 100%;
    max-width: var(--max-w);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.bgColor ?? 'transparent'};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    padding: var(--padding-layout);
    img{
      height: 100%;
    }
`