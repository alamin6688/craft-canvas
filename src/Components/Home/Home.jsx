import About from "../About/About";
import Comments from "../Comments/Comments";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Slider></Slider>
            <Comments></Comments>
            <About></About>
        </div>
    );
};

export default Home;