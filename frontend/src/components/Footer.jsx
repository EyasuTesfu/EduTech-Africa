export default function Footer() {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h3>EduTech Africa</h3>
                <p>
                  Addis Ababa <br />
                  Ethiopia
                  <br />
                  <br />
                  <strong>Phone:</strong> +251930995547
                  <br />
                  <strong>Email:</strong> info@edutech.com
                  <br />
                </p>
                <div class="social-links mt-3">
                  <a href="#" class="twitter">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#" class="facebook">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#" class="instagram">
                    <i class="bx bxl-instagram"></i>
                  </a>
                  <a href="#" class="google-plus">
                    <i class="bx bxl-skype"></i>
                  </a>
                  <a href="#" class="linkedin">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Search project</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <a href="#">Create project</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Other links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Explore</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i> <a href="#">Log In</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our Newsletter by providing your email</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
