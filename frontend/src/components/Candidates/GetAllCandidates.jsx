import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { Link } from "react-router";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import useDeleteCandidate from "../../Admin/useDeleteCandidate";

const GetAllCandidates = () => {
  const { candidates, userProfile, vote } = useContext(AuthContext);
  const [expandCandidateId, setExpandCandidateId] = useState(null);
  const deleteCandidate = useDeleteCandidate(); // Corrected this line

  const toggleExpand = (id) => {
    setExpandCandidateId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="md:px-32 px-2 my-4 bg-white py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          All Candidates
        </h1>
        {userProfile.role === "admin" && (
          <motion.div whileHover={{ scale: 1.01 }}>
            <Link
              to={"create"}
              className="flex items-center gap-2 border py-1 px-2 border-black"
            >
              Create <IoIosAddCircleOutline className="text-xl" />
            </Link>
          </motion.div>
        )}
      </div>
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
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    {userProfile.role !== "admin" && (
                      <div className="flex items-center gap-2 justify-center">
                        <motion.button
                          onClick={() => vote(candidate._id)}
                          className="h-5 w-5  border-green-500 border-2 rounded-full text-xl bg-white text-white"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#2563eb",
                          }}
                          whileTap={{ scale: 0.95 }}
                        ></motion.button>
                        <span>Vote</span>
                      </div>
                    )}

                    {userProfile.role == "admin" && (
                      <div className="flex gap-3">
                        <Link to={`update/${candidate._id}`}>
                          <FaEdit className="text-xl text-blue-500  cursor-pointer" />
                        </Link>
                        <button onClick={() => deleteCandidate(candidate._id)}>
                          <MdDeleteOutline className="text-2xl text-red-500 cursor-pointer" />
                        </button>
                      </div>
                    )}
                  </div>
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
