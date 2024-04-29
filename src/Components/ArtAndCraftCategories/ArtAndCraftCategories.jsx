import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css'

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

    useEffect(()=>{
        Aos.init()
    },[])


    return (
        <div className="container mx-auto px-4 py-8 mb-8">
        <h1 className="text-3xl md:text-4xl text-center font-bold mb-14 md:mb-16 bg-gray-200 rounded-2xl shadow-xl py-8 animate__animated animate__zoomIn">
            Art & Craft Categories
        </h1>
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
            {categories && categories.map((category) => (
                <Link to={category.subCategoryName ? `/${category.subCategoryName.replace(/\s+/g, '-').toLowerCase()}` : ''} key={category._id} className="bg-gray-200 rounded-lg overflow-hidden shadow-2xl border p-4" data-aos="zoom-in">
                    <img src={category.image} alt={category.subCategoryName} className="w-full h-[200px] object-cover rounded-xl" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mt-3 mb-5">
                            {category.subCategoryName}  
                        </h2>
                        <p className="text-gray-700">
                            {category.description}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
    );
};

export default ArtAndCraftCategories;