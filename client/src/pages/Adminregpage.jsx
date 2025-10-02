import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { toast } from "react-toastify";
import Confetti from "react-confetti";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import bgImage from "../assets/bgImage.png"
const Adminregpage = ()=>{
    const navigate = useNavigate()
    const [showconfetti,setShowConfetti] = useState(false);
    const [fullname,setfullName] = useState("");
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    console.log(fullname,username,email,password)

    const data = { fullname, username, email, password}

    //handle form submission
    const handleSubmit = async (e) => {
  e.preventDefault();

  const toastId = toast.loading("Registering admin...");

  try {
    const response = await axios.post("http://localhost:3500/api/admin/register", data);

    if (response.status === 201) {
      toast.update(toastId, {
        render: response.data.message || "Admin registered successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true
      });

      // Save token
      localStorage.setItem("token", response.data.token);

      // Show confetti
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);

      // Clear form fields
      setfullName("");
      setUsername("");
      setEmail("");
      setPassword("");

      // Redirect after short delay
      setTimeout(() => navigate("/"), 2500);
    }
  } catch (error) {
    toast.update(toastId, {
      render:
        (error.response && error.response.data.message) ||
        error.message ||
        "An error occurred while registering admin",
      type: "error",
      isLoading: false,
      autoClose: 3000,
      closeOnClick: true
    });
  }
};


    return(
        <div className="w-screen h-screen bg-gray-900 flex items-center justify-center" style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>

           {/* show confetti */}
           {showconfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={500} gravity={0.2} />}
            <div className="w-[90%] max-w-md bg-gray-800/50 backdrop-blur-sm shadow-md shadow-violet-700 rounded-lg p-8 hover:scale-105 transition duration-300">
                <div className="flex items-center flex-col gap-3">
                <div className="">
                  <MdAdminPanelSettings size={48} />
                </div>
                <h1 className="text-2xl font-semibold">Admin registration</h1>
                <p>Only authorized admins can register </p>
                  <div className="w-full flex items-center justify-between gap-4 mt-4 border border-gray-400 rounded-md p-2">
                    <div className="border border-gray-700 rounded-md p-2 cursor-pointer hover:bg-indigo-700 text-white transition duration-300">
                        <FaGoogle size={24} className=""/>
                    </div>
                    <div className="border border-gray-700 rounded-md p-2 cursor-pointer hover:bg-indigo-700 text-white transition duration-300">
                        <FaFacebookF size={24} className=""/>
                    </div>
                    <div className="border border-gray-700 rounded-md p-2 cursor-pointer hover:bg-indigo-700 text-white transition duration-300">
                        <FaGithub size={24} className=""/>
                    </div>
                   </div>
                </div>
                <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full name" className="w-full p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400" value={fullname} onChange={(e)=>setfullName(e.target.value)}/>
                    <input type="text" placeholder="Username" className="w-full p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <input type="email" placeholder="Email address" className="w-full p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" className="w-full p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
                    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-md transition duration-300">Register</button>
                </form>
                <div className="mt-4 text-sm text-gray-300">
                    By registering, you agree to our <span className="text-indigo-400 cursor-pointer hover:underline">Terms of Service</span> and <span className="text-indigo-400 cursor-pointer hover:underline">Privacy Policy</span>.
                </div>

            </div>

        </div>
    )
}

export default Adminregpage;