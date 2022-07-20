import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import TextareaAutosize from "@mui/material/TextareaAutosize"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as React from "react"
import { checkContent, checkTitle } from "../../utils"
import styles from "./styles.module.scss"

const NewPostDialog = ({ open, handleClose, handleConfirm }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>New Post</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{ title: "", content: "" }}
          validate={(values) => {
            const errors = {}
            const titleError = checkTitle(values.title)
            const contentError = checkContent(values.content)
            if (titleError) errors.title = titleError
            if (contentError) errors.content = contentError
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleConfirm(values)
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.formGroup}>
                <Field
                  className={styles.postTitle}
                  placeholder="Post Title"
                  type="text"
                  name="title"
                  id="title"
                />
                <ErrorMessage
                  className={styles.errorMessage}
                  name="title"
                  component="div"
                />
              </div>
              <div className={styles.formGroup}>
                <Field
                  as="textarea"
                  className={styles.postContent}
                  placeholder="Post Content"
                  type="text"
                  name="content"
                  id="content"
                />
                <ErrorMessage
                  className={styles.errorMessage}
                  name="content"
                  component="div"
                />
              </div>
              <Button
                className={styles.button}
                type="submit"
                disabled={isSubmitting}
              >
                OK
              </Button>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  )
}

export default NewPostDialog
