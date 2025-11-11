export default function Disclaimer() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
            <p className="text-xl text-purple-100">
              Important information about our services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white p-8 box-shadow-custom">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Service Disclaimer
              </h2>
              <p className="text-gray-600 mb-6">
                We are not a debt management firm and do not offer IVAs, DMPs,
                or DROs directly. We operate as a connection service, linking
                individuals seeking debt solutions with FCA-authorized experts
                who can provide tailored debt advice and solutions.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Our Role
              </h2>
              <p className="text-gray-600 mb-6">Our primary function is to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Provide general information about debt solutions</li>
                <li>Connect you with qualified debt solution providers</li>
                <li>Help you understand your options</li>
                <li>Facilitate initial contact with appropriate experts</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Third-Party Services
              </h2>
              <p className="text-gray-600 mb-6">
                The actual debt solutions (IVAs, DMPs, and DROs) are provided by
                third-party organizations that are:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>
                  Authorized and regulated by the Financial Conduct Authority
                  (FCA)
                </li>
                <li>Qualified to provide specific debt solutions</li>
                <li>Independent from our organization</li>
                <li>Responsible for their own advice and services</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Information Accuracy
              </h2>
              <p className="text-gray-600 mb-6">
                While we strive to provide accurate and up-to-date information
                about debt solutions, this information is:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>For general guidance only</li>
                <li>Not a substitute for professional advice</li>
                <li>Subject to change based on individual circumstances</li>
                <li>Not guaranteed to be complete or current</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                No Guarantee of Outcome
              </h2>
              <p className="text-gray-600 mb-6">We cannot guarantee:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Acceptance for any particular debt solution</li>
                <li>Specific outcomes or results</li>
                <li>The services of specific providers</li>
                <li>The success of any debt solution</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Seek Professional Advice
              </h2>
              <p className="text-gray-600 mb-6">
                We strongly recommend that you:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Seek independent financial advice</li>
                <li>Carefully review all terms and conditions</li>
                <li>Consider all available options</li>
                <li>Make informed decisions based on your circumstances</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
