import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router';

const UpdateName = () => {
  const history = useHistory();
  const currentEmail = sessionStorage.getItem('currentEmail');

  const validateSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Email is required'),

    newName: Yup.string()
      .min(2, 'New Name should be at least 2 characters')
      .required('New Name is required'),
  });

  return (
    <div className="signInContainer">
      <h2>Update Name</h2>
      <Formik
        initialValues={{
          newName: '',
          email: '',
        }}
        validationSchema={validateSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          await fetch('http://localhost:5000/update/name', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: currentEmail,
              newName: values.newName,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data === 'Successful') {
                alert('Successful');
                history.push('/');
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
                  value={currentEmail}
                  required
                />
                <label htmlFor="email">Email</label>
                <div className="errMsg-span">
                  {errors.email && touched.email ? errors.email : null}
                </div>
              </div>

              <div className="credentials">
                <input
                  type="name"
                  name="newName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newName}
                  required
                />
                <label htmlFor="newName">New Name</label>
                <div className="errMsg-span">
                  {errors.newName && touched.newName ? errors.newName : null}
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

export default UpdateName;
