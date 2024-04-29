
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import AddCraftItem from "../Components/AddCraftItem/AddCraftItem";
import AllArtAndCraftItems from "../Components/AllArtAndCraftItems/AllArtAndCraftItems";
import MyList from "../Components/MyList/MyList";
import UpdateCraftItem from "../Components/UpdateCraftItem/UpdateCraftItem";


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
        {
          path: "/all-art-and-craft-items",
          element: <AllArtAndCraftItems></AllArtAndCraftItems>,
        },
        {
          path: "/my-list",
          element: <MyList></MyList>,
          loader: ()=>fetch('http://localhost:5000/crafts'),
        },
        {
          path: "/update-craft/:id",
          element: <UpdateCraftItem></UpdateCraftItem>,
          loader: ({params})=>fetch(`http://localhost:5000/crafts/${params.id}`),
        },
      ]
    },
]);
  
export default router;