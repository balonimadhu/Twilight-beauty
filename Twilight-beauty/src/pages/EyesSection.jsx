import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Container, Grid } from "@mui/system";
import { useMyContext } from "../context/ContextApi";

const data = [
  {
    id: 20,
    title: "EyeShadow",
    images: "https://www.chanel.com/images//t_one//w_0.43,h_0.43,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1240/les-beiges-healthy-glow-natural-eyeshadow-palette-cool-0-16oz--packshot-default-184196-9537002569758.jpg",
    price: 600,
    description: "hello this is makeup product",
  },
  {
    id: 21,
    title: "Muscara",
    images:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTLavv1VldgLDKjtPi9HRNTBgPe_wyaMGowyqhdaGicpCY5QraCLFZ_Sit98P6UNNwWYFpoPJJ10aFfiwpDhO4RNBYKxhvTf6ZgC3MfoWDP6rSJqPwFuHZe",
    price: 700,
    description: "hello this is makeup product",
  },
  {
    id: 22,
    title: "kajal",
    images:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbNxCVYzmIwJEiI_0hV55oRVFV5sbWVAns8KNolK2cH94E8421DcECDRFdnG1Vn-2gZHCYHbYLcCIaxVRjo_b8mKUEJ_Xsz5PTJbCUBwZcnazsxBb-5-kLOg",
    price: 460,
    description: "hello this is makeup product",
  },
  {
    id: 23,
    title: "Glitter",
    images: "https://files.myglamm.com/site-images/800x800/r1.png",
    price: 450,
    description: "hello this is makeup product",
  },
  {
    id: 24,
    title: "Primers",
    images:
     "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXQgTbqXs9Eq1Vr0qF8NIjHWxnTqB2BhD3SYvftiDndt-cavy39G-3wR4N0DfnRdOm0Bsff1zNQBw-6euhNySNrYoGXRnvzSXKrc3Nc9Ox",
    price: 400,
    description: "hello this is makeup product",
  },
  {
    id: 25,
    title: "Shiner",
    images:
      "https://images-static.nykaa.com/media/catalog/product/a/b/abffdf38901030968747_1.jpg?tr=w-344,h-344,cm-pad_resize",
    price: 400,
    description: "hello this is makeup product",
  },
];

export const EyesSection = () => {
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
          Top Categories for Eye Makeup
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          sx={{ xs: 4, sm: 8, md: 12, m: 3 }}
        >
          {data?.map((element) => {
            const { id,title, images, price, description } = element;
           
            console.log(element);
            return (
              <Card key={id} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="350"
                    width="500"
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
                      sx={{ color: "#A64D79", fontSize: "1.2rem" }}
                    >
                      {description}
                    </Typography>
                    <p style={{ fontSize: "1.3rem" }}>${price}</p>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    onClick={ () => {handleAddToCart(element)}}
                    style={{
                      backgroundColor: "#9B7EBD",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};
