function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="container mx-auto p-6 max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8 underline decoration-wavy decoration-pink-400">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Get in Touch
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
              <button
                type="submit"
                className="w-full cursor-pointer bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Our Contact Details
              </h2>
              <p className="text-gray-700">
                <strong>📍 Address:</strong> 123 Pet Street, Paw City, Pune
              </p>
              <p className="text-gray-700">
                <strong>📞 Phone:</strong> 8080692940
              </p>
              <p className="text-gray-700">
                <strong>✉️ Email:</strong> contact@petconnection.com
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Find Us on Google Maps
              </h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093745!2d-122.41941548468127!3d37.77492927975959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f5e1a45%3A0x4a8f1e4a5c6f8a28!2sPune%2C+Maharashtra%2C+India!5e0!3m2!1sen!2sin!4v1614172834959!5m2!1sen!2sin"
                width="100%"
                height="250"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
