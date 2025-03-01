import React from "react";
import PropTypes from "prop-types";


export const Card = (props) => {
return (
    <>
    <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="myimg" className="card-img"/>
            <div className="card-info">
                <h3 className="card-title">{props.cardName}</h3>
            </div>
        </div>
    </div>
    </>
);
};
Card.propTypes = {
      cardName: PropTypes.string.isRequired,
      imgsrc: PropTypes.string,
 
  };
