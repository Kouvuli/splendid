import React, { useState } from "react";
import HorizontalStepper from "../../components/UI/HorizontalStepper";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ForgotPasswordForm1 from "../../components/Form/ForgotPasswordForm/ForgotPasswordForm1";
import ForgotPasswordForm2 from "../../components/Form/ForgotPasswordForm/ForgotPasswordForm2";
import ForgotPasswordForm3 from "../../components/Form/ForgotPasswordForm/ForgotPasswordForm3";
import SuccessForm from "../../components/Form/ForgotPasswordForm/SuccessForm";
import "./ForgotPassword.css";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];
const ForgotPassword = () => {
  const [activeStep, setActiveStep] = useState(0);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className="container" id="container">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "400px",
        }}
      >
        <HorizontalStepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </HorizontalStepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <SuccessForm />
            <Box className="btn-container">
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box
              sx={{
                padding: "0 20px",
              }}
            >
              {activeStep === 0 && <ForgotPasswordForm1 />}
              {activeStep === 1 && <ForgotPasswordForm2 />}
              {activeStep === 2 && <ForgotPasswordForm3 />}
            </Box>

            <Box className="btn-container">
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Reset password" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
};

export default ForgotPassword;
