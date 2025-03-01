import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "350px",
  borderRadius: "10px",
  border: "2px solid #000",
  boxShadow: "5px 5px 10px 10px #ccc",
  p: 4,
};

export default function Signup() {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/login");
  };

  const formValues = { name: "", email: "", password: "" };
  const [inputValues, setInputValues] = useState(formValues);
  const [validateErrors, setValidateErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleClick = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  // Validation function
  const validation = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // Check for blank fields
    if (!values.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!values.email.trim()) {
      errors.email = "Email is required.";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email format.";
    }
    if (!values.password.trim()) {
      errors.password = "Password is required.";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validation(inputValues);
    setValidateErrors(errors);

    if (Object.keys(errors).length > 0) {
      setIsSubmit(false);
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = existingUsers.some(
      (user) => user.email === inputValues.email
    );

    if (emailExists) {
      alert("User with this email already exists.");
    } else {
      existingUsers.push(inputValues);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      alert("Account successfully created");
      navigate("/login");
    }
  };

  useEffect(() => {
    if (Object.keys(validateErrors).length === 0 && isSubmit) {
      console.log(inputValues);
    }
  }, [validateErrors, isSubmit, inputValues]);

  return (
    <>
      <Box>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              fontSize: { xs: "1.5rem", sm: "2rem" },
              color: "#624e88",
              fontWeight: "bold",
              marginBottom: "1.2rem",
            }}
          >
            Create An Account
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box>
              <Box className="email-id">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  className="input"
                  name="name"
                  value={inputValues.name}
                  onChange={handleClick}
                  style={{ width: "21rem" }}
                />
                <Typography color="red">{validateErrors.name}</Typography>
              </Box>

              <Box className="email-id">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className="input"
                  name="email"
                  value={inputValues.email}
                  onChange={handleClick}
                  style={{ width: "21rem" }}
                />
                <Typography color="red">{validateErrors.email}</Typography>
              </Box>

              <Box className="email-id">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={inputValues.password}
                  onChange={handleClick}
                  style={{ width: "21rem" }}
                />
                <Typography color="red">{validateErrors.password}</Typography>
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
                SignUp
              </Button>
            </Box>

            <Box>
              <Button
                onClick={handleChange}
                className="btn"
                sx={{ marginTop: "0.5rem" }}
              >
                Go To Login
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
