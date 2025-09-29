import React from "react";
import { FaWallet, FaCoins, FaUser, FaChalkboardTeacher } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="cards-container mt-8 px-6 flex justify-between gap-6 flex-wrap">
      {/* Total Balance */}
      <div className="card bg-gray-800 shadow-md rounded-lg p-6 flex-1 min-w-[250px] text-white flex flex-col items-center justify-center gap-3 hover:scale-105 transition transform duration-300">
        <FaCoins size={40} className="text-yellow-400" />
        <h2 className="text-lg font-semibold">Total Balance</h2>
        <p className="text-xl font-bold">$12,345.67</p>
      </div>

      {/* Total Students */}
      <div className="card bg-gray-800 shadow-md rounded-lg p-6 flex-1 min-w-[250px] text-white flex flex-col items-center justify-center gap-3 hover:scale-105 transition transform duration-300">
        <FaUser size={40} className="text-green-400" />
        <h2 className="text-lg font-semibold">Total Students</h2>
        <p className="text-xl font-bold">150</p>
      </div>

      {/* Pending Payments */}
      <div className="card bg-gray-800 shadow-md rounded-lg p-6 flex-1 min-w-[250px] text-white flex flex-col items-center justify-center gap-3 hover:scale-105 transition transform duration-300">
        <FaWallet size={40} className="text-blue-400" />
        <h2 className="text-lg font-semibold">Pending Payments</h2>
        <p className="text-xl font-bold">$1,234.56</p>
      </div>

      {/* Teacher Payouts */}
      <div className="card bg-gray-800 shadow-md rounded-lg p-6 flex-1 min-w-[250px] text-white flex flex-col items-center justify-center gap-3 hover:scale-105 transition transform duration-300">
        <FaChalkboardTeacher size={40} className="text-purple-400" />
        <h2 className="text-lg font-semibold">Teacher Payouts</h2>
        <p className="text-xl font-bold">$5,678.90</p>
      </div>
    </div>
  );
};

export default Cards;
