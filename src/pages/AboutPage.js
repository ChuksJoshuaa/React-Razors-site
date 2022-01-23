import React from "react";
import styled from "styled-components";
import shaving2 from "../static/product-9.png";

const About = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={shaving2} alt="shaving" />
        <article>
          <div className="title">
            <h2>About Us</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            neque sapiente necessitatibus. Ducimus, similique. Nemo repudiandae
            expedita commodi officiis iste! Nisi expedita porro nesciunt
            temporibus et voluptatem molestias eum fuga, ad sunt aperiam quod
            ducimus ut debitis delectus ea laudantium ipsam tempore velit.
            Recusandae ipsum facere aspernatur sed totam iste!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    font-size: 1.2rem;
    color: var(--clr-grey-5);
    font-family: var(--slantedFont);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default About;
