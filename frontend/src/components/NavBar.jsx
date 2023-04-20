import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

export default function NavBar() {
  return (
    <>
      <header id="header" class="fixed-top d-flex align-items-center shadow-sm">
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
                <Link class=" scrollto common-btn " to="/login">
                  Log In
                </Link>
              </li>
              {/* <li class="dropdown">
              <a href="#">
                <span>
                  <i class="bx bxs-user" style={{ "font-size": "larger" }}></i>
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
            </li> */}
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div class="header-social-links d-flex align-items-center"></div>
        </div>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
