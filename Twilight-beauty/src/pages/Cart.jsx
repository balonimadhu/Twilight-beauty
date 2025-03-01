import React, { useEffect, useState } from "react";
import { useMyContext } from "../context/ContextApi";
import { Box, Container, Grid } from "@mui/system";
import Header from "../components/Header";
import {
  Button,
  ListItemText,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, handleChange, handleRemove, clearCart } = useMyContext();
  const [price, setPrice] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUserName(storedUser.name);
      setIsLoggedIn(true);
    } else {
      clearCart();
    }
  }, []);

  //saving the item in cartPage when user add the any item
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  //to calculate total price
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += Math.round(item.quantity * item.price);
    });
    setPrice(total);
  }, [cart]);

  const increaseQuantity = (item) => {
    handleChange(item, 1);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      handleChange(item, -1);
    }
  };

  const removeItemFromCart = (id) => {
    handleRemove(id);
  };

  const handleBuyNowClick = () => {
    if (!isLoggedIn) {
      alert("please log in to process with the purchase");
      navigate("/login");
    } else {
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    clearCart();
    setOpenModal(false);
  };

  return (
    <>
      <Container>
        <Header />
        <Box sx={{ marginTop: "10rem" }}>
          {cart.length === 0 ? (
            <Typography variant="h6" align="center" color="textSecondary">
              Your cart is empty
            </Typography>
          ) : (
            cart?.map((item) => (
              <Grid
                key={item.id}
                container
                spacing={2}
                alignItems="center"
                sx={{ marginBottom: theme.spacing(2) }}
              >
                <Grid item xs={12} sm={3} md={2}>
                  <img
                    src={item.images}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "150px",
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={4} sx={{ width: "65%" }}>
                  <ListItemText
                    primary={item.title}
                    secondary={`$${item.price}`}
                  />
                </Grid>

                <Grid item xs={12} sm={3} md={3}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => increaseQuantity(item)}
                      sx={{ minWidth: "30px" }}
                    >
                      +
                    </Button>
                    <Typography variant="h6">{item.quantity}</Typography>

                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => decreaseQuantity(item)}
                      sx={{ minWidth: "30px" }}
                    >
                      -
                    </Button>

                    <Button
                      onClick={() => removeItemFromCart(item.id)}
                      sx={{
                        fontWeight: "bold",
                        height: "100%",
                        backgroundColor: "#9B7EBD",
                        color: "white",
                      }}
                    >
                      Remove
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            ))
          )}

          {cart.length > 0 && (
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: theme.spacing(4),
                justifyContent: "space-between",
              }}
            >
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginTop: "2rem" }}
                >
                  Total Price of your Cart - ${price}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      fontWeight: "bold",
                      padding: "10px 20px",
                      backgroundColor: "#9B7EBD",
                    }}
                    onClick={handleBuyNowClick}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>

      {/* Modal for order confirmation */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>
          <Typography variant="h6" align="center">
            Order Successfully Initiated
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" align="center">
            Hello, {userName}! Your order has been placed successfully. Thank
            you for your purchase!
          </Typography>
          <Typography variant="h5" align="center" sx={{ marginTop: "10px" }}>
            ${price}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseModal}
            sx={{
              backgroundColor: "#9B7EBD",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
