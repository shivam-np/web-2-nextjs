"use client";

import {
  ClipboardCheck,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { Loader } from "../ui/Loader";
import { NavLink } from "../ui/NavLink";
import { Activity, useState } from "react";
import { useRouter } from "next/navigation";

const TOTAL_STEPS = 2;
const SUBMIT_URL =
  "https://script.google.com/macros/s/AKfycbz4yxFajomiuSJgOEJXVxuXlAn8nVZbm7BgR3BPx9l1FBEZC6ntC4enRjWPEP4TssL3/exec";

export const LeadForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    debt: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      fetch(SUBMIT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          router.push("/thank-you");
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (formData.debt === "") {
        // Show error message
      } else {
        setStep(step + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div
      id="consultation"
      className="bg-white p-8 md:p-10 w-full max-w-md mx-auto transition-all duration-300 border-t-4 border-green-700 box-shadow-custom"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ClipboardCheck className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-2">
          Get in touch for a debt advice
        </h3>
        <p className="text-gray-600">
          Take the first step towards financial freedom
        </p>
      </div>
      <p className="text-lg text-green-700 font-semibold text-center my-2">
        Step {step} of {TOTAL_STEPS}
      </p>
      <progress
        value={(step / TOTAL_STEPS) * 100}
        max="100"
        className="w-full mb-6 rounded-full overflow-hidden"
      ></progress>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Activity mode={step === 1 ? "visible" : "hidden"}>
          <div>
            <div className="grid grid-cols-1 gap-4">
              <RadioCard
                label="£0 - £5,000"
                value="£0 - £5,000"
                selected={formData.debt === "£0 - £5,000"}
                onSelect={(value) => setFormData({ ...formData, debt: value })}
              />
              <RadioCard
                label="£5,000 - £10,000"
                value="£5,000 - £10,000"
                selected={formData.debt === "£5,000 - £10,000"}
                onSelect={(value) => setFormData({ ...formData, debt: value })}
              />
              <RadioCard
                label="£10,000 - £15,000"
                value="£10,000 - £15,000"
                selected={formData.debt === "£10,000 - £15,000"}
                onSelect={(value) => setFormData({ ...formData, debt: value })}
              />
              <RadioCard
                label="£15,000 - £20,000"
                value="£15,000 - £20,000"
                selected={formData.debt === "£15,000 - £20,000"}
                onSelect={(value) => setFormData({ ...formData, debt: value })}
              />
            </div>
          </div>
        </Activity>
        <Activity mode={step === 2 ? "visible" : "hidden"}>
          <div className="space-y-5">
            <div className="relative" id="nameField">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="form-input w-full pl-12 p-4 border-2 border-gray-200 rounded-xl text-gray-800 text-base transition-all duration-200 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                  required
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="relative" id="emailField">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="form-input w-full pl-12 p-4 border-2 border-gray-200 rounded-xl text-gray-800 text-base transition-all duration-200 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="relative" id="phoneField">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mobile Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="mobile"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  title="Enter a valid UK mobile number"
                  className="form-input w-full pl-12 p-4 border-2 border-gray-200 rounded-xl text-gray-800 text-base transition-all duration-200 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
                  required
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>
          </div>
        </Activity>

        <div className="pt-4">
          <div className="flex gap-2">
            <Activity mode={step > 1 ? "visible" : "hidden"}>
              <button
                type="button"
                disabled={loading}
                onClick={handlePrevious}
                className="w-full py-4 bg-green-700 disabled:opacity-50 text-white font-bold text-lg rounded-xl hover:bg-green-800 transform hover:-translate-y-1 hover:disabled:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer"
              >
                <span>Previous Step</span>
              </button>
            </Activity>
            <Activity mode={step < TOTAL_STEPS ? "visible" : "hidden"}>
              <button
                type="button"
                onClick={handleNext}
                className="w-full py-4 bg-green-700 text-white font-bold text-lg rounded-xl hover:bg-green-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-default cursor-pointer"
              >
                <span>Next Step</span>
              </button>
            </Activity>
            <Activity mode={step === TOTAL_STEPS ? "visible" : "hidden"}>
              <button
                type="submit"
                className="w-full py-4 bg-green-700 text-white font-bold text-lg rounded-xl hover:bg-green-800 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer"
              >
                <span id="buttonText">Get Debt Advice</span>
                <Activity mode={loading ? "visible" : "hidden"}>
                  <Loader />
                </Activity>
              </button>
            </Activity>
          </div>
        </div>

        <p className="text-xs text-center text-gray-500 mt-4">
          By submitting this form, you agree to our
          <NavLink
            href="/privacy-policy"
            className="text-orange-600 hover:text-orange-700"
          >
            Privacy Policy
          </NavLink>
          and
          <NavLink
            href="/terms"
            className="text-orange-600 hover:text-orange-700"
          >
            Terms of Service
          </NavLink>
        </p>
      </form>
    </div>
  );
};

interface RadioCardProps {
  label: string;
  value: string;
  selected: boolean;
  onSelect: (value: string) => void;
}

function RadioCard({ label, value, selected, onSelect }: RadioCardProps) {
  return (
    <div
      onClick={() => onSelect(value)}
      className={`p-2 px-4 border-2 border-green-700 text-xl text-green-700 font-semibold text-center rounded-lg flex items-center cursor-pointer hover:bg-green-100 transition-all duration-200 hover:shadow-xl gap-3 ${
        selected ? "bg-green-100" : ""
      }`}
    >
      <span
        className={`size-4 border rounded-full ${
          selected ? "bg-green-700" : "bg-white"
        } `}
      ></span>
      <span>{label}</span>
    </div>
  );
}
