import {Box, Toolbar, Typography,Tabs,Tab, AppBar,Link,useTheme,useMediaQuery,} from "@mui/material";
import React, { useState } from "react";
import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
import PersonIcon from "@mui/icons-material/Person";
import { makeStyles } from "@mui/styles";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";
import { DrawerComp } from "./DrawerComp";

const pages = ["Home", "Eyes", "Skin", "Hair", "Fragrance"];

const useStyles = makeStyles({
  icon: {
    color: "white",
    display: "flex",
    gap: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    flexGrow: 1,
  },
});

const Header = () => {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/${pages[newValue]}`);

    switch (newValue) {
      case 0:
        navigate("/home");
        break;
      case 1:
        navigate("/eyes");
        break;
      case 2:
        navigate("/skin");
        break;
      case 3:
        navigate("/hair");
        break;
      case 4:
        navigate("/fragrance");
        break;
      default:
        navigate("/");
        break;
    }
  };
  const handleClick = () => {
    navigate("/add-to-cart");
  };
  const handleOpen = () => {
    navigate("/login");
  };

  return (
    <AppBar sx={{ backgroundColor: "#EE66A6" }}>
      <Toolbar
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "white", display: "flex", alignItems: "center" }}
        >
          <LocalMallSharpIcon sx={{ marginRight: 1 }} />
          Twilight
          <span
            style={{
              color: "#640D5F",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Beauty
          </span>
        </Typography>
        {isMatch ? (
          <>
            <DrawerComp />
          </>
        ) : (
          <>
            <Tabs value={value} onChange={handleTabChange}>
              {pages.map((page, index) => (
                <Tab key={index} label={page} style={{ color: "white" }} />
              ))}
            </Tabs>
          </>
        )}
        <SearchBar />
        <Box className={classes.icon}>
          <Link onClick={handleOpen}>
            <PersonIcon sx={{color:"white"}}/>
          </Link>

          <Link component="button" onClick={handleClick}>
            <CartIcon />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
