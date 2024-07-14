'use client';
import { Form, Formik } from 'formik';
import React from 'react';

export default function FormikForm({
  initialValues,
  children,
  onSubmit,
  onFormChange,
  validationSchema,
  innerRef,
  ...props
}) {
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnChange={true}
      validateOnMount={false}
      validateOnBlur={false}
      innerRef={innerRef}
    >
      <Form
        onChange={(e) => {
          if (onFormChange) {
            onFormChange(e.target);
          }
        }}
      >
        {children}
      </Form>
    </Formik>
  );
}
