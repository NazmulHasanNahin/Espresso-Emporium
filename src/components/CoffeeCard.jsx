const CoffeeCard = ({ coffee }) => {
    const { name, chef, supplier, taste, category, photourl, details } = coffee;
  
    return (
      <div className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-2xl  bg-white border-2 mb-5  transition-all duration-300">
        <img
          src={photourl}
          alt={name}
          className="w-full md:w-48 h-48 object-cover rounded-xl"
        />
  
        <div className="flex-1 space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600 text-sm">{details}</p>
  
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
            <p><span className="font-medium text-gray-700">Chef:</span> {chef}</p>
            <p><span className="font-medium text-gray-700">Supplier:</span> {supplier}</p>
            <p><span className="font-medium text-gray-700">Taste:</span> {taste}</p>
            <p><span className="font-medium text-gray-700">Category:</span> {category}</p>
          </div>
  
          <div className="pt-2">
            <button className="px-4 py-2 bg-amber-500 text-white rounded-xl  hover:bg-amber-600 transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CoffeeCard;
  