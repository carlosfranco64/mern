import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useTask } from "../context/TaskContext";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const { signin, errors:LoginErrors=[], isAuthenticate } = useAuth();

  const {mode}=useTask()

  const navigate=useNavigate()

useEffect(() => {
    if (isAuthenticate) navigate("/");
  }, [isAuthenticate]);
  
  const onSubmit = handleSubmit(async (values) => {
    signin(values);
  });
  
 
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className={`${mode ? "bg-zinc-800":"bg-[#3333332c]"}   p-10 rounded-md `}>
        {LoginErrors.map((error, i) => (
          <div key={i} className="px-2 py-2 bg-red-500">
            {error}
          </div>
        ))}
        <h1 className={`font-bold text-2xl ${mode ? "text-white":"text-black"}`}>LOGIN</h1>
        <hr className="mb-4" />

        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border my-1"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border my-1"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">password is required</p>
          )}
          <button className=" bg-blue-500 w-full h-10 my-1 font-semibold rounded-md">
            Login
          </button>
        </form>
        <p className={`flex gap-x-2 justify-between  ${mode ? "text-white":"text-black"} `}>
          Don't have an account?{" "}
          <Link className="underline text-sky-500" to="/register">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
