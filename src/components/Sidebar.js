import React from "react";
import { useProductsContext } from "../contexts/products_context";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { links } from "../tools/head";
import logo from "../static/logo.jpg";
import CartButton from "./CartButtons";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="image-top logo" alt="logo" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, text, url, icon } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {icon}
                  {""}
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <CartButton />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .social-icons {
    justify-self: center;
    display: flex;
    padding-bottom: 2rem;
    margin: 25px;
  }

  .social-icons a {
    font-size: 1.2rem;
    font-family: var(--slantedFont);
    color: var(--primaryDarkColor);
    margin: 0 0.5rem;
    color: #010429;
    transition: all 0.3s linear;
  }
  .social-icons a:hover {
    color: hsl(205, 86%, 17%);
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    font-family: var(--slantedFont);
    color: var(--primaryDarkColor);
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
