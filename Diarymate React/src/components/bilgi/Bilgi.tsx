import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './bilgi.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('İsim zorunlu'),
  date: Yup.date().required('Tarih zorunlu'),
  time: Yup.string().required('Saat zorunlu'),
});

const initialValues = {
  name: '',
  date: '',
  time: '',
};

const Bilgi = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form values:', values);

    // Simulate an API call or other asynchronous operation
    setTimeout(() => {
      // Perform actions, API calls, or validation here

      // Don't forget to setSubmitting(false) when done
      setSubmitting(false);
    }, 1000); // Simulate a delay for demonstration purposes
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      render={({ isSubmitting }) => (
        <Form>
          <div className='abb'>
            <div>
              <label htmlFor="name">Başlık:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="date">Tarih:</label>
              <Field type="date" id="date" name="date" />
              <ErrorMessage name="date" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="time">Saat:</label>
              <Field type="time" id="time" name="time" />
              <ErrorMessage name="time" component="div" className="error" />
            </div>
            <div>
              <button className='buton' type="submit" disabled={isSubmitting}>
                Kaydet
              </button>
            </div>
          </div>
        </Form>
        
      )}
    />
  );
};

export default Bilgi;
