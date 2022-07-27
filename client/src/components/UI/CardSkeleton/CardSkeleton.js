import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"

import { CARD_TYPES } from "../../../constants"
import "./styles.scss"

const Component = ({ children, className, type, ...props }) => {
  if (type === CARD_TYPES.BOX) {
    return (
      <Stack style={{ marginBottom: "12px", width: "100%" }}>
        <Skeleton
          sx={{ borderRadius: "3px" }}
          variant="rectangular"
          height={200}
          width="100%"
        />
      </Stack>
    )
  }
  if (type === CARD_TYPES.SMALL_HORIZONTAL) {
    return (
      <Stack
        direction="row"
        alignItems="flex-start"
        style={{ marginBottom: "12px", width: "100%" }}
      >
        <Skeleton
          sx={{ borderRadius: "3px" }}
          variant="rectangular"
          height={150}
          width="60%"
        />
        <Stack style={{ width: "100%" }}>
          <Skeleton
            sx={{ borderRadius: "3px" }}
            style={{ marginLeft: "12px" }}
            variant="text"
            width="100%"
            height={28}
          />
          <Skeleton
            sx={{ borderRadius: "3px" }}
            style={{ marginLeft: "12px" }}
            variant="text"
            width="70%"
            height={28}
          />
          <Skeleton
            sx={{ borderRadius: "3px" }}
            style={{ marginLeft: "12px" }}
            variant="text"
            width="50%"
            height={28}
          />
        </Stack>
      </Stack>
    )
  }
  if (type === CARD_TYPES.HORIZONTAL) {
    return (
      <Stack alignItems="center">
        <Skeleton
          sx={{ borderRadius: "3px" }}
          variant="rectangular"
          width="100%"
          height={110}
        />
      </Stack>
    )
  }

  if (type === CARD_TYPES.MEDIUM_HORIZONTAL) {
    return (
      <Stack direction="row">
        <Skeleton variant="circular" width={55} height={55} />
        <Skeleton
          sx={{ marginLeft: "8px", borderRadius: "3px" }}
          variant="rectangular"
          width="93%"
          height={90}
        />
      </Stack>
    )
  }
  if (type === CARD_TYPES.SQUARE) {
    return (
      <Stack style={{ width: "100%" }}>
        <Skeleton
          sx={{ borderRadius: "3px" }}
          variant="rectangular"
          height={265}
          width="100%"
        />
        <Skeleton
          sx={{ borderRadius: "3px" }}
          style={{ margin: "12px" }}
          variant="text"
          width="70%"
          height={28}
        />
      </Stack>
    )
  }

  return (
    <Stack className="card-default">
      <Skeleton
        sx={{ borderRadius: "3px" }}
        variant="rectangular"
        height={325}
      />
      <Skeleton
        sx={{ paddingTop: "20px", borderRadius: "3px" }}
        variant="text"
        width="80%"
      />
    </Stack>
  )
}
export default Component
