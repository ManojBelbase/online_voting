import React from "react";

const Contact = () => {
  return (
    <div className="px-4 md:px-16 lg:px-32 py-8 bg-white">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>
      <p className="text-lg text-gray-700 leading-7 mb-4 text-center">
        Have questions or need support? We're here to help. Feel free to reach
        out to us through the following channels.
      </p>
      <div className="grid gap-8 md:grid-cols-2 mt-8">
        {/* Contact Details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Contact Information
          </h2>
          <p className="text-gray-700">
            <strong>Email:</strong> support@votingapp.com
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> 123 Voting Lane, Democracy City, World
          </p>
          <p className="text-gray-700">
            <strong>Working Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
          </p>
        </div>
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
