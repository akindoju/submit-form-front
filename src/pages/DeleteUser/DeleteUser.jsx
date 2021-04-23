import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router';

const DeleteUser = () => {
  const history = useHistory();

  const validateSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Email is required'),

    password: Yup.string()
      .min(6, 'Password should be at least 6 characters')
      .required('Password is required'),

    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords do not match'
    ),
  });

  return (
    <div className="signInContainer">
      <h2>Delete Profile</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validateSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);

          await fetch('http://localhost:5000/delete', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: values.email,
              password: values.password,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data === 'Successful') {
                history.push('/');
              } else {
                alert('Something went wrong');
              }
            });

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
          isSubmitting,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="credentials">
                <input
                  type="email"
                  name="email"
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
                  name="password"
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

              <div className="credentials">
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  required
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="errMsg-span">
                  {errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : null}
                </div>
              </div>

              <button type="submit" className="formBtn">
                Delete Profile
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default DeleteUser;
