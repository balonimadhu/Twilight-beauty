import { Button} from "@mui/material";
import React from "react";
import Banner from "./images/Banner.jpg";
import "./styles/HomeSection.css";
// import { useNavigate } from "react-router-dom";

const HomeSection = () => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //    navigate("/")
  // }
  return (
    <>
    
        <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
          <div className="content">
            <h1 className="header">Welcome To Twilight Beauty</h1>
            <p className="para">
              Elegance comes from being as beautiful inside as outside.
            </p>
            <Button className="custom-button" size="larger">
              ORDER NOW
            </Button>
          </div>
        </div>
      
   
    </>
  );
};

export default HomeSection;
