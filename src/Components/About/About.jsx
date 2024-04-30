import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const About = () => {

  useEffect(()=>{
    Aos.init()
  },[])


  return (
    <div className="flex justify-center items-center h-auto mt-16 border border-white rounded-xl w-[90%] md:w-full mx-auto" data-aos="zoom-in">
      <div className="animate__animated animate__zoomIn hero bg-gray-200 md:p-2 rounded-2xl shadow-2xl mt-6 mb-20">
        <div className="hero-content text-center ">
          <div className=" py-4">
            <h1 className="text-3xl md:text-5xl font-bold">Hello People!</h1>
            <p className="py-6 w-full">
            Craft Canvas is an online sanctuary for artisans and craft enthusiasts where inspiration meets convenience. Navigating through its virtual aisles reveals a treasure trove of premium supplies, curated with passion and expertise. From paints to patterns, every click sparks creativity and fuels artistic endeavors. With seamless browsing and secure transactions, craft Canvas empowers creators to turn their digital canvases into tangible works of art.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              <b>Located at:</b> Dhaka, Bangladesh <br />
            </p>
            <p className="flex gap-1 items-center justify-center mx-auto">
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
