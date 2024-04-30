import { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../Contexts/AuthProvuder";
import Swal from "sweetalert2";
import { IoMdInformationCircle } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import 'animate.css';
import { MdEdit } from "react-icons/md";
import Aos from 'aos';
import 'aos/dist/aos.css'


const MyList = () => {
  const  crafts  = useLoaderData();
  console.log(crafts);
  const {user}=useContext(AuthContext)
  const [currentUser, setCurrentUser] = useState([]);
  const [filterValue, setFilterValue] = useState("all");

  useEffect(() => {
    // Filter crafts based on filter value
    let filteredCrafts = crafts;
    if (filterValue !== "all") {
      filteredCrafts = crafts.filter(
        (craft) => craft.customization === filterValue
      );
    }
    setCurrentUser(filteredCrafts);
  }, [crafts, filterValue]);


  useEffect(() => {
    Aos.init();
  }, []);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete craft
        fetch(`http://localhost:5000/crafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft has been deleted.",
                icon: "success",
              });

              // Update current user crafts after deleting
              const remainingCrafts = currentUser.filter(
                (craft) => craft._id !== _id
              );
              setCurrentUser(remainingCrafts);
            }
          })
          .catch((error) => {
            console.error("Error deleting craft:", error);
          });
      }
    });
  };


  return (
    <div className="my-10">
      <h1 className="text-3xl md:text-4xl text-center font-bold mt-10 mb-10 bg-gray-200 rounded-2xl shadow-xl py-8 animate__animated animate__zoomIn">
        {user.displayName}{`'`}s Uploaded Crafts
      </h1>
      <div className="flex items-center font-bold text-xl justify-center my-5">
        <select value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
          <option value="all">All</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentUser.map((craft) => (
          <div key={craft._id} className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-3" data-aos="zoom-in">
            <img src={craft.image} alt={craft.itemName} className="w-full h-[250px] object-cover rounded-2xl" />
            <div className="p-4 space-y-4">
            <h2 className="card-title font-bold">{craft.itemName}</h2>
              <p className="flex items-center gap-1 text-gray-600 font-semibold"><FaLocationArrow className="text-orange-400"/> 
              {craft.subCategoryName}
              </p>
              <p className="flex items-center gap-1 text-gray-600 font-semibold"><IoMdInformationCircle className="text-orange-400"/>
              Stock: {craft.stocStatus}
              </p>
              <p className="flex items-center gap-1 text-gray-600 font-semibold"><MdEdit className="text-orange-400"/>
              Customization: {craft.customization}
              </p>
              <p className="flex items-center gap-1 text-gray-600 font-semibold"><FaDollarSign className="text-orange-400"/> 
              Price: {craft.price}
              </p>
              <p className="flex items-center gap-1 text-gray-600 font-semibold"><FaStar className="text-orange-400"/>
              Rating: {craft.rating}
              </p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleDelete(craft._id)}
                  className="btn bg-red-500 hover:bg-red-600 text-white"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Delete"
                  data-tooltip-place="bottom-end"
                >
                  Delete
                </button>
                  <Link
                    to={`/update-craft/${craft._id}`}
                    className="btn bg-blue-500 hover:bg-blue-600 text-white"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Edit"
                    data-tooltip-place="bottom-end"
                  >
                    Update
                  </Link>
                  <Link to={`/crafts-details/${craft._id}`} className="btn bg-orange-500 hover:bg-orange-600 text-white">
                    View
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default MyList;
