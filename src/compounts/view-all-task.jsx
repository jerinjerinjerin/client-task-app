import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTasks } from "../redux/slice/taskSlice";
import { ApiUrl } from "../apiUrl";
import axios from "axios";
import TaskList from "./task-list";

const ViewAllTask = () => {
  const dispatch = useDispatch();

  const url = ApiUrl;

  useEffect(() => {
    const fetchData = async () => {
      //api call
      try {
        const response = await axios.get(`${url}/task/get-all-tasks`);
        dispatch(getAllTasks(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch(getAllTasks([]));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <TaskList />
    </div>
  );
};

export default ViewAllTask;
