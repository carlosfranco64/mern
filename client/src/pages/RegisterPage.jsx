import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticate, errors: registerErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticate) navigate("/");
  }, [isAuthenticate]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 p-10 rounded-md ">
        <h1 className="font-bold text-2xl ">REGISTER</h1>
        <hr className="mb-4" />

        {registerErrors.map((error, i) => (
          <div key={i} className=" bg-red-500 py-4 px-2">
            {error}
          </div>
        ))}

        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border  my-1"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}

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
            Register
          </button>
        </form>

        <p className="flex gap-x-2 justify-between">
          {" "}
          already have an account?
          <Link className="underline text-sky-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
