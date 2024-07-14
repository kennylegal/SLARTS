'use client';
import Select from 'react-select';

export default function BasicDropdown({
  name,
  placeholder,
  options,
  isSearchable,
  isMulti,
  onChange,
  value = null,
  useDefaultConfig = false,
}) {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: 0,
      outline: '1px solid #CCE0DF',
      color: '#00625F',
      fontSize: '14px',
      backgroundColor: 'white',
      padding: '4px 6px',
      borderRadius: '8px',
      boxShadow: 'none',
      width: '100%',
    }),
    option: (base, state) => ({
      ...base,
      fontSize: '12px',
    }),
    menu: (base, state) => ({
      ...base,
      position: 'absolute',
    }),
    singleValue: (base, state) => ({
      ...base,
      color: '#00625F',
      fontSize: '14px',
      fontWeight: '500',
    }),
    placeholder: (base, state) => ({
      ...base,
      color: '#00625F',
      fontSize: '14px',
      fontWeight: '500',
    }),
  };

  if (options && !useDefaultConfig) {
    if (isMulti) {
      value = options.filter((option) => value?.includes(option?.value)) || null;
    } else {
      value = options.find((option) => value == option?.value) || null;
    }
  }

  return (
    <Select
      options={options}
      placeholder={placeholder}
      isMulti={isMulti}
      isSearchable={isSearchable}
      onChange={onChange}
      autoFocus
      isClearable={isMulti}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      value={value}
      styles={customStyles}
    />
  );
}
