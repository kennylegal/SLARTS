import React from 'react';

export default function CheckboxOption({
  name,
  className = '',
  ...props
}) {
  const inputClassNames = ' text-red-600 ';

  return (
    <div>
      <input
        type="checkbox"
        name={name}
        id={name}
        className={`${inputClassNames} ${className}`}
        {...props}
      />
    </div>
  );
}
