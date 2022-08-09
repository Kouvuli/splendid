import { Suspense } from "react"
import "./assets/css/reset.css"
// import FriendRequestList from "./components/Friends/FriendRequestList";
// import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import "./assets/css/elegant-icons.css"
import "./assets/css/nice-select.css"
import "./assets/css/boxicons-2.1.1/css/boxicons.min.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import PagesTemplate from "./screens"
import PageNotFound from "./screens/PageNotFound"
import { routeHome } from "./routes"
import Loader from "./components/Preloader"
// import RegisterForm from "./components/Form/RegisterForm";
// import Login from "./pages/Login/Login";
// import HomePage from "./pages/HomePage/HomePage";
// import RegisterPage from "./pages/Register/RegisterPage";

function App() {
  const showPages = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <PagesTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        )
      })
    }
  }
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Switch>
          {showPages(routeHome)}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
