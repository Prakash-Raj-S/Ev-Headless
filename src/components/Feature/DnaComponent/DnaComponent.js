import React from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';

const DnaComponent = (props) => {
  console.log(props);
  return (
    <div
      className="dna-wrapper position-relative d-flex justify-content-center align-items-center"
      data-aos="fade-up"
    >
      <section
        className="dna-section dark-themed flex-column position-relative align-self-start align-items-center d-flex justify-content-center"
        id="dnaSection"
        data-cursor-text="Drag"
        data-theme="dark-mode"
      >
        <div className="video-group" id="video-group">
          <div id="set-height"></div>
          <p id="time"></p>
          <video
            id="v0"
            tabIndex="0"
            preload="false"
            autoPlay
            muted
            loop
            className="lazy-load"
            playsInline
            style={{ pointerEvents: 'none' }}
            data-src="https://www.apple.com/media/us/mac-pro/2013/16C1b6b5-1d91-4fef-891e-ff2fc1c1bb58/videos/macpro_main_desktop.mp4"
          >
            <source type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'></source>
          </video>
        </div>
      </section>
      <div className="range-wrapper position-absolute">
        <div className="range" id="range"></div>
      </div>
      <div className="head-wrapper d-flex flex-column position-absolute">
        <h6 className="section-heading txt-orbitron-48-800-120 text-uppercase mb-0 text-center">
          UNLEASH <br />
          THE DNA
        </h6>
        <p className="txt-montserrat-20-400-140 mb-0 text-center">
          Where each ride is a statement, blending cutting-edge technology
          <br /> with sleek design.
        </p>
      </div>

      <div className="dna-cta-wrapper position-absolute d-flex align-items-center" id="dnaCta">
        <div className="dna-cta d-flex align-items-center">
          <p className="mb-0 text-white txt-montserrat-16-700-140">DIVE INTO DNA</p>
          <div className="dna-svg-container">
            <svg
              id="dnaSvg"
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="46"
              viewBox="0 0 51 46"
              fill="none"
            >
              <g filter="url(#filter0_bi_38_1312)">
                <path
                  d="M11.8732 3.0833C12.5743 1.79898 13.9208 1 15.384 1H36.3136C37.8002 1 39.1643 1.82451 39.8552 3.14085L49.3041 21.1408C49.9151 22.305 49.9151 23.695 49.3041 24.8592L39.8552 42.8592C39.1643 44.1755 37.8002 45 36.3136 45H15.384C13.9208 45 12.5743 44.201 11.8732 42.9167L2.04639 24.9167C1.39423 23.7221 1.39422 22.2779 2.04639 21.0833L11.8732 3.0833Z"
                  fill="url(#paint0_radial_38_1312)"
                />
                <path
                  d="M15.384 0.5C13.7379 0.5 12.2231 1.39885 11.4343 2.84371L1.60753 20.8437C0.873844 22.1876 0.873845 23.8124 1.60753 25.1563L11.4343 43.1563C12.2231 44.6012 13.7379 45.5 15.384 45.5H36.3136C37.9861 45.5 39.5206 44.5724 40.298 43.0915L49.7468 25.0915C50.4342 23.7819 50.4342 22.2181 49.7468 20.9085L40.298 2.90845C39.5206 1.42758 37.9861 0.5 36.3136 0.5H15.384Z"
                  stroke="url(#paint1_linear_38_1312)"
                  strokeOpacity="0.4"
                />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7583 15.2736C19.8702 14.7191 18.7187 15.3576 18.7187 16.4046L18.7187 29.5932C18.7187 30.6407 19.8711 31.2791 20.7592 30.7236L31.3101 24.1237C32.1455 23.6011 32.145 22.3843 31.3093 21.8624L20.7583 15.2736Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_bi_38_1312"
                  x="-41.4426"
                  y="-42"
                  width="134.205"
                  height="130"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="21" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_38_1312"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_38_1312"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="-5" dy="-5" />
                  <feGaussianBlur stdDeviation="125" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.02 0"
                  />
                  <feBlend mode="normal" in2="shape" result="effect2_innerShadow_38_1312" />
                </filter>
                <radialGradient
                  id="paint0_radial_38_1312"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(1 1) rotate(41.7603) scale(66.0645 45.611)"
                >
                  <stop stopColor="white" stopOpacity="0.4" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <linearGradient
                  id="paint1_linear_38_1312"
                  x1="1"
                  y1="1"
                  x2="9.43613"
                  y2="50.3069"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#EEEDED" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div id="scroll-container" className="scroll-container position-absolute">
        <section className="step" id="section1">
          <div className="head-wrapper d-flex flex-column position-absolute">
            <h6 className="section-heading txt-orbitron-48-800-120 text-uppercase mb-0 text-center">
              SCULPTURAL bodywork
            </h6>
          </div>
          <div className="description-wrapper position-absolute">
            <p className="txt-montserrat-20-400-150">
              Aerodynamics, Aluminum body, the amalgamation of form and function with
              <span className="txt-montserrat-20-600-150">
                Ram-air cooling motor and className leading CDA
              </span>
            </p>
          </div>
        </section>
        <section className="step" id="section2">
          <div className="head-wrapper d-flex flex-column position-absolute">
            <h6 className="section-heading txt-orbitron-48-800-120 text-uppercase mb-0 text-center">
              XELTON frame
            </h6>
          </div>
          <div className="description-wrapper position-absolute">
            <p className="txt-montserrat-20-400-150">
              The Xelton Vehicle Platform offers unparalleled{' '}
              <span className="txt-montserrat-20-600-150">durability</span> and{' '}
              <span className="txt-montserrat-20-600-150">stability</span>, ensuring a smooth and
              ride on any terrain.
            </p>
          </div>
        </section>
        <section className="step" id="section3">
          <div className="head-wrapper d-flex flex-column position-absolute">
            <h6 className="section-heading txt-orbitron-48-800-120 text-uppercase mb-0 text-center">
              tvs led tech 2.0
            </h6>
          </div>
          <div className="description-wrapper position-absolute">
            <p className="txt-montserrat-20-400-150">
              Illuminate with Thrill with{' '}
              <span className="txt-montserrat-20-600-150">customizable lighting signatures</span>{' '}
              <span className="txt-montserrat-20-600-150">razor pulse headlamps.</span>
            </p>
          </div>
        </section>
        <section className="step" id="section4">
          <div className="head-wrapper d-flex flex-column position-absolute">
            <h6 className="section-heading txt-orbitron-48-800-120 text-uppercase mb-0 text-center">
              X-TILT & Naked handlebar
            </h6>
          </div>
          <div className="description-wrapper position-absolute">
            <p className="txt-montserrat-20-400-150">
              Max out you viewing experience with an expansive{' '}
              <span className="txt-montserrat-20-600-150">10.2 inch TFT display </span>and a{' '}
              <span className="txt-montserrat-20-600-150">naked handlebar layout.</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DnaComponent;
