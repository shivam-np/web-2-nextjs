export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-purple-100">
              We&apos;re here to help you with your debt concerns
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8 mt-32">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Have questions about our debt solutions? Our friendly team
                    is here to help you find the right solution for your
                    situation.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 box-shadow-custom">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                <form
                  id="contactForm"
                  action=""
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 border-2 border-gray-200 focus:border-green-600 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 border-2 border-gray-200 focus:border-green-600 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full p-3 border-2 border-gray-200 focus:border-green-600 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full p-3 border-2 border-gray-200 focus:border-green-600 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="iva">IVA Enquiry</option>
                      <option value="dmp">Debt Management Plan</option>
                      <option value="dro">Debt Relief Order</option>
                      <option value="other">Other Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full p-3 border-2 border-gray-200 focus:border-green-600 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-green-700 text-white font-semibold hover:bg-green-800 transition-colors duration-300 box-shadow-custom"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    By submitting this form, you agree to our
                    <a
                      href="/privacy-policy.html"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
