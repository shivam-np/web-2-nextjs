export default function TermsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-purple-100">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                1. Introduction
              </h2>
              <p className="text-gray-600 mb-6">
                These terms and conditions govern your use of the website and
                services. By using our website and services, you accept these
                terms and conditions in full.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                2. Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide debt management advice and solutions including IVAs,
                DMPs, and DROs. Our services are subject to eligibility criteria
                and assessment. We reserve the right to refuse service to anyone
                at our discretion.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                3. Your Obligations
              </h2>
              <p className="text-gray-600 mb-4">You agree to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Provide accurate and complete information</li>
                <li>Update us of any changes to your circumstances</li>
                <li>Cooperate with our reasonable requests</li>
                <li>Make payments as agreed in your debt solution</li>
                <li>Not use our website for any unlawful purpose</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                4. Our Responsibilities
              </h2>
              <p className="text-gray-600 mb-4">We will:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>
                  Provide advice and services with reasonable care and skill
                </li>
                <li>Keep your information confidential</li>
                <li>Act in your best interests</li>
                <li>Comply with relevant laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                5. Fees and Charges
              </h2>
              <p className="text-gray-600 mb-6">
                Our initial consultation is free. Any fees for debt solutions
                will be clearly explained before you commit to any service. Fees
                vary depending on the solution chosen and your circumstances.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                6. Website Use
              </h2>
              <p className="text-gray-600 mb-6">
                You may view, download, and print pages from our website for
                your personal use. You must not modify digital copies or use any
                illustrations, photographs, or graphics separately from
                accompanying text.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                7. Intellectual Property
              </h2>
              <p className="text-gray-600 mb-6">
                We own the intellectual property rights for all material on our
                website. All our rights are reserved.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-6">
                We are not liable for any business losses. We are responsible
                for foreseeable losses you suffer that are caused by our breach
                of these terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                9. Data Protection
              </h2>
              <p className="text-gray-600 mb-6">
                We process information about you in accordance with our Privacy
                Policy. By using our website, you consent to such processing.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                10. Changes to Terms
              </h2>
              <p className="text-gray-600 mb-6">
                We may revise these terms at any time. You should check this
                page regularly to ensure you understand the terms that apply at
                that time.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                11. Applicable Law
              </h2>
              <p className="text-gray-600 mb-6">
                These terms are governed by English law. Any disputes will be
                subject to the exclusive jurisdiction of the English courts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
