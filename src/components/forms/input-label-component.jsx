export default function InputLabel({ name, text, isRequired = false, className }) {
    return (
      <label
        htmlFor={name}
        className={`text-start text-sm font-[500] ${className}`}
      >
        {text}
        {/* {isRequired && <span className="text-[#E02B1D] font-[500]">*</span>} */}
      </label>
    );
  }
  