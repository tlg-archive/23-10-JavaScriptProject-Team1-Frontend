import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Particles from "../components/Particles";
import { Link } from "react-router-dom";
import doomguy from "../assets/images/doomguy-bg.webp";
import okage from "../assets/images/okage-bg.webp";
import supermariogalaxy from "../assets/images/supermariogalaxy-bg.webp";
import Auth from "../utils/authUtil";

 

function Home() {
  const [init, setInit] = useState(false);
  const userId = Auth.getUserId();
  const isLoggedIn = Auth.isLoggedIn();

  return (
    <div className="homepage-container">
      <Navbar />
      <div className="d-flex p-2 justify-content-evenly align-items-center flex-wrap">
        <div className="jumbotron mt-1 custom-jumbotron">
          {isLoggedIn ? <div>How are you </div> : <div></div>}
          <h1 className="display-4">All about us!</h1>
          <p className="lead">We connect People</p>
          <hr className="my-4" />
          <p>Come along and find like-minded gamers.</p>
          <p className="lead">
            <Link to="/signup" className="btn btn-warning">
              Sign-up
            </Link>
          </p>
        </div>

        <div>
          <h2>Why you should join</h2>
          <Carousel className="carousel-container" interval={3000}>
            <Carousel.Item className="h-100 w-100">
              <img
                className="homepage-carousel-image border border-4 border-warning rounded"
                src={doomguy}
                alt="DoomDude"
              />
              <Carousel.Caption className="homepage-carousel-caption border border-warning rounded">
                <p>Create a profile and suggest game that you love!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="h-100 w-100">
              <img
                src={okage}
                className="homepage-carousel-image border border-4 border-warning rounded"
                alt="Okage"
              />
              <Carousel.Caption className="homepage-carousel-caption border border-warning rounded">
                <p>Get suggestions from others on games to play</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="h-100 w-100">
              <img
                src={supermariogalaxy}
                className="homepage-carousel-image border border-4 border-warning rounded"
                alt="Super Mario Galaxy"
              />
              <Carousel.Caption className="homepage-carousel-caption border border-warning rounded">
                <p>All based on your interactions!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;