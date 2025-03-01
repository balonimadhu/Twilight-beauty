import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/system";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  head: {
    backgroundColor: "#9B7EBD",
    padding: 10,
    fontColor: "#1D5D9B",
  },
});

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const classes = useStyles();
  const getproduct = async () => {
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <div>
      <Typography
        className={classes.head}
        sx={{ fontSize: 20, fontWeight: "bold", marginTop: 5, color: "white" }}
      >
        Top Categories
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ m: 3 }}
      >
        {products?.map((product, index) => (
          <>{index <= 5 && <ProductCard key={product.id} data={product} />}</>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
