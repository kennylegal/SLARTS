'use client';
import BasicDropdown from '@/components/forms/basic-dropdown-component';
import { Field } from 'formik';

export default function FormikDropdown({
  name,
  placeholder,
  options,
  isSearchable = false,
  isMulti = false,
  ...props
}) {
  return (
    <Field name={name} validate={props.validate}>
      {({ field, form }) => {
        return (
          <BasicDropdown
            name={name}
            options={options}
            placeholder={placeholder}
            isMulti={isMulti}
            isSearchable={isSearchable}
            onChange={(item) => {
              let newValue = '';

              if (!isMulti) {
                form.setFieldValue(name, item.value);
                newValue = item.value;
              } else {
                const values = item?.map((i) => i.value);
                newValue = values;
                form.setFieldValue(name, values);
              }

              if (props.onChange) {
                props.onChange(newValue);
              }
            }}
            value={field.value}
          />
        );
      }}
    </Field>
  );
}
