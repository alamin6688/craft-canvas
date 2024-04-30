import { FaLocationArrow, FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdInformationCircle } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import Aos from 'aos';
import 'aos/dist/aos.css'
import 'animate.css';
import { Helmet } from "react-helmet-async";

const AllArtAndCraftItems = () => {
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
       <Helmet>
                <title>Craft Canvus | All Art & Crafts</title>
            </Helmet>
      <h1 className="text-3xl md:text-4xl text-center font-bold mt-10 mb-16 bg-gray-200 rounded-2xl shadow-xl py-8 animate__animated animate__zoomIn">
        All Art & Crafts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {crafts !== null &&
          crafts.map((craft) => (
            <div key={craft._id}>
            <div className="card card-compact w-full bg-base-100 shadow-2xl space-y-4 border-2" data-aos="zoom-in">
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
              <Link to={`/crafts-details/${craft._id}`} className="card-actions justify-start mt-3 mb-1">
                <button className="btn bg-orange-500 hover:bg-orange-600 text-white">View Details</button>
              </Link>
            </div>
          </div>
          </div>
          ))}
      </div>
    </div>
  );
};

export default AllArtAndCraftItems;
