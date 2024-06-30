import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./compounts/Navbar";
import AddTask from "./compounts/add-task";
import EditTask from "./compounts/edit-task";
import ViewTask from "./compounts/view-task";
import Home from "./pages/home";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer position="top-center"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
          <Route path="/view-task/:id" element={<ViewTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
