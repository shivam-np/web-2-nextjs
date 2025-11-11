import { NavLink } from "@/components/ui/NavLink";
import { Check, CheckCircle, MoveRight } from "lucide-react";

export default function DebtManagement() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Debt Management Plan (DMP)
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              A flexible way to manage your debts with affordable monthly
              payments
            </p>
            <NavLink
              href="/#consultation"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Start Your DMP Journey
              <MoveRight className="ml-2 h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* What is a DMP */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                What is a Debt Management Plan?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A Debt Management Plan (DMP) is an informal agreement between
                you and your creditors to pay your debts in full at a rate you
                can afford. It&apos;s a flexible solution that can be adjusted
                as your circumstances change.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-700 mb-4">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-500 mt-1" />
                      <span>Single affordable monthly payment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-500 mt-1" />
                      <span>Reduced interest and charges possible</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-500 mt-1" />
                      <span>No impact on your home</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-500 mt-1" />
                      <span>Flexible payments based on your circumstances</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-700 mb-4">
                    Suitable For
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                      <span>Any level of unsecured debt</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                      <span>Regular income source</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                      <span>Ability to make regular payments</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                      <span>UK residents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How DMP Works */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                How a DMP Works
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Free Assessment
                    </h3>
                    <p className="text-gray-600">
                      We review your income, expenses, and debts to determine if
                      a DMP is right for you.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Payment Plan
                    </h3>
                    <p className="text-gray-600">
                      We calculate an affordable monthly payment based on your
                      disposable income.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Creditor Negotiation
                    </h3>
                    <p className="text-gray-600">
                      We contact your creditors to propose the new payment
                      arrangement and negotiate interest freezes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Regular Payments
                    </h3>
                    <p className="text-gray-600">
                      You make one monthly payment to us, which we distribute to
                      your creditors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600">
                      We provide continuous support and can adjust your plan if
                      your circumstances change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
