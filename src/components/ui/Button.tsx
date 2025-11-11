interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={`border-2 border-green-700 font-semibold transition-all duration-200 cursor-pointer text-green-700 px-4 py-1 rounded-full hover:bg-green-700 hover:text-white disabled:opacity-50 ${className}`} {...props}>
      {children}
    </button>
  );
};
