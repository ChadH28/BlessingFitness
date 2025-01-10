export default function Footer() {
  return (
    <footer className="container">
      <hr />
      <div className="row footer-inner-container">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="copyright">
            <p>
              © 2025 - All rights reserved - Totalblessingfitness.
              <a
                style={{ textDecoration: "underline" }}
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="social-network">
            <a href="https://twitter.com/total_blessing" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/total.blessing/?hl=en"
              target="_blank"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/muteroblessing?mibextid=ZbWKwL"
              target="_blank"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://wa.link/2fyjg5" target="_blank">
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
