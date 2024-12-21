import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const VoteCounts = () => {
  const { liveVoteCount } = useContext(AuthContext);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-2"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeInOut", staggerChildren: 0.1 }}
    >
      <AnimatePresence>
        {liveVoteCount.map((votes, index) => (
          <motion.div
            key={votes.party}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transform transition duration-300 relative cursor-pointer"
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.01 }}
            exit={{ opacity: 0, scale: 0.9 }}
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className="h-3 w-3 bg-red-500 rounded-full absolute top-2 right-2 border"
              animate={{
                opacity: [2, 0, 2], // Keyframe values for blinking
              }}
              transition={{
                duration: 2, // Duration of one blink cycle
                repeat: Infinity, // Repeat infinitely
                ease: "easeInOut", // Smooth transition
              }}
            ></motion.div>
            <h2 className="text-base font-bold text-gray-800 mb-2">
              {votes.party}
            </h2>
            <p className="text-xl font-semibold text-blue-500">
              {votes.count} {votes.count > 1 ? "Votes" : "Vote"}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default VoteCounts;
