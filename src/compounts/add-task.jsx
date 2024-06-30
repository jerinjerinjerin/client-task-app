import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ApiUrl } from "../apiUrl";
import axios from "axios";
import AddInputs from "./AddInputs";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();

  const [status, setStatus] = useState(false);

  const [formData, setFormData] = useState({
    sno: "",
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    status: status,
  });

  console.log(formData, "form data");

  const handleCheckboxChange = () => {
    setStatus(!status);
    setFormData((prevData) => ({
      ...prevData,
      status: !status,
    }));
  };

  const [error, setError] = useState("");
  const [data, setData] = useState("");

  console.log(data);

  const url = ApiUrl;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { sno, name, description, startDate, endDate } = formData;

    if (
      !sno.trim() ||
      !name.trim() ||
      !description.trim() ||
      !startDate.trim() ||
      !endDate.trim()
    ) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post(`${url}/task/create-task`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        setData(response.data);
        toast.success(response.data.message);
        navigate("/");
      } else {
        toast.error(response.data.error.message);
      }

      setError("");
      setFormData({
        sno: "",
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        status: false,
      });
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
     <div className="flex items-center justify-between px-20 h-auto py-4 bg-slate-900 w-[98%] mx-auto pt-10">
      <h1 className="text-white text-3xl font-semibold">Add Task</h1>
      <Link to={"/"}>
        <IoMdClose className="text-white bg-red-500 cursor-pointer" size={30} />
      </Link>
      </div>
      <div className="w-[98%] h-auto pb-10 mx-auto pt-10 bg-slate-900 flex justify-start items-center">
        <div className="px-3 w-full flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-[90%] lg:w-[70%] md:w-[80%] flex flex-col gap-5"
          >
            <AddInputs
              handleChange={handleChange}
              handleCheckboxChange={handleCheckboxChange}
              status={status}
            />
            {error && (
              <p className="flex items-center text-red-600 bg-black h-[30px] justify-center">
                {error}
              </p>
            )}

            <div className="flex items-center justify-between gap-3 md:gap-6 flex-col md:flex-row pt-3">
              <Link
                to={"/"}
                className="bg-red-500 text-center w-full lg:w-[300px] md:w-[600px] rounded-lg px-2 py-3 md:py-2 hover:bg-red-700 text-white"
              >
                <button>Cancel</button>
              </Link>

              <button
                type="reset"
                className="bg-blue-500 w-full lg:w-[300px] md:w-[600px] rounded-lg px-2 py-3 md:py-2 hover:bg-blue-700 text-white"
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-green-500 w-full lg:w-[300px] md:w-[600px] rounded-lg px-2 py-3 md:py-2 hover:bg-green-700 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
