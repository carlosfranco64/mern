import { createContext, useContext, useState } from "react";
import {
  createTasksRequest,
  deleteTasksRequest,
  getTasksRequest,
  updateTasksRequest,
} from "../api/tasks";

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error(" useAuth must be within an TaskProvider");
  }

  return context;
};

export const TaskProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [currenTask, setCurrenTask] = useState(null);
  const [edit, setEdit] = useState(false);
  const [mode, setMode] = useState(true);

  const handleModeDark = () => {
    setMode(false);
  };

  const handleModeLight = () => {
    setMode(true);
  };

  const handleOpenModalEdit = (task) => {
    setModal(true);
    setCurrenTask(task);
    setEdit(true);
  };

  const handleOpenModal = () => {
    setModal(true);
    setEdit(false);
    setCurrenTask("");
  };

  const handleClosedModal = () => {
    setModal(false);
    setEdit(false);
  };

  const handleCloseModalDelete = () => {
    setModalDelete(false);
    setCurrenTask(null);
  };
  const handleOpenModalDelete = (task) => {
    setModalDelete(true);
    setCurrenTask(task);
  };

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (tasks) => {
    console.log(tasks);
    try {
      const res = await createTasksRequest(tasks);
      console.log(res);
      setModal(false);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTasksRequest(id);
      // if (res.status===204) setTasks(tasks.filter((tasks)=>tasks._id==! id))
      handleCloseModalDelete();
      getTasks();
    } catch (error) {}
  };

  const updateOneTask = async (id, task) => {
    try {
      const res = await updateTasksRequest(id, task);
      console.log(res);
      handleClosedModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        handleOpenModal,
        handleClosedModal,
        createTask,
        modal,
        tasks,
        getTasks,
        deleteTask,
        handleCloseModalDelete,
        handleOpenModalDelete,
        modalDelete,
        currenTask,
        handleOpenModalEdit,
        edit,
        updateOneTask,
        mode,
        handleModeDark,
        handleModeLight,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
