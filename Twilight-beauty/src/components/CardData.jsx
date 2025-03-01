import React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  card: {
    border: 1,
    backgroundColor: "#F0C1E1",
  },

  cardimg: {
    height: 400,
    width: 500,
    background: "cover",
    margin: "30px 25px",
  },
  cardinfo: {
    display: "flex",
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "cursive",
    fontWeight: "bolder",
    fontSize: "30px",
    color: "#A64D79",
  },
});

export const CardData = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.card} >
      <img src={props.imgsrc} alt="myimg" className={classes.cardimg} />
      <div className={classes.cardinfo}>
        <h3 className={classes.title}>{props.cname}</h3>
      </div>
    </div>
  );
};
CardData.propTypes = {
  Data: PropTypes.shape({
    cname: PropTypes.string.isRequired,
    imasrc: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
