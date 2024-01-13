import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
// import { useRecoilValue } from 'recoil';
// import {ProductsState} from '../recoil/Products'

const ProductCards = ({Data}) => {
    // const [Data]=useRecoilValue(ProductsState)
    console.log("Data",Data)
    const nav = useNavigate()
    const handleClick = (id,name,Description,image) => {
        console.log("values",id,name,Description,image)
        nav('/projectDetails', { state: { productId: id, productName:name,productDescription: Description ? Description:" ",productImg:image } })
    }
    return (
        <div style={{ margin: "10px 0", display: "flex", flexWrap: "wrap" }}>

            {
                Data &&
                Data.map(item => (
                    <Card key={item.id} sx={{ maxWidth: 215, marginRight: "15px", maxHeight: "330px", marginBottom: "10px", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
                        <CardMedia
                            sx={{ maxHeight: 230, height: "100%", width: "100%", objectFit: "cover", minWidth:215}}
                            component="img"
                            image={item.productImgPath}
                            title={item.productName}
                        />
                        <CardContent style={{ padding: "10px" }}>
                            <h3 style={{ margin: "5px" }}>{item.productName}</h3>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => handleClick(item.id,item.productName,item.productDescription,item.productImgPath)}>More Details</Button>
                        </CardActions>
                    </Card>
                )
                )
                
            }

            {/* <Card sx={{ minWidth: 215, marginRight: "15px", maxHeight: "330px", marginBottom: "10px" }}>
                <CardMedia
                    sx={{ maxHeight: 230, height: "100%", width: "100%", objectFit: "cover" }}
                    component="img"
                    image="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/m/a/i/-original-imagrcjkpwzzbttr.jpeg?q=70"
                    title="Digital Watch"
                />
                <CardContent style={{ padding: "10px" }}>
                    <h2 style={{ margin: "5px" }}>Digital Watch</h2>
                </CardContent>
                <CardActions>
                    <Button size="small">More Details</Button>
                </CardActions>
            </Card> */}
        </div>
    )
}

    export default ProductCards