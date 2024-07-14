import CheckboxOption from '@/components/forms/checkbox-input-component';
import InputLabel from '@/components/forms/input-label-component';
import { Field, FieldArray } from 'formik';
import { Fragment } from 'react';

export default function FormikCheckBox(props) {
  return (
    <FieldArray
      name={props.name}
      render={(arrayHelpers) => (
        <Fragment>
          {props.options?.map((option, index) => {
            return (
              <Field
                key={`${option.value}_${index}`}
                name={props.name}
                render={({ field }) => {
                  let isChecked;

                  if (props.config?.isToggle) {
                    isChecked = arrayHelpers.form.values[props.name];
                  } else {
                    isChecked = arrayHelpers.form.values[props.name].includes(
                      option?.value
                    );
                  }

                  return (
                    <div className="flex items-center gap-2">
                      <CheckboxOption
                        {...field}
                        checked={isChecked}
                        onChange={() => {
                          if (props.config?.isToggle) {
                            arrayHelpers.form.setFieldValue(
                              props.name,
                              !field.value
                            );
                          } else {
                            const options =
                              arrayHelpers.form.values[props.name];
                            const value = option?.value;
                            const index = options.indexOf(value);

                            if (index !== -1) {
                              arrayHelpers.remove(index);
                            } else {
                              arrayHelpers.push(value);
                            }
                          }
                        }}
                      />
                      <InputLabel name={props.name} text={option.label} />
                    </div>
                  );
                }}
              />
            );
          })}
        </Fragment>
      )}
    />
  );
}
