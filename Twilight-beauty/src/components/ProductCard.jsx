import React from "react";

import PropTypes from "prop-types";
import {Box,Button,Card,CardContent,CardMedia, Typography,} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useMyContext } from "../context/ContextApi";

const useStyle = makeStyles({
  contain: {
    display: "flex",
    flexWrap: "wrap",
    gap: 222,
  },
  icon: {
    color: "#AA5486",
    fontSize: 30,
    marginTop: 18,
  },
});

const ProductCard = ({ data }) => {
  const { addTocart } = useMyContext();

  const handleAddToCart = () => {
    addTocart(data);
  };

  const imageUrl = data.images ? data.images[0] : "default-image-url";

  const classes = useStyle();

  return (
    <Box className={classes.box}>
      <Card sx={{ maxWidth: "350px", minHeight: "33rem", maxHeight: "37rem" }}>
        <CardMedia
          height="200"
          component="img"
          image={imageUrl}
          alt={data.title}
        />
        <CardContent
          sx={{ maxHeight: "16rem", textAlign: "justify", minHeight: "16rem" }}
        >
          <Typography
            style={{
              color: "#A64D79",
              fontSize: 25,
              fontFamily: "sans-serif",
              lineHeight: 1,
            }}
          >
            {data.title}
          </Typography>
          <p
            style={{
              color: "#645CAA",
              fontSize: 18,
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
            }}
          >
            {data.description}
          </p>
          <p style={{ fontSize: 22, fontWeight: "bold" }}>${data.price}</p>
        </CardContent>
        <div className={classes.contain}>
          <Button
            onClick={handleAddToCart}
            style={{
              cursor: "pointer",
              fontSize: 15,
              textAlign: "center",
              position: "relative",
              backgroundColor: "#AA5486",
              color: "white",
              fontWeight: "bold",
              margin: 10,
              padding: 10,
            }}
          >
            Add
          </Button>
          <FavoriteBorderIcon className={classes.icon} />
        </div>
      </Card>
    </Box>
  );
};

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProductCard;
