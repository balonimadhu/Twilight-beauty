import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  borderRadius: "10px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: "5px 5px 10px 10px #ccc",
  p: 4,
};

export default function Login() {
  const navigate = useNavigate();

 
  const formValues = { email: "", password: "" };
  const [inputValues, setInputValues] = useState(formValues);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedInUser");
    if (loggedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleClick = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedUser = users.find(
      (user) =>
        user.email === inputValues.email &&
        user.password === inputValues.password
    );
    if (loggedUser) {
    
      global.localStorage.setItem("loggedInUser", JSON.stringify(loggedUser));
      setIsLoggedIn(true); 
      navigate("/home");
    } else {
      alert("Wrong credentials");
    }
  };

  
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); 
    setIsLoggedIn(false); 
    navigate("/login"); 
  };

  
  const handleChange = () => {
    navigate("/signup");
  };

  return (
    <>
      <Container>
        <Box>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{
                fontSize: "2rem",
                color: "#624e88",
                fontWeight: "bold",
                marginBottom: "1.2rem",
              }}
            >
              {isLoggedIn ? "Welcome" : "Login"}
            </Typography>
            {!isLoggedIn ? (
              <form onSubmit={handleSubmit}>
                <Box>
                  <Box className="email-id">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      className="input"
                      name="email"
                      value={inputValues.email}
                      onChange={handleClick}
                      style={{ width: "21rem" }}
                      required
                    />
                  </Box>
                  <Box className="email-id">
                    <label htmlFor="pass">Password</label>
                    <br />
                    <input
                      className="input"
                      type="password"
                      name="password"
                      value={inputValues.password}
                      onChange={handleClick}
                      style={{ width: "21rem" }}
                      required
                    />
                  </Box>
                </Box>
                <Box>
                  <Button
                    type="submit"
                    sx={{
                      backgroundColor: "#624e88",
                      color: "white",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      marginTop: "2rem",
                    }}
                  >
                    Login
                  </Button>
                </Box>
                <Box>
                  <Typography sx={{ marginTop: "1rem", color: "#624e88" }}>
                    Do not have an account
                  </Typography>
                  <Button
                    onClick={handleChange}
                    className="btn"
                    sx={{ marginTop: "0.5rem" }}
                  >
                    Go To SignUp
                  </Button>
                </Box>
              </form>
            ) : (
              <Box>
                <Typography sx={{ marginTop: "1rem", color: "#624e88" }}>
                  You are logged in!
                </Typography>
                <Button
                  onClick={handleLogout}
                  sx={{
                    backgroundColor: "#624e88",
                    color: "white",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    marginTop: "2rem",
                  }}
                >
                  Logout
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}
