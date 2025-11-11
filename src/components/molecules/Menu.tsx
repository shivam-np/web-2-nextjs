"use client";

import { MenuIcon } from "lucide-react";
import { NavLink } from "../ui/NavLink";
import { Activity, useState } from "react";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        <NavLink
          href="/"
          className="text-gray-600 hover:text-green-700"
          activeClassName="font-bold text-green-800"
        >
          Home
        </NavLink>
        <div className="relative group">
          <button className="text-gray-600 hover:text-green-700">
            Debt Solutions
          </button>
          <div className="absolute left-0 pt-2 w-48 bg-white transition-all duration-300 shadow-lg hidden group-hover:block">
            <NavLink
              href="/iva"
              activeClassName="font-bold text-green-800"
              className="block px-4 py-2 text-gray-800 hover:bg-green-50"
            >
              IVA
            </NavLink>
            <NavLink
              href="/debt-management"
              className="block px-4 py-2 text-gray-800 hover:bg-green-50"
              activeClassName="font-bold text-green-800"
            >
              Debt Management
            </NavLink>
            <NavLink
              href="/dro"
              className="block px-4 py-2 text-gray-800 hover:bg-green-50"
              activeClassName="font-bold text-green-800"
            >
              Debt Relief Order
            </NavLink>
          </div>
        </div>
        <NavLink
          href="/about"
          className="text-gray-600 hover:text-green-700"
          activeClassName="font-bold text-green-800"
        >
          About Us
        </NavLink>
        <NavLink
          href="/contact"
          className="text-gray-600 hover:text-green-700"
          activeClassName="font-bold text-green-800"
        >
          Contact
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon size={24} className="text-gray-600" />
      </button>
      {/* Mobile Menu */}
      <Activity mode={isOpen ? "visible" : "hidden"}>
        <div className="md:hidden mt-4 fixed bg-white w-full left-1/2 -translate-x-1/2 px-4 py-2 shadow-md">
          <NavLink
            href="/"
            className="block py-2 text-gray-600"
            activeClassName="font-bold text-green-800"
          >
            Home
          </NavLink>
          <NavLink
            href="/iva"
            className="block py-2 text-gray-600"
            activeClassName="font-bold text-green-800"
          >
            IVA
          </NavLink>
          <NavLink
            href="/debt-management"
            className="block py-2 text-gray-600"
            activeClassName="font-bold text-green-800"
          >
            Debt Management
          </NavLink>
          <NavLink
            href="/dro"
            className="block py-2 text-gray-600"
            activeClassName="font-bold text-green-800"
          >
            Debt Relief Order
          </NavLink>
          <NavLink
            href="/about"
            className="block py-2 text-gray-600"
            activeClassName="font-bold text-green-800"
          >
            About Us
          </NavLink>
          <NavLink
            href="/contact"
            className="block py-2 text-gray-600"
            activeClassName="font-bold text-green-800"
          >
            Contact
          </NavLink>
        </div>
      </Activity>
    </nav>
  );
};
