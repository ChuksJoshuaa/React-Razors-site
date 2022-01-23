import React, { useEffect, useState } from "react";
import logo from "../static/logo.jpg";
import styled from "styled-components";
import { links } from "../tools/head";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../contexts/products_context";
import CartButton from "./CartButtons";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const [navPosition, setNavPosition] = useState(0);
  const scrollHeight = window.pageYOffset;
  const handleScroll = () => {
    const position = window.pageYOffset;
    setNavPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // window.addEventListener("scroll", function () {
  //   const scrollHeight = window.pageYOffset;
  //   const navHeight = navBar.getBoundingClientRect().height;

  //   if (scrollHeight > navHeight) {
  //     navBar.classList.add("fixed-nav");
  //   } else {
  //     navBar.classList.remove("fixed-nav");
  //   }
  // });

  return (
    <NavContainer className={`${scrollHeight ? "fixed-nav" : null}`}>
      <div className="nav-center">
        <div className="nav-header">
          <img
            src={logo}
            alt="Logo"
            className="image-top"
            style={{ width: "50px" }}
          />
          <button className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, icon, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>
                  {icon}
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <CartButton />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: #222;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--primaryDarkColor);
        font-size: 1rem;
        font-family: var(--slantedFont);
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--primaryDarkColor);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
