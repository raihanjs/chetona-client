import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa";

export default function CategorySlider() {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      });
  }, []);

  const catrgorySlider = useRef(null);
  const settings = {
    infinite: true,
    dots: false,
    arrows: false,
    centerMode: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    centerPadding: "20",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="bg-white py-12">
      <div className="container">
        <div className="flex items-center justify-between w-10/12 mx-auto sm:w-full">
          <div className="mx-auto w-11/12">
            <Slider
              ref={catrgorySlider}
              {...settings}
              className="home-category-slider"
            >
              {categories.map((category) => (
                <button
                  key={category._id}
                  className="text-lg md:text-xl lg:text-2xl text-[#000000] max-w-[155px] px-5 py-2 my-5 bg-white rounded-md shadow-md border transition-all hover:border-[#40A4DC] hover:-translate-y-1 hover:shadow-xl"
                >
                  {category.name}
                </button>
              ))}
            </Slider>
          </div>
          <div className="w-1/12 flex justify-end">
            <button
              onClick={() => catrgorySlider.current.slickNext()}
              className="text-lg md:text-xl lg:text-2xl text-[#717C7F] my-2 px-3 py-3 bg-white rounded-md shadow-md hover:text-[#40A4DC]"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
