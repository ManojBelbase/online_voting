import React from "react";
import hero from "../../assets/header/hero.png";
import { Link } from "react-router";
import VoteCounts from "../voteCounts/VoteCounts";

export const HeroSection = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row bg-black justify-evenly items-center h-screen p-4">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-full mb-6 md:mb-0">
        <img
          src={hero}
          alt="Hero"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      {/* Text Section */}
      <div className="text-white flex flex-col justify-around h-full  gap-4 md:text-left md:w-1/2">
        <div>
          <h3 className="text-lg md:text-2xl py-2">Be a part of Decision</h3>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-500">
            Vote Today
          </h1>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center md:justify-start">
            <Link
              to={"/register"}
              className="bg-blue-600 uppercase px-6 py-2 rounded-md"
            >
              Register
            </Link>
            <Link
              to={"/candidates"}
              className="bg-blue-600 uppercase px-6 py-2 rounded-md"
            >
              View Candidates
            </Link>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold">Live Vote Count</h1>
          <VoteCounts />
        </div>
      </div>
    </div>
  );
};
