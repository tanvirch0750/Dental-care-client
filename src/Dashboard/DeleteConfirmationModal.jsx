import React from "react";

const DeleteConfirmationModal = ({ deleteModal, refetch, setDeleteModal }) => {
  const { name, email } = deleteModal;

  const handleDelete = () => {
    fetch(`https://morning-shelf-05146.herokuapp.com/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("doctor delete", data);
        if (data.deletedCount) {
          alert(`Doctor ${name} deleted successfully`);
          setDeleteModal(null);
          refetch();
        } else {
          alert("Something went wrong");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="delete-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-accent"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete {name}?
          </h3>
          <p className="py-4">If you delte once you can not retive the data.</p>
          <div className="modal-action">
            <button onClick={handleDelete} className="btn btn-error text-white">
              delete
            </button>
            <label htmlFor="delete-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
