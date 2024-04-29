import { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../Contexts/AuthProvuder";
import Swal from "sweetalert2";


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
      <h1 className="text-3xl font-bold text-center">{user.displayName}{`'`}s Uploaded Crafts</h1>
      <div className="flex items-center justify-center my-5">
        <select value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
          <option value="all">All</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentUser.map((craft) => (
          <div key={craft._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={craft.image} alt={craft.itemName} className="w-full h-32 object-cover object-center" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{craft.itemName}</h2>
              <p className="text-gray-600">{craft.subCategoryName}</p>
              <p className="text-gray-600">{craft.price}</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleDelete(craft._id)}
                  className="btn bg-red-500 text-white"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Delete"
                  data-tooltip-place="bottom-end"
                >
                  Delete
                </button>
                <div className="flex gap-3">
                  <Link
                    to={`/update-craft/${craft._id}`}
                    className="btn bg-blue-500 text-white"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Edit"
                    data-tooltip-place="bottom-end"
                  >
                    <FaPen />
                  </Link>
                  <Link
                    to={`/craft-details/${craft._id}`}
                    className="btn bg-blue-400 text-white"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Details"
                    data-tooltip-place="bottom-end"
                  >
                    <BsFillInfoSquareFill />
                  </Link>
                </div>
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
