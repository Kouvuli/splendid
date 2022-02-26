import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["page-up"]}>
        <a href="#" id={styles["scrollToTopButton"]}>
          <span className={styles["arrow_carrot-up"]}></span>
        </a>
      </div>
      <Grid container>
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
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
};

export default Footer;
