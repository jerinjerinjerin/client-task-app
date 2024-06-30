import React, { useState } from "react";
import ViewAllTask from "../compounts/view-all-task";
import { Link } from "react-router-dom";
// import AddTask from "../compounts/add-task";

const Home = () => {




  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="w-[98%] mx-auto bg-slate-800">
      <div className="flex items-center justify-between  px-0  pt-5 flex-col md:flex-row lg:flex-row gap-2">
      <h1 className="text-2xl flex mx-auto   text-white font-semibold">View All Tasks</h1>
      <Link to={'/add-task'}>
      
      <button className="action-buttons mx-5 w-[100px] bg-slate-300 text-black hover:bg-black hover:text-white" >add Task</button>
      </Link>
      </div>
      
      
      <ViewAllTask/>
      {/* <div className="w-full md:w-[70%] mx-auto pb-5"> */}
        {/* {isModalOpen && <AddTask closeModal={closeModal} />} */}
      {/* </div> */}

    </div>
  );
};

export default Home;
