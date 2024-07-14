import { CiSearch } from 'react-icons/ci';

export default function SearchInputComponent({
  className,
  ...rest
}) {
  return (
    <div className="p-2 px-2 rounded-lg border border-[#D0D0D0] flex items-center gap-2">
      <CiSearch size={20} />
      <input
        {...rest}
        placeholder="Search"
        className={`w-full tracking-wider outline-none text-sm ${className}`}
      />
    </div>
  );
}
