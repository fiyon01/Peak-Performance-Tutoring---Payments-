import React, { useState } from "react";
import { FiDollarSign, FiCreditCard, FiPhone, FiUser, FiBookOpen } from "react-icons/fi";
import NovImage from "../assets/November.png";

const PaymentsPage = () => {
  const [studentID, setStudentID] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  const previousPayments = [
    { id: 1, date: "2025-11-04", amount: "Ksh 3,500", method: "Mpesa", status: "Completed" },
    { id: 2, date: "2025-11-11", amount: "Ksh 3,500", method: "Card", status: "Completed" },
  ];

  const handleLookup = () => {
    if (studentID === "STU12345") {
      setStudentData({
        studentName: "John Doe",
        program: "November Holiday Tuition",
        weeklyFee: "Ksh 3,500",
      });
    } else {
      alert("Student ID not found.");
      setStudentData(null);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="w-full flex flex-col md:flex-row items-center justify-between bg-gray-800 overflow-hidden"
        style={{ minHeight: "40vh" }}
      >
        {/* Hero Image */}
        <div
          className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center relative"
          style={{ backgroundImage: `url(${NovImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Text */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white animate-slideInRight">
            November Holiday Tuition
          </h1>
          <p className="text-gray-300 md:text-lg">
            Weekly fee: <span className="text-red-500 font-semibold">Ksh 3,500</span>
          </p>
          <p className="text-gray-400 md:text-base">
            Enter your Student ID below to make payments securely.
          </p>
        </div>
      </div>

      {/* Lookup Section */}
      <div className="w-full flex justify-center py-8 px-4 md:px-12">
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter Student ID"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-red-500"
          />
          <button
            onClick={handleLookup}
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300"
          >
            Lookup
          </button>
        </div>
      </div>

      {/* Payment Form & Previous Payments */}
      {studentData && (
        <div className="w-full flex flex-col items-center px-4 md:px-12 gap-8 mb-12">
          {/* Payment Form */}
          <div className="w-full max-w-6xl bg-gray-800 rounded-3xl p-6 border border-gray-700 shadow-lg flex flex-col gap-6 animate-fadeIn">
            {/* Student Info */}
            <div className="flex flex-col md:flex-row justify-between gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <FiUser className="text-red-500 w-5 h-5" />
                <span>{studentData.studentName}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiBookOpen className="text-red-500 w-5 h-5" />
                <span>{studentData.program}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiDollarSign className="text-red-500 w-5 h-5" />
                <span>{studentData.weeklyFee}</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="flex flex-col gap-4">
              <label className="text-gray-300 font-semibold">Select Payment Method</label>
              <select
                className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-red-500"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">-- Choose --</option>
                <option value="Mpesa">Mpesa</option>
                <option value="Card">Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>

              {paymentMethod === "Mpesa" && (
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 animate-fadeIn"
                />
              )}

              {paymentMethod === "Card" && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700"
                  />
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700"
                  />
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="Expiry (MM/YY)"
                      className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 flex-1"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 w-32"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === "Bank Transfer" && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <input
                    type="text"
                    placeholder="Bank Name"
                    className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700"
                  />
                  <input
                    type="text"
                    placeholder="Account Number"
                    className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700"
                  />
                  <input
                    type="text"
                    placeholder="Reference"
                    className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700"
                  />
                </div>
              )}

              <textarea
                placeholder="Optional notes..."
                className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 resize-none animate-fadeIn"
              />

              <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:from-red-600 hover:to-pink-600 transition-all duration-300 animate-bounce">
                Pay Now
              </button>
            </div>

            {/* Previous Payments */}
            <div className="animate-slideInUp">
              <h2 className="text-xl font-semibold text-white mb-4">Previous Payments</h2>
              {previousPayments.length === 0 ? (
                <p className="text-gray-400">No payments yet.</p>
              ) : (
                <div className="grid gap-4">
                  {previousPayments.map((p) => (
                    <div
                      key={p.id}
                      className="bg-gray-700 p-4 rounded-lg flex justify-between items-center text-gray-300 hover:shadow-lg transition transform hover:-translate-y-1"
                    >
                      <div>
                        <p>Date: {p.date}</p>
                        <p>Amount: {p.amount}</p>
                        <p>Method: {p.method}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          p.status === "Completed" ? "bg-green-600 text-white" : "bg-yellow-500 text-white"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentsPage;
