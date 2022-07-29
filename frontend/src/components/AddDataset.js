import { Button, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
// import Swal from "sweetalert2";
import * as Yup from "yup";

const AddDataset = () => {
  // 1. Create a form object which should match with model fields
  const dataForm = {
    title: "",
    description: "",
    size: "",
    uploadedBy: "",
    type: "",
    details: "",
  };

  // 2. Create a function for form submission
  const dataSubmit = (formdata) => {
    console.log(formdata);

    // to send request on backend
    // 1. url
    // 2. request method
    // 3. data
    // 4. data format

    // fetch("http://localhost:5000/user/add", {
    //   method: "POST",
    //   body: JSON.stringify(formdata), //convert javascript to json
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((res) => {
    //   if (res.status === 200) {
    //     console.log("data saved");
    //     Swal.fire({
    //       icon: "success",
    //       title: "Success",
    //       text: "Registered Successfully!!👍",
    //     });
    //   }
    // });
  };

  //   3. use Formik component

  const formSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, "Too Short Title!")
      .max(10, "Too Long Title!")
      .required("Title is Required"),
    description: Yup.string()
      .min(10, "Too Short Title!")
      .max(20, "Too Long Title!")
      .required("Description Required"),
    size: Yup.string().required("Size Required"),
    type: Yup.string().required("Type Required"),
    upvotes: Yup.string().details("details Required"),
  });

  return (
    <div className="container">
      <h1>Add Dataset Here</h1>
      <hr className="mb-5" />

      <Formik
        initialValues={dataForm}
        onSubmit={dataSubmit}
        validationSchema={dataSchema}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              variant="outlined"
              className="w-100 mb-4"
              id="title"
              onChange={handleChange}
              value={values.title}
              helperText={touched.title ? errors.title : ""}
              error={Boolean(errors.title && touched.title)}
            />

            <TextField
              label="Description"
              variant="outlined"
              className="w-100 mb-4"
              id="description"
              onChange={handleChange}
              value={values.description}
              helperText={touched.description ? errors.description : ""}
              error={Boolean(errors.description && touched.description)}
            />

            <TextField
              label="Size"
              variant="outlined"
              className="w-100 mb-4"
              id="size"
              onChange={handleChange}
              value={values.size}
              helperText={touched.size ? errors.size : ""}
              error={Boolean(errors.size && touched.size)}
            />

            <TextField
              label="Type"
              variant="outlined"
              className="w-100 mb-4"
              id="type"
              onChange={handleChange}
              value={values.type}
              helperText={touched.uploadedBy ? errors.uploadedBy : ""}
              error={Boolean(errors.uploadedBy && touched.uploadedBy)}
            />

            <TextField
              label="Details"
              variant="outlined"
              className="w-100 mb-4"
              id="details"
              onChange={handleChange}
              value={values.details}
              helperText={touched.details ? errors.details : ""}
              error={Boolean(errors.details && touched.details)}
            />

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

// formik

export default AddDataset;
