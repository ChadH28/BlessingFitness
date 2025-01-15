import Hero from "@/components/hero";
import InfoCard from "@/components/info-card";

export default function Home() {
  return (
    <div>
      <main
      // className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
      >
        <Hero title={"WHERE FITNESS MEETS ADVENTURE"} image={""} slider />

        <InfoCard
          title={"Meet the team behind the adventure"}
          alt
          content={"Discover Our Passion for Fitness and Exploration"}
          buttonlink={"/about"}
          buttonlabel={"Get to know our journey"}
          image={"/images/rem-bg/about-removebg-preview.png"}
        />

        <InfoCard
          title={
            "Find Exciting Journeys and Activities \n Cape Town awaits you"
          }
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

        <section id="portfolio-area" className="sections">
          <div className="container">
            {/* <div className="logos">
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
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}
