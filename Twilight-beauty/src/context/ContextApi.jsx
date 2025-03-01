import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createContext } from "react";

const MyContext = createContext();

const localStorageCart = JSON.parse(localStorage.getItem("cartData") || "[]");

export const useMyContext = () => {
  return useContext(MyContext);
};

export default function ContextApi({ children }) {
  const [cart, setCart] = useState(localStorageCart);

  //adding cartItem in cart
  const addTocart = (data) => {
    console.log(data, "hello");
    const isItemInCart = cart?.find((item) => item?.id === data?.id);

    isItemInCart
      ? alert("This data is already in cart")
      : setCart([...cart, { ...data, quantity: 1 }]);
  };

  //to updating cart when new cart added by user
  const handleChange = (item, x) => {
    const updatedCart = cart?.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + x };
      }
      return cartItem;
    });
    setCart(updatedCart);
  };
  //to remove cartitem from cart
  const handleRemove = (id) => {
    const UpdateCart = cart?.filter((item) => item.id !== id);
    setCart(UpdateCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  //to store cartdata in localStorage
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <MyContext.Provider
        value={{
          cart,
          setCart,
          addTocart,
          handleChange,
          handleRemove,
          clearCart,
        }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
}
//prop validation
ContextApi.PropTypes = {
  children: PropTypes.node.isRequired,
};
export { MyContext };
