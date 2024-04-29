import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="flex justify-center items-center h-auto mt-16 border border-white rounded-xl">
      <div className="animate__animated animate__zoomIn hero bg-gray-100 md:p-2 rounded-xl">
        <div className="hero-content text-center ">
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold">Hello People!</h1>
            <p className="py-6 w-full">
            Craft Canvas is an online sanctuary for artisans and craft enthusiasts where inspiration meets convenience. Navigating through its virtual aisles reveals a treasure trove of premium supplies, curated with passion and expertise. From paints to patterns, every click sparks creativity and fuels artistic endeavors. With seamless browsing and secure transactions, Craft Canvas empowers creators to turn their digital canvases into tangible works of art.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              <b>Located at:</b> Karachi, Pakistan <br />
            </p>
            <p className="flex gap-1 items-center justify-center mx-auto mb-6">
              <NavLink to="/"></NavLink>
            </p>
            <NavLink to="/">
              <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
                Get Started
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
