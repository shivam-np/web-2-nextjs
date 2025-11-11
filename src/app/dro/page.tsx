import { NavLink } from "@/components/ui/NavLink";
import { Check, CheckCircle, MoveRight } from "lucide-react";

export default function Dro() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Debt Relief Order (DRO)
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              A solution for those with low income and few assets
            </p>
            <NavLink
              href="/#consultation"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Check Your Eligibility
              <MoveRight className="ml-2 h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* What is a DRO */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                What is a Debt Relief Order?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A Debt Relief Order (DRO) is a formal debt solution designed for
                people with low income, few assets, and relatively low levels of
                debt. It&apos;s often called &apos;bankruptcy lite&apos; as it
                provides similar benefits to bankruptcy but with a simpler, less
                expensive process.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-700 mb-4">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-500 mt-1" />
                      <span>Debts written off after 12 months</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-500 mt-1" />
                      <span>No monthly payments required</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-500 mt-1" />
                      <span>Protection from creditors</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-green-500 mt-1" />
                      <span>Lower cost than bankruptcy</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-700 mb-4">
                    Eligibility Criteria
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                      <span>Debts under £30,000</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                      <span>Assets worth less than £2,000</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                      <span>Less than £75 monthly disposable income</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                      <span>UK resident for 3+ years</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* DRO Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The DRO Process
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Initial Assessment
                    </h3>
                    <p className="text-gray-600">
                      We check if you meet the DRO criteria and gather
                      information about your debts, income, and assets.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Application Preparation
                    </h3>
                    <p className="text-gray-600">
                      We help prepare your DRO application with an approved
                      intermediary.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Official Receiver Review
                    </h3>
                    <p className="text-gray-600">
                      The Official Receiver reviews your application and makes a
                      decision.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      DRO Period
                    </h3>
                    <p className="text-gray-600">
                      Your DRO lasts for 12 months, during which creditors
                      can&apos;t take action against you.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Debt Write-Off
                    </h3>
                    <p className="text-gray-600">
                      After 12 months, included debts are written off and you
                      can make a fresh start.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
