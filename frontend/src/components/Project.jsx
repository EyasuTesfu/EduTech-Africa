import { Link } from "react-router-dom";
import teamPhotot from "../assets/img/team-bg.jpg";
export default function Project() {
  return (
    <div class="container py-3">
      <Link to="/project" href="" style={{ color: "#444444" }}>
        <div class="card">
          <div class="row project">
            <div class="col-md-4 bg-intro">
              <img
                src={teamPhotot}
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
                  Introduction Dive experience is what you need. The Intro Dive
                  programme is perfect for someone who enjoys snorkelling and
                  swimming and positive life changing experiences!
                </p>
                <p class="card-text">
                  This programme does not provide you with a dive certification
                  but rather intends to provide you with a less intense
                  introduction to the sport and focus more on experiencing the
                  awesome world of diving...{" "}
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
      </Link>
    </div>
  );
}
