import React from "react";
import styled from "styled-components";
import LogoDark from "../Images/Logo-Dark.png";
import Button from "../Common/Button";
import LaunchPadGraphic from "../../Images/LaunchPadGraphic.png";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";

interface Props {
  theme: string;
}

const Container = styled.div<Pick<Props, "theme">>`
  min-width: 100vw;
  min-height: 90vh;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 100;
  position: relative;
  background: #6f2dc3;
  background: -webkit-radial-gradient(center, #6f2dc3, #57118b);
  background: -moz-radial-gradient(center, #6f2dc3, #57118b);
  background: radial-gradient(ellipse at center, #6f2dc3, #57118b);

  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-image: url(background-dark.png);
    background-size: cover;
    background-position: center;
  }

  h1 {
    color: white;
    font-size: 35px;
    font-family: "AkzidensGrotesk", sans-serif;
    margin: 100px;
    width: 100vw;
    text-align: center;

    @media screen and (max-width: 500px) {
      font-size: 27.5px;
    }
  }

  img {
    width: 128px;
    height: 128px;
  }
`;

const Landing: React.FC<Props> = (props) => {
  return (
    <>
      <Container>
        <h1>ELEVATE</h1>
        <img src="logo512.png" />
        <h1>WEBSITE UNDER CONSTRUCTION</h1>
      </Container>
    </>
  );
};

export default Landing;
