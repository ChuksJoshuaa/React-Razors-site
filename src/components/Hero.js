import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import shaving from "../static/Shaving1.jpg";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero">
        <div className="banner">
          <h1>foam, shave, grow</h1>
          <p>Embrace your choices - we do</p>
          <Link to="/products">
            <button className="btn-hero">SHOP NOW</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .hero {
    min-height: calc(100vh - 5rem);
    background: linear-gradient(
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
      ),
      url(${shaving}) center/cover no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primaryDarkColor);
  }
  .banner {
    margin-top: 5rem;
    width: var(--smallWidth);
    max-width: var(--maxWidth);
  }
  .hero h1 {
    font-size: 3rem;
    text-transform: capitalize;
  }
  .hero p {
    font-size: 1.5rem;
    font-family: var(--slantedFont);
    color: var(--primaryDarkColor);
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 1.75rem;
  }
  .btn-hero {
    border-radius: 0;
    font-weight: bold;
    color: #fff;
    text-transform: capitalize;
    font-family: var(--slantedFont);
    padding: 0.8rem 1.5rem;
    background: var(--primaryDarkColor);
    border-color: var(--primaryDarkColor);
  }
  .btn-hero:hover {
    background: transparent;
    border-color: var(--primaryDarkColor);
    color: #222;
  }
  @media screen and (min-width: 768px) {
    .banner {
      margin-top: 0;
    }

    .hero h1 {
      font-size: 5.3rem;
    }
    .hero p {
      font-size: 2.3rem;
    }
    .btn-hero {
      font-size: 1.2rem;
      padding: 1rem 1.5rem;
      padding: 1rem 3rem;
    }
  }
`;

export default Hero;
