"use client";
import InfoCard from "@/components/info-card";
import SubHero from "@/components/sub-hero";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const sliderImages = [
  {
    image: "/images/Fitness/RESIZED/01Fitness.jpg",
  },
  {
    image: "/images/adventures/IMG_0304.jpeg",
  },
  {
    image: "/images/Fitness/RESIZED/02Fitness.jpg",
  },
  {
    image: "/images/adventures/IMG_0307.jpeg",
  },
  {
    image: "/images/Fitness/03Fitness.jpeg",
  },
  {
    image: "/images/adventures/IMG_0306.jpeg",
  },
];

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

export default function About() {
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
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <main>
      <SubHero
        title={"Get Fit. Have Fun. Feel Great!"}
        subtitle={
          "Transform Your Health with Workouts You'll Love and Elevate Your Fitness!"
        }
        image={"/images/Fitness/Fitness04.jpeg"}
      />

      <InfoCard
        content={`Total Blessing Fitness & Tour Travel is a Cape Town based company that specializes in providing fitness and tour travel services. We offer a wide range of services, from personal training and group fitness classes to guided tours and travel packages. Our team of experienced professionals is dedicated to helping you reach your fitness and travel goals. We strive to provide the best possible experience for our clients, ensuring that they have a safe and enjoyable journey. We believe in creating lasting memories and providing an unforgettable experience. Our goal is to make sure that you have the best possible experience when you travel with us.`}
        image={"/images/rem-bg/biskop_steps-removebg-preview.png"}
        alt
      />

      <InfoCard
        title={"FITNESS"}
        content={
          "Our classes are professional and of the highest quality, providing the ideal environment for you to reach your fitness goals. So, dont be left out of Cape Town’s best local cultural, nature, dining and drinking hotspots."
        }
        image={"/images/Fitness/2Fitness.jpeg"}
        buttonlabel={"Get fit"}
        buttonlink={"/fitness"}
        background={"var(--secondary)"}
        textc={"#00000"}
      />

      <InfoCard
        title={"TRAVEL & TOURS"}
        content={
          "Our Scheduled Public Tours operate several days a week, offering you a variety of epic day trips"
        }
        image={"/images/adventures/tablemountain.jpg"}
        buttonlabel={"Explore more"}
        buttonlink={"/adventures"}
        alt
        background={"var(--primary)"}
        textc={"#fff"}
      />

      <InfoCard
        title={"JOIN THE FITNESS TRIBE"}
        content={
          "Join the ultimate workout experience with Boxfit, designed to challenge your body and mind. Our high-intensity classes incorporate cardio, strength, and boxing drills, all led by a supportive and empowering community. Say goodbye to boring workouts and hello to lasting results."
        }
        image={"/images/adventures/tablemountain.jpg"}
        buttonlabel={"Sign up now and join the tribe"}
        buttonlink={"/booking"}
        background={"var(--secondary)"}
        textc={"#00000"}
      />

      <InfoCard
        title={"Discover Fitness and Travel Adventures on Our YouTube Channel"}
        content={
          "Dive into a world of exhilarating fitness routines and breathtaking travel destinations with our exclusive YouTube channel. Whether youre looking to stay fit, explore new places, or simply find inspiration, our videos offer something for everyone. Join us as we take you on a behind the scenes look of the team and on a journey of health, adventure, and discovery."
        }
        image={"/images/Fitness/3Fitness.jpeg"}
        buttonlabel={"Subscribe"}
        buttonlink={"https://www.youtube.com/@total.blessing"}
        alt
        background={"var(--primary)"}
        textc={"#fff"}
      />

      <div className="adventure-section relative py-16 w-full bg-slate-50">
        <div className="item cta-label flex flex-col items-center justify-center gap-3 pb-10 w-full">
          <h2 className="max-[1024px]:text-2xl text-4xl font-bold text-center uppercase">
            Seek an <span style={{ color: "red" }}>adventure</span> with us
          </h2>
          <Link
            className="uppercase block bg-[red] hover:bg-red-500 text-xs text-white font-extrabold w-fit rounded-sm px-4 py-2"
            href="/Adventures"
          >
            Explore More
          </Link>
        </div>
        <Slider {...settings} className="relative">
          {sliderImages.map((activity, index) => (
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
          ))}
        </Slider>
      </div>
    </main>
  );
}
