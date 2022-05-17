import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const onSubmit = async (data) => {
    console.log("doctor data", data);
  };
  return (
    <section className="flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="text-center text-2xl text-accent capitalize font-bold">
            Add Doctor
          </h2>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="font-medium">Doctor Name:</label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                type="text"
                placeholder="Doctor Name"
                className="input input-bordered w-full mt-1"
              />
              {errors.name?.type === "required" && (
                <span className="text-red-500 mt-2 block">
                  {errors?.name?.message}
                </span>
              )}
            </div>
            <div className="mt-4">
              <label className="font-medium">Doctor Email:</label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Doctor email",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full mt-1"
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500 mt-2 block">
                  {errors?.email?.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-red-500 mt-2 block">
                  {errors?.email?.message}
                </span>
              )}
            </div>
            <div className="mt-4">
              <label className="font-medium">Doctor Specialization:</label>
              <input
                {...register("speciality", {
                  required: {
                    value: true,
                    message: "Speciality field is required",
                  },
                })}
                type="text"
                placeholder="Doctor Speciality"
                className="input input-bordered w-full mt-1"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500 mt-2 block">
                  {errors?.password?.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-accent input input-bordered w-full uppercase mt-4"
            >
              Add Doctor
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
