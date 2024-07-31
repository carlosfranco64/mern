import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useTask } from "./TaskContext";
import { ModalDelete } from "../components/ModalDelete";

export const TaskCard = ({ task }) => {

    const {modalDelete,handleOpenModalDelete,handleOpenModalEdit}=useTask()

  return (
    <div className={` ${task.statusTask ? "bg-green-600": "bg-red-600"} rounded-md h-min-[150px] px-5 pt-4  `}>
      <div className="my-auto flex justify-between mb-2">
        <h1 className="font-bold first-letter:uppercase">{task.title}</h1>
        <div className="flex gap-1 text-2xl">


          <button >
            <MdOutlineEdit onClick={()=>handleOpenModalEdit(task)} className="font-bold" />
          </button>
          <button onClick={()=>handleOpenModalDelete(task)}  >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
      <div>
        <p className="first-letter:uppercase">{task.description}</p>
      </div>

      <small className="italic -4">
        {new Date(task.date).toLocaleDateString()}
      </small>


{

  modalDelete  && <ModalDelete task={task} />
}


    </div>




  );
};
