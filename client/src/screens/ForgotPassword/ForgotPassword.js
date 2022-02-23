import React, { useState } from "react";
import HorizontalStepper from "../../components/UI/HorizontalStepper";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import ForgotPasswordForm1 from "../../components/Form/ForgotPasswordForm/ForgotPasswordForm1";
import ForgotPasswordForm2 from "../../components/Form/ForgotPasswordForm/ForgotPasswordForm2";
import ForgotPasswordForm3 from "../../components/Form/ForgotPasswordForm/ForgotPasswordForm3";
import SuccessForm from "../../components/Form/ForgotPasswordForm/SuccessForm";
import ErrorForm from "../../components/Form/ForgotPasswordForm/ErrorForm";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import styles from "./ForgotPassword.module.css";

const steps = ["Enter your email", "Verification", "New password"];
const ForgotPassword = () => {
  const [activeStep, setActiveStep] = useState(0);
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
    <Box className={styles.main} sx={{ backgroundColor: "background.default" }}>
      <Card className={styles.container} id={styles.container}>
        <Box color="primary">
          <Box className={styles["form-container"]}>
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
                <ErrorForm />
                <Box className={`${styles["btn-container"]}`}>
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

                <Box className={`${styles["btn-container"]}`}>
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
                    {activeStep === steps.length - 1
                      ? "Reset password"
                      : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ForgotPassword;
