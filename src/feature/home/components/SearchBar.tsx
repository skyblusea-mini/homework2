import { Input, styled, SvgIcon } from "@mui/joy"
import { IoSearchOutline } from "react-icons/io5";


export default function SearchBar() {
    return (
        <StyledSearchBar startDecorator={<SvgIcon color="primary"><IoSearchOutline /></SvgIcon>}
            placeholder="Search" variant="solid" color="neutral" size="lg" />
    )

}


const StyledSearchBar = styled(Input)(
    ({ theme }) => ({
        '& .MuiInput-startDecorator': {
            color: theme.palette.primary.solidColor,
        },
    }),
);
