import React, { useState } from "react";
import styled from "styled-components";
import Product from "../components/Product";
import { data } from "../tools/data";
import Loading from "../components/Loading";

const Products = () => {
  const [datas, setDatas] = useState(data);
  if (datas.length < 1) {
    return <Loading />;
  }
  return (
    <Wrapper className="section">
      <h2 className="section-title">Products</h2>
      <div className="products-center">
        {datas.map((link) => {
          return <Product key={link.id} {...link} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section {
    padding: 4rem 0;
  }
  .section-title {
    font-size: 2.3rem;
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
    text-align: center;
    margin-bottom: 3.5rem;
  }
  .products-center {
    width: var(--smallWidth);
    margin: 0 auto;
    max-width: var(--maxWidth);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    column-gap: 1.8rem;
    row-gap: 1.8rem;
    /* align-items: start; */
  }
  .title {
    text-align: center;
    letter-spacing: var(--mainSpacing);
    text-transform: capitalize;
    font-size: 2.3rem;
  }
  .product {
    background: var(--mainWhite);
    margin-bottom: 2rem;
    box-shadow: var(--lightShadow);
    transition: var(--mainTransition);
    display: grid;
    grid-template-rows: auto 1fr;
  }
  .product:hover {
    box-shadow: var(--darkShadow);
  }
  .img-container {
    padding: 3rem;
    background: rgba(255, 255, 255, 0.5);
    position: relative;
    /* height: 5rem; */
  }
  .product img {
    transition: var(--mainTransition);
  }
  .product:hover img {
    opacity: 0.3;
  }
  .product-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: var(--mainTransition);
  }
  .product:hover .product-link {
    opacity: 1;
  }
  .product-footer {
    padding: 0rem 1rem 1rem 1rem;
    text-align: center;
    letter-spacing: var(--mainSpacing);
    display: grid;
    grid-template-rows: 1fr auto;
  }
  .product-title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  .product-price {
    color: var(--primaryColor);
    font-weight: bold;
    margin-bottom: 0;
    font-size: 1.1rem;
  }
`;

export default Products;
