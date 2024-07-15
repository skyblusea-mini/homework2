import ExitHeader from "@src/common/components/header/ExitHeader"
import PaddingWContainer from "@src/common/layout/PaddingWContainer"
import ArtistProfile from "./components/ArtistProfile"
import Grid from "@mui/joy/Grid"
import SquareButton from "@src/common/components/buttons/SquareButton"
import { IoCall } from "react-icons/io5";
import { GrSend } from "react-icons/gr";
import { ButtonProps, styled as MuiStyled } from "@mui/joy"
import ArtistGoods from "./components/ArtistGoods"
import { Link } from "react-router-dom"



export default function ArtistPage() {
    return (
        <>
            <ExitHeader />
            <PaddingWContainer>
                <ArtistProfile />
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <RecoloredButton
                            fullWidth
                            color="neutral"
                            startDecorator={<IoCall />}
                        >
                            전화
                        </RecoloredButton>
                    </Grid>
                    <Grid xs={6}>
                        <RecoloredButton
                            fullWidth
                            color="neutral"
                            startDecorator={<GrSend />}
                        >
                            편지
                        </RecoloredButton>
                    </Grid>
                    <Grid xs={12}><Link to="/artist/0/feed"><SquareButton fullWidth>상품 등록 QR</SquareButton>
                    </Link></Grid>
                </Grid>
                <ArtistGoods />
            </PaddingWContainer>
        </>
    )
}


const RecoloredButton = MuiStyled(SquareButton)<{ color: ButtonProps['color'] }>
    (({ theme, color }) => ({
        ...(color === 'neutral' && {
            color: theme.palette.primary[500],
        }),
    }));
