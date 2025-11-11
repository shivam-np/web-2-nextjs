import Image from "next/image";
import { NavLink } from "../ui/NavLink";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
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
            <p className="text-gray-400">
              Your path to financial freedom starts here. We&apos;re dedicated
              to helping you become debt-free.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Debt Solutions</h4>
            <ul className="space-y-2">
              <li>
                <NavLink
                  href="/iva"
                  className="text-gray-400 hover:text-white"
                  activeClassName="text-white"
                >
                  IVA
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/debt-management"
                  className="text-gray-400 hover:text-white"
                  activeClassName="text-white"
                >
                  Debt Management
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/dro"
                  className="text-gray-400 hover:text-white"
                  activeClassName="text-white"
                >
                  Debt Relief Order
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <NavLink
                  href="/about"
                  className="text-gray-400 hover:text-white"
                  activeClassName="text-white"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                  activeClassName="text-white"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white"
                  activeClassName="text-white"
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/terms"
                  className="text-gray-400 hover:text-white"
                  activeClassName="text-white"
                >
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/disclaimer"
                  className="text-gray-400 hover:text-white"
                  activeClassName="text-white"
                >
                  Disclaimer
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Get in touch for a debt advice</p>
            <NavLink
              href="/contact"
              className="inline-block mt-4 px-6 py-2 bg-green-700 text-white hover:bg-green-800 transition-colors duration-300 box-shadow-custom"
              activeClassName="bg-green-800"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
