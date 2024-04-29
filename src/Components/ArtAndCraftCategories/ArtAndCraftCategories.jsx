import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArtAndCraftCategories = () => {
    const [categories,setCategories]= useState(null);
    console.log(categories)

    useEffect(() =>{
        fetch('http://localhost:5000/categories')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setCategories(data);
          });
    },[])
    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-center font-semibold mb-6">Art And Craft Categories</h1>

        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories && categories.map((category) => (
                <Link to={category.subCategoryName ? `/${category.subCategoryName.replace(/\s+/g, '-').toLowerCase()}` : ''} key={category._id} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img src={category.image} alt={category.subCategoryName} className="w-full h-auto object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{category.subCategoryName}</h2>
                        <p className="text-gray-700">{category.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
    );
};

export default ArtAndCraftCategories;