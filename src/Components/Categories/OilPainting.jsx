import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css';
import {  FaStar } from "react-icons/fa6";
import { IoMdInformationCircle, IoMdTime } from "react-icons/io";

const OilPainting = () => {
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
      return <div className="text-center">
      <span className="loading loading-bars loading-lg"></span>
    </div>;
    }
  
    // Filter landscape painting category case-insensitively
    const landscapePainting = crafts.filter(
      (craft) => craft.subCategoryName.toLowerCase() === "oil painting"
    );
  
    return (
        <div>
            <h2 className="text-3xl md:text-4xl text-center font-bold mt-10 mb-16 bg-gray-200 rounded-2xl shadow-xl py-8 animate__animated animate__zoomIn">
              All Oil Painting{`'`}s
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {landscapePainting.map((craft) => (
          <div key={craft._id} className="card card-compact w-full bg-gray-200 shadow-2xl space-y-4 animate__animated animate__zoomIn">
          <img src={craft.image} alt={craft.itemName} className="rounded-3xl w-[90%] h-[250px] mx-auto object-cover mt-5" />
          <div className="p-4 space-y-4">
          <h2 className="card-title font-bold">{craft.itemName}</h2>
            <p className="flex items-center gap-1 text-gray-600 font-semibold"><IoMdInformationCircle className="text-orange-400"/> &nbsp;
            Stock: {craft.stocStatus}
            </p>
            <p className="flex items-center gap-1 text-gray-600 font-semibold"><IoMdTime className="text-orange-400"/> &nbsp;
            Processing Time: {craft.processingTime}
            </p>
            <p className="flex items-center gap-1 text-gray-600 font-semibold"><FaStar className="text-orange-400"/> &nbsp;
            Rating: {craft.rating}
            </p>
              {/* Include other details of the craft item if needed */}
              <Link to={`/crafts-details/${craft._id}`} className="card-actions justify-start mt-3 mb-1">
                <button className="btn bg-orange-500 hover:bg-orange-600 text-white">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default OilPainting;