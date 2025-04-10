import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast ,Bounce } from 'react-toastify';

const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const {_id, name, chef, supplier, taste, category, photourl, details} = coffee;
    
    const handleupdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const photourl = form.photourl.value;
        const details = form.details.value;

        const updateCoffee = { name, chef, supplier, taste, category, photourl, details };
        console.log(updateCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("Coffee updated successfully! ☕");
                }
                else{
                    toast.error("Failed to update coffee. ❌");
                }
            })
            .catch(error => {
                toast.error("Something went wrong!");
                console.error(error);
              });
    }
    
    return (
        <div>
           <h1>update coffee page</h1>
           <div className="max-w-4xl mx-auto my-20 px-6">
            <div className="bg-white shadow-xl rounded-2xl p-10 border border-gray-200">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">☕ Update Coffee</h1>
                <form onSubmit={handleupdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">Name</label>
                        <input
                        defaultValue={name}
                            name="name"
                            type="text"
                            placeholder="Enter coffee name"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    {/* Chef */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">Chef</label>
                        <input
                        defaultValue={chef}
                            name="chef"
                            type="text"
                            placeholder="Enter chef name"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    {/* Supplier */}
                    <div>
                    
                        <label className="block text-sm font-semibold text-gray-600 mb-2">Supplier</label>
                        <input
                        defaultValue={supplier}
                            name="supplier"
                            type="text"
                            placeholder="Enter supplier name"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    {/* Taste */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">Taste</label>
                        <input
                        defaultValue={taste}
                            name="taste"
                            type="text"
                            placeholder="Enter taste"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    {/* Category */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">Category</label>
                        <input
                        defaultValue={category}
                            name="category"
                            type="text"
                            placeholder="Enter category"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    {/* Photo URL */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">Photo URL</label>
                        <input
                        defaultValue={photourl}
                            name="photourl"
                            type="text"
                            placeholder="Enter image URL"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    {/* Details */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-600 mb-2">Details</label>
                        <textarea
                        defaultValue={details}
                            name="details"
                            rows="4"
                            placeholder="Enter coffee details"
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        ></textarea>
                    </div>
                    <div className="mt-8 text-center">
                        <button
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-xl transition duration-300"
                        >
                            Update Coffee
                        </button>
                    </div>
                </form>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
           
        </div>
    );
};

export default UpdateCoffee;