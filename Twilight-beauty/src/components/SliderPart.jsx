import { React } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from "./Data";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CardData } from "./CardData";

const useStyles = makeStyles({
  head: {
    backgroundColor: "#9B7EBD",
    padding: 10,
    fontColor: "#1D5D9B",
    color: "white",
  },
});

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1004, min: 465 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const SliderPart = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.head}
        sx={{ fontWeight: "bold", marginBottom: 5, fontSize: 20 }}
      >
        New Arrivals
      </Typography>

      <Carousel responsive={responsive}>
        {Data.map((data, index) => (
          <CardData
            key={index}
            cname={data.cname}
            imgsrc={data.imgsrc}
          />
        ))}
      </Carousel>
    </>
  );
};
