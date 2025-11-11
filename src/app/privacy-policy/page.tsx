export default function PrivacyPolicyPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-purple-100">
              How we protect and handle your personal information
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
                Introduction
              </h2>
              <p className="text-gray-600 mb-6">
                Welcome to our department (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;). We respect your privacy and are committed to
                protecting your data. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website and use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                We may collect and process the following types of personal data:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>
                  <span className="font-semibold">
                    Personal Identification Information:
                  </span>
                  Name, email address, phone number, and postal address.
                </li>
                <li>
                  <span className="font-semibold">
                    {" "}
                    Financial Information:{" "}
                  </span>
                  Debt details, income, expenditure, and other relevant
                  financial data.
                </li>
                <li>
                  <span className="font-semibold">Technical Data:</span> IP
                  address, browser type, operating system, and other technical
                  details collected via cookies.
                </li>
                <li>
                  <span className="font-semibold">Communication Data:</span>
                  Records of your correspondence with us.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>To provide and improve our debt management advice.</li>
                <li>
                  To communicate with you regarding your inquiries and services.
                </li>
                <li>
                  To comply with legal obligations and regulatory requirements.
                </li>
                <li>
                  To analyze website performance and enhance user experience.
                </li>
                <li>
                  To send you updates, or marketing materials (you can opt out
                  at any time).
                </li>
              </ul>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                How We Share Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We do not sell your data. However, we may share your information
                with:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>
                  <span className="font-semibold">
                    Trusted third-party service providers
                  </span>
                  ho assist in delivering our solutions and advice (e.g.,
                  payment processors, analytics, and service providers).
                </li>
                <li>
                  <span className="font-semibold">
                    {" "}
                    Regulatory authorities{" "}
                  </span>
                  if required by law or to protect our legal interests.
                </li>
                <li>
                  <span className="font-semibold"> Business partners </span>
                  where necessary to provide financial support services (with
                  your consent).
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 mb-4">
                We use cookies to enhance your browsing experience. These
                cookies may track:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Website traffic and user behavior.</li>
                <li>Session preferences to improve website functionality.</li>
                <li>
                  You can manage cookie preferences through your browser
                  settings.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Data Security
              </h2>
              <p className="text-gray-600 mb-6">
                We implement security measures to protect your data from
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet is 100%
                secure, and we encourage users to take appropriate security
                measures when sharing personal information.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Your Rights
              </h2>
              <p className="text-gray-600 mb-4">
                Under UK and Northern Ireland data protection laws, you have the
                right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Access the personal data we hold about you.</li>
                <li>Request corrections to inaccurate information.</li>
                <li>
                  Request deletion of your personal data (subject to legal
                  obligations).
                </li>
                <li>
                  Withdraw consent for data processing (where applicable).
                </li>
                <li>Object to certain data processing activities.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Third-Party Links
              </h2>
              <p className="text-gray-600 mb-6">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of external sites and
                encourage you to review their policies before providing any
                personal information.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with the revised effective date. We
                encourage you to review this policy periodically.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
