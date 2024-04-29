import Swal from "sweetalert2";

const AddCattegotyItem = () => {
  const handleAddCategoryItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const subCategoryName = form.subCategoryName.value.toLowerCase();
    const description = form.description.value;

    const newCategoryInfo = {
      subCategoryName,
      description,
      image,
    };
    console.log(newCategoryInfo);

    //post tourist sport
    fetch("http://localhost:5000/categories", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCategoryInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "success!",
            text: "Category Added Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
            form.reset();
        }
      });
  };
  return (
    <div className="bg-orange-500 bg-opacity-40 p-24 rounded-xl my-10">
      <h2 className="text-3xl font-extrabold text-center mb-5">
        Add a Category Item
      </h2>
      <form onSubmit={handleAddCategoryItem} className="space-y-5">
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
        <input
          type="text"
          name="description"
          placeholder="Short Description"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL Here.."
          className="input input-bordered w-full"
        />

        {/* submit here */}
        <input type="submit" value="Add Item" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCattegotyItem;
