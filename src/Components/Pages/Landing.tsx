import React from "react";
import styled from "styled-components";
import LogoDark from "../Images/Logo-Dark.png";
import Button from "../Common/Button";
import LaunchPadGraphic from "../../Images/LaunchPadGraphic.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";

interface Props {
  theme: string;
}

const Container = styled.div<Pick<Props, "theme">>`
  width: 100vw;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  z-index: 1;
  opacity: 100;
  position: relative;
  background: #6f2dc3;
  background: -webkit-radial-gradient(center, #6f2dc3, #57118b);
  background: -moz-radial-gradient(center, #6f2dc3, #57118b);
  background: radial-gradient(ellipse at center, #6f2dc3, #57118b);

  .top-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .top-container::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url("top-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.25;
  }
`;

const Nav = styled.div`
  align-self: flex-start;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  font-family: "Azonix", sans-serif;

  @media screen and (max-width: 1000px) {
    padding: 30px 50px;
  }

  align-items: center;
  justify-content: center;

  img {
    width: 145px;
    height: 50px;
  }

  div {
    display: flex;
    align-items: center;
    margin-left: auto;

    @media screen and (max-width: 1000px) {
      padding: 30px 0px 30px 0px;
    }

    span {
      border-radius: 15px;
      background-color: white;
      font-size: 12.5px;
      padding: 5px 10px;
      font-family: "Azonix", sans-serif;

      margin-left: 10px;
      font-weight: bold;

      @media screen and (max-width: 1000px) {
        margin-left: auto;
        font-size: 15px;
        padding: 10px 15px;
      }
    }
  }

  .item {
    font-size: 15px;
    padding: 5px 10px;
    margin: 0px;
    font-weight: bold;
    color: white;

    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 60px 100px 40px 100px;
  position: relative;

  @media screen and (max-width: 1000px) {
    padding: 60px 50px 40px 50px;
  }

  div {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
  }

  .rocket {
    position: absolute;
    right: 0;
    z-index: 1;
    top: 50px;
    height: 1000px;
    width: 750px;
    opacity: 0.75;

    @media screen and (max-width: 1000px) {
      opacity: 0.5;
    }
  }

  .button-cont {
    display: flex;
    width: 100%;
    z-index: 2;

    span {
      font-size: 15px;
      font-weight: bold;
      color: white;
      border: 2px solid white;
      padding: 7.5px 12.5px;
      border-radius: 15px;
      margin-right: 10px;
    }
  }

  h1 {
    font-size: 50px;
    width: 80%;
    font-family: "Azonix", sans-serif;
    z-index: 2;
    color: white;
  }
`;

const WelcomeContainer = styled.div`
  width: 100%;
  display: flex;
  z-index: 2;
  position: relative;
  padding: 0 100px;

  @media screen and (max-width: 1000px) {
    padding: 0px 50px;
  }

  .coin {
    opacity: 0.75;
    position: absolute;
    left: 0;
    top: 150px;
    height: 750px;
    width: 500px;

    @media screen and (max-width: 1000px) {
      opacity: 0.5;
    }

    @media screen and (max-width: 750px) {
      display: none;
    }
  }

  div {
    width: 50%;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  img {
    width: 250px;
  }

  h1 {
    font-size: 15px;
    width: 100%;
    color: white;
  }

  .info-container {
    width: 100%;

    p:first-child {
      margin-top: 10px;
    }

    p {
      font-size: 15px;
      z-index: 2;
      font-weight: bold;
      width: 100%;
      color: white;
      margin-top: 5px;
    }
  }
`;

const WelcomeExtendedContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 50px 100px;

  @media screen and (max-width: 1000px) {
    padding: 50px 50px;
  }

  z-index: 3;
  div {
    width: 60%;
    display: flex;
    margin-left: auto;
    flex-wrap: wrap;

    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  p {
    font-size: 15px;
    width: 100%;
    font-weight: bold;

    color: white;
    margin-top: 5px;
  }
`;

const Landing: React.FC<Props> = (props) => {
  return (
    <>
      <Container>
        <div className="top-container">
          <Nav>
            <img src="logo.png" />
            <div>
              <h1 className="item">ABOUT</h1>
              <h1 className="item">CRF</h1>
              <h1 className="item">ROADMAP</h1>
              <h1 className="item">ECOSYSTEM</h1>
              <h1 className="item">THE DAPPS</h1>
              <span>LAUNCH DAO</span>
            </div>
          </Nav>
          <HeadingContainer>
            <div>
              <img className="rocket" src="rocket.png"></img>
              <h1>THE FIRST COMMUNITY DRIVEN IMPACT LAUNCHPAD</h1>
              <div className="button-cont">
                <span>Whitepaper</span>
                <span>Launch DAO</span>
              </div>
            </div>
          </HeadingContainer>
          <WelcomeContainer>
            <div>
              <img src="coin.png" className="coin" />
              <h1>WELCOME TO</h1>
              <img src="logo.png" />
              <div className="info-container">
                <p>
                  ElevatePAD is a community run, decentralized IDO platform for legitimate and impactful ESG (Environmental, Social and Governance)
                  projects.
                </p>
                <p>
                  Unlike other launchpads, ElevatePAD will only introduce projects with real world utility that address the wide variety of
                  humanitarian and ecological beliefs.
                </p>
              </div>
            </div>
          </WelcomeContainer>
          <WelcomeExtendedContainer>
            <div>
              <p>
                Which projects within crypto today, will be around tommorrow? It will be the projects that address the problems of our present as well
                as our future. ElevatePAD will help develop projects with real world utility. They are aligned with ESG (Environmental, Social and
                Governance) principles.
              </p>
              <p>
                DeFi (Decentralized Finance), blockchain and Web 3.0 are still in their infancy, As these spaces continue to mature and gain
                foundational solidity in global society, all use cases going forward must be directed towards the integration of processes that
                address the wider variety of humanitarian and ecological issues affecting our planet. ElevatePAD will lead the DeFi industry by
                becoming the premier decentralized launchpad for legitimate and impactful ESG projects.
              </p>
              <p>
                ElevatePAD was initiall developed by the founders of Ponyo impact, an innovative Auto-Impact token, with a focus on Coral Restoration.
                The Ponyo Impact team had a greater vision to help other legitimate ESG impact projects come to life. Beyond the initail development
                and conception of ElevatePAD, our future lies in the collective voice of our community that will push forward the ethos of DeFi. The
                backbone of Elevate is our strong community and potential gloabl reach.
              </p>
            </div>
          </WelcomeExtendedContainer>
        </div>
      </Container>
    </>
  );
};

export default Landing;
