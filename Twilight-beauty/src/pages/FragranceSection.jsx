import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { Container, Grid } from "@mui/system";
import { useMyContext } from "../context/ContextApi";

const data = [
  {
    id: 30,
    title: "Blue De Chanel Perfume for women EDP 100ml",
    images:
      "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1240/bleu-de-chanel-parfum-spray-5fl-oz--packshot-default-107190-8819960250398.jpg",
      price:4000,
  },
  {
    id: 31,
    title: "Skinn by Titan Pristine 50 ML Perfume for Women EDP",
    images:
      "https://www.skinn.in/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Skinn-product-catalog/default/dwee610838/images/Skinn/hi-res/FW05PGL_2.jpg?sw=360&sh=360",
      price:4500,
  },
  {
    id:32,
    title: "SKINN Tales Malaga Eau De Parfum for Women 100 ml",
    images:
      "https://www.skinn.in/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Skinn-product-catalog/default/dw6b85538f/images/Skinn/hi-res/FW20PC1_1.jpg?sw=640",
      price:3000,
  },
  {
    id: 33,
    title: "Berry Berry perfume for women 100ml",
    images:
      "https://olgaperfume.com/cdn/shop/files/Red_Tobacco_Notes-03.jpg?v=1705313733&width=720",
      price:4500,
  },
  {
    id: 34,
    title: "Secret Perfume for Women 100ml ",
    images:
      "https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_1240/coco-mademoiselle-eau-de-parfum-intense-spray-6-8fl-oz--packshot-default-116670-9541403312158.jpg",
      price:2500,
  },
];

export default function FragranceSection() {
  const { addTocart } = useMyContext();
  const handleAddToCart = (item) => {
    addTocart(item);
    console.log(item);
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
          New Arrivals
        </Typography>
        <Grid container spacing={12} sx={{ flexGrow: 1 }}>
          {data?.map((element) => {
            const { id, title, images,price } = element;
            return (
              <Grid key={id} item size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ width: 400, height: 350, marginTop: 10 }}>
                  <div>
                    <Typography
                      sx={{
                        fontSize: "1.3rem",
                        marginTop: "1rem",
                        textAlign: "center",
                        color: "#9B7EBD",
                        fontWeight: "bold",
                      }}
                    >
                      {title}
                    </Typography>
                  </div>

                  <img
                    src={images}
                    alt="perfume"
                    width="250px"
                    style={{
                      marginLeft: "4rem",
                      marginTop: "3rem",
                      minHeight: "6rem",
                      maxHeight: "8rem",
                      maxWidth: "100%",
                    }}
                  />

                  <CardContent orientation="horizontal">
                    <div style={{ display: "flex", marginTop: "1rem" }}>
                      <Typography
                        sx={{ fontSize: "1.3rem", fontWeight: "bold" }}
                      >$
                      {price}
                      </Typography>
                      <Button
                        onClick={() => {
                          handleAddToCart(element);
                        }}
                        variant="solid"
                        size="md"
                        color="primary"
                        aria-label="Explore Bahamas Islands"
                        sx={{
                          ml: "auto",
                          alignSelf: "center",
                          fontWeight: "bold",
                          backgroundColor: "#A64D79",
                          color: "white",
                        }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
