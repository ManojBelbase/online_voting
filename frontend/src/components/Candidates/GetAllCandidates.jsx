import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const GetAllCandidates = () => {
  const { candidates, vote } = useContext(AuthContext);
  const [expandCandidateId, setExpandCandidateId] = useState(null);

  const toggleExpand = (id) => {
    setExpandCandidateId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="md:px-32 px-2 my-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        All Candidates
      </h1>
      <ul className="grid gap-6">
        {candidates.map((candidate) => (
          <motion.li
            key={candidate._id}
            className="p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            layout
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-xl font-semibold capitalize text-gray-800">
                  {candidate.name}
                </p>
                <p className="text-sm text-gray-500">{candidate.party}</p>
              </div>
              <button
                className=" px-3 py-1 transition-colors"
                onClick={() => toggleExpand(candidate._id)}
              >
                {expandCandidateId === candidate._id ? (
                  <FaAngleUp className="text-xl" />
                ) : (
                  <FaAngleRight className="text-xl" />
                )}
              </button>
            </div>
            <AnimatePresence>
              {expandCandidateId === candidate._id && (
                <motion.div
                  className="bg-gray-100 p-4 rounded-md mt-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700 mb-2">
                    <strong>Id:</strong> {candidate._id}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Name:</strong> {candidate.name}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Age:</strong> {candidate.age}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Party:</strong> {candidate.party}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Total Votes:</strong> {candidate.voteCount}
                  </p>
                  <motion.button
                    onClick={() => vote(candidate._id)}
                    className="px-4 py-1 border-blue-500 border-2 rounded-md text-xl bg-blue-500 text-white"
                    whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Vote
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default GetAllCandidates;
