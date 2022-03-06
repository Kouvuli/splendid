import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./Carousel.module.css";
import { styled, alpha } from "@mui/material/styles";
// import styled from "styled-components";
import CardCarouselItem from "../Item/CardCarouselItem";

const CustomOwlCarousel = styled(OwlCarousel)(({ theme }) => ({
  "&.owl-carousel .owl-stage-outer": {},
  "&.owl-carousel .owl-nav button": {
    fontSize: "36px",
    height: "66px",
    width: "66px",
    background: "#0b0c2a",
    lineHeight: "66px",
    textAlign: "center",
    color: "#ffffff",
    "-webkit-transform": "rotate(45deg)",
    "-ms-transform": "rotate(45deg)",
    transform: "rotate(45deg)",
    zIndex: 1,
    position: "absolute",
    left: "-33px",
    top: "50%",
    marginTop: "-90px",
  },
  "&.owl-carousel .owl-nav button.owl-next": {
    left: "auto",
    right: "-33px",
  },
  "&.owl-carousel .owl-nav button span": {
    "-webkit-transform": "rotate(-45deg)",
    "-ms-transform": "rotate(-45deg)",
    transform: "rotate(-45deg)",
    display: "block",
    zIndex: 1,
  },
  "&.owl-carousel .owl-nav button:after": {
    position: "absolute",
    top: "6px",
    left: 0,
    right: 0,
    height: "54px",
    width: "54px",
    background: "rgba(255, 255, 255, 0.1)",
    content: '""',
    zIndex: -1,
    margin: "0 auto",
  },
  "&.owl-carousel .owl-dots": {
    position: "absolute",
    left: 0,
    bottom: "10px",
    width: "100%",
    textAlign: "center",
  },
  "&.owl-carousel .owl-dots button": {
    height: "8px",
    width: "8px",
    background: "#b7b7b7",
    borderRadius: "50%",
    marginRight: "10px",
  },
  "&.owl-carousel .owl-dots button.active": {
    background: "#ffffff",
  },
  "&.owl-carousel .owl-item.active p": {
    top: 0,
    opacity: 1,
  },
  "&.owl-carousel .owl-item.active a": {
    top: 0,
    opacity: 1,
  },
  "&.owl-carousel .owl-item.active h2": {
    top: 0,
    opacity: 1,
  },
  "&.owl-carousel .owl-item.active .hero__text .label": {
    top: 0,
    opacity: 1,
  },
}));

const options = {
  loop: true,
  margin: 10,
  dots: false,
  nav: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    300: {
      items: 2,
      nav: true,
    },
    600: {
      items: 3,
      nav: true,
    },
    900: {
      items: 5,
      nav: true,
    },
  },
  navText: [
    "<span class='button arrow_carrot-left'></span>",
    "<span class='arrow_carrot-right'></span>",
  ],
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  smartSpeed: 1200,
  autoplay: false,
  mouseDrag: true,
};
const CardCarousel = (props) => {
  const { data } = props;
  return (
    <CustomOwlCarousel className={styles["carousel-container"]} {...options}>
      {data.map((item, index) => {
        return (
          <div key={index} className="item">
            <CardCarouselItem {...item.entry} />
          </div>
        );
      })}
    </CustomOwlCarousel>
  );
};

export default CardCarousel;
