import React, { useRef } from "react";
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
    position: relative;
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
    opacity: 0.85;
  }

  .mid-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #5927b4;
  }
`;

const Nav = styled.div`
  align-self: flex-start;
  width: 100%;
  padding: 30px 12.5%;
  display: flex;
  font-family: "Azonix", sans-serif;

  @media screen and (max-width: 1000px) {
    padding: 30px 20px;
  }

  @media screen and (max-width: 350px) {
    padding: 30px 20px;
  }

  align-items: center;
  justify-content: center;

  img {
    height: 40px;

    @media screen and (max-width: 550px) {
      height: 25px;
    }

    @media screen and (max-width: 1000px) {
      height: 20px;
    }
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
    z-index: 100;
    cursor: pointer;

    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 60px 12.5% 40px 12.5%;
  position: relative;

  @media screen and (max-width: 1000px) {
    padding: 60px 20px 40px 20px;
  }

  div {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  .rocket {
    position: absolute;
    right: 0;
    z-index: 1;
    top: 50px;
    height: 60em;
    width: 45em;
    opacity: 0.85;

    @media screen and (max-width: 1000px) {
      opacity: 0.5;
    }
  }

  .button-cont {
    display: flex;
    width: 100%;
    z-index: 2;

    a {
      text-decoration: none;
      border: 2px solid white;
      padding: 12.5px 15px;
      border-radius: 15px;
      font-size: 10px;
      font-weight: bold;
      color: white;
      text-transform: uppercase;

      margin-right: 10px;
      font-family: "Monument", sans-serif;
    }

    span {
      @media screen and (max-width: 1000px) {
      }
    }
  }

  h1 {
    font-size: 3.6rem;
    width: 90%;
    font-family: "Monument", sans-serif;
    z-index: 2;
    margin-bottom: 0;
    color: white;

    @media screen and (max-width: 550px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 350px) {
      font-size: 2rem;
    }
  }
`;

const WelcomeContainer = styled.div`
  width: 100%;
  display: flex;
  z-index: 2;
  position: relative;
  padding: 0 12.5% 2.5vw 12.5%;

  @media screen and (max-width: 1000px) {
    padding: 0px 20px;
  }

  .coin {
    opacity: 1;
    position: absolute;
    left: 0;
    top: 450px;
    height: 50em;
    width: 35em;

    @media screen and (max-width: 1000px) {
      opacity: 0.5;
    }

    @media screen and (max-width: 750px) {
      /* display: none; */
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
    width: 50%;
  }

  h1 {
    font-size: 1.3rem;
    width: 100%;
    color: white;
    font-family: "Monument", sans-serif;
  }

  .info-container {
    width: 100%;
    padding-bottom: 150px;
    padding-top: 50px;

    p:first-child {
      margin-top: 10px;
    }

    p {
      font-size: 1rem;
      font-family: "Archivo", sans-serif;
      z-index: 2;
      font-weight: 500;
      width: 90%;
      color: white;
      line-height: 30px;
      letter-spacing: 1px;
      margin-top: 15px;
    }
  }
`;

const WelcomeExtendedContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 12.5% 50px 12.5%;

  @media screen and (max-width: 1000px) {
    padding: 30px 20px;
  }

  z-index: 3;
  div {
    width: 55%;
    display: flex;
    margin-left: auto;
    flex-wrap: wrap;

    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  p {
    font-size: 1rem;
    width: 90%;
    font-weight: 500;
    font-family: "Archivo", sans-serif;
    color: white;
    margin-top: 40px;
    margin-left: auto;
    line-height: 30px;
    letter-spacing: 1px;

    @media screen and (max-width: 1000px) {
      width: 100%;
      margin-left: none;
    }
  }
`;

const RoadmapContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 100px 12.5%;
  z-index: 8;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
    padding: 0px 20px;
  }

  h1 {
    font-size: 3.6rem;
    width: 90%;
    font-family: "Monument", sans-serif;
    z-index: 2;

    text-align: center;
    margin-bottom: 0;
    color: white;

    @media screen and (max-width: 1000px) {
      font-size: 2.5rem;
    }
  }

  .roadmap-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 50px;

    img {
      width: 70%;
      z-index: 8;

      @media screen and (max-width: 1200px) {
        width: 100%;
      }

      @media screen and (max-width: 850px) {
        width: 125%;
      }

      @media screen and (max-width: 650px) {
        width: 90vw;
      }
    }
  }
`;

const CRFContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 25px 12.5%;
  z-index: 5;
  position: relative;
  @media screen and (max-width: 1000px) {
    padding: 0px 50px;
  }

  img.coral-circle {
    right: -50px;
    top: -12.5%;
    height: 60em;
    width: 60em;
    z-index: 6;
    position: absolute;

    @media screen and (max-width: 1000px) {
      opacity: 0.5;
    }
  }

  .crf-content {
    width: 40%;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 1000px) {
      width: 100%;
    }

    h1 {
      font-size: 3.6rem;
      width: 90%;
      font-family: "Monument", sans-serif;
      z-index: 10;
      margin-bottom: 0;
      color: white;

      @media screen and (max-width: 1000px) {
        font-size: 2rem;
        width: 100%;
      }
    }

    p {
      font-size: 1rem;
      font-family: "Archivo", sans-serif;
      z-index: 10;
      font-weight: 500;
      width: 90%;
      color: white;
      line-height: 30px;
      letter-spacing: 1px;
      margin-top: 15px;
    }

    img {
      width: 90px;
      z-index: 7;
      margin-top: 20px;
    }
  }
`;

const EcosystemContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 200px 12.5% 25px 12.5%;
  z-index: 7;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1000px) {
    padding: 50px 20px;
  }

  .ecosystem-image-container {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 60%;

      @media screen and (max-width: 1000px) {
        width: 100%;
      }
    }
  }

  h1 {
    font-size: 3.6rem;
    text-align: center;
    width: 90%;
    font-family: "Monument", sans-serif;
    z-index: 2;
    margin-bottom: 0;
    color: white;

    @media screen and (max-width: 1000px) {
      font-size: 2rem;
      width: 100%;
    }
  }
