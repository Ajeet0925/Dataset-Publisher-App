import { Button, TextField } from "@mui/material"
import React, { useState } from "react"
import { Formik } from "formik"
import Swal from "sweetalert2"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"

const AddDataset = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  const [thumbnail, setThumbnail] = useState("");
  const [selFile, setSelFile] = useState("");

  // 1. Create a form object which should match with model fields
  const dataForm = {
    title: "",
    description: "",
    size: "",
    uploadedBy: currentUser._id,
    type: "",
    details: "",
    thumbnail : "",
    createdAt: new Date(),
  }
  // 2. Create a function for form submission

  const navigate = useNavigate()

  const dataSubmit = async (formdata) => {
    formdata.thumbnail = thumbnail
    console.log(formdata)

    // 1. address
    // 2. request method
    // 3. data
    // 4. data format

    //  for creating request on backend
    const response = await fetch("http://localhost:5000/data/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.status === 200) {
      console.log("success")
      Swal.fire({
        icon: "success",
        title: "Well Done 👍",
        text: "You have done a wonderfull Job!!",
      })
      navigate("/loginpage")
    } else {
      console.log(response.status)
      console.log("something went wrong")
    }
  }

  //   3. use Formik component

  const formSchema = Yup.object().shape({
    title: Yup.string().min(5, "Too Short Title!").max(10, "Too Long Title!").required("Title is Required"),
    description: Yup.string().min(10, "Too Short Title!").max(20, "Too Long Title!").required("Description Required"),
    size: Yup.string().required("Size Required"),
    type: Yup.string().required("Type Required"),
    details: Yup.string().required("details Required"),
  })

  const uploadFile = async (e) => {
    const file = e.target.files[0]
    setThumbnail(file.name)
    const fd = new FormData()
    fd.append("myfile", file, file.name)

    const res = await fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      data: fd,
    })
    console.log(res.status)
    if (res.status === 200) {
      console.log("file uploaded")
    }
  }

  const uploadThumbnail = (e) => {
    const file = e.target.files[0];
    setThumbnail(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      console.log(res.status)
      if (res.status === 200) {
        console.log("uploaded")
      }
    })
  }

  return (
    <div className="container">
      <h1>Add Dataset Here</h1>
      <hr className="mb-5" />

      <Formik
        initialValues={dataForm}
        onSubmit={dataSubmit}
        // validationSchema={formSchema}
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

            {/* <TextField
              label="Type"
              variant="outlined"
              className="w-100 mb-4"
              id="type"
              onChange={handleChange}
              value={values.type}
              helperText={touched.uploadedBy ? errors.uploadedBy : ""}
              error={Boolean(errors.uploadedBy && touched.uploadedBy)}
            /> */}

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

            <label>Upload Image</label>
            <input onChange={uploadThumbnail} type="file" />

            <label>Upload File</label>
            <input onChange={uploadFile} type="file" />

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}

// formik

export default AddDataset
