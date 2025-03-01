import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useMyContext } from "../context/ContextApi";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles({
badge : {
  color: 'white',
}
});

export default function CartIcon() {
  const classes = useStyles();
  const { cart } = useMyContext();
  return (
    <>
      <div>
        <Badge badgeContent={cart?.length || "0"} className={classes.badge}>
          <ShoppingCartIcon />
        </Badge>
      </div>
    </>
  );
}
