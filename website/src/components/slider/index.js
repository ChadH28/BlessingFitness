"use client";
import Image from "next/image";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute z-10 w-2 h-16 right-0 top-1/2 translate-y-1/2 cursor-pointer bg-red-700"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute z-10 w-2 h-16 top-1/2 translate-y-1/2 cursor-pointer bg-red-700"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function ClientSlider({ list, images }) {
  var settings = {
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: images ? 2500 : 750,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: images && <SampleNextArrow />,
    prevArrow: images && <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} className="py-14 mx-auto bg-slate-50">
      {list.map((activity, index) => (
        <>
          {images ? (
            <div key={index} className="h-auto px-6">
              <div className="h-[350px] relative">
                <Image
                  style={{ objectFit: " cover" }}
                  fill
                  src={activity.image}
                  alt={"activity."}
                />
              </div>
            </div>
          ) : (
            <div key={index}>
              <p className="uppercase text-center mx-auto text-[grey] font-extrabold text-2xl relative">
                {activity.text}
              </p>
            </div>
          )}
        </>
      ))}
    </Slider>
  );
}
