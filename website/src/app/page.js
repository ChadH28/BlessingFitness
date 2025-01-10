import Navigation from "@/components/navigations";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navigation />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="slideshow-box">
          <div className="slideshow-container">
            <div className="mySlides fade">
              <img
                src="assets/images/Home-image.jpeg"
                style={{ width: "100%" }}
                alt="Join The Fitness Tribe"
              />
            </div>
            <div className="mySlides fade">
              <img
                src="assets/images/adventureHome.jpeg"
                style={{ width: "100%" }}
                alt="WHERE FITNESS MEETS ADVENTUR"
              />
            </div>
            <div className="mySlides fade">
              <img
                src="assets/images/home33.png"
                style={{ width: "100%" }}
                alt="BEST FITNESS CLASSES IN CAPE TOWN"
              />
            </div>
            <h1 className="text">WHERE FITNESS MEETS ADVENTURE</h1>
          </div>
        </div>

        <section id="portfolio-area" className="sections">
          <div className="container">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="cards-container">
                <div className="item cta-label">
                  <div className="about-us-sect col-md-6 col-sm-12 col-xs-12">
                    <h2>
                      <span style={{ color: "red" }}>Meet the Team</span> Behind
                      the Adventure
                    </h2>
                    <h5>Discover Our Passion for Fitness and Exploration</h5>
                  </div>
                  <div className="item-content col-md-6 col-sm-12 col-xs-12">
                    <div className="left_align">
                      <a href="About.html" className="about-button">
                        Explore Our Journey
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="cards-container">
                <div className="item">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="portfolio">
                      <img
                        src="assets/images/travel-home.png"
                        alt="SEE CAPE TOWN'S MOST BEAUTIFUL TOURIST DESTINATIONS"
                      />
                    </div>
                  </div>
                  <div className="item-content col-md-6 col-sm-12 col-xs-12">
                    <h5>
                      <span style={{ color: "red" }}>Find Exciting</span>{" "}
                      Journeys and Activities
                      <br />
                      Cape Town awaits you
                    </h5>
                    <p>
                      From the Stellenbosch vineyards, Hout Bay&apos;s harbor to
                      the Camps Bay&apos;s iconic beach, all while taking in
                      Table Mountain&apos;s breathtaking views. It&apos;s a
                      journey through South African culture, nature, and history
                      in one.
                    </p>
                    <div className="left_align">
                      <a href="Adventures.html" className="about-button">
                        Explore More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="logos">
              <div className="paragraph-slide">
                <p>Hiking</p>
                <span>•</span>
                <p>High Intensity Training</p>
                <span>•</span>
                <p>Sandboarding</p>
                <span>•</span>
                <p>Full body conditioning</p>
                <span>•</span>
                <p>BOXING</p>
                <span>•</span>
                <p>Township Tours</p>
                <span>•</span>
                <p>STRENGTH TRAINING</p>
                <span>•</span>
                <p>Bungee Jumping</p>
                <span>•</span>
                <p>LADIES ONLY BOXERCISE & RESISTANCE TRAINING</p>
                <span>•</span>
                <p>Kirstenbosch Gardens</p>
                <span>•</span>
                <p>Box Fit Group Classes</p>
                <span>•</span>
                <p>Junior Boxing</p>
              </div>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="cards-container">
                <div className="item cta-label">
                  <div className="about-us-sect col-md-6 col-sm-12 col-xs-12">
                    <h2>
                      <span style={{ color: "red" }}>Start</span> Your Fitness
                      Adventure
                    </h2>
                    <h5>Book Your Next Session Today</h5>
                  </div>
                  <div className="item-content col-md-6 col-sm-12 col-xs-12">
                    <div className="left_align">
                      <a href="booking.html" className="about-button">
                        Book Now{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="cards-container">
                <div className="item">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="portfolio">
                      <img
                        src="assets/images/workout-home.jpeg"
                        alt="BOXING CLASSES IN CAPE TOWN"
                      />
                    </div>
                  </div>
                  <div className="item-content col-md-6 col-sm-12 col-xs-12">
                    <h5>
                      <span style={{ color: "red" }}>Unleash Your</span>{" "}
                      Potential with Our Programs
                    </h5>
                    <p>
                      From Monday to Saturday, we have classes you can join in
                      your desired day and time that better suits you. From
                      boxing to cardio and any fitness needs you want
                      exclusively, let your personal coach guide you through it.
                    </p>
                    <div className="left_align">
                      <a href="Fitness.html" className="about-button">
                        Get Fit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
