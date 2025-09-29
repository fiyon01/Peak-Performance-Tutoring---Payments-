import { useState } from 'react'
import {
  MdGroupAdd,
  MdPersonAdd,
  MdPeople,
  MdSchool,
  MdPayment,
  MdReceiptLong,
} from "react-icons/md";
import io from 'socket.io-client'
import Navbar from "../components/navbar/Navbar";
import Cards from "../components/cards"
import Recentactivities from "../components/Recentactivities"
import RegisterStudents from '../components/RegisterStudents'
import StudentsRegisterOptions from '../components/StudentsRegisterOptions';
import BulkRegistrations from '../components/BulkRegistrations';
import ProgramRegistrations from "../components/ProgramRegistrations"

const socket = io.connect("http://localhost:3500");


function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRegOpen,setIsModalRegOpen] = useState(false)

  return (

    <div className="Homepage bg-gray-900 min-h-screen">
    
      <Navbar/>
            <div className="pt-6 pr-6 pl-6">
        {/* Section label */}
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>

        <div className="flex flex-wrap gap-4 mb-6">
          {/* Add Student */}
          <button
            className="flex items-center justify-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-400 transition" onClick={() => setIsOpen(true)}
            
          >
            <MdPersonAdd size={18} />
            <span className="hidden md:inline">Add Student</span>
          </button>

          {/* Bulk Registration */}
          <button className="flex items-center justify-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-400 transition" onClick={() => setIsModalOpen(true)}>
            <MdGroupAdd size={18} />
            <span className="hidden md:inline">Bulk Registration</span>
          </button>

          {/* View Students */}
          <button className="flex items-center justify-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-400 transition">
            <MdPeople size={18} />
            <span className="hidden md:inline">View Students</span>
          </button>

          {/* Add Teacher */}
          <button className="flex items-center justify-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-400 transition">
            <MdSchool size={18} />
            <span className="hidden md:inline">Add Teacher</span>
          </button>

          {/* Record Payment */}
          <button className="flex items-center justify-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 transition">
            <MdPayment size={18} />
            <span className="hidden md:inline">Record Payment</span>
          </button>

          {/* Bulk Payment Records */}
          <button className="flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition">
            <MdReceiptLong size={18} />
            <span className="hidden md:inline">Bulk Payment Records</span>
          </button>
        </div>
      </div>
      <Cards/>
      <Recentactivities/>

      <StudentsRegisterOptions isModalOpen ={isModalOpen} handleModalClose={() => setIsModalOpen(false)} onManualSelect={() => setIsModalRegOpen(true)}/>
      <RegisterStudents isOpen={isOpen} handleClose={() => setIsOpen(false)} />
      <BulkRegistrations isModalRegOpen ={isModalRegOpen} handleClose={()=>setIsModalRegOpen(false)}/>
    </div>
 
  )
}

export default Homepage
