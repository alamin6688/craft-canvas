import Swal from "sweetalert2";
import 'animate.css';
import { Helmet } from "react-helmet-async";

const AddCraftItem = () => {
  const handleAddCraftItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value.toLowerCase();
    const subCategoryName = form.subCategoryName.value.toLowerCase();
    const rating = form.rating.value.toLowerCase();
    const description = form.description.value;
    const price = form.price.value;
    const customization = form.customization.value.toLowerCase();
    const processingTime = form.processingTime.value.toLowerCase();
    const stocStatus = form.stocStatus.value;
    const name = form.name.value.toLowerCase();
    const email = form.email.value;

    const newCraftInfo = {
      itemName,
      subCategoryName,
      rating,
      description,
      price,
      customization,
      processingTime,
      stocStatus,
      name,
      email,
      image,
    };
    console.log(newCraftInfo);

    //post tourist sport
    fetch("https://craft-canvas-server.vercel.app/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraftInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "success!",
            text: "Tourists Spot Added Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="bg-gray-200 p-4 lg:p-16 rounded-3xl shadow-2xl my-10 animate__animated animate__zoomIn">
       <Helmet>
                <title>Craft Canvus | Add Craft Items</title>
            </Helmet>
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mt-6 md:mt-0 mb-10">
        Add a Art & Craft Item
      </h2>
      <form onSubmit={handleAddCraftItem}>
        {/* 1st row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Item Name</label>
            <input
              type="text"
              name="itemName"
              placeholder="Item Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="w-full md:w-1/2">
          <label className="text-black font-bold">Sub Category Name</label>
            <br />
            <select
              name="subCategoryName"
              className="w-full rounded-lg px-5 py-[13px] outline-none"
            >
              <option>Select Sub Category Name</option>
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing">Portrait Drawing</option>
              <option value="Watercolour Painting">Watercolour Painting</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
          </div>
        </div>
        {/* 2nd row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Rating</label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Short Description</label>
            <input
              type="text"
              name="description"
              placeholder="Short Description"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* 3rd row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Price </label>
            <input
              type="number"
              name="price"
              placeholder="Price in $"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Customization</label>
            <br />
            <select
              name="customization"
              className="w-full rounded-lg px-5 py-[13px] outline-none"
            >
              <option>Select Customization</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        {/* 4th row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Processing Time</label>
            <br />
            <select
              name="processingTime"
              className="w-full rounded-lg px-5 py-[13px] outline-none"
            >
              <option>Select Processing Time</option>
              <option value="1 day">1 Day</option>
              <option value="2 days">2 Days</option>
              <option value="3 days">3 Days</option>
              <option value="4 days">4 Days</option>
              <option value="5 days">5 Days</option>
              <option value="6 days">6 Days</option>
              <option value="7 days">7 Days</option>
            </select>
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">Stock Status</label>
            <br />
            <select
              name="stocStatus"
              className="w-full rounded-lg px-5 py-[13px] outline-none"
            >
              <option>Select Stock Status</option>
              <option value="In Stock">In Stock</option>
              <option value="Made To Order">Made To Order</option>
            </select>
          </div>
        </div>
        {/* 5th row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">User Name</label>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-black font-bold">User Email</label>
            <input
              type="email"
              name="email"
              placeholder="User Email"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* 5th row */}
        <div className="mb-8">
          <div className="w-full">
            <label className="text-black font-bold">Image URl</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL Here.."
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* submit here */}
        <input type="submit" value="Add Item" className="btn btn-primary border-none bg-orange-400 text-black font-bold hover:bg-orange-500 w-full"/>
      </form>
    </div>
  );
};

export default AddCraftItem;
