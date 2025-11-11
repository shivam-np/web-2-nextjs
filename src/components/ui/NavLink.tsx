"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
}

export const NavLink = ({
  className,
  activeClassName,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  return (
    <Link
      className={`${className} ${isActive ? activeClassName : ""}`}
      {...props}
    />
  );
};
