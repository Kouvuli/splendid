import Anime from "../screens/Anime"
import Home from "../screens/Home"
import AnimeDetail from "../screens/AnimeDetail"
import Login from "../screens/Login/Login"
import AnimeTop from "../screens/AnimeTop"
import MangaTop from "../screens/MangaTop"
import ComingSoon from "../screens/ComingSoon"
import Forum from "../screens/Forum"
import Character from "../screens/Character"
import Manga from "../screens/Manga"
import MangaDetail from "../screens/MangaDetail"
import PostDetail from "../screens/PostDetail"
import Profile from "../screens/Profile"
const PATHS = {
  ANIME: "/anime",
  TOPANIME: "/top/anime",
  TOPMANGA: "/top/manga",
  MANGA: "/manga",
  CHARACTERS: "/character",
  FORUM: "/forum",
  SIGNUP: "/signup",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  PROFILE: "/profile",
  NOTIFICATIONS: "/notifications",
  SETTINGS: "/settings",
  LOGOUT: "/logout"
}

const routeHome = [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    exact: true,
    path: PATHS.ANIME,
    component: Anime
  },
  {
    exact: true,
    path: `${PATHS.ANIME}/:id`,
    component: AnimeDetail
  },
  {
    exact: true,
    path: PATHS.TOPMANGA,
    component: MangaTop
  },
  {
    exact: true,
    path: PATHS.TOPANIME,
    component: AnimeTop
  },
  {
    exact: true,
    path: PATHS.FORUM,
    component: Forum
  },
  {
    exact: true,
    path: `${PATHS.FORUM}/:id`,
    component: PostDetail
  },
  {
    exact: true,
    path: PATHS.CHARACTERS,
    component: Character
  },
  {
    exact: true,
    path: PATHS.MANGA,
    component: Manga
  },
  {
    exact: true,
    path: `${PATHS.MANGA}/:id`,
    component: MangaDetail
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
    component: Login
  },
  //   {
  //     exact: true,
  //     path: PATHS.FORGOT_PASSWORD,
  //     component: ForgotPassword,
  //   },
  {
    exact: true,
    path: PATHS.PROFILE,
    component: Profile
  },
  {
    exact: true,
    path: PATHS.NOTIFICATIONS,
    component: ComingSoon
  },
  {
    exact: true,
    path: PATHS.SETTINGS,
    component: ComingSoon
  }
]

export { routeHome, PATHS }
