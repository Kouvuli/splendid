import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";

const HorizontalStepper = (props) => {
  const { activeStep, alternativeLabel } = props;
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel={alternativeLabel}>
        {props.children}
      </Stepper>
    </Box>
  );
};

export default HorizontalStepper;
