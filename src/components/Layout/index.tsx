import React, { useState } from "react";
import "./index.scss";
import { FaGripLines, FaGripLinesVertical } from "react-icons/fa";

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__content container-center">
          <div className="navbar__logo">
            <a className="d-flex">
              <img
                alt="logo"
                className="navbar__icon"
                src="https://www.siambitcoin.com/wp-content/uploads/2022/04/18876.png"
              ></img>
              <span className="navbar__name">CSS APE</span>
            </a>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="navbar__burger"
            >
              {open ? (
                <FaGripLinesVertical></FaGripLinesVertical>
              ) : (
                <FaGripLines></FaGripLines>
              )}
            </button>
          </div>
          <div className="navbar__menus">
            <div
              className={open ? "navbar__menu navbar__open" : "navbar__menu"}
            >
              <ul>
                <li>
                  <a href="#" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Component</a>
                </li>
                <li>
                  <a href="#">About me</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main className="container-center">{children}</main>
      <footer className="footer">
        <main className="container-center">This is footer</main>
      </footer>
    </div>
  );
};

export default Layout;
