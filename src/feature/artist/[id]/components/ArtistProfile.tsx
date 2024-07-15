import styled from "@emotion/styled"
import YH from './wh.png'
import { styled as Muistyled } from '@mui/joy/styles';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


export default function ArtistProfile() {
    return (
        <Card sx={{
            position: 'relative',
            aspectRatio: '6/4',
            pl: 'var(--padding-layout)',
            pr: 'var(--padding-layout)',
            backgroundColor: 'transparent',
            border: 'none',
            overflow: 'hidden',
            ml: `calc(-1 * var(--padding-layout))`,
            mr: `calc(-1 * var(--padding-layout))`,
            background: 'linear-gradient(180deg,rgba(217, 217, 217, 0) 0%,rgba(200, 200, 200, 0.1) 12%,rgba(180, 180, 180, 0.2) 24.69%,rgba(159, 159, 159, 0.4) 37%,rgba(140, 140, 140, 0.5) 50%,rgba(130, 130, 130, 0.55) 62%,rgba(115, 115, 115, 0.57) 74%,rgba(115, 115, 115, 0.5) 84.52%,rgba(120, 120, 120, 0.3) 88%,rgba(125, 125, 125, 0.1) 91.48%,rgba(115, 115, 115, 0) 100%)',
            ':after': {
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%',
                content: '""',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 63.94%, rgba(255, 255, 255, 0.1) 65.89%, rgba(255, 255, 255, 0.2) 67.83%, rgba(255, 255, 255, 0.3) 69.78%, rgba(255, 255, 255, 0.4) 71.72%, rgba(255, 255, 255, 0.5) 73.67%, rgba(255, 255, 255, 0.6) 75.61%, rgba(255, 255, 255, 0.7) 77.56%, rgba(255, 255, 255, 0.8) 79.5%, rgba(255, 255, 255, 0.85) 81.44%, rgba(255, 255, 255, 0.9) 83.39%, rgba(255, 255, 255, 0.92) 85.33%, rgba(255, 255, 255, 0.94) 87.28%, rgba(255, 255, 255, 0.96) 89.22%, rgba(255, 255, 255, 0.98) 91.17%, rgba(255, 255, 255, 1) 93%, rgba(255, 255, 255, 1) 100%)'

            }
        }}>
            <ImgWrapper>
                <Img src={YH} alt="artist-img" />
            </ImgWrapper>
            <CardContent sx={{
                display: 'flex',
                justifyContent: 'end',
                height: '100%',
                paddingBottom: 'var(--padding-lg)',
            }}>
                <Typography level="title-lg">더보이즈</Typography>
                <Typography level="h1">영훈</Typography>
            </CardContent>
        </Card>
    )
}






const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ImgWrapper = styled.div`
  position: absolute;
  right: var(--padding-layout);
  bottom: 0;
  height: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: var(--radius-md);
`


//TODO 그라데이션 수정하기
const ProfileCardCover = Muistyled(CardCover)(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    aspectRatio: '6/4',
    overflow: 'hidden',
}))


