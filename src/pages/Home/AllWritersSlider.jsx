import React, { useRef } from "react";
import SectionTitle from "../../Components/SectionTitle";
import WriterCard from "../../Components/WriterCard";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useWriters from "../../hooks/useWriters";

import { LuArrowLeftSquare, LuArrowRightSquare } from "react-icons/lu";

export default function AllWritersSlider() {
  const allWritersSliderBtns = useRef(null);
  const settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const [writers, isLoading] = useWriters();

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <SectionTitle title="সকল বই" text="ঘুরে দেখুন" link="" />

        <div className="relative my-5">
          <div className="mx-auto">
            <Slider {...settings} ref={allWritersSliderBtns}>
              {writers.map((writer) => (
                <WriterCard key={writer._id} writer={writer} margin="mx-auto" />
              ))}
            </Slider>
          </div>
          {/* Slider Buttons */}
          <div>
            <button
              className="absolute top-1/3 left-0"
              onClick={() => allWritersSliderBtns.current.slickPrev()}
            >
              <LuArrowLeftSquare className="text-4xl text-primary bg-white rounded-md" />
            </button>
            <button
              className="absolute top-1/3 right-0"
              onClick={() => allWritersSliderBtns.current.slickNext()}
            >
              <LuArrowRightSquare className="text-4xl text-primary bg-white rounded-md" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
