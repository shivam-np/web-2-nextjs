import Image from "next/image";
import { NavLink } from "../ui/NavLink";
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <NavLink
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/logo.png"
              height={50}
              width={100}
              style={{ width: "auto", height: "auto" }}
              loading="eager"
              className="h-8"
              alt="logo"
            />
          </NavLink>
          <Menu />
        </div>
      </nav>
    </header>
  );
};
