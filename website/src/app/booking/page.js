import SubHero from "@/components/sub-hero";

export default function Booking() {
  return (
    <main>
      <SubHero
        title={"Reserve Your Fitness Journey"}
        image={"/images/BLACKANDWHITE.jpeg"}
        // <h5>Book Your Classes and Training Sessions Today</h5>
      />

      <div class="promotion-card-container">
        <div class="promotion-card">
          <h2>SPECIAL PROMOTION</h2>
          <p>
            Pay three months upfront and get three months of boxfit bootcamp by
            coach Blessing
          </p>
          <p>
            Use code <strong>TOTALBLESSING20</strong> for only R2700. (Pay R2700
            for 3 months)
          </p>
          <a
            class="about-button"
            href="https://calendly.com/mteroblessing/30min?month=2024-02"
            target="_blank"
          >
            Book Here
          </a>
        </div>
      </div>

      <div class="exercise_table">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Description</th>
              <th>Subscription</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 ON 1</td>
              <td>10 sessions</td>
              <td>R4,000</td>
            </tr>
            <tr>
              <td>3 ON 1</td>
              <td>10 sessions</td>
              <td>R7,000</td>
            </tr>
            <tr>
              <td>3 ON 1</td>
              <td>1 Hour</td>
              <td>R750</td>
            </tr>
            <tr>
              <td>2 ON 1</td>
              <td>10 sessions upfront</td>
              <td>R6,000</td>
            </tr>
            <tr>
              <td>2 ON 1</td>
              <td>1 Hour</td>
              <td>R650</td>
            </tr>
            <tr>
              <td>Private Session</td>
              <td>10 sessions</td>
              <td>R2,000</td>
            </tr>
            <tr>
              <td></td>
              <td>1 Hour</td>
              <td>R450</td>
            </tr>
            <tr>
              <td></td>
              <td>45 mins</td>
              <td>R350</td>
            </tr>
            <tr>
              <td></td>
              <td>30 mins</td>
              <td>R250</td>
            </tr>
            <tr>
              <td>Group Sessions</td>
              <td>Monthly</td>
              <td>R1,000 p/m</td>
            </tr>
            <tr>
              <td></td>
              <td>Student</td>
              <td>R850 p/m</td>
            </tr>
            <tr>
              <td></td>
              <td>Drop in</td>
              <td>R150</td>
            </tr>
            <tr>
              <td>Ladies only Saturday session</td>
              <td>Monthly</td>
              <td>R650 p/m</td>
            </tr>
            <tr>
              <td></td>
              <td>Drop in</td>
              <td>R200</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="schedule" class="anchor_adj">
        <div class="table-heading">
          <h2>TIME TABLE</h2>
          <h4>(Bootcamp classes time table)</h4>
          <h5>Note: Classes are to be held at The Ring Reloaded Boxing Gym</h5>
          <p>
            24h bookings are essential for group classes, limited space
            available
          </p>
        </div>
      </div>
      <div class="timetable-container">
        <div class="timetable">
          <img
            class="timetable-image"
            loading="lazy"
            src="assets/images/Fitness/03Fitness.jpeg"
            alt="Image 3"
          />
          <h2 class="related-articles-title">MONDAY</h2>
          <h5>HIIT</h5>
          (High-Intensity Interval Training
          <span>07:30 - 08:30am</span>
          <a
            class="about-button"
            href="https://calendly.com/mteroblessing/30min?month=2024-02"
            target="_blank"
          >
            Book
          </a>
        </div>
        <div class="timetable">
          <img
            class="timetable-image"
            loading="lazy"
            src="assets/images/Fitness/RESIZED/01Fitness.jpg"
            alt="Image 3"
          />
          <h2 class="related-articles-title">TUESDAY</h2>
          <h5>BOXING</h5>
          <span>07:30 - 08:30am</span>

          <a
            class="about-button"
            href="https://calendly.com/mteroblessing/boxing"
          >
            Book
          </a>
        </div>

        <div class="timetable">
          <img
            class="timetable-image"
            loading="lazy"
            src="assets/images/Fitness/2Fitness.jpeg"
            alt="Image 3"
          />
          <h2 class="related-articles-title">WEDNESDAY</h2>
          <h5>FULL BODY CONDITIONING</h5>
          <span>07:30 - 08:30am</span>
          <span>18:30 - 19:30pm</span>
          <a
            class="about-button"
            href="https://calendly.com/mteroblessing/30min?month=2024-02"
            target="_blank"
          >
            Book
          </a>
        </div>

        <div class="timetable">
          <img
            class="timetable-image"
            loading="lazy"
            src="assets/images/Fitness/Fitness03.jpeg"
            alt="Image 3"
          />
          <h2 class="related-articles-title">THURSDAY</h2>
          <h5>STRENGTH TRAINING</h5>
          <span>07:30am - 08:30am</span>
          <a
            class="about-button"
            href="https://calendly.com/mteroblessing/30min?month=2024-02"
            target="_blank"
          >
            Book
          </a>
        </div>

        <div class="timetable">
          <img
            class="timetable-image"
            loading="lazy"
            src="assets/images/Fitness/02Fitness.jpeg"
            alt="Image 3"
          />
          <h2 class="related-articles-title">FRIDAY</h2>
          <h5>BOXING</h5>
          <span>07:30 - 08:30am</span>
          <span>18:30 - 19:30pm</span>
          <a
            class="about-button"
            href="https://calendly.com/mteroblessing/30min?month=2024-02"
            target="_blank"
          >
            Book
          </a>
        </div>

        <div class="timetable">
          <img
            class="timetable-image"
            loading="lazy"
            src="assets/images/Fitness/Fitness16.jpeg"
            alt="Image 3"
          />
          <h2 class="related-articles-title">SATURDAY</h2>
          <h5>LADIES ONLY BOXERCISE & RESISTANCE TRAINING</h5>
          <span>8:00 - 09:00am</span>
          <span>13:00 - 14:00pm</span>
          <a
            class="about-button"
            href="https://calendly.com/mteroblessing/30min?month=2024-02"
            target="_blank"
          >
            Book
          </a>
        </div>
      </div>
    </main>
  );
}
