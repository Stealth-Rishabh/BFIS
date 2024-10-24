/* eslint-disable react/prop-types */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css"; // Make sure to import any additional Tailwind or custom styles

const TiltedSlider = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false, // Disable center mode for single slide
        },
      },
    ],
  };

  const [activeSlide, setActiveSlide] = React.useState(0);

  const slides = [
    {
      id: 1,
      title: "Machu Picchu → Peru",
      description: "Adventure is never far away",
      image: "https://www.bfis.in/info/admissions/images/gallery/2.jpg", // Replace with your image URLs
    },
    {
      id: 2,
      title: "Grand Canyon → USA",
      description: "Nature at its best",
      image: "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
    },
    {
      id: 3,
      title: "Alps → Switzerland",
      description: "Breathtaking views",
      image: "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
    },
    {
      id: 4,
      title: "Santorini → Greece",
      description: "Island beauty",
      image: "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
    },
    {
      id: 5,
      title: "Bali → Indonesia",
      description: "Tropical paradise",
      image: "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
    },
    {
      id: 6,
      title: "Bali → Indonesia",
      description: "Tropical paradise",
      image: "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <Slider {...settings}>
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          const isPrev =
            index === (activeSlide - 1 + slides.length) % slides.length;
          const isNext = index === (activeSlide + 1) % slides.length;

          return (
            <div key={slide.id} className="p-4">
              <div
                className="relative transition-transform duration-500"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                  borderRadius: "20px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                  transformStyle: "preserve-3d",
                  transform: isActive
                    ? "scale(1) rotateY(0deg)"
                    : isPrev
                    ? "scale(0.75) rotateY(-25deg) translateX(-30px)"
                    : isNext
                    ? "scale(0.75) rotateY(25deg) translateX(30px)"
                    : "scale(0.5)",
                  opacity: isActive ? 1 : 0.7,
                }}
              >
                <div className="flex flex-col justify-end h-full p-6 text-white backdrop-brightness-50 rounded-lg">
                  <h2 className="text-xl font-bold">{slide.title}</h2>
                  <p className="text-sm">{slide.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

// Custom Next Arrow Component
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{ ...style, display: "block", right: "-30px", zIndex: "2" }}
      onClick={onClick}
    >
      →
    </div>
  );
};

// Custom Prev Arrow Component
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{ ...style, display: "block", left: "-30px", zIndex: "2" }}
      onClick={onClick}
    >
      ←
    </div>
  );
};

export default TiltedSlider;
