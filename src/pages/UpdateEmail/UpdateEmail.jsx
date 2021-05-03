import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router';

const UpdateEmail = () => {
  const history = useHistory();
  const currentEmail = sessionStorage.getItem('currentEmail');
  const [currentEmailValue, setCurrentEmailValue] = useState(currentEmail);

  const validateSchema = Yup.object().shape({
    // currentEmail: Yup.string()
    //   .email('Invalid Email')
    //   .required('Current Email is required'),

    newEmail: Yup.string()
      .email('Invalid Email')
      .required('New Email is required'),
  });

  return (
    <div className="signInContainer">
      <h2>Update Email</h2>
      <Formik
        initialValues={{
          newEmail: '',
          currentEmail: '',
        }}
        validationSchema={validateSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          await fetch('http://localhost:5000/update/email', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              currentEmail: currentEmail,
              newEmail: values.newEmail,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data === 'Successful') {
                alert('Successful');
                // history.push('/');
                resetForm();
                sessionStorage.clear();
                setCurrentEmailValue(values.newEmail);
                console.log(values.currentEmail, 'Current Email');
                console.log(values.newEmail, 'New Email');
              } else if (data.code === 'ER_DUP_ENTRY') {
                alert('New Email already exists');
              } else {
                alert('Something Went wrong');
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
                  name="currentEmail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={currentEmailValue}
                  required
                />
                <label htmlFor="currentEmail">Current Email</label>
                <div className="errMsg-span">
                  {errors.currentEmail && touched.currentEmail
                    ? errors.currentEmail
                    : null}
                </div>
              </div>

              <div className="credentials">
                <input
                  type="name"
                  name="newEmail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newEmail}
                  required
                />
                <label htmlFor="newEmail">New Email</label>
                <div className="errMsg-span">
                  {errors.newEmail && touched.newEmail ? errors.newEmail : null}
                </div>
              </div>

              <button type="submit" className="formBtn">
                Update Profile
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UpdateEmail;
