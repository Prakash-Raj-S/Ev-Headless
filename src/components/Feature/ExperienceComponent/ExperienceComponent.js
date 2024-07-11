import React from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';

const ExperienceComponent = (props) => {
  console.log(props);
  return (
    <section
      className="experience-section d-flex justify-content-center align-items-center flex-column"
      data-aos="fade-up"
    >
      <div className="head-wrapper d-flex flex-column">
        <div className="heading d-flex align-items-center justify-content-center">
          <h6 className="section-heading txt-orbitron-48-800-120 text-uppercase mb-0 text-center">
            Experience the
          </h6>
          <img src="../assets/images/experience/logo.png" />
        </div>
        <p className="txt-montserrat-20-400-140 mb-0 text-center">
          Tailor your thrill and create a connected experience that reflects your unique
          <br />
          identity with customized features and personalized options.
        </p>
      </div>
      <div className="videos-wrapper w-100">
        <div className="video-wrap active h-100 w-100 position-relative" id="power-video">
          <video
            controls
            className="background-video position-relative lazy-load h-100 w-100"
            preload="false"
            data-src="../assets/images/videos/hero-video.mp4"
          >
            <source type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-wrap h-100 w-100" id="speed-video">
          <video
            className="background-video position-relative lazy-load h-100 w-100"
            controls
            preload="false"
            data-src="../assets/images/videos/hero-video.mp4"
          >
            <source type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-wrap h-100 w-100" id="safety-video">
          <video
            className="background-video position-relative lazy-load h-100 w-100"
            controls
            preload="false"
            data-src="../assets/images/videos/hero-video.mp4"
          >
            <source type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-wrap h-100 w-100" id="comfort-video">
          <video
            className="background-video position-relative lazy-load h-100 w-100"
            controls
            preload="false"
            data-src="../assets/images/videos/hero-video.mp4"
          >
            <source type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="cards-wrapper d-flex">
        <div
          className="card-wrap active d-flex flex-column position-relative"
          id="power"
          onClick="selectCard('power')"
        >
          <h6 className="txt-montserrat-24-700-140 mb-0">Power</h6>
          <p className="txt-montserrat-16-400-140 mb-0">
            Crafted from scratch, <span>adopting an unwavering</span> stance of no compromise.
            Battery drives the bike giving you the utmost experience.
          </p>
          <div className="range position-absolute"></div>
        </div>
        <div
          className="card-wrap d-flex flex-column position-relative"
          id="speed"
          onClick="selectCard('speed')"
        >
          <h6 className="txt-montserrat-24-700-140 mb-0">Speed</h6>
          <p className="txt-montserrat-16-400-140 mb-0">
            <span>Xtealth:</span> Your stealthy companion for daily commutes.
            <span>Xtride: </span>Unleash adrenaline. <span>Xonic: </span>Thrill amplified.
          </p>
          <div className="range position-absolute"></div>
        </div>
        <div
          className="card-wrap d-flex flex-column position-relative"
          id="safety"
          onClick="selectCard('safety')"
        >
          <h6 className="txt-montserrat-24-700-140 mb-0">Safety</h6>
          <p className="txt-montserrat-16-400-140 mb-0">
            Enhanced stability at <span>high speeds</span> and around corners, offering superior
            riding experience.
          </p>
          <div className="range position-absolute"></div>
        </div>
        <div
          className="card-wrap d-flex flex-column position-relative"
          id="comfort"
          onClick="selectCard('comfort')"
        >
          <h6 className="txt-montserrat-24-700-140 mb-0">Comfort</h6>
          <p className="txt-montserrat-16-400-140 mb-0">
            Distinctive tire compound,<span> split-seat sporty design</span>, and{' '}
            <span>intelligent hill-hold control</span> for an unparalleled riding experience.
          </p>
          <div className="range position-absolute"></div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
