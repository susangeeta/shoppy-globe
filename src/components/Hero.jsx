import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const heroArr = [
    {
      id: 1,
      image:
        "https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg",
    },
    {
      id: 2,
      image:
        "https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg",
    },
    {
      id: 3,
      image:
        "https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg",
    },
  ];
  return (
    <div className="w-[1500px] main-container ">
      <Slider {...settings} className="p-2">
        {heroArr.map((item, id) => (
          <div key={id} className="">
            <img
              src={item.image}
              className="h-full w-full rounded-md overflow-hidden object-cover "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
