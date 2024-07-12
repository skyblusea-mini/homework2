import { Grid, Typography } from "@mui/joy";
import ImgCard from "@src/common/components/card/ImgCard";
import ImgLabelCard from "@src/common/components/card/ImgLabelCard";

type Artist = {
    id: string
    name: string
    img: string
}


interface ArtistGridProps {
    title?: string;
    artists: Artist[]
}




export default function ArtistGrid({
    title,
    artists
}: ArtistGridProps) {
    return (
        <>
            {title && <Typography gutterBottom level="h1">{title}</Typography>}
            <Grid container sx={{ flexGrow: 1 }} spacing={3}>
                {artists.map(artist => (
                    <Grid xs={6} key={artist.id}>
                        <ImgLabelCard src={artist.img} alt={artist.name} label={artist.name} />
                    </Grid>
                ))}
            </Grid>

        </>
    )
}