import React, { useRef, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from "./Header.module.css";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Anime",
    path: "/category",
  },
  {
    display: "Manga",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const openMenuRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add(styles["shrink"]);
      } else {
        headerRef.current.classList.remove(styles["shrink"]);
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);
  const toggleMenuHandler = () => {
    openMenuRef.current.classList.add(styles["active"]);
  };
  const closeMenuHandler = () => {
    openMenuRef.current.classList.remove(styles["active"]);
  };
  return (
    <div ref={headerRef} className={styles["header"]}>
      <div className={`${styles["mobile-menu"]} ${styles["container"]}`}>
        <div className={styles["logo"]}>
          <Link to="/" style={{ textAlign: "center" }}>
            <img src={logo} alt="" />
          </Link>
        </div>

        <IconButton
          className={styles["mb-menu-toggle"]}
          onClick={toggleMenuHandler}
          size="large"
          color="primary"
        >
          <i class="bx bx-menu"></i>
        </IconButton>
      </div>
      <div
        className={`${styles["header__wrap"]} ${styles["container"]}`}
        ref={openMenuRef}
        id="header__wrap"
      >
        <span
          className={`${styles["mb-menu-close"]}`}
          onClick={closeMenuHandler}
        >
          <IconButton color="primary" size="large">
            <i className="bx bx-x"></i>
          </IconButton>
        </span>
        <div className={styles["logo"]}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className={styles["header__nav"]}>
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
