import Stack from "@mui/joy/Stack"
import SvgIcon from "@mui/joy/SvgIcon"
import { HeaderWrapper } from "./MainHeader"
import { IoClose } from "react-icons/io5";
import LinkIconButton from "../buttons/LinkIconButton";


export default function ExitHeader() {

    return (
        <HeaderWrapper end={true}>
            <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={2}>
                <LinkIconButton to="/">
                    <SvgIcon><IoClose /></SvgIcon>
                </LinkIconButton>
            </Stack>
        </HeaderWrapper>
    )
}


