import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-lg">
        <div class="card-body">
          <h2 class="text-center text-2xl text-accent capitalize font-bold">
            Login
          </h2>
          <form className="mt-6">
            <div>
              <label className="font-medium">Email:</label>
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full mt-1"
              />
            </div>
            <div className="mt-4">
              <label className="font-medium">Password:</label>
              <input
                type="password"
                placeholder="Your Email"
                class="input input-bordered w-full mt-1"
              />
            </div>
            <input
              type="submit"
              placeholder="Login"
              className="btn btn-accent input input-bordered w-full uppercase mt-4"
            />
          </form>
          <p className="text-accent text-sm text-center font-medium">
            New to Dental Care?{" "}
            <Link to="signup" className="text-secondary">
              Crete a new account
            </Link>
          </p>
          <div class="divider">OR</div>
          <button class="btn btn-outline btn-accent input input-bordered w-full uppercase">
            continue with google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
