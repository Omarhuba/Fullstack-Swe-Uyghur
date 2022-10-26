import React from "react";
import about_img from "../assets/images/middle1.png";
import "../Modules/views/About.scss";
import {Footer} from '../components/layout/Footer'
import {Button} from '../components/UI/Button'

export const About = () => {
  return (
    <div>
      <div className="wrapper_about">
        <div className="about_top">
          <section className="about_info">
            <h1>Swe-Uyghur .FC Club</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              distinctio facere illum iste maxime vel quasi porro cumque ad
              tempora, sed aut accusamus rem doloremque, ullam animi quis. Quos
              doloribus non, eligendi quas nemo sed quidem at! Earum ipsa
              aliquid dolorum quis dolores quam culpa rerum accusantium non.
              Dolorem repudiandae aut provident repellendus, ipsa atque enim
              magnam, hic pariatur expedita rem. Cupiditate libero saepe facere
              ut facilis, accusamus explicabo cumque delectus cum harum mollitia
              obcaecati voluptatem exercitationem quia quos provident totam
              eaque necessitatibus molestiae. Omnis ullam illo eius cum alias
              dicta reiciendis! Molestias dolorum adipisci impedit natus
              deleniti rem delectus.
            </p>
            <Button>READ MORE</Button>
          </section>
          <section className="about_img">
            <img src={about_img} alt="images" />
          </section>
        </div>
        <div className="about_middle">
          <div class="card-container">
            <div class="top-container">
              <div class="top1">
                <div class="img1"></div>
                <h3>Children</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, mollitia ipsum nemo laudantium ratione adipisci
                  veniam. Harum deleniti iure eum.
                </p>
              </div>
              <div class="top2">
                <div class="img2"></div>
                <h3>Just right</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, mollitia ipsum nemo laudantium ratione adipisci
                  veniam. Harum deleniti iure eum.
                </p>
              </div>
              <div class="top3">
                <div class="img3"></div>
                <h3>Old fart</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, mollitia ipsum nemo laudantium ratione adipisci
                  veniam. Harum deleniti iure eum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about_buttom">
          <h3>ABOUT US</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            corrupti quo quae distinctio minus consequuntur. Quis, temporibus
            necessitatibus voluptas quas repudiandae maiores quisquam officia,
            obcaecati beatae tempora earum quam. Qui in consequuntur et quisquam
            accusantium beatae numquam natus autem placeat pariatur quas
            adipisci molestias ipsum, architecto asperiores! Mollitia, ducimus
            necessitatibus?
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
