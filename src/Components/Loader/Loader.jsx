import React from "react";

const Loader = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center">
      <button class="btn loading w-96 h-96 text-center text-2xl">
        loading
      </button>
    </div>
  );
};

export default Loader;
