import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";
import { motion } from "framer-motion";
const UserProfile = ({ userProfile }) => {
  const { logout } = useContext(AuthContext);
  return (
    <motion.div className="w-80 mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        User Profile
      </h2>
      <div className="">
        <p className="text-gray-700">
          <span className="font-semibold">Name:</span> {userProfile.name}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Age:</span> {userProfile.age}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {userProfile.email}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Mobile:</span> {userProfile.mobile}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Address:</span> {userProfile.address}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Voter ID:</span> {userProfile.voterId}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Role:</span> {userProfile.role}
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={logout}
            className="border text-black border-red-500 px-2 py-1 rounded-md"
          >
            Logout
          </button>
          <Link
            to={"/change_password"}
            className="border text-black border-blue-500 px-2 py-1 rounded-md"
          >
            Change Password
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
