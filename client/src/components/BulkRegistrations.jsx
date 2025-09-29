import React, { useState,useEffect } from 'react';
import { MdDelete, MdAdd } from 'react-icons/md';
import axios from "axios"
import {toast} from "react-toastify"
const BulkRegistrations = ({isModalRegOpen,handleClose}) => {

    const [students,setStudents] = useState([{
        name: '', className: '', phone: ''
    }]);
const [isOpen,seIsOpen] = useState(false)

    //function to add new student row

    const addStudent = () =>{
        setStudents([
            ...students,{
                name:"",className:"",phone:""
            }
        ])
    }

    //functional to add student to arry
    const handleChange = (index,field,value)=>{
        const updated =[...students];

        updated[index][field] = value;
        setStudents(updated);
    }

    // function to delete student row

    const handleDelete = (index) =>{

        const updated = students.filter((_,i)=>i!== index)
        setStudents(updated);

    }
    console.log(students)

    //make api call to register students
   const handleRegistrations = async()=>{
    const toastId = toast.loading("Registering students...");

    try{
            const response = await axios.post("http://localhost:3500/api/students/register-bulk",students)
            if(response.status === 201){
                toast.update(toastId, {
                    render:response.data.message || "Students registered successfully!",
                    type:"success",
                    isLoading:false,
                    autoClose:3000,
                    closeOnClick:true
                })
                
                handleClose();
                setStudents([{
                    name: '', className: '', phone: ''
                }])
            }

        }catch(error){
            toast.update(toastId, {
                    render:response.error?.data?.message || "Error registering student",
                    type:"error",
                    isLoading:false,
                    autoClose:3000,
                    closeOnClick:true
                })

        }finally{
           

        }


   } 
    

    if(!isModalRegOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center w-screen h-screen  bg-black/50 transition-opacity duration-300">
        <div className="flex flex-wrap gap-8">
           <div className = " bg-gray-800 p-8 rounded-lg shadow-lg flex-1 transform transition-all duration-300 ">

            <h1 className="text-xl text-center text-white">Bulk Student Registration</h1>
            <p className=" text-white"><span className=" text-xl">Instruction text:</span> “Enter student details below. You can add multiple students before submitting.</p>
        
         <div>
         <div className="bg-gray-800 shadow-md overflow-x-auto mt-4 rounded-lg">
            <table className="table-auto min-w-full border-collapse border border-gray-600 text-white">
                <thead className="bg-gray-700">
                <tr>
                    <th className="px-3 py-2 border">Name</th>
                    <th className="px-3 py-2 border">Class</th>
                    <th className="px-3 py-2 border">Parent's Phone</th>
                    <th className="px-3 py-2 border">Action</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student, index) => (
                    <tr key={index} className="hover:bg-gray-700">
                    <td className="border p-2">
                        <input
                        type="text"
                        className="p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={student.name}
                        onChange={(e) => handleChange(index, "name", e.target.value)}
                        placeholder="Student Name"
                        />
                    </td>
                    <td className="border p-2">
                        <select
                        className="p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={student.className}
                        onChange={(e) => handleChange(index, "className", e.target.value)}
                        >
                        <option value="">Select Class</option>
                        <option value="Form 2">Form 2</option>
                        <option value="Form 3">Form 3</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9</option>
                        </select>
                    </td>
                    <td className="border p-2">
                        <input
                        type="text"
                        className="p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={student.phone}
                        onChange={(e) => handleChange(index, "phone", e.target.value)}
                        placeholder="Phone Number"
                        />
                    </td>
                    <td className="border p-2 text-center">
                        <button
                        className="bg-red-500 text-white px-2 py-2 rounded-lg hover:bg-red-700 transform hover:scale-105 transition duration-300"
                        onClick={() => handleDelete(index)}
                        >
                        <MdDelete size={18} />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>


            
        </div>
            <div>
                <button className=" bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300 mt-4"  onClick = {addStudent}> <MdAdd size={24}/>Add Student</button>
                <button className=" bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transform hover:scale-105 transition duration-300 mt-4 ml-4" onClick={handleRegistrations}>Submit All</button>
                <button className=" bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transform hover:scale-105 transition duration-300 mt-4 ml-4" onClick={handleClose}>Cancel</button>
            </div>
           </div>

           {/* preview data */}

         <div className="bg-indigo-700 shadow-lg border-2 border-indigo-500 p-6 rounded-lg transform transition-all duration-300 w-full md:w-1/3">
            <h2 className="text-white text-lg font-semibold mb-2">Preview:</h2>
            <ul className="text-gray-200 space-y-2 max-h-96 overflow-y-auto">
                {students.map((student, index) => {
                if (student.name || student.className || student.phone) {
                    return (
                    <li key={index} className="bg-indigo-800 p-2 rounded-md flex justify-between">
                        <span>{student.name || "-"}</span>
                        <span>{student.className || "-"}</span>
                        <span>{student.phone || "-"}</span>
                    </li>
                    );
                }else{
                    <p className="text-white">No data</p>
                }
                ;
                })}
            </ul>
         </div>

        </div>
            
        </div>
    );
};

export default BulkRegistrations;