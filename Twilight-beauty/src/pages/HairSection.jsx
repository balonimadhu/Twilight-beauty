import React from 'react';
import Header from '../components/Header';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Container, Grid } from '@mui/system';
import { Footer } from '../components/Footer';
import { useMyContext } from '../context/ContextApi';

const data = [
    {
      id: 10,
      title: "Hair Serum",
      images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63Yix99XaTUI-NV-Taeg-6jTDPXRO_un2Jgtk4jQxfmkex18lxao7TBoAAlFFDC5jERk&usqp=CAU",
      price: 600,
      description: "hello this is makeup product",
    },
    {
      id: 11,
      title: "Hair Oil",
      images:
        "https://sacredgrove.in/cdn/shop/files/Hairgrowthoil8thfeb.png?v=1707389168&width=1300",
      price:500,
      description: "hello this is makeup product",
    },
    {
      id: 12,
      title: "Shampoo",
      images:
        "https://qaadu.com/cdn/shop/files/SHAMPOOO.jpg?v=1682514519",
      price: 460,
      description: "hello this is makeup product",
    },
    {
      id: 13,
      title: "Conditioner",
      images: "https://www.ravelcare.com/cdn/shop/files/Ravel09_1296x.jpg?v=1714300253",
      price: 450,
      description: "hello this is makeup product",
    },
    {
      id: 14,
      title: "Hair Grow Oil",
      images:
        "https://www.jiomart.com/images/product/original/rv0ghkc8xd/herbalsupport-advanced-hair-growth-serum-for-hair-fall-control-discover-thick-and-dense-hair-30ml-product-images-orv0ghkc8xd-p604147947-0-202308282352.png?im=Resize=(1000,1000)",
      price: 400,
      description: "hello this is makeup product",
    },
    {
      id: 15,
      title: "Serum",
      images:
        "https://m.media-amazon.com/images/I/61yNUAlXaGL.jpg",
      price: 400,
      description: "hello this is makeup product",
    },
    
  ];

export default function HairSection() {
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
            padding : "10px"
          }}
        >
          Top Categories for Eye Makeup
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          sx={{ m: 3 }}
        >
          {data?.map((element) => {
            const { title, images, price, description, id } = element;
            return (
              <Grid key={id}  item size={{ xs: 12, sm: 6, md: 4 }}>
              <Card  sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="350"
                    maxWidth="600"
                    image={images}
                    alt={title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{color:"#1D5D9B"}}>
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#A64D79", fontSize:"1.2rem" }}
                    >
                      {description}
                    </Typography>
                    <p style={{fontSize:"1.3rem"}}>${price}</p>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button onClick = {() => {handleAddToCart(element)}} style={{backgroundColor:"#A64D79", color:"white", fontWeight:"bold"}}>
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
              </Grid>
            );
          })}
          
        </Grid>
      </Container>

      <Footer/>
        
    </>
  );
};
