import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Contexts/AuthProvuder';
import ArtCraftItems from './Components/Art&CraftItems/ArtCraftItems';
import MyList from './Components/MyList/MyList';
import AddCraftItem from './Components/AddCraftItem/AddCraftItem';



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
        path:'/art-&-craft-items',
        element:<ArtCraftItems></ArtCraftItems>,
      },
      {
        path:'/add-craft-items',
        element:<AddCraftItem></AddCraftItem>,
      },
      {
        path: '/my-list',
        element: <MyList></MyList>
      },
      {
        path:'/sign-in',
        element:<SignIn></SignIn>
      },
      {
        path:'/sign-up',
        element:<SignUp></SignUp>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
</AuthProvider>
)
