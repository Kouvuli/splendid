import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MovieButton = (props) => {
  const { title, link } = props;
  return (
    <a href={link}>
      <span>{title}</span> <ArrowForwardIosIcon></ArrowForwardIosIcon>
    </a>
  );
};

export default MovieButton;
