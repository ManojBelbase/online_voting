import React from "react";

const About = () => {
  return (
    <div className="px-4 md:px-16 lg:px-32 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        About Our Voting App
      </h1>
      <p className="text-lg text-gray-700 leading-7 mb-4">
        Welcome to our Voting App, a platform designed to make voting simple,
        transparent, and secure. Whether you're a voter or an administrator,
        this app provides a seamless experience to participate in elections or
        manage them effectively.
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Key Features:
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Vote securely with unique voter credentials.</li>
          <li>Browse and view all candidates with their profiles.</li>
          <li>Admins can manage candidates (create, update, and delete).</li>
          <li>Real-time vote count updates for transparency.</li>
          <li>Responsive design for access on any device.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How It Works:
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Register or log in to the platform.</li>
          <li>Explore the list of candidates running for election.</li>
          <li>Cast your vote (if you're eligible) securely and anonymously.</li>
          <li>Admins can oversee the voting process and manage candidates.</li>
          <li>Check the real-time vote counts after voting concludes.</li>
        </ol>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Choose Our App?
        </h2>
        <p className="text-lg text-gray-700 leading-7">
          Our Voting App ensures that every vote counts and the process remains
          fair and efficient. Designed with modern technologies, we prioritize
          ease of use and security for everyone involved in the election
          process.
        </p>
      </div>
      <p className="text-center text-lg text-gray-800">
        Ready to get started? Join us today and make your voice heard!
      </p>
    </div>
  );
};

export default About;
