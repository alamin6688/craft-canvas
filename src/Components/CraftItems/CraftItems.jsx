import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { IoMdInformationCircle } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const CraftItems = () => {
  const [crafts, setCrafts] = useState(null);
  console.log(crafts);

  useEffect(() => {
    fetch("https://craft-canvas-server.vercel.app/crafts")
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <div>
      <h1 className="text-3xl md:text-4xl text-center font-bold mt-10 mb-20 bg-gray-200 rounded-2xl shadow-xl py-8 animate__animated animate__zoomIn">
        Art & Craft Items
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {crafts !== null &&
          crafts.slice(0, 6).map((craft) => (
            <div key={craft.id}>
              <div className="card card-compact w-full bg-gray-200 shadow-2xl space-y-4" data-aos="zoom-in">
                <figure>
                  <img src={craft.image} className="rounded-3xl w-[90%] h-[250px] mx-auto object-cover mt-5" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">{craft.itemName}</h2>
                  <p className="flex items-center gap-1 text-gray-600 font-semibold"><FaLocationArrow className="text-orange-400"/> &nbsp;
                    {craft.subCategoryName}
                  </p>
                  <p className="flex items-center gap-1 text-gray-600 font-semibold"><IoMdInformationCircle className="text-orange-400"/> &nbsp;
                    Stock: {craft.stocStatus}
                  </p>
                  <p className="flex items-center gap-1 text-gray-600 font-semibold"><IoMdTime className="text-orange-400"/> &nbsp;
                    Processing Time: {craft.processingTime}
                  </p>
                  <p className="flex items-center gap-1 text-gray-600 font-semibold"><FaStar className="text-orange-400"/> &nbsp;
                    Rating: {craft.rating}
                  </p>
                  <div className="card-actions justify-start mt-3 mb-1">
                    <Link to={`/crafts-details/${craft._id}`} className="card-actions justify-start mt-3 mb-1">
                      <button className="btn bg-orange-500 hover:bg-orange-600 text-white">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex mt-8 justify-center  mb-1">
                    <Link to={`/all-art-and-craft-items`} className="card-actions justify-start mt-3 mb-1">
                      <button className="btn bg-orange-500 hover:bg-orange-600 text-white">Show More...</button>
                    </Link>
                  </div>
    </div>
  );
};

export default CraftItems;
