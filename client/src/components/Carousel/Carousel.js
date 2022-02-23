import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./Carousel.module.css";
import "./ElegantIcons.css";
import styled from "styled-components";
import CarouselItem from "../Item/CarouselItem";
const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const CustomOwlCarousel = styled(OwlCarousel)`
  &.owl-carousel .owl-stage-outer {
  }
  &.owl-carousel .owl-nav button {
    font-size: 36px;
    height: 66px;
    width: 66px;
    background: #0b0c2a;
    line-height: 66px;
    text-align: center;
    color: #ffffff;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: relative;
    z-index: 1;
    position: absolute;
    left: -33px;
    top: 50%;
    margin-top: -47px;
  }
  &.owl-carousel .owl-nav button.owl-next {
    left: auto;
    right: -33px;
  }
  &.owl-carousel .owl-nav button span {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    display: block;
    z-index: 1;
  }
  &.owl-carousel .owl-nav button:after {
    position: absolute;
    top: 6px;
    left: 0;
    right: 0;
    height: 54px;
    width: 54px;
    background: rgba(255, 255, 255, 0.1);
    content: "";
    z-index: -1;
    margin: 0 auto;
  }
  &.owl-carousel .owl-dots {
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
    text-align: center;
  }
  &.owl-carousel .owl-dots button {
    height: 8px;
    width: 8px;
    background: #b7b7b7;
    border-radius: 50%;
    margin-right: 10px;
  }
  &.owl-carousel .owl-dots button.active {
    background: #ffffff;
  }
`;
const options = {
  loop: true,
  margin: 0,
  items: 1,
  dots: true,
  nav: true,
  navText: [
    "<span class='button arrow_carrot-left'></span>",
    "<span class='arrow_carrot-right'></span>",
  ],
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  smartSpeed: 1200,
  autoHeight: true,
  autoplay: false,
  mouseDrag: false,
};
const Carousel = () => {
  return (
    <CustomOwlCarousel className={styles["carousel-container"]} {...options}>
      {images.map((image) => {
        return (
          <div className="item">
            <CarouselItem img={image.imgPath} label={image.label} />
          </div>
        );
      })}
    </CustomOwlCarousel>
  );
};

export default Carousel;
