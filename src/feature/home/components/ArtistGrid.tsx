import { Grid, Typography } from "@mui/joy";
import ImgCard from "@src/common/components/card/ImgCard";
import ImgLabelCard from "@src/common/components/card/ImgLabelCard";
import { Link } from "react-router-dom";

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
                        <Link to="/artist/0">
                            <ImgLabelCard src={artist.img} alt={artist.name} label={artist.name} />
                        </Link>
                    </Grid>
                ))}
            </Grid>

        </>
    )
}