import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CraftItems = () => {
  const [crafts, setCrafts] = useState(null);
  console.log(crafts);
  useEffect(() => {
    fetch("http://localhost:5000/crafts")
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl">Craft Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {crafts !== null &&
          crafts.map((craft) => (
            // <div key={craft.id}>
            //   <h1>{craft.itemName}</h1>
            //   <img src={craft.image} alt={craft.itemName} />
            // </div>
            <div key={craft.id}>
            <div className="card card-compact w-full bg-base-100 shadow-xl space-y-4">
            <figure>
            <img src={craft.image} className="rounded-3xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{craft.itemName}</h2>
              <p>Item Name: {craft.subCategoryName}</p>
              <p>Stock: {craft.stocStatus}</p>
              <p className="flex items-center gap-1"><FaStar className="text-orange-500"/>{craft.rating}</p>
              <div className="card-actions justify-start mt-3 mb-1">
              <Link to={`/crafts-details/${craft._id}`} className="card-actions justify-start mt-3 mb-1">
                <button className="btn bg-orange-500 text-white">View Details</button>
              </Link>
              </div>
            </div>
          </div>
          </div>
          ))}
      </div>
    </div>
  );
};

export default CraftItems;
