// components/Homepage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Homepage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get("BASE_URL/api/projects");
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <body>
        <header
          id="header"
          class="fixed-top d-flex align-items-center shadow-sm"
        >
          <div class="container d-flex align-items-center">
            <div class="logo me-auto">
              <h4>
                <a href="index.html">
                  {" "}
                  <span style={{ color: "#444444" }}>EduTech</span> Africa
                </a>
              </h4>
            </div>

            <nav id="navbar" class="navbar order-last order-lg-0">
              <ul>
                <li>
                  <a class="nav-link scrollto active" href="#hero">
                    Home
                  </a>
                </li>
                <li>
                  <a class="nav-link scrollto" href="#services">
                    About
                  </a>
                </li>
                <li>
                  <a class="nav-link scrollto" href="#services">
                    Explore
                  </a>
                </li>
                <li>
                  <a class=" scrollto common-btn " href="#portfolio">
                    Log In
                  </a>
                </li>
                <li class="dropdown">
                  <a href="#">
                    <span>
                      <i
                        class="bx bxs-user"
                        style={{ "font-size": "larger" }}
                      ></i>
                    </span>
                  </a>
                  <ul>
                    <li>
                      <a class="nav-link scrollto" href="#about">
                        me
                      </a>
                    </li>
                    <li>
                      <a class="nav-link scrollto" href="#team">
                        Team
                      </a>
                    </li>
                    <li>
                      <a class="nav-link scrollto" href="#testimonials">
                        Testimonials
                      </a>
                    </li>
                    <li class="dropdown">
                      <a href="#">
                        <span>Deep Drop Down</span>{" "}
                        <i class="bi bi-chevron-right"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Deep Drop Down 1</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 2</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 3</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 4</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 5</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>

            <div class="header-social-links d-flex align-items-center">
              <a href="#" class="twitter">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" class="instagram">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="linkedin">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </header>

        {/* ======= Hero Section =======  */}
        <section id="hero">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
                data-aos="fade-up"
              >
                <div>
                  <h1>
                    Let's collaborate, learn from each other, and build a better
                    future for <span style={{ color: "#009cea" }}>Africa.</span>
                  </h1>
                  <h5 class="lead py-3 lh-base">
                    Our goal is to create a space where students from across the
                    continent can come together, share ideas, and work on
                    innovative projects that have the potential to make a real
                    difference.
                  </h5>
                  <a href="#about" class="btn-get-started scrollto">
                    create A Project
                  </a>
                </div>
              </div>
              <div
                class="col-lg-6 order-1 order-lg-2 hero-img"
                width="500px"
                data-aos="fade-left"
              >
                <img src="assets/img/hero-img-4.png" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* ================== how to section =======================  */}

        <section class="how-to">
          <div class="  section bg-transparent mb-0 pb-0  snipcss-bpnGz">
            <div class="container bg-color-light border rounded-3 p-4 p-md-5">
              <div class="row justify-content-between align-items-center mb-4">
                <div class="col-lg-7 col-sm-7">
                  <div class="heading-block border-bottom-0 mb-3">
                    <h2>How Collaborating On Projects Works</h2>
                  </div>
                  <p class="text-muted mb-0">
                    Be part of a strong community of future African engineers
                    who are able to work effectively in teams, innovate and
                    solve complex problems together.
                  </p>
                </div>
                <div class="col-lg-3 col-sm-5 mt-4 mt-sm-0">
                  <div class="bg-white text-center px-5 py-3 border">
                    <div class="counter counter-large color fw-bold">
                      <span class="fw-bold fbox-text">
                        <span class="number">86 %</span>
                      </span>
                    </div>
                    <div class="line my-2"></div>
                    <h5 class="fw-normal mb-1">Project Completion Rate</h5>
                  </div>
                </div>
              </div>
              <div class="clear"></div>
              <div class="row justify-content-around">
                <div class="col-lg-3 col-md-4 mt-5">
                  <div class="feature-text">
                    <div class="fbox-text color">
                      {" "}
                      <span class="number">1.</span>{" "}
                      <span class="h5">Register.</span>
                    </div>
                  </div>
                  <hr />
                  <p>
                    Be creater of life changing enovations which impact
                    millions.
                  </p>
                </div>
                <div class="col-lg-3 col-md-4 mt-5">
                  <div class="feature-text">
                    <div class="fbox-text color">
                      {" "}
                      <span class="number">2.</span>{" "}
                      <span class="h5">Choose A Project.</span>
                    </div>
                  </div>
                  <hr />
                  <p>
                    According to your interests and niches choose a project
                    perfect for you.
                  </p>
                </div>
                <div class="col-lg-3 col-md-4 mt-5">
                  <div class="feature-text">
                    <div class="fbox-text color">
                      {" "}
                      <span class="number">3.</span>{" "}
                      <span class="h5">Collaborate.</span>
                    </div>
                  </div>
                  <hr />
                  <p>Engage, encourage and learn with your colleagues</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -======================== Explore===================  */}

        <section>
          <h3 class="text-center mb-3">
            Ready to Collaborate? Explore Projects{" "}
          </h3>
          <div class="container py-3">
            <a href="" style={{ color: "#444444" }}>
              <div class="card">
                <div class="row project">
                  <div class="col-md-4 bg-intro">
                    <img
                      src="./assets/img/team-bg.jpg"
                      style={{ "max-width": "450px" }}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="col-md-8 px-3">
                    <div class="card-block px-3">
                      <h4 class="card-title py-3">
                        <span style={{ color: "#009cea" }}>
                          Computer vision to detect vehicle plates
                        </span>
                      </h4>
                      <p class="card-text">
                        Not a certified diver and only have 1 day free? Our
                        Introduction Dive experience is what you need. The Intro
                        Dive programme is perfect for someone who enjoys
                        snorkelling and swimming and positive life changing
                        experiences!
                      </p>
                      <p class="card-text">
                        This programme does not provide you with a dive
                        certification but rather intends to provide you with a
                        less intense introduction to the sport and focus more on
                        experiencing the awesome world of diving...{" "}
                        <span style={{ color: "#009cea" }}>see more</span>
                      </p>
                      <p className="p-1">
                        Tags:
                        <span class="badge badge-secondary bg-secondary m-1">
                          Software Engineering
                        </span>
                        <span class="badge badge-secondary bg-secondary m-1">
                          Machine Learning
                        </span>
                        <span class="badge badge-secondary bg-secondary" m-1>
                          CV
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="container py-3">
            <div class="card">
              <div class="row ">
                <div class="col-md-4 bg-scuba"></div>
                <div class="col-md-8 px-3">
                  <div class="card-block px-3">
                    <h4 class="card-title py-3">
                      PADI SCUBA DIVER COURSE (2 DAYS, 2 DIVES)
                    </h4>
                    <p class="card-text">
                      Not a certified diver and only have 1 day free? Our
                      Introduction Dive experience is what you need. The Intro
                      Dive programme is perfect for someone who enjoys
                      snorkelling and swimming and positive life changing
                      experiences!
                    </p>
                    <p class="card-text">
                      This programme does not provide you with a dive
                      certification but rather intends to provide you with a
                      less intense introduction to the sport and focus more on
                      experiencing the awesome world of diving.
                    </p>
                    <p>Course Fee Per Person IDR 4,180,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container py-3">
            <div class="card">
              <div class="row ">
                <div class="col-md-4 bg-openwater"></div>
                <div class="col-md-8 px-3">
                  <div class="card-block px-3">
                    <h4 class="card-title py-3">
                      PADI OPEN WATER DIVER COURSE{" "}
                    </h4>
                    <p class="card-text">
                      If you are already comfortable in water and have a few
                      days to spare, then our PADI Open Water Diver course is
                      just for you. This is a comprehensive course designed to
                      give you the knowledge and skills to dive safely all over
                      the world.
                    </p>
                    <p class="card-text">
                      The course is divided into theory and practical sessions.
                      These 2 main components are outlined below.
                    </p>
                    <p>IDR 5,280,000 Dive at pool and Sanur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container py-3">
            <div class="card">
              <div class="row ">
                <div class="col-md-4 bg-elearning"></div>
                <div class="col-md-8 px-3">
                  <div class="card-block px-3">
                    <h4 class="card-title py-3">
                      PADI SCUBA DIVER COURSE (2 DAYS, 2 DIVES)
                    </h4>
                    <p class="card-text">
                      Not a certified diver and only have 1 day free? Our
                      Introduction Dive experience is what you need. The Intro
                      Dive programme is perfect for someone who enjoys
                      snorkelling and swimming and positive life changing
                      experiences!
                    </p>
                    <p class="card-text">
                      This programme does not provide you with a dive
                      certification but rather intends to provide you with a
                      less intense introduction to the sport and focus more on
                      experiencing the awesome world of diving.
                    </p>
                    <p>Course Fee Per Person IDR 4,730,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= Footer ======================  */}
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
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">About us</a>
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
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">Explore</a>
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

        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        {/* <script src="assets/js/main.js"></script>  */}
      </body>
    </div>
  );
};

export default Homepage;
