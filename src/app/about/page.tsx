import { PowerIcon } from "@/assets/icons/Power";
import { TrustIcon } from "@/assets/icons/Trust";
import { NavLink } from "@/components/ui/NavLink";
import { Check, Clock, MoveRight } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About</h1>
            <p className="text-xl text-purple-100">
              Your Trusted Partner in Financial Recovery
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Our Story */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                we understand that facing debt can be overwhelming. Our journey
                began with a simple mission: to help people break free from the
                burden of debt and rebuild their financial lives. With years of
                experience in debt management, we&apos;ve helped thousands of
                individuals find their path to financial freedom.
              </p>
            </div>

            {/* Our Values */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 box-shadow-custom hover:bg-green-50 transition-colors duration-200">
                <div className="w-12 h-12 bg-green-100 flex items-center justify-center mb-4">
                  <TrustIcon />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Trust
                </h3>
                <p className="text-gray-600">
                  We build lasting relationships based on transparency and
                  honesty.
                </p>
              </div>
              <div className="bg-white p-6 box-shadow-custom hover:bg-green-50 transition-colors duration-200">
                <div className="w-12 h-12 bg-green-100 flex items-center justify-center mb-4">
                  <PowerIcon />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Empowerment
                </h3>
                <p className="text-gray-600">
                  We give you the tools and knowledge to take control of your
                  finances.
                </p>
              </div>
              <div className="bg-white p-6 box-shadow-custom hover:bg-green-50 transition-colors duration-200">
                <div className="w-12 h-12 bg-green-100 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-green-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Support
                </h3>
                <p className="text-gray-600">
                  We&apos;re with you every step of your journey to financial
                  freedom.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-8 box-shadow-custom mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Us
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Expert Advice
                    </h3>
                    <p className="text-gray-600">
                      Our team of experienced debt advisors provides
                      personalized solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Free Initial Consultation
                    </h3>
                    <p className="text-gray-600">
                      Get started with a no-obligation assessment of your
                      situation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Tailored Solutions
                    </h3>
                    <p className="text-gray-600">
                      We find the right debt solution that fits your
                      circumstances.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600">
                      We&apos;re here to support you throughout your debt-free
                      journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <NavLink
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-green-700 text-white font-semibold text-lg hover:bg-green-800 transition-all duration-300 box-shadow-custom"
              >
                Start Your Journey Today
                <MoveRight className="w-5 h-5 ml-2" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
