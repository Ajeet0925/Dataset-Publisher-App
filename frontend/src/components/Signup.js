import { Button, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import "./Signup.css";

const Signup = () => {
  // 1. Create a form object which should match with model fields
  const userForm = {
    username: "",
    email: "",
    contact: "",
    age: 0,
    password: "",
  };

  // 2. Create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);

    // to send request on backend
    // 1. url
    // 2. request method
    // 3. data
    // 4. data format

    fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data saved");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registered Successfully!!👍",
        });
      }
    });
  };

  //   3. use Formik component

  const formSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short Username!")
      .max(5, "Too Long Username!")
      .required("Username is Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  return (
        <div className="container h-100" style={{marginTop:'7%',width:'65%'}}>
          <div className="row d-flex justify-content-center align-items-center h-100" >
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <Formik
                        initialValues={userForm}
                        onSubmit={userSubmit}
                        validationSchema={formSchema}
                      >
                        {({
                          handleSubmit,
                          handleChange,
                          values,
                          errors,
                          touched,
                        }) => (
                          <form
                            className="mx-1 mx-md-4"
                            onSubmit={handleSubmit}
                          >
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="username"
                                  onChange={handleChange}
                                  value={values.username}
                                  helperText={
                                    touched.username ? errors.username : ""
                                  }
                                  error={Boolean(
                                    errors.username && touched.username
                                  )}
                                />
                                <label
                                  className="form-label"
                                  for="form3Example1c"
                                >
                                  User Name
                                </label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  onChange={handleChange}
                                  value={values.email}
                                  helperText={touched.email ? errors.email : ""}
                                  error={Boolean(errors.email && touched.email)}
                                />
                                <label
                                  className="form-label"
                                  for="form3Example3c"
                                >
                                  Your Email
                                </label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="password"
                                  onChange={handleChange}
                                  value={values.password}
                                  helperText={
                                    touched.password ? errors.password : ""
                                  }
                                  error={Boolean(
                                    errors.password && touched.password
                                  )}
                                />
                                <label
                                  className="form-label"
                                  for="form3Example4c"
                                >
                                  Password
                                </label>
                              </div>
                            </div>

                            <div className="form-check d-flex justify-content-center mb-5">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="form2Example3c"
                              />
                              <label
                                className="form-check-label"
                                for="form2Example3"
                              >
                                I agree all statements in{" "}
                                <a href="#!">Terms of service</a>
                              </label>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                              >
                                SIGN UP
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
  );
};

// formik

export default Signup;
