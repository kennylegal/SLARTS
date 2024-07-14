import React from 'react';

const RadioButtonOption = ({
  name,
  label,
  checked,
  onChange,
  labelStyle,
  ...props
}) => {
  return (
    <label>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <span className={`ml-2 ${labelStyle}`}>{label}</span>
    </label>
  );
};

export default RadioButtonOption;
