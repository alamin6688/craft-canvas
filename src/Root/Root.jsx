import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <>
      <div className="mx-auto w-[95%] md:w-[87%] lg:max-w-6xl">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
