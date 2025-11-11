import { MoneyHelp } from "@/assets/icons/MoneyHelp";
import { OneIcon } from "@/assets/icons/OneIcon";
import { ThreeIcon } from "@/assets/icons/ThreeIcon";
import { TrustIcon } from "@/assets/icons/Trust";
import { TwoIcon } from "@/assets/icons/TwoIcon";
import { DebtCard } from "@/components/cards/DebtCard";
import { LeadForm } from "@/components/features/FormV2";
import { NavLink } from "@/components/ui/NavLink";
import {
  Banknote,
  Calendar,
  Check,
  CheckCircle,
  CirclePoundSterling,
  House,
  MoveRight,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="pt-16 overflow-x-hidden">
        {/* Header Section */}
        <header className="gradient-bg text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-600 opacity-10 background-pattern"></div>
          <div
            className="container mx-auto px-4 relative min-h-[40vh] flex flex-col justify-center items-center"
            data-aos="fade-up"
          >
            <h1 className="text-3xl md:text-6xl max-w-[900px] font-semibold md:font-bold text-center leading-tight">
              <span className="block relative mb-4">
                <span className="absolute z-0 -inset-3 bg-orange-500 rounded-md"></span>
                <span className="z-1 relative">Struggling with debt?</span>
              </span>
              Talk to experts with <br />
              trusted support.
            </h1>
            <div className="max-w-[500px]">
              <p className="mt-6 md:text-2xl text-purple-100 flex items-center gap-2">
                <OneIcon />
                Get a 100% Personalized Debt Plan
              </p>
              <p className="mt-6 md:text-2xl text-purple-100 flex items-center gap-2">
                <TwoIcon />
                Answer 4 Quick Questions in Under 60 Seconds
              </p>
              <p className="mt-6 md:text-2xl text-purple-100 flex items-center gap-2">
                <ThreeIcon />
                Reveal 1 Clear Path to Financial Freedom
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <NavLink
                href="#consultation"
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-lg"
              >
                Get Started Now
              </NavLink>
            </div>
          </div>
        </header>

        {/* Form Section */}
        <section className="bg-white p-5">
          <div className="max-w-7xl mx-auto shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-tr-[3rem] md:rounded-tr-[8rem] rounded-bl-[3rem] md:rounded-bl-[8rem] overflow-hidden flex items-center justify-center">
            <LeadForm />
          </div>
        </section>

        {/* Main Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="grid gap-16 items-center max-w-7xl mx-auto">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-purple-700 mb-6">
                Are You Struggling with Debt?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                If you&apos;re facing overwhelming debt and need assistance, we
                can help. Our IVA (Individual Voluntary Arrangement) specialist
                partners are here to guide you through the process, helping you
                become debt-free.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 transition-colors duration-200 box-shadow-custom">
                  <Check className="w-6 h-6 text-green-700" />
                  <span className="text-lg text-gray-700">
                    Connect you to debt management experts
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 transition-colors duration-200 box-shadow-custom">
                  <Check className="w-6 h-6 text-green-700" />
                  <span className="text-lg text-gray-700">
                    Reduce your monthly repayments
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 transition-colors duration-200 box-shadow-custom">
                  <Check className="w-6 h-6 text-green-700" />
                  <span className="text-lg text-gray-700">
                    Stop creditor harassment
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 transition-colors duration-200 box-shadow-custom">
                  <Check className="w-6 h-6 text-green-700" />
                  <span className="text-lg text-gray-700">
                    Protect your home from repossession
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Debt Solutions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Debt Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Find the right solution for your financial situation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* IVA Card */}
              <DebtCard
                icon={<CheckCircle className="w-6 h-6 text-green-600" />}
                title="Individual Voluntary Arrangement"
                description="A formal agreement to repay your debts at an affordable rate with the remainder written off after completion."
                points={[
                  "Protect your assets",
                  "Single monthly payment",
                  "Legal protection",
                ]}
                href="/iva"
              />

              {/* DMP Card */}
              <DebtCard
                icon={
                  <CirclePoundSterling className="w-6 h-6 text-green-600" />
                }
                title="Debt Management Plan"
                description="An informal agreement to repay your debts in full at a rate you can afford, with potential interest freezes."
                points={[
                  "Flexible payments",
                  "Reduced interest possible",
                  "No impact on home",
                ]}
                href="/dmp"
              />

              {/* DRO Card */}
              <DebtCard
                icon={<TrustIcon className="w-6 h-6 text-green-600" />}
                title="Debt Relief Order"
                description="A formal solution for those with low income and few assets, writing off debts after 12 months."
                points={[
                  "Debts under £50,000",
                  "No monthly payments",
                  "Debts written off",
                ]}
                href="/dro"
              />
            </div>
          </div>
        </section>

        {/* What is IVA Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2
              className="text-4xl font-bold text-purple-700 mb-16 text-center"
              data-aos="fade-up"
            >
              Understanding IVA
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative" data-aos="fade-right">
                <div className="bg-purple-100 rounded-2xl p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-purple-700 mb-6">
                    What is an IVA?
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    An Individual Voluntary Arrangement (IVA) is a formal debt
                    solution in the UK that helps you manage unsecured debts.
                    It&apos;s a legally binding agreement between you and your
                    creditors to pay back your debts over a set period, usually
                    5-6 years.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                      <span className="text-gray-700">
                        Legally binding agreement
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                      <span className="text-gray-700">
                        Regulated by the UK government
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                      <span className="text-gray-700">
                        Managed by licensed Insolvency Practitioners
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-purple-200 rounded-2xl -z-10"></div>
              </div>
              <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
                <div className="bg-green-50 p-6 rounded-xl hover-scale">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <CirclePoundSterling className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Debt Write-Off
                  </h4>
                  <p className="text-gray-600">
                    Potential to write off up to 75% of your unsecured debts
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl hover-scale">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <TrustIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Legal Protection
                  </h4>
                  <p className="text-gray-600">
                    Stop creditor contact and legal actions
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl hover-scale">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Banknote className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Single Payment
                  </h4>
                  <p className="text-gray-600">
                    One affordable monthly payment
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl hover-scale">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Fixed Term
                  </h4>
                  <p className="text-gray-600">
                    Clear timeline to become debt-free
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IVA Benefits Section */}
        <section className="bg-purple-50 py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2
              className="text-4xl font-bold text-purple-700 mb-16 text-center"
              data-aos="fade-up"
            >
              Why Choose an IVA?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="bg-white p-8 rounded-2xl shadow-lg hover-scale"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <TrustIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Legally Protected
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Once your IVA is approved, you&apos;re legally protected from
                  creditor actions. They can&apos;t contact you directly or take
                  legal action against you.
                </p>
              </div>
              <div
                className="bg-white p-8 rounded-2xl shadow-lg hover-scale"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <CirclePoundSterling className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Affordable Payments
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your monthly payments are based on what you can afford after
                  essential living expenses. Interest and charges are usually
                  frozen.
                </p>
              </div>
              <div
                className="bg-white p-8 rounded-2xl shadow-lg hover-scale"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <House className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Keep Your Home
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Unlike bankruptcy, an IVA allows you to keep your home. You
                  can continue living in your property while managing your
                  debts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2
              className="text-4xl font-bold text-purple-700 mb-16 text-center"
              data-aos="fade-up"
            >
              Are You Eligible for an IVA?
            </h2>
            <div className="max-w-4xl mx-auto bg-linear-to-r from-purple-600 to-purple-700 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div data-aos="fade-right">
                    <h3 className="text-2xl font-bold text-purple-700 mb-6">
                      Basic Requirements:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <Check className="w-6 h-6 text-green-500 mt-1" />
                        <span className="text-gray-700">
                          Minimum £5,000 in unsecured debts
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-6 h-6 text-green-500 mt-1" />
                        <span className="text-gray-700">
                          Regular income source
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="w-6 h-6 text-green-500 mt-1" />
                        <span className="text-gray-700">UK resident</span>
                      </li>
                    </ul>
                  </div>
                  <div data-aos="fade-left">
                    <h3 className="text-2xl font-bold text-purple-700 mb-6">
                      Suitable For:
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                        <span className="text-gray-700">Credit card debts</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                        <span className="text-gray-700">Personal loans</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                        <span className="text-gray-700">Store cards</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-purple-600 mt-1" />
                        <span className="text-gray-700">Overdrafts</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <NavLink
                    href="#consultation"
                    className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Check Your Eligibility
                    <MoveRight className="w-5 h-5 ml-2" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MoneyHelper */}
        <div className="text-center my-8 flex items-center flex-col md:flex-row gap-8 md:w-max md:max-w-7xl mx-auto">
          <NavLink href="https://www.moneyhelper.org.uk">
            <MoneyHelp />
          </NavLink>
          <p className="text-gray-700 p-4 md:p-0">
            For free, impartial debt advice, visit
            <a
              href="https://www.moneyhelper.org.uk"
              className="text-purple-600 underline"
              target="_blank"
            >
              Money Helper
            </a>
            . We provide info and connect you to solutions.
          </p>
        </div>

        {/* Contact Info Section */}
        <section className="gradient-bg text-white py-24 relative overflow-hidden">
          <div
            className="container mx-auto text-center px-4"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold mb-6">Get in Touch with Us</h2>
            <p className="text-2xl mb-6 text-purple-100">
              Have any questions? Reach out to our support team today!
            </p>
            <p className="text-xl mb-8 text-purple-100">
              Reach out to our debt Experts Today
            </p>
            <NavLink
              href="#consultation"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-full text-lg font-semibold hover:bg-purple-50 hover:text-orange-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Us
              <MoveRight className="w-5 h-5 ml-2" />
            </NavLink>
          </div>
        </section>
      </div>
    </main>
  );
}
