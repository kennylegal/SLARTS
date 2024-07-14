import BasicTextArea from '@/components/forms/basic-text-area-component';
import { Field } from 'formik';

export default function FormikTextArea({ ...props }) {
  return (
    <Field name={props.name}>
      {({ field }) => (
        <BasicTextArea
          label={props.label}
          {...field}
          {...props}
          name={props.name}
        />
      )}
    </Field>
  );
}
