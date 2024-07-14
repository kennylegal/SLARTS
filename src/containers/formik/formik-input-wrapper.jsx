import InputLabel from '@/components/forms/input-label-component';
import { useFormikContext } from 'formik';

export default function FormInputWrapper({ input, children }) {
  const formikContext = useFormikContext();

  return (
    <div className="flex flex-col gap-2 mb-6">
      {input.label && (
        <InputLabel
          name={input.name}
          text={input.label}
          isRequired={input.required}
        />
      )}
      <div>
        {children}
        {formikContext.getFieldMeta(input.name) && (
          <p className="text-red-600" style={{ fontSize: '10px' }}>
            {formikContext.getFieldMeta(input.name).error}
          </p>
        )}
      </div>
    </div>
  );
}
