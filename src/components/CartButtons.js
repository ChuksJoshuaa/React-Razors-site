import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../contexts/products_context";
import { useCartContext } from "../contexts/cart_context";
const CartButton = () => {
  const { closeSidebar } = useProductsContext();
  const { amount } = useCartContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{amount}</span>
        </span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    font-size: 1rem;
    letter-spacing: var(--spacing);
    font-family: var(--slantedFont);
    color: var(--primaryDarkColor);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -5px;
    right: -16px;
    background: var(--primaryDarkColor);
    width: 8px;
    height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.7rem;
    color: var(--clr-white);
    padding: 9px;
  }
  /* .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-family: var(--slantedFont);
    font-size: 1rem;
    cursor: pointer;
    color: var(--primaryDarkColor);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  } */
`;

export default CartButton;
