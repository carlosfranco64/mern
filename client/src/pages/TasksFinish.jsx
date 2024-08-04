import React, { useEffect } from 'react'
import { useTask } from '../context/TaskContext';
import { ModalTask } from '../components/ModalTask';
import { TaskCard } from '../context/TaskCard';

export const TasksFinish = () => {
    const { getTasks, handleOpenModal, modal, tasks, edit,mode } = useTask();

    const countTasksStarted = () => {
      return tasks.filter((task) => task.statusTask === true).length;
    };
  
    const countTask = countTasksStarted();
  
    useEffect(() => {
      getTasks();
    }, [edit]);
  
    return (
      <>
        <div className=" w-full mx-4">
          <div className="flex justify-between  ">
            <div className="">
              <h1 className={` ${mode ? "text-white" :"text-black"} text-5xl font-semibold`}> Tareas Finalizadas</h1>
            </div>
  
            <div className=" flex py-4 w-[50%] ">
              <button
                onClick={handleOpenModal}
                className={` ${mode ? "text-white" :"text-white"}  ml-auto py-2 bg-blue-500 px-8 font-semibold rounded-md active:bg-blue-700`}
              >
                Crear tarea
              </button>
            </div>
          </div>
          <hr className=" border" />
  
          {modal && <ModalTask />}
  
          <div className="grid grid-cols-3 gap-4 p-4">
            {tasks.length > 0 &&
              tasks
                .filter((task) => task.statusTask === true)
                .map((task) => <TaskCard task={task} key={task._id} />)}
          </div>
  
          {countTask === 0 && (
            <h1 className="mx-auto py-4 text-center bg-blue-400 text-2xl">
              No hay tareas finalizadas
            </h1>
          )}
        </div>
      </>
    );
  };
  