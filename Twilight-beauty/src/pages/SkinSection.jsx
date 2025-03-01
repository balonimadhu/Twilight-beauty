import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import Carousel from "react-material-ui-carousel";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Container} from "@mui/system";
import { useMyContext } from "../context/ContextApi";

const data = [
  {
    id: 40,
    title: "Cleansers",
    images:
      "https://brwn.in/cdn/shop/products/Hydrating_Facewash_1_1024x.png?v=1657285674",
    price: 600,
    description: "hello this is makeup product",
  },
  {
    id: 41,
    title: "Toner",
    images:
      "https://www.prolixr.in/cdn/shop/products/51ZeRlKwMrL_0227b44c-168c-47b3-8bb3-c2d8855649d2.jpg?v=1690893788",
    price: 500,
    description: "hello this is makeup product",
  },
  {
    id: 42,
    title: "Masks",
    images: "https://m.media-amazon.com/images/I/61PuYkBEN6L.jpg",
    price: 460,
    description: "hello this is makeup product",
  },
  {
    id: 43,
    title: "FaceWash",
    images:
      "https://wellify.in/cdn/shop/products/Kaolin-Clay-FW-TT3.jpg?v=1684328450",
    price: 450,
    description: "hello this is makeup product",
  },
  {
    id: 44,
    title: "Toner",
    images:
      "https://juicychemistry.com/cdn/shop/files/Australian-Sandalwood-and-Myrrh-Organic-Night-Cream.jpg?v=1723622568&width=1024",
    price: 400,
    description: "hello this is makeup product",
  },
  {
    id: 45,
    title: "NightCream",
    images:
      "https://www.lotusherbals.com/cdn/shop/files/YouthRXantiageingnightcreme_899b92bd-4855-4214-95da-73a3259112a3.jpg?v=1688806379",
    price: 400,
    description: "hello this is makeup product",
  },
];

export const SkinSection = () => {
  const { addTocart } = useMyContext();
  const handleAddToCart = (item) => {
    addTocart(item);
   
  };

  return (
    <>
      <Header />
      <Container>
        <Typography
          sx={{
            fontWeight: "bold",
            marginTop: 10,
            fontSize: 20,
            backgroundColor: "#9B7EBD",
            color: "white",
            padding: "10px",
          }}
        >
          Top Categories for Skin Cure
        </Typography>
        <Carousel
          autoplay={true}
          duration={2000}
          navButtonsAlwaysVisible={true}
          cycleNavigation={true}
        >
          {data?.map((element) => {
            const { title, images, price, description, id } = element;
            return (
              <Card key={id} sx={{ height:"800px", marginTop:"10px"}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="550"
                    image={images}
                    alt={title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ color: "#1D5D9B" }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#A64D79", fontSize:"1.2rem" }}
                    >
                      {description}
                    </Typography>
                    <p style={{fontSize:"1.3rem", fontWeight:"bold"}}>${price}</p>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button onClick={() => {handleAddToCart(element)}} sx={{color:"white", backgroundColor:"#9B7EBD"}}>
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Carousel>
      </Container>
      <Footer />
    </>
  );
};
