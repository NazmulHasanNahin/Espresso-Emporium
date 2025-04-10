import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, category, photourl, details } = coffee;

  const handleConfirmDelete = (_id) => {
    toast(
      ({ closeToast }) => (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-800">
            Are you sure you want to delete <span className="text-red-500 font-bold">{name}</span>?
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                  method: "DELETE",
                })
                  .then(res => res.json())
                  .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0)
                      console.log("Deleting ID:", _id);
                    closeToast();
                    toast.success("Deleted successfully!", {
                      position: "top-center",
                    });
                  })
              }}
              className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
            >
              Confirm
            </button>
            <button
              onClick={closeToast}
              className="px-3 py-1 bg-gray-300 text-sm rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        position: 'top-center',
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
      }
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-2xl bg-white border-2 shadow-sm mb-5 transition-all duration-300">
      <img
        src={photourl}
        alt={name}
        className="w-full md:w-48 h-48 object-cover rounded-xl"
      />

      <div className="flex-1 space-y-3">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm">{details}</p>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
          <p><span className="font-medium text-gray-700">Chef:</span> {chef}</p>
          <p><span className="font-medium text-gray-700">Supplier:</span> {supplier}</p>
          <p><span className="font-medium text-gray-700">Taste:</span> {taste}</p>
          <p><span className="font-medium text-gray-700">Category:</span> {category}</p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
            View
          </button>
          <Link to={`updatecoffee/${_id}`}
           className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">
            Edit
          </Link>
          <button
            onClick={() => handleConfirmDelete(_id)}
            className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CoffeeCard;
