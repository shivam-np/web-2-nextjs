import { Whatsapp } from "@/assets/icons/Whatsapp";
import { NavLink } from "@/components/ui/NavLink";
import { Check, CheckCircle, MoveLeft } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg p-4 mt-16">
      <div
        className="bg-white p-8 md:p-12 max-w-lg w-full text-center box-shadow-custom"
        data-aos="zoom-in"
      >
        <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-8">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Thank You!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We&apos;ve received your enquiry and will be in touch shortly. One of
          our debt specialists will contact you to discuss your options.
        </p>
        <div className="space-y-4">
          <p className="text-gray-600">What happens next?</p>
          <ul className="text-left space-y-3">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span className="text-gray-600">
                Our specialist will review your details
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span className="text-gray-600">
                We&apos;ll contact you within 24 hours
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span className="text-gray-600">
                Free consultation to discuss your options
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-8 gap-4 grid grid-cols-1 sm:grid-cols-2">
          <NavLink
            href="/"
            className="inline-flex items-center justify-center px-4 py-3 bg-green-700 text-white font-semibold hover:bg-green-800 transition-all duration-300 box-shadow-custom"
          >
            <MoveLeft className="w-5 h-5 mr-2" />
            Back to Home
          </NavLink>
          <NavLink
            href="/"
            className="inline-flex items-center justify-center px-4 py-3 bg-green-700 text-white font-semibold hover:bg-green-800 transition-all duration-300 box-shadow-custom"
          >
            <Whatsapp />
            Want to chat?
          </NavLink>
        </div>
      </div>
    </div>
  );
}
