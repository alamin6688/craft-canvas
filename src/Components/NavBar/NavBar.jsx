import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
// import { useContext } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
// import { AuthContext } from "../../Contexts/AuthProvider";
import DarkMode from "../DarkMode/DarkMode";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvuder";

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogoutButton = () => {
    logOutUser()
      .then(() => {
        console.log("User Log out Successfull");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const links = (
    <div className=" text-[13px] md:text-[17px] font-bold w-full">
      <NavLink
        className="pl-0 px-[5px] md:pl-0 md:px-3 lg:pl-0 lg:px-[10px]"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="px-[5px] md:px-3 lg:px-[10px]"
        to="/all-art-and-craft-items"
      >
        All Art & craft Items
      </NavLink>
      <NavLink
        className="px-[5px] md:px-3 lg:px-[10px]"
        to="/add-craft-items"
      >
        Add Craft Item
      </NavLink>
      <NavLink
        className="pr-0 px-[5px] md:pr-0 md:px-3 lg:px-[10px]"
        to="/my-list"
      >
        My List
      </NavLink>
    </div>
  );
  return (
    <>
      <div className=" flex flex-col lg:flex-row items-center justify-between bg-base-100 p-0 space-y-2 mt-4 mb-8">
        <div className="flex justify-between items-center w-full lg:w-auto">
          <div className="flex items-center justify-center gap-2">
            <Link to="/" className="p-0 ">
              <h1 className="font-bold text-2xl md:text-4xl site-name">Craft Canvas</h1>
            </Link>
          </div>

          <div className="flex lg:hidden gap-4 items-center">
            <div className=" mt-4 justify-center items-center bg-red-30">
              <DarkMode></DarkMode>
            </div>
            <div>
              {user ? (
                <div
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                  // title={user.displayName}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user.displayName}
                  data-tooltip-place="top"
                >
                  <div className="w-10 rounded-full" id="user-photo">
                    <img alt="Profile Picture" src={user.photoURL} />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div>
              {user ? (
                <button
                  onClick={handleLogoutButton}
                  className="btn btn-primary border-none bg-orange-500 text-white"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/sign-in"
                  className="btn btn-primary border-none bg-orange-500 text-white"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="flex md:hidden  w-full justify-center">
          <nav>{links}</nav>
        </div>

        <div className="flex justify-between items-center">
          <div className="hidden md:flex  lg:mr-2">
            <nav>{links}</nav>
          </div>
          <div className="hidden lg:flex gap-1 items-center ">
            <div className=" mt-4 justify-center items-center bg-red-30">
              <DarkMode></DarkMode>
            </div>
            <div>
              {user ? (
                <div
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                  // title={user.displayName}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user.displayName}
                  data-tooltip-place="top"
                >
                  <div className="w-10 rounded-full">
                    <img alt="Profile Picture" src={user.photoURL} />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>

            <div>
              {user ? (
                <button
                  onClick={handleLogoutButton}
                  className="btn btn-primary border-none bg-orange-400 text-white font-bold hover:bg-orange-500"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/sign-in"
                  className="btn btn-primary border-none bg-orange-400 text-white font-bold hover:bg-orange-500"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default NavBar;