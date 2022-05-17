import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loader from "../Components/Loader/Loader";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery(["services"], () =>
    fetch(`https://morning-shelf-05146.herokuapp.com/appointments`).then(
      (res) => res.json()
    )
  );

  const imgStorageKey = "23172e59f64b327ef39318a066db5e11";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            image: img,
          };
          // send to your db
        }
        console.log("imgbb", result);
      });
  };

  if (isLoading) {
    return <Loader />;
  }

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
                placeholder="Doctor Email"
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

              <select
                {...register("speciality")}
                className="select select-bordered w-full mt-1"
              >
                {services.map((service) => (
                  <option key={service._id}>{service.name}</option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <label className="font-medium">Doctor Image:</label>
              <input
                {...register("image", {
                  required: {
                    value: true,
                    message: "Photo is required",
                  },
                })}
                type="file"
                placeholder="Doctor Photo"
                className="input input-bordered w-full mt-1 pt-[6px]"
              />
              {errors.name?.type === "required" && (
                <span className="text-red-500 mt-2 block">
                  {errors?.image?.message}
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
