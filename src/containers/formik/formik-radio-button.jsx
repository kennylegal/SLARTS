import RadioButtonOption from '@/components/forms/radio-button-input-component';
import { Field, FieldArray } from 'formik';

export default function FormikRadioButton({ ...props }) {
  return (
    <FieldArray
      name={props.name}
      render={(arrayHelpers) => (
        <div className={`${props.className}`}>
          {props.options?.map((option, index) => {
            return (
              <Field
                key={`${option.value}_${index}`}
                name={props.name}
                render={({ field }) => {
                  const isChecked = arrayHelpers.form.values[props.name] === option.value;

                  return (
                    <RadioButtonOption
                      label={option.label}
                      {...field}
                      checked={isChecked}
                      onChange={() => {
                        arrayHelpers.form.setFieldValue(props.name, option.value);
                      }}
                    />
                  );
                }}
              />
            );
          })}
        </div>
      )}
    />
  );
}
