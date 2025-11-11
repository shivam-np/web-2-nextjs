interface FormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const FormButton = ({
  className,
  children,
  ...props
}: FormButtonProps) => {
  return (
    <button
      className={`bg-green-700 text-white py-2 md:py-3 hover:bg-white hover:text-green-700 border-2 hover:border-green-700 transition-all duration-200 font-semibold cursor-pointer px-4 w-full flex justify-center items-center text-xl rounded-full disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
