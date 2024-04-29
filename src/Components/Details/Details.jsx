
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
const crafts=useLoaderData();
  const { id } = useParams();
  const clickedCraft = crafts.find((craft) => craft._id === id);

  // Check if crafts or clickedCraft is null before accessing their properties
  if (!crafts || !clickedCraft) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-center text-3xl font-bold">Details of: {clickedCraft.itemName}</h2>
      <div className="max-w-md mx-auto mt-4 p-4 border border-gray-300 rounded-lg">
        <img src={clickedCraft.image} alt={clickedCraft.itemName} className="w-full h-auto mb-4" />
        <p><strong>Category:</strong> {clickedCraft.subCategoryName}</p>
        <p><strong>Rating:</strong> {clickedCraft.rating}</p>
        <p><strong>Description:</strong> {clickedCraft.description}</p>
        <p><strong>Price:</strong> {clickedCraft.price}</p>
        {/* Include other details as needed */}
      </div>
    </div>
  );
};

export default Details;
