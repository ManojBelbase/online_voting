import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { CANDIDATE_API_END_POINT } from "../utils/Constant";
const EditCandidate = () => {
  // Initial state for the form fields
  const { candidateId } = useParams();
  const { candidates, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const currentCandidate = candidates.find(
    (candidate) => candidate._id === candidateId
  );

  const [formData, setFormData] = useState({
    name: currentCandidate.name,
    party: currentCandidate.party,
    age: currentCandidate.age,
  });

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
    console.log("Updated Candidate Data:", formData);

    try {
      const response = await axios.put(
        `${CANDIDATE_API_END_POINT}/update/${candidateId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        console.log("candidate Updated successfully");
      }
      console.log(response.data);
      navigate("/candidates");
      window.location.reload();
      alert(response.data);
    } catch (error) {
      console.log("error updating candidate");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto my-10 p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <h1 className="font-bold text-xl">Edit Candidate</h1>
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
        <label htmlFor="age" className="mb-2 text-sm font-medium text-gray-700">
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
        Update
      </button>
    </form>
  );
};

export default EditCandidate;
