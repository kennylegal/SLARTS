export default function BasicInput({
    type,
    name,
    required = false,
    disabled = false,
    ...props
  }) {
    const inputClassNames =
      'w-full h-full border border-[#6C6B68] text-sm p-3 rounded-[8px] outline-none focus:border-primary-200 tracking-wider';
  
    return (
      <input
        {...props}
        type={type}
        id={name}
        name={name}
        required={required}
        disabled={disabled}
        className={inputClassNames}
      />
    );
  }
  