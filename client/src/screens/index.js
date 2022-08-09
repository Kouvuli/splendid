import { Box, Container } from "@mui/material"
import React from "react"
import { Route } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import ScrollToTop from "../components/ScrollToTop/ScrollToTop"
const PagesLayout = (props) => {
  //   let isLogin = false;
  //   if (localStorage.getItem("User")) {
  //     isLogin = true;
  //   }

  return (
    <>
      {/* <LandingSlider /> */}

      <Box sx={{ flexGrow: 1, backgroundColor: "background.default" }}>
        <Header />
        {props.children}
        <Footer />
        <ScrollToTop />
      </Box>
    </>
  )
}
const PagesTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <PagesLayout>
            <Component {...propsComponent} />
          </PagesLayout>
        )
      }}
    />
  )
}
export default PagesTemplate
