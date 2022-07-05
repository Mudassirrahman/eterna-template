import React from "react";
const menuTogle = () => {
  let menu = document.querySelector("#menu-bars");
  let navbar = document.querySelector(".nav-menuu");
  menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };
};

const Navbar = () => {
  return (
    <>
      <header className="navbarr">
        <div>
          <a className="logoo">ETERNA</a>
        </div>
        <div className="nav-menuu">
          <ul>
            <li className="active">home</li>
            <li>about</li>
            <li>services</li>
            <li>portfolio</li>
            <li>team</li>
            <li>pricing</li>
            <li>blog</li>
            <li>
              <a>drop dwon</a>
              <i className="fas fa-thin fa-chevron-down chevron--down"></i>
              <ul className="submenu">
                <li>subdropDown1</li>
                <li>subdropDown2</li>
                <li>
                  <a>subdropDown3</a>
                  <i className="fas fa-thin fa-chevron-right right-arow"></i>
                  <ul className="sub-submenu">
                    <li>sub-subdropdown1</li>
                    <li>sub-subdropdown2</li>
                    <li>sub-subdropdown3</li>
                  </ul>
                </li>
                <li>subDropDown4</li>
              </ul>
            </li>
            <li>contact</li>
          </ul>
        </div>
        <i className="fas fa-bars" id="menu-bars" onClick={menuTogle}></i>
      </header>
    </>
  );
};

export default Navbar;
