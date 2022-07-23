import * as React from "react"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const CustomizedSnackbars = ({ title, type }) => {
  const [open, setOpen] = React.useState(true)

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  return (
    <>
      {type === "error" && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          TransitionProps={{ onExited: handleClose }}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {title}
          </Alert>
        </Snackbar>
      )}
      {type === "success" && (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {title}
          </Alert>
        </Snackbar>
      )}
      {type === "info" && (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            {title}
          </Alert>
        </Snackbar>
      )}
      {type === "warning" && (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            {title}
          </Alert>
        </Snackbar>
      )}
    </>
  )
}

export default CustomizedSnackbars
