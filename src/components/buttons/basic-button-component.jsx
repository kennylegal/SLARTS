import { AiOutlineLoading } from 'react-icons/ai';

export default function BasicButton({
  className,
  loading = false,
  type = 'button',
  children,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={loading}
      className={` w-full min-h-[58px] flex justify-center items-center rounded-[8px] text-[13px] md:text-[16px] font-[700]  ${className}`}
      {...props}
    >
      {loading ? (
        <AiOutlineLoading className="w-6 h-6 animate-spin" />
      ) : (
        children
      )}
    </button>
  );
}
