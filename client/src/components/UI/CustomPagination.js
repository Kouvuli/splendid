import * as React from "react";
import {
  Link,
  MemoryRouter,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

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
const Content = (props) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  props.handlePage(page);
  return (
    <Pagination
      page={page}
      count={props.page}
      renderItem={(item) => (
        <PaginationItem
          size="large"
          component={Link}
          to={`/category${item.page === 1 ? "" : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
};

export default function CustomPagination(props) {
  return (
    <MemoryRouter initialEntries={["/category"]} initialIndex={0}>
      <Switch>
        <Route
          path="*"
          render={() => (
            <Content page={props.page} handlePage={props.handlePage} />
          )}
        />
      </Switch>
    </MemoryRouter>
  );
}
