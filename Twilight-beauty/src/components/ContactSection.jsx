import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Grid} from "@mui/system";
import Makeup1 from "./images/Makeup1.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    color: "#A64D79",
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
});

export const ContactSection = () => {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ backgroundColor: "#FFDFD6", marginTop: "20px" }}>
        <Grid container spacing={10}>
          <Grid size={6} xs={12} sm={12} lg={6}>
            <img src={Makeup1} width="100%"  />
          </Grid>
          <Grid size={6} xs={12} sm={12} lg={6} alignContent={"center"}>
            <Typography
              className={classes.title}
              fontSize={60}
              sx={{
                "@media(max-width:600px)": {
                  fontSize: "30px",
                  fontFamily: "cursive",
                },
              }}
            >
              Stay In Touch
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#A64D79", marginBottom: "10px" }}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
