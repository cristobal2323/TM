import React from "react";

import Stains from "../../components/nav/stains";
import Group from "../../components/nav/group";

/* Img */
import Logo from "../../assets/images/logo-tmc-white.png";

const handleMenu = (event) => {
  const element = event.currentTarget;
  const childName = element.dataset.child;
  const menus = document.querySelectorAll("[data-menu]");

  for (let i = 0; i < menus.length; i++) {
    if (menus[i].id !== element.id) {
      menus[i].classList.remove("active");
      if (menus[i].dataset.child) {
        document
          .getElementById(menus[i].dataset.child)
          .classList.remove("active");
      }
    }
  }

  if (childName) {
    document.getElementById(childName).classList.toggle("active");
  }
  element.classList.toggle("active");
};

const handleConvertMenu = () => {
  const nav = document.getElementById("mobile-1");
  nav.classList.toggle("mobile");

  const dashboard = document.getElementById("dashboard");
  dashboard.classList.toggle("mobile");

  const nav2 = document.getElementById("mobile-2");
  nav2.classList.toggle("mobile");

  const menus = document.querySelectorAll("[data-menu]");
  for (let i = 0; i < menus.length; i++) {
    menus[i].classList.toggle("mobile");
  }

  const submenus = document.querySelectorAll("[data-subbox]");
  for (let i = 0; i < submenus.length; i++) {
    submenus[i].classList.toggle("mobile");
  }

  if (nav.classList.contains("mobile")) {
    localStorage.setItem("mobile", "mobile");
  } else {
    localStorage.setItem("mobile", "");
  }
};

const Nav = () => {
  const mobile = localStorage.getItem("mobile");
  return (
    <nav id="mobile-1" className={`module--dashboardNav ${mobile}`}>
      <div className="module--dashboardNav__logo">
        <img src={Logo} className="logoDesktop" alt="Logo" />
        <img src={Logo} className="logoMobile" alt="Logo" />
      </div>
      <div className="module--dashboardNav__menu">
        <ul>
          <Stains mobile={mobile} handleMenu={handleMenu} />
          <Group mobile={mobile} handleMenu={handleMenu} />
        </ul>
      </div>
      <div id="mobile-2" className={`module--dashboardNav__arrow ${mobile}`}>
        <div onClick={handleConvertMenu} onKeyDown={handleConvertMenu}>
          <i className="fas fa-angle-left" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
