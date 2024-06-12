import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function Hero() {
  const carouselItem = [
    {
      _id: "893248AI93JD46",
      img: "https://chetona-client.web.app/static/media/banner.99d700ca7444ebd182be.jpg",
    },
    {
      _id: "893248AI93JD46",
      img: "https://chetona-client.web.app/static/media/banner.99d700ca7444ebd182be.jpg",
    },
    {
      _id: "893248AI93JD46",
      img: "https://chetona-client.web.app/static/media/banner.99d700ca7444ebd182be.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlide = (direction) => {
    if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    if (direction === "next" && currentIndex < carouselItem.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (direction === "prev" && currentIndex === 0) {
      setCurrentIndex(carouselItem.length - 1);
    }
    if (direction === "next" && currentIndex === carouselItem.length - 1) {
      setCurrentIndex(0);
    }
  };

  return (
    <section className="relative hero">
      <img src={carouselItem[currentIndex].img} className="w-full" alt="" />
      <div>
        <button className="absolute top-2/4 left-5">
          {/* Prev Button */}
          <MdKeyboardArrowLeft
            className="text-4xl text-white hover:text-primary"
            onClick={() => {
              handleSlide("prev");
            }}
          />
        </button>
        {/* Next Button */}
        <button className="absolute top-2/4 right-5">
          <MdKeyboardArrowRight
            className="text-4xl text-white hover:text-primary"
            onClick={() => {
              handleSlide("next");
            }}
          />
        </button>
      </div>
    </section>
  );
}
