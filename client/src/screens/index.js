import { Box, Container } from "@mui/material"
import React from "react"
import { Route } from "react-router"
import SideNavBar from "../components/Bar/SideNavBar"
import FloatingButton from "../components/FloatingButton"
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import ScrollToTop from "../components/ScrollToTop/ScrollToTop"
const LayoutHome = (props) => {
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
        {/* <FloatingButton /> */}
      </Box>
    </>
  )
}
const HomeTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <LayoutHome>
            <Component {...propsComponent} />
          </LayoutHome>
        )
      }}
    />
  )
}
export default HomeTemplate
