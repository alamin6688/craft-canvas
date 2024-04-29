
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import AddCraftItem from "../Components/AddCraftItem/AddCraftItem";
import AddCattegotyItem from "../Components/AddCattegotyItem/AddCattegotyItem";
import AllArtAndCraftItems from "../Components/AllArtAndCraftItems/AllArtAndCraftItems";
import MyList from "../Components/MyList/MyList";
import UpdateCraftItem from "../Components/UpdateCraftItem/UpdateCraftItem";
import ArtAndCraftCategories from "../Components/ArtAndCraftCategories/ArtAndCraftCategories";
import LandscapePainting from '../Components/Categories/LandscapePainting'
import CartoonDrawing from '../Components/Categories/CartoonDrawing'
import CharcoalSkerching from '../Components/Categories/CharcoalSkerching'
import OilPainting from '../Components/Categories/OilPainting'
import PotraitDrawing from '../Components/Categories/PotraitDrawing'
import WaterColourPainting from '../Components/Categories/WaterColourPainting'
import Details from "../Components/Details/Details";
import PrivateRoute from "../Routes/PrivateRoute";


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
          element:<PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>,
        },
        {
          path:'/add-category-item',
          element:<PrivateRoute><AddCattegotyItem></AddCattegotyItem></PrivateRoute>,
        },
        {
          path: "/all-art-and-craft-items",
          element: <AllArtAndCraftItems></AllArtAndCraftItems>,
        },
        {
          path: "/my-list",
          element: <PrivateRoute><MyList></MyList></PrivateRoute>,
          loader: ()=>fetch('http://localhost:5000/crafts'),
        },
        {
          path: "/art-and-craft-categories",
          element: <ArtAndCraftCategories></ArtAndCraftCategories>,
        },
        {
          path: "/update-craft/:id",
          element: <UpdateCraftItem></UpdateCraftItem>,
          loader: ({params})=>fetch(`http://localhost:5000/crafts/${params.id}`),
        },
        {
          path:'/landscape-painting',
          element:<LandscapePainting></LandscapePainting>,
        },
        {
          path:'/portrait-drawing',
          element:<PotraitDrawing></PotraitDrawing>,
        },
        {
          path:'/watercolour-painting',
          element:<WaterColourPainting></WaterColourPainting>,
        },
        {
          path:'/oil-painting',
          element:<OilPainting></OilPainting>,
        },
        {
          path:'/charcoal-sketching',
          element:<CharcoalSkerching></CharcoalSkerching>,
        },
        {
          path:'/cartoon-drawing',
          element:<CartoonDrawing></CartoonDrawing>,
        },
        {
          path:'/crafts-details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader: ()=>fetch(`http://localhost:5000/crafts`),
        },
      ]
    },
]);
  
export default router;