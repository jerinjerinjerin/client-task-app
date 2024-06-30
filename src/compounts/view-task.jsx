import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiUrl } from "../apiUrl";
import { formatDate } from "../utils/helper";

const ViewTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSingleTask = async () => {
      try {
        const response = await axios.get(
          `${ApiUrl}/task/get-single-task/${id}`
        );
        if (response.status === 200 && response.data) {
          setTask(response.data.task);
        } else {
          setError("Failed to fetch task details");
        }
      } catch (error) {
        setError("An error occurred while fetching the task details");
      } finally {
        setLoading(false);
      }
    };

    getSingleTask();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen bg-slate-800 text-white flex justify-center items-center w-[98%] mx-auto">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen bg-slate-800 flex justify-center items-center text-red w-[98%] mx-auto">
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1 className="bg-slate-900 text-white text-3xl flex justify-center w-[98%] mx-auto pt-5">View Task</h1>
      {task && (
        <div className="flex flex-col pt-10 items-center w-[98%] bg-slate-900 mx-auto h-screen text-white gap-5">
          <p>ID: <span className="text-xl">{task.sno}</span></p>
          <p>Task Name: <span className="text-xl">{task.name}</span></p>
          <p>Description: <span className="text-xl">{task.description}</span></p>
          <p>Start Date: <span className="text-xl"> {formatDate(task.startDate)}</span></p>
          <p>End Date: <span className="text-xl">{formatDate(task.endDate)}</span></p>
          <p>Status: <span className="text-xl">{task.status ? "Completed" : "Pending"}</span></p>
          <Link to={'/'}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go Back
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ViewTask;
