
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import AddCraftItem from "../Components/AddCraftItem/AddCraftItem";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/sign-in',
          element:<SignIn></SignIn>
        },
        {
          path:'/sign-up',
          element:<SignUp></SignUp>,
        },
        {
          path:'/add-craft-items',
          element:<AddCraftItem></AddCraftItem>,
        },
      ]
    },
]);
  
export default router;