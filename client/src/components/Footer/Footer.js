import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./Footer.module.css";
import $ from "jquery";
const Footer = () => {
  const toTop = () => {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  };

  return (
    <div className={styles["footer"]}>
      <div className={styles["page-up"]}>
        <a onClick={toTop}>
          <span className="arrow_carrot-up"></span>
        </a>
      </div>
      <Grid container justifyContent="center">
        <Grid item xs={3}>
          <div className={styles["footer__logo"]}>
            <a href="./index.html">
              <img src="img/logo.png" alt="" />
            </a>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={styles["footer__nav"]}>
            <ul>
              <li class={styles["active"]}>
                <a href="#">Homepage</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Our Blog</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default Footer;
