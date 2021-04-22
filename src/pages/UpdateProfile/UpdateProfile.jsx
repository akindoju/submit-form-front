import React from 'react';
import './UpdateProfile.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router';

const UpdateProfile = () => {
  const history = useHistory();

  const validateSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name should be at least 2 characters')
      .required('Name is required'),

    email: Yup.string().email('Invalid Email').required('Email is required'),
  });

  return (
    <div className="signInContainer">
      <h2>Update Profile</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={validateSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          await fetch('http://localhost:5000/update', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
            }),
          });
          // .then((res) => res.json())
          // .then((data) => {
          //   if (data === 'Successful') {
          //     history.push('/homepage');
          //   } else {
          //     alert('Something went wrong');
          //   }
          // });

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
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  required
                />
                <label htmlFor="name">Name</label>
                <div className="errMsg-span">
                  {errors.name && touched.name ? errors.name : null}
                </div>
              </div>

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

export default UpdateProfile;
