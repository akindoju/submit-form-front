import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const UpdatePassword = () => {
  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid Email')
      .required('Current Email is required'),

    newPassword: Yup.string()
      .min(6, 'Password should be at least 6 characters')
      .required('Password is required'),

    confirmNewPassword: Yup.string().oneOf(
      [Yup.ref('newPassword'), null],
      'Passwords do not match'
    ),
  });

  return (
    <div className="signInContainer">
      <h2>Update Password</h2>
      <Formik
        initialValues={{
          email: '',
          newPassword: '',
          confirmNewPassword: '',
        }}
        validationSchema={validateSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          await fetch('http://localhost:5000/update/password', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: values.email,
              newPassword: values.newPassword,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data === 'Successful') {
                alert('Successful');
                resetForm();
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
                  name="newPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPassword}
                  required
                />
                <label htmlFor="newPassword">New Password</label>
                <div className="errMsg-span">
                  {errors.newPassword && touched.newPassword
                    ? errors.newPassword
                    : null}
                </div>
              </div>

              <div className="credentials">
                <input
                  type="password"
                  name="confirmNewPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmNewPassword}
                  required
                />
                <label htmlFor="confirmNewPassword">Confirm Password</label>
                <div className="errMsg-span">
                  {errors.confirmNewPassword && touched.confirmNewPassword
                    ? errors.confirmNewPassword
                    : null}
                </div>
              </div>

              <button type="submit" className="formBtn">
                Update Password
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UpdatePassword;
