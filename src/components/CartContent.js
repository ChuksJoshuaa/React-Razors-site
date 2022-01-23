import React from "react";
import styled from "styled-components";
import { useCartContext } from "../contexts/cart_context";
import { Link } from "react-router-dom";
import { CartColumns, CartItem } from "./index";

const CartContent = () => {
  const { cart, clearCart, total } = useCartContext();

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="btn">
          products
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          clear all
        </button>
      </div>
      <div>
        <article className="total">
          <h2 style={{ margin_bottom: "5%" }}></h2>
          <div className="grid-baby">
            <h1></h1>
            <h5>
              total_amount: <span>${total}</span>
            </h5>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: crimson;
  }

  .total {
    max-width: 300px;
    height: 100px;
    margin: 0 auto;
    width: 90vw;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .grid-baby {
    display: grid;
    place-items: center;
    text-align: center;
    min-height: 80%;
  }

  .grid-baby h5 {
    font-weight: 900;
  }
`;

export default CartContent;
