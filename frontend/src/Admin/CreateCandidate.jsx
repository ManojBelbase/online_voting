import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
const CreateCandidate = () => {
  // Initial state for the form fields
  const [formData, setFormData] = useState({
    name: "",
    party: "",
    age: "",
  });
  const naivgate = useNavigate();
  const { token } = useContext(AuthContext);
  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/candidate/create`,
        formData, // Send formData directly
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        naivgate("/");
      }
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
      alert(
        `Error submitting form: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4"
      >
        <h1 className="font-bold text-xl">Create Candidate</h1>
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="party"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Party:
          </label>
          <input
            type="text"
            id="party"
            name="party"
            value={formData.party}
            onChange={handleChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="age"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateCandidate;
