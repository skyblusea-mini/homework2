import { Box, Stack, styled, SvgIcon } from "@mui/joy";
import RoundButton from "@src/common/components/buttons/RoundButton";
import { FaHouse } from "react-icons/fa6";
import { PiMailboxFill } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";
import path from '@common/constants/router.constants'


export default function BottomNav() {
    return (
        <BottomNavWrapper
            direction="row"
            justifyContent="space-around"
            alignItems="stretch"
        >
            <IconBtn active={true}><FaHouse /></IconBtn>
            <IconBtn><PiMailboxFill /></IconBtn>
            <IconBtn><IoPerson /></IconBtn>
        </BottomNavWrapper>
    )
}


const BottomNavWrapper = styled(Stack)(
    ({ theme }) => ({
        position: 'fixed',
        bottom: 0,
        width: '100%',
        maxWidth: 'var(--max-w)',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 var(--padding-layout)',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 66.89%)',
    }),
);


const IconBtn = ({
    children,
    active
}: {
    children: React.ReactNode
    active?: boolean
}) => {
    return (
        <RoundButton to={path.voucher.root} size="lg" color={active ? 'primary' : 'neutral'} variant="solid">
            <SvgIcon color={active ? 'inherit' : 'primary'}>
                {children}
            </SvgIcon>
        </RoundButton>
    )
}