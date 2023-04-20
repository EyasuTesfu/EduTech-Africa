import projectImg from "../assets/img/cardetection.jpg";
export default function ProjectDetail() {
  return (
    <main id="main">
      <section id="breadcrumbs" class="breadcrumbs mt-5">
        <div class="container">
          <h2> Vehicle plate detaction using computer vission</h2>
        </div>
      </section>

      <section id="portfolio-details" class="portfolio-details ">
        <div class="container border p-2 rounded-3">
          <div class="row gy-4">
            <div class="col-lg-8">
              <div class="portfolio-details-slider ">
                <div class=" align-items-center">
                  <div class="">
                    <img src={projectImg} alt="" />
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, distinctio. Nostrum quae, deleniti eligendi suscipit
                nobis quia officia facere dolore debitis aperiam itaque illum
                voluptas, enim assumenda recusandae quasi animi? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Facilis inventore
                accusamus, quia enim repudiandae doloribus sunt. Dolorum
                officiis vel corrupti ipsam expedita minima. Aliquid, non.
                Quaerat neque provident illum voluptatibus.
                <p className="my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique nostrum, distinctio sit aspernatur ea placeat sunt
                  nobis porro provident ullam architecto ducimus! Facilis
                  nesciunt laudantium a, obcaecati fuga eius consectetur!
                </p>
              </p>
            </div>

            <div class="col-lg-4">
              <div class="portfolio-info shadow-none">
                <h3> Tags: </h3>
                <p className="p-1">
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
                <ul>
                  <li>
                    <strong>Category</strong>: Engineering
                  </li>
                  <li>
                    <strong>Creator</strong>: Abebe
                  </li>
                  <li>
                    <strong>Project date</strong>: 20 april, 2023
                  </li>
                  <li>
                    <strong>Github url</strong>:{" "}
                    <a href="#">www.github.com/project</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
