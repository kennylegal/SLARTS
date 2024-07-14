import React from 'react';

export default function CustomCheckboxOption({
  name,
  className = '',
  ...props
}) {
  const inputClassNames = ' text-red-600 ';

  return (
    <div className="scale-150">
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
