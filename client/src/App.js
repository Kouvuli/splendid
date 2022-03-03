import "./App.css";
// import FriendRequestList from "./components/Friends/FriendRequestList";
// import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import ForgotPassword from "./screens/ForgotPassword/ForgotPassword";
import Container from "@mui/material/Container";
import MovieDetail from "./screens/Detail/MovieDetail";
import "./assets/css/elegant-icons.css";
import "./assets/css/nice-select.css";
import "./assets/css/boxicons-2.1.1/css/boxicons.min.css";
import Category from "./screens/Category/Category";
import SideNavBar from "./components/Bar/SideNavBar";
import Box from "@mui/material/Box";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routes from "./config/Routes";
// import RegisterForm from "./components/Form/RegisterForm";
// import Login from "./pages/Login/Login";
// import HomePage from "./pages/HomePage/HomePage";
// import RegisterPage from "./pages/Register/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <Box sx={{ backgroundColor: "background.default" }}>
            <Header {...props} />
            <SideNavBar />
            <Routes />
            <Footer />
          </Box>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
