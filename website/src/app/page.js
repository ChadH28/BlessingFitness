"use client";
import Hero from "@/components/hero";
import InfoCard from "@/components/info-card";
import { slides } from "@/data/pageData";
import Slider from "react-slick";

const activities = [
  { text: "Hiking" },
  { text: "High Intensity Training" },
  { text: "Sandboarding" },
  { text: "Full body conditioning" },
  { text: "BOXING" },
  { text: "Township Tours" },
  { text: "STRENGTH TRAINING" },
  { text: "Bungee Jumping" },
  { text: "Kirstenbosch Gardens" },
  { text: "Box Fit Group Classes" },
  { text: "Junior Boxing" },
  { text: "LADIES BOXERCISE" },
];

export default function Home() {
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
    autoplaySpeed: 750,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <main>
      <Hero title={"WHERE FITNESS MEETS ADVENTURE"} slider={slides} />

      <InfoCard
        title={"Meet the team behind the adventure"}
        alt
        content={"Discover Our Passion for Fitness and Exploration"}
        buttonlink={"/about"}
        buttonlabel={"Get to know our journey"}
        image={"/images/rem-bg/about-removebg-preview.png"}
      />

      <InfoCard
        title={"Find Exciting Journeys and Activities \n Cape Town awaits you"}
        content={`From the Stellenbosch vineyards, Hout Bays harbor to
                      the Camps Bays iconic beach, all while taking in
                      Table Mountains breathtaking views. Its a
                      journey through South African culture, nature, and history
                      in one.`}
        buttonlink={"/adventures"}
        buttonlabel={"Explore More"}
        image={"/images/adventureHome.jpeg"}
      />

      <InfoCard
        title={"Start Your Fitness Adventure"}
        alt
        content={"Book Your Next Session Today"}
        buttonlink={"/booking"}
        buttonlabel={"Book Now"}
        image={"/images/rem-bg/hom-resize-removebg-preview.png"}
      />

      <Slider {...settings} className="py-14 mx-auto bg-slate-50">
        {activities.map((activity, index) => (
          <div key={index}>
            <p className="uppercase text-center mx-auto text-[grey] font-extrabold text-2xl relative">
              {activity.text}
            </p>
          </div>
        ))}
      </Slider>

      <InfoCard
        title={"Unleash Your Potential with Our Programs"}
        content={`From Monday to Saturday, we have classes you can join in
                      your desired day and time that better suits you. From
                      boxing to cardio and any fitness needs you want
                      exclusively, let your personal coach guide you through it.`}
        buttonlink={"/fitness"}
        buttonlabel={"Get Fit"}
        image={"/images/Fitness/Fitness05.jpeg"}
      />

      <InfoCard
        title={"Join our online boxercise classes!"}
        content={`Join our Cape Town-based online boxercise classes for a
              high-energy workout combining boxing techniques and fitness
              training. Each session includes a warm-up, boxing drills,
              bodyweight exercises, and a cool-down for recovery. Suitable for
              all fitness levels, our virtual classes on Zoom require no special
              equipment—train from home and get fit with us!`}
        video={"/video/WhatsApp Video 2025-03-11 at 17.23.45.mp4"}
        buttonlink={
          "https://wa.me/27787589451?text=Online%20boxercise%20class%20enquiry"
        }
        buttonlabel={"Enquire here via whatsapp"}
        external
        alt
      />
    </main>
  );
}
