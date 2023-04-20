import heroImg from "../assets/img/hero-img-4.png";
import Project from "../components/Project";
export default function LandingPage() {
  return (
    <>
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
              <img src={heroImg} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="how-to">
        <div class="  section bg-transparent mb-0 pb-0  snipcss-bpnGz">
          <div class="container bg-color-light border rounded-3 p-4 p-md-5">
            <div class="row justify-content-between align-items-center mb-4">
              <div class="col-lg-7 col-sm-7">
                <div class="heading-block border-bottom-0 mb-3">
                  <h2>How Collaborating On Projects Works</h2>
                </div>
                <p class="text-muted mb-0">
                  Be part of a strong community of future African engineers who
                  are able to work effectively in teams, innovate and solve
                  complex problems together.
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
                  Be creater of life changing enovations which impact millions.
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
        <Project />
        <Project />
        <Project />
      </section>{" "}
    </>
  );
}
