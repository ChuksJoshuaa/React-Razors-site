import { FaCity } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaChurch } from "react-icons/fa";

export const links = [
  {
    id: 1,
    text: "home",
    icon: <FaChurch />,
    url: "/",
  },
  {
    id: 2,
    text: "about",
    icon: <FaCheck />,
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    icon: <FaCity />,
    url: "/products",
  },
];

//  const navy = document.querySelector(".nav-center");
//  window.addEventListener("scroll", function () {
//    const scrollHeight = window.pageYOffset;
//    const navHeight = navy.getBoundingClientRect().height;
//    console.log(navy);

//    if (scrollHeight > navHeight) {
//      navy.classList.add("fixed-nav");
//    } else {
//      navy.classList.remove("fixed-nav");
//    }
//  });
