import React,{useState,useEffect} from 'react';
import { MdUploadFile,MdTableRows } from "react-icons/md"
const StudentsRegisterOptions = ({handleModalClose,isModalOpen,onManualSelect}) => {
    const [visible,setVisible] = useState(isModalOpen);
    const [closing,setClosing] = useState(false);
    const [selected,setSelected] = useState(null)


    useEffect(()=>{
        if(isModalOpen){
            setVisible(true)
        }else{
            setClosing(true)
            setTimeout(()=>{
                setClosing(false)
                setVisible(false)
            },3000)
        }
    },[isModalOpen]);

  const handleContinue = () => {
  if (selected === "manual") {
    handleModalClose(); // close first modal
    setTimeout(() => {
      onManualSelect(); // open BulkRegistrations modal
    }, 250); // small delay to match modal closing animation
  }
};


    
    if (!isModalOpen) return null;


    
    return (
        <div className="fixed inset-0 flex items-center justify-center w-screen h-screen 
                bg-black/60 opacity-0 transition-opacity duration-300 
                ease-out opacity-100">

  <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-[90%] max-w-lg 
                  transform scale-95 opacity-0 transition-all duration-300 
                  ease-out scale-100 opacity-100">

        <h2 className = "text-xl font-bold text-white">Bulk Registration</h2>
        <p className = " text-sm text-gray-400 my-4">Choose how you’d like to register multiple students.</p>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {/* CSV Upload Card */}
            <div
                className={`p-6 rounded-xl cursor-pointer flex flex-col items-center justify-center gap-3 transition-transform duration-200
                ${selected === "csv"
                    ? "bg-indigo-600 shadow-lg scale-105 border-2 border-blue-400"
                    : "bg-gray-700 hover:bg-gray-600 hover:shadow-lg hover:shadow-blue-400/30 hover:scale-105"}`
                }
                onClick={() => setSelected("csv")}
            >
                <MdUploadFile size={48} className={selected === "csv" ? "text-white" : "text-blue-400"} />
                <h3 className="text-lg font-semibold text-white">Upload CSV</h3>
                <p className='text-sm text-gray-400 text-center'>
                Quickly register multiple students by uploading a prepared CSV file.
                </p>
            </div>

            {/* Manual Entry Card */}
            <div
                className={`p-6 rounded-xl cursor-pointer flex flex-col items-center justify-center gap-3 transition-transform duration-200
                ${selected === "manual"
                    ? "bg-green-600 shadow-lg scale-105 border-2 border-green-400"
                    : "bg-gray-700 hover:bg-gray-600 hover:shadow-lg hover:shadow-green-400/30 hover:scale-105"}`
                }
                onClick={() => setSelected("manual")}
            >
                <MdTableRows size={48} className={selected === "manual" ? "text-white" : "text-green-400"} />
                <h3 className="text-lg font-semibold text-white">Enter Manually</h3>
                <p className='text-sm text-gray-400 text-center'>
                Add students one by one using the form for full control.
                </p>
            </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
            <button 
                className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg 
                        hover:bg-gray-600 hover:text-white transition" onClick={handleModalClose}
            >
                Cancel
            </button>

            <button 
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg 
                        hover:bg-indigo-500 transition" onClick={handleContinue}
            >
                Continue
            </button>
        </div>

  </div>

</div>

    );
};

export default StudentsRegisterOptions