import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as React from "react"
import { checkContent } from "../../utils"
import styles from "./styles.module.scss"

const NewCommentDialog = ({ open, handleClose, handleConfirm }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>New Comment</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{ content: "" }}
          validate={(values) => {
            const errors = {}
            const contentError = checkContent(values.content)
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
                  as="textarea"
                  className={styles.postContent}
                  placeholder="Comment"
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

export default NewCommentDialog
