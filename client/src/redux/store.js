import { configureStore } from "@reduxjs/toolkit"

import authSlice from "./reducers/authSlice"
import animeSlice from "./reducers/animeSlice"
import animeDetailSlice from "./reducers/animeDetailSlice"
import homeSlice from "./reducers/homeSlice"
import animeTopSlice from "./reducers/animeTopSlice"
import mangaTopSlice from "./reducers/mangaTopSlice"
import forumSlice from "./reducers/forumSlice"
import characterSlice from "./reducers/characterSlice"
import mangaSlice from "./reducers/mangaSlice"
import mangaDetailSlice from "./reducers/mangaDetailSlice"
import postDetailSlice from "./reducers/postDetailSlice"
import commentSlice from "./reducers/commentSlice"
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    anime: animeSlice.reducer,
    animeDetail: animeDetailSlice.reducer,
    home: homeSlice.reducer,
    animeTop: animeTopSlice.reducer,
    mangaTop: mangaTopSlice.reducer,
    forum: forumSlice.reducer,
    character: characterSlice.reducer,
    manga: mangaSlice.reducer,
    mangaDetail: mangaDetailSlice.reducer,
    postDetail: postDetailSlice.reducer,
    comment: commentSlice.reducer
  }
})

export default store
