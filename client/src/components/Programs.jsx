import React,{ useState } from "react";
import { FiBookOpen, FiClock, FiSunset, FiCalendar, FiMapPin, FiHome } from "react-icons/fi";
import NovImage from "../assets/November.png";
import HomeTuition from "../assets/homeTuition.png";
import EveningTuition from "../assets/eveningTuition.png";
import ProgramRegistrations from "./ProgramRegistrations"



const Programs = () => {

 const [isRegOpen,setIsRegOpen] = useState(false)

  const programs = [
    {
      id: 1,
      title: "Holiday Bootcamp",
      banner: "November Holiday Tuition",
      description:
        "Intensive tuition sessions designed to boost student performance during school holidays.",
      time: "8:30 AM - 1:30 PM",
      startDate: "Nov 4, 2025",
      endDate: "Nov 29, 2025",
      location: "Kinoo Vocational Center",
      price: "Ksh 3,500 / week",
      icon: <FiBookOpen className="w-12 h-12 text-indigo-400" />,
      image:NovImage,
    },
    {
      id: 2,
      title: "Home Tuition",
      banner: "Personalized Home Tutoring",
      description:
        "One-on-one home tuition tailored to your child’s needs, offering flexibility and personal attention.",
      time: "Flexible Hours",
      startDate: "Ongoing",
      endDate: "All Term",
      location: "Your Home",
      price: "Ksh 5,000 / week",
      icon: <FiHome className="w-12 h-12 text-indigo-400" />,
      image: HomeTuition,
    },
    {
      id: 3,
      title: "Evening Study Program",
      banner: "Daily Guided Evening Sessions",
      description:
        "Daily guided evening sessions to help students stay consistent and disciplined.",
      time: "6:00 PM - 8:30 PM",
      startDate: "Ongoing",
      endDate: "All Term",
      location: "Kinoo Vocational Center",
      price: "Ksh 2,500 / week",
      icon: <FiSunset className="w-12 h-12 text-indigo-400" />,
      image: EveningTuition,
    },
  ];

  return (
    <section className="px-6 py-16 bg-gray-900" id="programs">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Choose a <span className="text-indigo-400">Program</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div
            key={program.id}
            className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 
                       hover:shadow-xl hover:shadow-indigo-500/30 
                       hover:border-indigo-400 transform hover:-translate-y-2 hover:scale-105 
                       transition-all duration-500 flex flex-col"
          >
            {/* Background Image */}
            <div
              className="h-40 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${program.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Banner */}
              <div className="absolute top-3 left-3 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {program.banner}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4 flex-1">
              <div className="flex justify-center">{program.icon}</div>
              <h3 className="text-xl font-semibold text-white text-center">
                {program.title}
              </h3>
              <p className="text-gray-400 text-center">
                {program.description}
              </p>

              {/* Details */}
              <div className="text-sm text-gray-300 space-y-2 text-center">
                <p className="flex items-center justify-center gap-2">
                  <FiClock className="text-indigo-400" /> 
                  <span className="font-medium">{program.time}</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <FiCalendar className="text-indigo-400" /> 
                  {program.startDate} - {program.endDate}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <FiMapPin className="text-indigo-400" /> {program.location}
                </p>
                <p className="text-indigo-400 font-semibold">{program.price}</p>
              </div>

              {/* Button */}
              <button className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:from-indigo-400 hover:to-purple-500 hover:scale-105 transition" onClick={()=>setIsRegOpen(true)}>
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    <ProgramRegistrations isRegOpen={isRegOpen} handleClose={()=>setIsRegOpen(false)}/>

    </section>
  );
};

export default Programs;
