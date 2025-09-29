import React, { useState } from "react";
import {
  FaUser,
  FaMoneyBillWave,
  FaWallet,
  FaFileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-screen flex justify-between items-center px-6 py-6 bg-gray-800/60 border-b border-gray-700 text-white">
      {/* Brand */}
      <h1 className="text-2xl font-bold">Peak</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition">
          <FaUser /> Students
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition">
          <FaMoneyBillWave /> Payments
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition">
          <FaWallet /> Balances
        </li>
        <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition">
          <FaFileAlt /> Reports
        </li>
      </ul>

      {/* Hamburger (Mobile) */}
      <div className="md:hidden z-10">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center list-none transition-all duration-300 ease-in-out space-y-8 md:hidden">
          <li className="text-2xl flex items-center gap-3">
            <FaUser /> Students
          </li>
          <li className="text-2xl flex items-center gap-3">
            <FaMoneyBillWave /> Payments
          </li>
          <li className="text-2xl flex items-center gap-3">
            <FaWallet /> Balances
          </li>
          <li className="text-2xl flex items-center gap-3">
            <FaFileAlt /> Reports
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
