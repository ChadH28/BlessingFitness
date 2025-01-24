import InfoCard from "@/components/info-card";
import SubHero from "@/components/sub-hero";

export default function About() {
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
        content={`Total Blessing Fitness & Tour Travel is a Cape Town based company that specializes in providing fitness and tour travel services. We offer a
          wide range of services, from personal training and group fitness
          classes to guided tours and travel packages. Our team of experienced
          professionals is dedicated to helping you reach your fitness and
          travel goals. We strive to provide the best possible experience for
          our clients, ensuring that they have a safe and enjoyable journey. We
          believe in creating lasting memories and providing an unforgettable
          experience. Our goal is to make sure that you have the best possible
          experience when you travel with us.`}
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
      />

      <InfoCard
        title={"JOIN THE FITNESS TRIBE"}
        content={
          "Join the ultimate workout experience with Boxfit, designed to challenge your body and mind. Our high-intensity classes incorporate cardio, strength, and boxing drills, all led by a supportive and empowering community. Say goodbye to boring workouts and hello to lasting results."
        }
        image={"/images/adventures/tablemountain.jpg"}
        buttonlabel={"Sign up now and join the tribe"}
        buttonlink={"/booking"}
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
      />

      <div className="fitness-container">
        <div className="gallery">
          <div className="adventure-image">
            <img
              src="assets/images/Fitness/RESIZED/01Fitness.jpg"
              alt="1-on-1 Boxing Training Cape Town"
            />
          </div>
          <div className="adventure-image">
            <img
              src="assets/images/Fitness/RESIZED/02Fitness.jpg"
              alt="Couple Boxing Training Cape Town"
            />
          </div>
          <div className="adventure-image">
            <img
              src="assets/images/Fitness/03Fitness.jpeg"
              alt="Group Cardio Sessions Cape Town"
            />
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="cards-container">
              <div className="item cta-label">
                <div className="about-us-sect col-md-6 col-sm-12 col-xs-12">
                  <h2>
                    Seek an <span style={{ color: "red" }}>adventure</span> with
                    us
                  </h2>
                </div>
                <div className="item-content col-md-6 col-sm-12 col-xs-12">
                  <div className="left_align">
                    <a className="about-button" href="Adventures.html">
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fitness-container-section">
        <div className="gallery">
          <div className="adventure-image">
            <img
              src="assets/images/adventures/IMG_0304.jpeg"
              alt="Cape Town Amazon Tours"
            />
          </div>
          <div className="adventure-image">
            <img
              src="assets/images/adventures/IMG_0306.jpeg"
              alt="Amazon Lunch in Cape Town"
            />
          </div>
          <div className="adventure-image">
            <img
              src="assets/images/adventures/IMG_0307.jpeg"
              alt="Cape Tonn Hiking"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
