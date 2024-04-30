import { useLoaderData, useParams } from "react-router-dom";
import 'animate.css';
import { Helmet } from "react-helmet-async";
// import { IoMdInformationCircle } from "react-icons/io";
// import { FaLocationArrow } from "react-icons/fa6";

const Details = () => {
  const crafts = useLoaderData();
  const { id } = useParams();
  const clickedCraft = crafts.find((craft) => craft._id === id);

  // Check if crafts or clickedCraft is null before accessing their properties
  if (!crafts || !clickedCraft) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <Helmet>
                <title>Craft Canvus | Craft Details</title>
            </Helmet>
      <div>
      <h2 className="text-3xl md:text-4xl text-center font-bold mt-10 mb-20 bg-gray-200 rounded-2xl shadow-xl py-8 animate__animated animate__zoomIn">
        {clickedCraft.subCategoryName}
      </h2>
      </div>

      <div className="card lg:card-side bg-gray-200 shadow-2xl animate__animated animate__zoomIn">
        <figure className="w-[95%] mx-auto md:w-1/2 p-6">
          <img
            src={clickedCraft.image}
            className="rounded-2xl"
          />
        </figure>
        <div className="card-body w-full md:w-1/2">
          <h2 className="card-title uppercase text-3xl mb-2">
            {clickedCraft.itemName}  
          </h2>
          <p><strong>Description:</strong> {clickedCraft.description}</p>
          <p><strong>Stock Status:</strong> {clickedCraft.stocStatus}</p>
          <p><strong>Processing Time:</strong> {clickedCraft.processingTime}</p>
          <p><strong>Customization:</strong> {clickedCraft.customization}</p>
          <p><strong>Buyer:</strong> {clickedCraft.name}</p>
          <p><strong>Buyer&apos;s Email:</strong> {clickedCraft.email}</p>
          <p><strong>Rating:</strong> {clickedCraft.rating}</p>
          <p><strong>Price:</strong> {clickedCraft.price}</p>
          <button className="btn bg-orange-500 hover:bg-orange-600 text-black font-bold w-[30%] mt-2 mb-4">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
