import React from "react";
import { useTask } from "../context/TaskContext";

export const ModalDelete = ({task}) => {

  console.log(task)

   const {currenTask,deleteTask,handleCloseModalDelete} = useTask()
  return (
    <div className="h-[calc(100vh-100px)] fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center"> 
      <div className="bg-white text-black w-[450px] grid gap-2 px-3 py-4 rounded-md ">
        <div>
          <h1 className="font-bold">Eliminar Tarea</h1>
        </div>
        <div>
          <p className="font-normal w-full first-letter:uppercase" >
            ¿Estás seguro de que deseas eliminar <small className="inline font-bold first-letter:uppercase">{currenTask.title}</small>?, Esta acción no se puede deshacer.
          </p>
        </div>
        <div className="flex justify-end gap-4">
          <button onClick={handleCloseModalDelete} className="bg-red-500 px-3 py-1 text-white rounded-md font-semibold active:bg-red-700">Cancelar</button>
          <button onClick={()=>deleteTask(currenTask._id)} className="bg-blue-500 px-3 py-1 text-white rounded-md font-semibold active:bg-blue-700">Eliminar</button>
        </div>
      </div>
    </div>
  );
};
