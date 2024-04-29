import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CharcoalSkerching = () => {
    const [crafts, setCrafts] = useState(null);
    console.log(crafts);
    useEffect(() => {
      fetch("http://localhost:5000/crafts")
        .then((res) => res.json())
        .then((data) => {
          setCrafts(data);
        });
    }, []);
  
    // Check if crafts is null before accessing its properties
    if (crafts === null) {
      return <div>Loading...</div>;
    }
  
    // Filter landscape painting category case-insensitively
    const landscapePainting = crafts.filter(
      (craft) => craft.subCategoryName.toLowerCase() === "charcoal sketching"
    );
  
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">All Charcoal Skerching{`'`}s</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {landscapePainting.map((craft) => (
          <div key={craft._id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={craft.image} alt={craft.itemName} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{craft.subCategoryName}</h3>
              <p className="text-gray-700 mb-2">Rating: {craft.rating}</p>
              <p className="text-gray-700 mb-2">Price: {craft.price}</p>
              {/* Include other details of the craft item if needed */}
              <Link to={`/crafts-details/${craft._id}`} className="card-actions justify-start mt-3 mb-1">
                <button className="btn bg-orange-500 text-white">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default CharcoalSkerching;