`;

const Landing: React.FC<Props> = (props) => {
  const aboutRef = useRef(null);
  const crfRef = useRef(null);
  const roadmapRef = useRef(null);
  const ecosystemRef = useRef(null);

  return (
    <>
      <Container>
        <div className="top-container">
          <Nav>
            <img src="logo.png" />
            <div>
              <h1 onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })} className="item">
                ABOUT
              </h1>
              <h1 onClick={() => crfRef.current.scrollIntoView({ behavior: "smooth" })} className="item">
                CRF
              </h1>
              <h1 onClick={() => roadmapRef.current.scrollIntoView({ behavior: "smooth" })} className="item">
                ROADMAP
              </h1>
              <h1 onClick={() => ecosystemRef.current.scrollIntoView({ behavior: "smooth" })} className="item">
                ECOSYSTEM
              </h1>
              <h1 className="item">THE DAPPS</h1>
              <span>LAUNCH DAO</span>
            </div>
          </Nav>
          <HeadingContainer>
            <div>
              <img className="rocket" src="rocket.png"></img>
              <h1>THE FIRST COMMUNITY DRIVEN IMPACT LAUNCHPAD.</h1>
              <div className="button-cont">
                <a href="https://elevatepad.gitbook.io/elevate-usdelev/" target="_blank" rel="noreferrer">
                  <span>Whitepaper</span>
                </a>
                <a>
                  <span>Launch DAO</span>
                </a>
              </div>
            </div>
          </HeadingContainer>
          <WelcomeContainer ref={aboutRef}>
            <div>
              <img src="coin.png" className="coin" />
              <h1>WELCOME TO</h1>
              <img src="logo-text.png" />
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
                ElevatePAD was initially developed by the founders of Ponyo impact, an innovative Auto-Impact token, with a focus on Coral
                Restoration. The Ponyo Impact team had a greater vision to help other legitimate ESG impact projects come to life. Beyond the initail
                development and conception of ElevatePAD, our future lies in the collective voice of our community that will push forward the ethos of
                DeFi. The backbone of Elevate is our strong community and potential global reach.
              </p>
            </div>
          </WelcomeExtendedContainer>
        </div>
        <div className="mid-container">
          <RoadmapContainer ref={roadmapRef}>
            <h1>ROADMAP</h1>
            <div className="roadmap-container">
              <img src="roadmap.png" />
            </div>
          </RoadmapContainer>
          <CRFContainer ref={crfRef}>
            <img src="coral-circle.png" className="coral-circle" />
            <div className="crf-content">
              <h1>CORAL RESTORATION FOUNDATION HISTORY</h1>
              <p>
                Before Elevate, Ponyo Impact utilized its innovative, auto-impact contract to raise $850,000 for the Coral Restoration Foundation, the
                largest reef restoration organization in the world.
              </p>
              <p>
                We believe marine conservation is a vital element in adressing climate change. Therefore ElevatePAD will continue their partnerships
                automatically donating 1% of every $ELEV Token transaction in ETH to CRF.
              </p>
              <img src="crf-logo.png" />
            </div>
          </CRFContainer>
          <EcosystemContainer ref={ecosystemRef}>
            <h1>THE ECOSYSTEM</h1>
            <div className="ecosystem-image-container">
              <img src="ecosystem.png" />
            </div>
          </EcosystemContainer>
        </div>
      </Container>
    </>
  );
};

export default Landing;
