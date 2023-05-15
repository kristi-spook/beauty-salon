import React, { useState } from "react";
import logo from "../../Elements/Salonname.png";
import { useNavigate } from "react-router-dom";

import {
  StyledMainDiv,
  StyledImgDiv,
  StyledSignInDiv,
  StyledFormWrapper,
  Styledform,
} from "./SignInPage.styled";

export default function SignIn() {
  const [stylistName, setStylistName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const handleStylistNameChange = (event) => {
    setStylistName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (stylistName === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", true);
      navigate("/registry");
    } else {
      setLoginError(true);
    }
  };

  return (
    <StyledMainDiv>
      <StyledImgDiv>
        <img
          src="https://lovehairstyles.com/wp-content/uploads/2022/08/tp-shades-of-red-hair.jpg"
          alt=""
        />
      </StyledImgDiv>
      <StyledSignInDiv>
        <StyledFormWrapper>
          <img src={logo} alt="logo" />
          <Styledform onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Stylist"
              value={stylistName}
              onChange={handleStylistNameChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit">Log In</button>
          </Styledform>
          {loginError && (
            <p style={{ color: "red" }}>
              Invalid information. Please try again.
            </p>
          )}
        </StyledFormWrapper>
      </StyledSignInDiv>
    </StyledMainDiv>
  );
}

