import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AdminLayout } from '@layout';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const FormComponent = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const handleSubmit = (values :any) => {
    console.log('Form values:', values);
  };

  return (
    <AdminLayout>
    <div className="container mt-5">
      <h2>Simple Form with Formik and Bootstrap</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </AdminLayout>
  );
};

export default FormComponent;
