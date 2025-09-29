import React from "react";

const Recentactivities = () => {
  return (
    <div className="recent-activities-container mt-8 px-6">
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Recent Activities</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300 shadow-md">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="bg-gray-800 shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full text-gray-300">
          <thead className="bg-gray-700 text-gray-200">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium">Date</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Reference</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Amount</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Phone Number</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Student Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-gray-800 even:bg-gray-700">
              <td className="py-2 px-4">2024-06-01</td>
              <td className="py-2 px-4">REF123456</td>
              <td className="py-2 px-4">$100.00</td>
              <td className="py-2 px-4">+1234567890</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4 text-yellow-400">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Empty state example */}
      {/* 
      <div className="bg-gray-800 shadow-md rounded-lg p-6 mt-4 text-center">
        <p className="text-gray-400 italic">No recent activities yet...</p>
      </div> 
      */}
    </div>
  );
};

export default Recentactivities;
