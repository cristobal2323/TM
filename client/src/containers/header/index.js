import React from "react";

import Config from "../../components/header/config";

const handleConvertMenu = () => {
  const nav = document.getElementById("mobile-1");
  nav.classList.toggle("extend");

  const dashboard = document.getElementById("dashboard");
  dashboard.classList.toggle("extend");
};

const Nav = (props) => {
  const email = localStorage.getItem("names");

  let nameShort = "";
  if (email.length > 0) {
    nameShort = email.substring(0, 2);
  }

  return (
    <section className="module--dashboardHeader">
      <div className="module--dashboardHeadeBtnNav">
        <a
          href="#menu"
          onClick={handleConvertMenu}
          onKeyPress={handleConvertMenu}
        >
          <i className="fas fa-bars" />
        </a>
      </div>
      <Config
        setModalUser={props.setModalUser}
        logOut={props.logOut}
        nameShort={nameShort}
        email={email}
      />
    </section>
  );
};

export default Nav;
