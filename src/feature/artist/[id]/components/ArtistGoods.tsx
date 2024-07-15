import Grid from '@mui/joy/Grid';
import Product from './Product';

export default function ArtistGoods() {

    const arr = new Array(10).fill({
        id: 1,
        tag: '단독판매 예약판매',
        name: 'Voice Message',
        price: 13000,
    });

    return (
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid xs={6}>
                {arr.map((item, i) => (
                    <Product key={i} item={item} />
                ))}
            </Grid>
        </Grid>
    )
}




