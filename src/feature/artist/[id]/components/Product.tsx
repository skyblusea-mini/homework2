import ImgCard from "@src/common/components/card/ImgCard";
import ProductPhoto from "./product.png";
import Typography from '@mui/joy/Typography';


interface ProductProps {
    item: any;
}


export default function Product({ item }: ProductProps) {
    return (
        <>
            <ImgCard src={ProductPhoto} alt="product1" />
            <Typography color="primary" level={"body-sm"}>{item.tag}</Typography>
            <Typography level={"body-md"}>{item.name}</Typography>
            <Typography level={"body-md"}>{item.price}</Typography>
        </>
    )
}
