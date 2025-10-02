import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Homepage from "./pages/Homepage";
import StudentEnrollment  from "./pages/StudentEnrollment"
import PaymentsPage from "./pages/PaymentsPage"
import Adminregpage from "./pages/Adminregpage"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin/register" element={<Adminregpage/>}/>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/parents/student" element={<StudentEnrollment/>} /> 
          <Route path="/students-payments" element={<PaymentsPage/>}/>
        </Routes>

      </Router>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
 </>
  )
}

export default App
