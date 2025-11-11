"use client";

import { NavLink } from "../ui/NavLink";
import { Activity, useState } from "react";
import { useRouter } from "next/navigation";
import { FormButton } from "../ui/FormButton";
import { Button } from "../ui/Button";
import { Loader } from "lucide-react";

const TOTAL_STEPS = 2;
const SUBMIT_URL =
  "https://script.google.com/macros/s/AKfycbykMVk3JRdJgSRoaX8oIzRIddO0zmV7iUeVNIRPUAqZfMeANYmdetAJdHZmdN7EXnZUsw/exec";

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
      console.log("Submitting form data:", formData);
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

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div
      id="consultation"
      className="bg-white p-8 md:p-10 w-full mx-auto transition-all duration-300 box-shadow-custom flex flex-col items-center justify-center relative"
    >
      <p className="text-xl text-green-700 font-semibold text-center my-2">
        Step {step} of {TOTAL_STEPS}
      </p>
      <progress
        value={(step / TOTAL_STEPS) * 100}
        max="100"
        className="w-full mb-6 rounded-full overflow-hidden max-w-md h-2.5"
      ></progress>

      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-3xl">
        <Activity mode={step === 1 ? "visible" : "hidden"}>
          <div>
            <p className="text-green-700 font-bold text-2xl text-center mb-2 md:mb-8">
              How much debt do you have?
            </p>
            <div className="grid grid-cols-2 gap-4 w-full">
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({ ...formData, debt: "0-5000" });
                  setStep(step + 1);
                }}
              >
                £0 - £5,000
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({ ...formData, debt: "5000-10000" });
                  setStep(step + 1);
                }}
              >
                £5,000 - £10,000
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({ ...formData, debt: "10000-20000" });
                  setStep(step + 1);
                }}
              >
                £10,000 - £20,000
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({ ...formData, debt: "20000+" });
                  setStep(step + 1);
                }}
              >
                £20,000+
              </FormButton>
            </div>
          </div>
        </Activity>
        <Activity mode={step === 2 ? "visible" : "hidden"}>
          <div>
            <p className="text-green-700 font-bold text-2xl text-center mb-2 md:mb-4">
              What is your full name?
            </p>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-3 text-lg"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <p className="text-green-700 font-bold text-2xl text-center mb-2 md:mb-4">
              What is your Email?
            </p>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-3 text-lg"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
            />
          </div>
          <div>
            <p className="text-green-700 font-bold text-2xl text-center mb-2 md:mb-4">
              What is your Phone Number?
            </p>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-md p-3 text-lg"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="Enter your phone number"
            />
            <FormButton
              type="submit"
              className="mt-6 w-max mx-auto"
              disabled={!formData.phone.trim()}
            >
              Check Eligibility & Submit
            </FormButton>
          </div>
        </Activity>

        <div className="flex justify-center items-center">
          <Activity mode={step > 1 ? "visible" : "hidden"}>
            <Button
              type="button"
              onClick={handlePrevious}
              disabled={step === 1}
            >
              Previous
            </Button>
          </Activity>
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
      <Activity mode={loading ? "visible" : "hidden"}>
        <div className="absolute inset-0 bg-white/75 flex items-center justify-center z-10">
          <Loader className="animate-spin size-20 text-green-700" />
        </div>
      </Activity>
    </div>
  );
};
