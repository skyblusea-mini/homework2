import Grid from '@mui/joy/Grid';
import Product from '../components/Product';
import ExitHeader from '@src/common/components/header/ExitHeader';
import PaddingWContainer from '@src/common/layout/PaddingWContainer';


export default function ArtistFeedPage() {

    const today = new Date()

    const arr = new Array(10).fill({
        id: 1,
        name: '더보이즈 영훈',
        date: today,
        img: 
    });

    return (
        <>
            <ExitHeader />
            <PaddingWContainer>
                <Grid container>
                    <Grid xs={4}>
                        {arr.map((item, i) => (
                            <Product key={i} item={item} />
                        ))}
                    </Grid>
                </Grid>
            </PaddingWContainer>
        </>
    )
}