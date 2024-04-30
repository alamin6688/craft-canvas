import { Helmet } from "react-helmet-async";
import About from "../About/About";
import ArtAndCraftCategories from "../ArtAndCraftCategories/ArtAndCraftCategories";
import Comments from "../Comments/Comments";
import CraftItems from "../CraftItems/CraftItems";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Craft Canvus | Home</title>
            </Helmet>
            <Slider></Slider>
            <ArtAndCraftCategories></ArtAndCraftCategories>
            <CraftItems></CraftItems>
            <Comments></Comments>
            <About></About>
        </div>
    );
};

export default Home;