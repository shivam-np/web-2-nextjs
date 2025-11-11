"use client";

import { NavLink } from "../ui/NavLink";
import { Activity, useState } from "react";
import { useRouter } from "next/navigation";
import { FormButton } from "../ui/FormButton";
import { Button } from "../ui/Button";
import { Loader } from "lucide-react";

const TOTAL_STEPS = 9;
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
    goal: "",
    type: "",
    concern: "",
    propertyType: "",
    employmentStatus: "",
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
            <p className="text-green-700 font-bold text-2xl text-center mb-2 md:mb-8">
              What are you hoping to achieve by getting debt advice?
            </p>
            <div className="grid grid-cols-2 gap-4 w-full">
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    goal: "Write off unsecured debt",
                  });
                  setStep(step + 1);
                }}
              >
                Write off unsecured debt
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    goal: "One affordable monthly payment",
                  });
                  setStep(step + 1);
                }}
              >
                One affordable monthly payment
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({ ...formData, goal: "Keep my home and car" });
                  setStep(step + 1);
                }}
              >
                Keep my home and car
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    goal: "Freeze interest and charges",
                  });
                  setStep(step + 1);
                }}
              >
                Freeze interest and charges
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    goal: "Prevent legal action",
                  });
                  setStep(step + 1);
                }}
              >
                Prevent legal action
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    goal: "I want all of the above",
                  });
                  setStep(step + 1);
                }}
              >
                I want all of the above
              </FormButton>
            </div>
          </div>
        </Activity>
        <Activity mode={step === 3 ? "visible" : "hidden"}>
          <div>
            <p className="text-green-700 font-bold text-2xl text-center mb-2 md:mb-8">
              Which debt are you most worried about?
            </p>
            <div className="grid grid-cols-2 gap-4 w-full">
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    type: "Credit Card",
                  });
                  setStep(step + 1);
                }}
              >
                Credit Card
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    type: "Loan",
                  });
                  setStep(step + 1);
                }}
              >
                Loan
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({ ...formData, type: "Overdraft" });
                  setStep(step + 1);
                }}
              >
                Overdraft
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    type: "Store Card",
                  });
                  setStep(step + 1);
                }}
              >
                Store Card
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    type: "Council Tax",
                  });
                  setStep(step + 1);
                }}
              >
                Council Tax
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    type: "Other",
                  });
                  setStep(step + 1);
                }}
              >
                Other
              </FormButton>
            </div>
          </div>
        </Activity>
        <Activity mode={step === 4 ? "visible" : "hidden"}>
          <div>
            <p className="text-green-700 font-bold text-2xl text-center mb-2 md:mb-8">
              What is your biggest concern about your debt?
            </p>
            <div className="grid grid-cols-2 gap-4 w-full">
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    concern: "Unable to pay bills",
                  });
                  setStep(step + 1);
                }}
              >
                Unable to pay bills
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    concern: "Creditor Hassle",
                  });
                  setStep(step + 1);
                }}
              >
                Creditor Hassle
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    concern: "Relying on credit cards/loans",
                  });
                  setStep(step + 1);
                }}
              >
                Relying on credit cards/loans
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    concern: "Unaffordable repayments",
                  });
                  setStep(step + 1);
                }}
              >
                Unaffordable repayments
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    concern: "Losing your home",
                  });
                  setStep(step + 1);
                }}
              >
                Losing your home
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    concern: "Other",
                  });
                  setStep(step + 1);
                }}
              >
                Other
              </FormButton>
            </div>
          </div>
        </Activity>
        <Activity mode={step === 5 ? "visible" : "hidden"}>
          <div>
            <p className="text-green-700 font-bold text-2xl text-center mb-2 md:mb-8">
              What type of property do you live in?
            </p>
            <div className="grid grid-cols-2 gap-4 w-full">
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    propertyType: "Rented",
                  });
                  setStep(step + 1);
                }}
              >
                Rented
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    propertyType: "Private Rented",
                  });
                  setStep(step + 1);
                }}
              >
                Private Rented
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    propertyType: "Living with Parents",
                  });
                  setStep(step + 1);
                }}
              >
                Living with Parents
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    propertyType: "Owned",
                  });
                  setStep(step + 1);
                }}
              >
                Owned
              </FormButton>
            </div>
          </div>
        </Activity>
        <Activity mode={step === 6 ? "visible" : "hidden"}>
          <div>
            <p className="text-green-700 font-bold text-2xl text-center mb-2 md:mb-8">
              What&apos;s your employment status?
            </p>
            <div className="grid grid-cols-2 gap-4 w-full">
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    employmentStatus: "Employed",
                  });
                  setStep(step + 1);
                }}
              >
                Employed
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    employmentStatus: "Self-Employed",
                  });
                  setStep(step + 1);
                }}
              >
                Self-Employed
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    employmentStatus: "Retired",
                  });
                  setStep(step + 1);
                }}
              >
                Retired
              </FormButton>
              <FormButton
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    employmentStatus: "Unemployed",
                  });
                  setStep(step + 1);
                }}
              >
                Unemployed
              </FormButton>
            </div>
          </div>
        </Activity>
        <Activity mode={step === 7 ? "visible" : "hidden"}>
          <div>
            <p className="text-green-700 font-bold text-2xl text-center mb-2 md:mb-8">
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
            <FormButton
              type="button"
              className="mt-6 w-max mx-auto"
              onClick={() => setStep(step + 1)}
              disabled={!formData.name.trim()}
            >
              Next Question
            </FormButton>
          </div>
        </Activity>
        <Activity mode={step === 8 ? "visible" : "hidden"}>
          <div>
            <p className="text-green-700 font-bold text-2xl text-center mb-2 md:mb-8">
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
            <FormButton
              type="button"
              className="mt-6 w-max mx-auto"
              onClick={() => setStep(step + 1)}
              disabled={!formData.email.trim()}
            >
              Next Question
            </FormButton>
          </div>
        </Activity>
        <Activity mode={step === 9 ? "visible" : "hidden"}>
          <div>
            <p className="text-green-700 font-bold text-2xl text-center mb-2 md:mb-8">
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
              onClick={handleSubmit}
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
