import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";

const SignIn = () => {
  const history = useHistory();

  const validateSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),

    password: Yup.string()
      .min(6, "Password should be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="signInContainer">
      <h2>Sign In</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validateSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          await fetch("http://localhost:5000/signin", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: values.email,
              password: values.password,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.email) {
                history.push("/homepage");
              } else if (data === "Incorrect credentials") {
                alert("Incorrect Credentials");
              } else {
                alert("Incorrect Credentials");
              }
            });

          sessionStorage.setItem("currentEmail", values.email);

          setSubmitting(false);
        }}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
          errors,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="credentials">
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  required
                />
                <label htmlFor="email">Email</label>
                <div className="errMsg-span">
                  {errors.email && touched.email ? errors.email : null}
                </div>
              </div>
              <div className="credentials">
                <input
                  type="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  required
                />
                <label htmlFor="password">Password</label>
                <div className="errMsg-span">
                  {errors.password && touched.password ? errors.password : null}
                </div>
              </div>

              <button type="submit" className="formBtn">
                Sign In
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignIn;
