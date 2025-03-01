import React from "react";
import HomeSection from "./HomeSection";
import { Container } from "@mui/system";
import Header from "./Header";
import { Divider } from "@mui/material";
import ProductList from "./ProducList";
import { SliderPart } from "./SliderPart";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export const Layout = () => {
return(
    <>
     <Container>
     <Header />
     <HomeSection />
     <Divider />
        <ProductList />
        <SliderPart />
        <ContactSection />
      </Container>
      <Footer />
    </>
);
}