import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';

const Comments = () => {
  const settingsLg = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const settingsMd = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const settingsSm = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const data = [
    {
      id: 1,
      photo: "https://i.postimg.cc/15ZtKW9y/portrait-man-laughing.jpg",
      name: "Ben Tenision",
      comment:
        "At Craft Canvas, I found a nurturing environment where my artistic journey feels valued and supported.",
    },
    {
      id: 2,
      photo:
        "https://i.postimg.cc/DzpgHWg7/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg",
      name: "Liam Wilson",
      comment:
        "The supportive community have fueled my creativity and helped me flourish in ways I never imagined.",
    },
    {
      id: 3,
      photo:
        "https://i.postimg.cc/ncK1ZSkR/leio-mclaren-L2d-Tmh-Qzx4-Q-unsplash.jpg",
      name: "Ava Thompson",
      comment:
        "At Craft Canvas, I found a nurturing environment where my artistic journey feels valued and supported.",
    },
    {
      id: 4,
      photo:
        "https://i.postimg.cc/4N5JQsL1/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg",
      name: "Noah Clark",
      comment:
        "The supportive community have fueled my creativity and helped me flourish in ways I never imagined.",
    },
    {
      id: 5,
      photo: "https://i.postimg.cc/15ZtKW9y/portrait-man-laughing.jpg",
      comment:
        "At Craft Canvas, I found a nurturing environment where my artistic journey feels valued and supported.",
    },
    {
      id: 6,
      photo:
        "https://i.postimg.cc/JhBVvLqv/close-up-portrait-man-looking-camera-outdoors.jpg",
      name: "James Garcia",
      comment:
        "The supportive community have fueled my creativity and helped me flourish in ways I never imagined.",
    },
  ];

  return (
    <>
      <div className=" rounded-xl">
        <div className="hidden lg:block">
          <h1 className="text-3xl md:text-4xl text-center font-bold mt-10 mb-12 bg-gray-200 rounded-2xl shadow-xl py-8 animate__animated animate__zoomIn">
            Our Customers reviews
          </h1>
          <Slider {...settingsLg}>
            {data.map((d) => (
              <div key={d.id} className="mb-7">
                <div className="px-4 ">
                  <div className="card bg-base-100 shadow-xl border rounded-xl">
                    <figure className="bg-[#C0D6E8] py-5">
                      <img
                        src={d.photo}
                        alt={d.name}
                        className="w-36 rounded-full"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{d.name}</h2>
                      <p>{d.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="hidden md:block lg:hidden">
          <h1 className="text-center text-3xl font-bold mt-10 mb-5">
            Our Customers reviews
          </h1>
          <Slider {...settingsMd}>
            {data.map((d) => (
              <div key={d.id} className="mb-7">
                <div className="px-4 ">
                  <div className="card  bg-base-100 shadow-xl border rounded-xl">
                    <figure className="bg-[#C0D6E8] py-5">
                      <img
                        src={d.photo}
                        alt={d.name}
                        className="w-36 rounded-full"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{d.name}</h2>
                      <p>{d.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex flex-col items-center justify-center md:hidden lg:hidden ">
          <h1 className="text-3xl md:text-4xl text-center font-bold mt-10 mb-6 bg-gray-200 rounded-2xl shadow-xl py-8 animate__animated animate__zoomIn">
            Our Customers reviews
          </h1>

          <Slider {...settingsSm} className=" w-[90%]">
            {data.map((d) => (
              <div key={d.id} className="mb-7">
                <div className="px-4 ">
                  <div className="card bg-base-100 shadow-xl border rounded-xl">
                    <figure className="bg-[#C0D6E8] py-5">
                      <img
                        src={d.photo}
                        alt={d.name}
                        className="w-36 rounded-full"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{d.name}</h2>
                      <p>{d.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div />
      </div>
    </>
  );
};

export default Comments;