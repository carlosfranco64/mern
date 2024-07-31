import React, { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const ModalTask = () => {
  const { handleClosedModal, createTask, edit, currenTask, updateOneTask } =
    useTask();

  // console.log(currenTask)

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (edit && currenTask) setValue("title", currenTask.title || "");
    setValue("description", currenTask.description || "");
    setValue("statusTask", currenTask.statusTask || "");
  }, [edit, currenTask, setValue]);

  const onSubmit = handleSubmit(async (values) => {
    if (edit) {
      updateOneTask(currenTask._id, values);
    } else {
      createTask(values);
    }

  });

  return (
    <div className="h-[calc(100vh-100px)] fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-zinc-800  p-10 rounded-md ">
        <h1 className="font-bold text-2xl">
          {edit ? "EDITAR TAREA" : "CREAR TAREA"}
        </h1>
        <hr className="mb-4" />

        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border my-1"
            placeholder="Titulo de la tarea"
          />
          {errors.title && <p className="text-red-500">Title is required</p>}
          <textarea
            type="text"
            {...register("description", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border my-1"
            placeholder="Descripcion de la tarea"
          ></textarea>
          {errors.description && (
            <p className="text-red-500">Description is required</p>
          )}

            {edit &&
          <div className="flex ">
            <input className="mr-1" type="checkbox" {...register("statusTask")} />
            <label htmlFor="">Estado de la tarea </label>
          </div>
          }
          <div className="flex">
            <button className="mx-1 bg-blue-500 w-full h-10 my-1 font-semibold rounded-md active:bg-blue-700">
              {edit ? "Actualizar" : "Guardar"}
            </button>
            <button
              onClick={handleClosedModal}
              className="mx-1 bg-red-500 w-full h-10 my-1 font-semibold rounded-md active:bg-red-700"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
