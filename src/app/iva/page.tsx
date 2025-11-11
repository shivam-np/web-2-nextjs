import { NavLink } from "@/components/ui/NavLink";
import { Check, CheckCircle, MoveRight } from "lucide-react";

export default function IVA() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Individual Voluntary Arrangement (IVA)
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              A formal debt solution to help you become debt-free
            </p>
            <NavLink
              href="/#consultation"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Start Your IVA Journey
              <MoveRight className="w-5 h-5 ml-2" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* What is an IVA */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                What is an IVA?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                An Individual Voluntary Arrangement (IVA) is a legally binding
                agreement between you and your creditors. It&apos;s designed to
                help you repay your debts at an affordable rate, typically
                lasting 5-6 years. At the end of your IVA, any remaining debt is
                written off.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-700 mb-4">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-500 mt-1" />
                      <span>Write off up to 75% of your debts</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-500 mt-1" />
                      <span>Single affordable monthly payment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-500 mt-1" />
                      <span>Legal protection from creditors</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-500 mt-1" />
                      <span>Keep your home and assets</span>
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
                      <span>Debts over £5,000</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                      <span>Regular income source</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                      <span>Multiple types of unsecured debt</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                      <span>UK residents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How IVA Works */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                How an IVA Works
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Initial Consultation
                    </h3>
                    <p className="text-gray-600">
                      We assess your financial situation and determine if an IVA
                      is right for you.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Proposal Development
                    </h3>
                    <p className="text-gray-600">
                      An Insolvency Practitioner creates a formal proposal based
                      on what you can afford to pay.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Creditor Approval
                    </h3>
                    <p className="text-gray-600">
                      Your creditors vote on the proposal. If 75% agree, the IVA
                      becomes legally binding.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Monthly Payments
                    </h3>
                    <p className="text-gray-600">
                      You make agreed monthly payments for the duration of your
                      IVA (usually 5-6 years).
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Completion
                    </h3>
                    <p className="text-gray-600">
                      Once completed, remaining debts are written off and you
                      become debt-free.
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
