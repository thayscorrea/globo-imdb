import React, { useState } from "react";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  const star = {
    size: 20,
    edit: false,
    count: 4
  };

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {items.map(({ movieID, name, year, time, sinopse, image, evaluation }, index) => (
          <a className="cursor-pointer" href={"/movie/" + movieID} key={index}>
            <div className="px-3 flex items-stretch" id={`movie-` + movieID}>
              <div className="border-2 border-white-500 hover:border-yellow-500 transition-all rounded-lg p-8 flex flex-col">
                <div className="h-16 flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                  <div className="flex order-2 xl:order-1">
                    <img
                      src={'http://localhost:8000/public/uploads/' + image}
                      height={50}
                      width={50}
                      alt="Icon People"
                    />
                    <div className="flex flex-col ml-5 text-left">
                      <p className="text-lg text-white-500 capitalize">
                        {name}
                      </p>
                      <p className="text-sm text-white-500 capitalize">
                        {year} - {time}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                    <p className="text-sm text-white-500">{evaluation}</p>
                    <span className="flex ml-4">
                      <ReactStars {...star} value={evaluation} />
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-left text-white-500">{sinopse}</p>
              </div>
            </div>
          </a>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-yellow-500 border hover:bg-yellow-500 hover:text-white-500 transition-all text-yellow-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-yellow-500 border hover:bg-yellow-500 hover:text-white-500 transition-all text-yellow-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
