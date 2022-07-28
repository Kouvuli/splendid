import { useEffect, useState } from "react"
import {
  Link,
  MemoryRouter,
  Route,
  Switch,
  useLocation
} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Pagination from "@mui/material/Pagination"
import PaginationItem from "@mui/material/PaginationItem"
import animeSlice from "../../redux/reducers/animeSlice"
import mangaSlice from "../../redux/reducers/mangaSlice"
import { animeListSelector, mangaListSelector } from "../../redux/selectors"

// const ListPagination = styled(Pagination)(({ theme }) => ({
//   "& .Mui-selected": {
//     border: " 1px solid #ffffff",
//   },
//   "& li button": {
//     height: "50px",
//     width: "50px",
//     fontWeight: "500",
//     borderRadius: "50%",
//     color: "#b7b7b7",
//     fontSize: "18px",
//   },
//   "& li button:hover": {
//     color: "#ffffff",
//   },
// }));
const Content = ({ type }) => {
  var selector

  const dispatch = useDispatch()
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  var slice
  if (type === "manga") {
    selector = mangaListSelector
    slice = mangaSlice
  } else {
    selector = animeListSelector
    slice = animeSlice
  }
  const { page, data } = useSelector(selector)
  // const [page, setPage] = useState(parseInt(query.get("page") || "1", 10))
  // console.log(page)
  // const page = parseInt(query.get("page") || "1", 10)
  // useEffect(() => {
  //   // console.log(page)
  //   dispatch(slice.actions.changePage(page))
  // }, [dispatch, page])
  // const [currentPage, setCurrentPage] = useState(page)
  // props.handlePage(page)
  const pageHandler = (e, page) => {
    console.log(page)
    // setCurrentPage(page)
    dispatch(slice.actions.changePage(page))
  }
  return (
    <Pagination
      page={page}
      onChange={pageHandler}
      count={data.pagination ? data.pagination.last_visible_page : 0}
      shape="rounded"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          size="large"
          component={Link}
          to={`/${type}${item.page === 1 ? "" : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  )
}

export default function CustomPagination({ type = "anime" }) {
  return (
    <MemoryRouter initialEntries={[`/${type}`]} initialIndex={0}>
      <Switch>
        <Route path="*" render={() => <Content type={type} />} />
      </Switch>
    </MemoryRouter>
  )
}
