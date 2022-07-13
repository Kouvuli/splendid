import Anime from "../screens/Anime/Anime";
import Home from "../screens/Home/Home";
import AnimeDetail from "../screens/Detail/AnimeDetail";
import Login from "../screens/Login/Login";
const PATHS = {
  ANIME: "/anime",
  MANGA: "/manga",
  CHARACTERS: "/character",
  FORUM: "/forum",
  SIGNUP: "/signup",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  PROFILE: "/profile",
  NOTIFICATIONS: "/notifications",
  SETTINGS: "/settings",
  LOGOUT: "/logout",
};

const routeHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: PATHS.ANIME,
    component: Anime,
  },
  {
    exact: true,
    path: `${PATHS.ANIME}/:id`,
    component: AnimeDetail,
  },
  //   {
  //     exact: false,
  //     path: PATHS.MANGA.SEARCH,
  //     component: MangaList,
  //   },
  //   {
  //     exact: false,
  //     path: `${PATHS.MANGA.DETAILS}/:id`,
  //     component: Manga,
  //   },
  //   {
  //     exact: false,
  //     path: PATHS.STAFF.SEARCH,
  //     component: StaffList,
  //   },
  //   {
  //     exact: false,
  //     path: `${PATHS.STAFF.DETAILS}/:id`,
  //     component: Staff,
  //   },
  //   {
  //     exact: false,
  //     path: PATHS.CHARACTER.SEARCH,
  //     component: CharacterList,
  //   },
  //   {
  //     exact: false,
  //     path: `${PATHS.CHARACTER.DETAILS}/:id`,
  //     component: Character,
  //   },
  //   {
  //     exact: false,
  //     path: PATHS.FORUM,
  //     component: PostList,
  //   },
  //   {
  //     exact: false,
  //     path: `${PATHS.FORUM}/:id`,
  //     component: Post,
  //   },
  //   {
  //     exact: true,
  //     path: PATHS.SIGNUP,
  //     component: SignUp,
  //   },
  {
    exact: true,
    path: PATHS.LOGIN,
    component: Login,
  },
  //   {
  //     exact: true,
  //     path: PATHS.FORGOT_PASSWORD,
  //     component: ForgotPassword,
  //   },
  //   {
  //     exact: true,
  //     path: PATHS.PROFILE,
  //     component: ComingSoon,
  //   },
  //   {
  //     exact: true,
  //     path: PATHS.NOTIFICATIONS,
  //     component: ComingSoon,
  //   },
  //   {
  //     exact: true,
  //     path: PATHS.SETTINGS,
  //     component: ComingSoon,
  //   },
  //   {
  //     exact: true,
  //     path: PATHS.LOGOUT,
  //     component: ComingSoon,
  //   },
];

export { routeHome, PATHS };
