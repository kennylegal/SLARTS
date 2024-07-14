'use client';
import React from 'react';
import FormikCheckBox from './formik-checkbox';
import FormikInputField from './formik-input-field';
import FormikTextArea from './formik-text-area';
import FormikRadioButton from './formik-radio-button';
import FormikDropdown from './formik-dropdown';
import FormInputWrapper from './formik-input-wrapper';

const FormikInput = ({ type = 'text', ...props }) => {
  switch (type) {
    case 'text':
    case 'number':
    case 'password':
    case 'email':
    case 'date':
      return (
        <FormInputWrapper input={props}>
          <FormikInputField type={type} {...props} />
        </FormInputWrapper>
      );

    case 'checkbox':
      return (
        <FormInputWrapper input={props}>
          <FormikCheckBox {...props} />
        </FormInputWrapper>
      );
    case 'radio':
      return (
        <FormInputWrapper input={props}>
          <FormikRadioButton {...props} />
        </FormInputWrapper>
      );    
    case 'textarea':
      return (
        <FormInputWrapper input={props}>
          <FormikTextArea {...props} />
        </FormInputWrapper>
      );
    case 'dropdown':
      const { placeholder, options, ...restProps } = props;
      return (
        <FormInputWrapper input={props}>
          <FormikDropdown
            placeholder={placeholder || ''}
            options={options || []}
            {...restProps}
          />
        </FormInputWrapper>
      );
    default:
      return null;
  }
};

export default FormikInput;
