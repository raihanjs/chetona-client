import React, { useRef } from "react";
import SectionTitle from "../../Components/SectionTitle";
import BookCard from "../../Components/BookCard";

import useBooks from "../../hooks/useBooks";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { LuArrowLeftSquare, LuArrowRightSquare } from "react-icons/lu";

export default function AllBooksSlider() {
  const allBooksSliderBtns = useRef(null);
  const settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const [books, isLoading] = useBooks();

  return (
    <section className="my-12 ">
      <div className="container">
        <SectionTitle title="সকল বই" text="ঘুরে দেখুন" link="" />

        <div className="relative my-5">
          <div className="mx-auto">
            <Slider {...settings} ref={allBooksSliderBtns}>
              {books.map((book) => (
                <BookCard key={book._id} book={book} />
              ))}
            </Slider>
          </div>
          {/* Slider Buttons */}
          <div>
            <button
              className="absolute top-1/3 left-0"
              onClick={() => allBooksSliderBtns.current.slickPrev()}
            >
              <LuArrowLeftSquare className="text-4xl text-primary bg-white rounded-md" />
            </button>
            <button
              className="absolute top-1/3 right-0"
              onClick={() => allBooksSliderBtns.current.slickNext()}
            >
              <LuArrowRightSquare className="text-4xl text-primary bg-white rounded-md" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
