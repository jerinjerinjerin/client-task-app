import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ApiUrl } from "../apiUrl";
import axios from "axios";
import UpdateInputs from "./UpdateInputs";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState(null);
  const [status, setStatus] = useState(false);

  const [formData, setFormData] = useState({
    sno: "",
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    status: false,
  });

  const handleCheckboxChange = () => {
    setStatus(!status);
    setFormData((prevData) => ({
      ...prevData,
      status: !status,
    }));
  };

  useEffect(() => {
    const getSingleTask = async () => {
      try {
        const response = await axios.get(
          `${ApiUrl}/task/get-single-task/${id}`
        );
        if (response.status === 200 && response.data) {
          setTask(response.data.task);
          setFormData({
            sno: response.data.task.sno,
            name: response.data.task.name,
            description: response.data.task.description,
            startDate: response.data.task.startDate,
            endDate: response.data.task.endDate,
            status: response.data.task.status,
          });
          setStatus(response.data.task.status);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSingleTask();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${ApiUrl}/task/update-task/${id}`,
        formData
      );
      if (response.status === 200) {
        toast.success("Task updated successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update task");
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-20 h-auto py-4 bg-slate-900 w-[98%] mx-auto pt-10">
        <h1 className="text-white  text-3xl font-semibold">
          Edit Task
        </h1>
        
        <Link to={"/"}>
          <IoMdClose
            className="text-white bg-red-500 cursor-pointer"
            size={30}
          />
        </Link>
      </div>
      <div className="w-[98%] h-auto mx-auto bg-slate-900 pb-10 pt-1 flex justify-start items-center">
        <div className="px-3 w-full flex items-center justify-center">
          <form
            className="w-[90%] lg:w-[70%] md:w-[80%] flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            {task && (
              <UpdateInputs
                handleChange={handleChange}
                handleCheckboxChange={handleCheckboxChange}
                status={status}
                task={formData}
              />
            )}
            <div className="flex items-center justify-between gap-3 md:gap-6 flex-col md:flex-row pt-3">
              <button
                type="submit"
                className="bg-green-500 w-full lg:w-[300px] md:w-[600px] rounded-lg px-2 py-3 md:py-2 hover:bg-green-700 text-white"
              >
                Update
              </button>
              <Link
                to={"/"}
                className="bg-red-500 text-center w-full lg:w-[300px] md:w-[600px] rounded-lg px-2 py-3 md:py-2 hover:bg-red-700 text-white"
              >
                <button className="">Cancel</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditTask;
