import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
  const navigate = useNavigate();

  const dataSubmit = async (formdata) => {
    console.log(formdata);

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
    });

    if (response.status === 200) {
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Well Done 👍",
        text: "You have done a wonderfull Job!!",
      });

      response.json().then((data) => {
        console.log(data);
        navigate("/AddDataset");
        sessionStorage.setItem("user", JSON.stringify(data));
      });
    } else {
      console.log(response.status);
      console.log("something went wrong");
    }
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(4, "Password should be longer than 4 characters")
      .required("Required"),
  });

  return (
    <section className=" gradient-form" style={{backgroundColor: ''}}>
      <div className="container py-3 h-50">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{width: "185px"}}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                    </div>

                    <Formik
                      initialValues={{ email: "", password: "" }} //specifying initial value for form
                      onSubmit={dataSubmit} // function to handle form submission
                      validationSchema={loginSchema}
                    >
                      {({
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              // placeholder="Email Address"
                              value={values.email}
                              onChange={handleChange}
                              error={Boolean(errors.email) && touched.email}
                              helperText={touched.email ? errors.email : ""}
                            />
                            <label className="form-label" for="form2Example11">
                              Email Address
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              className="form-control"
                              // placeholder="Password"
                              id="password"
                              value={values.password}
                              onChange={handleChange}
                              error={
                                Boolean(errors.password) && touched.password
                              }
                              helperText={
                                touched.password ? errors.password : ""
                              }
                            />
                            <label className="form-label" for="form2Example22">
                              Password
                            </label>
                          </div>

                          <div className="text-center pt-1 mb-5 pb-1">
                            <button
                              className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                              type="submit"
                            >
                              Log in
                            </button>
                            <a className="text-muted" href="#!">
                              Forgot password?
                            </a>
                          </div>

                          <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">Don't have an account?</p>
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                            >
                              Create new
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
