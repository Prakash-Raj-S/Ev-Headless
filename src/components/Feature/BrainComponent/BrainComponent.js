import React, { useRef, useState, useEffect } from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';

const BrainComponent = (props) => {
  console.log('Brain', props);

  const dashboardImageWrapperRef = useRef(null);
  const sliderRef = useRef(null);

  const openPointer = (imgSrc, slideCount) => {
    const dashboardImageWrapper = dashboardImageWrapperRef.current;
    if (!dashboardImageWrapper) return;

    dashboardImageWrapper.classList.add('pointer-wrapper');

    const pointers = dashboardImageWrapper.querySelectorAll('.pointers');
    pointers.forEach((pointer) => {
      pointer.classList.remove('active');
    });

    const currentImg = dashboardImageWrapper.querySelector('img');

    const slider = sliderRef.current;
    if (slider) {
      slider.classList.add('active');
    }
    if (currentImg) {
      currentImg.classList.add('zoom-in');
    }

    // Check if Slick is initialized and activate the correct slide
    if ($('.brain-slider').slick('getSlick')) {
      $('.brain-slider').slick('slickGoTo', slideCount - 1); // Activate slide (zero-based indexing)
    } else {
      console.warn('Slick slider not initialized. Skipping slide activation.');
    }

    refreshSlick('brain-slider');

    // Wait for 1 second before changing the image source
    setTimeout(() => {
      // currentImg.classList.remove("zoom-in"); // Remove the zoom-in class
      // currentImg.src = `../assets/images/brain/${imgSrc}.png`;
    }, 1000); // 1000 milliseconds = 1 second
  };

  return (
    <section
      id="brainSection"
      data-aos="fade-up"
      data-aos-duration="4000"
      className="brain-section light-themed d-flex justify-content-center flex-column align-items-center"
      data-theme="dark-mode"
    >
      <div className="head-wrapper d-flex flex-column gap-4" id="brainHead">
        <h6 className="section-heading txt-orbitron-48-800-120 text-uppercase mb-0 text-center">
          {props.fields.Title.value}
        </h6>
        <p className="txt-montserrat-20-400-140 mb-0 text-center">
          {props.fields.Description.value}
        </p>
      </div>
      <div
        className="dashboard-wrapper position-relative align-items-center d-flex"
        data-aos="fade-up"
      >
        <div className="dashboard-image-wrapper" id="dashboardImageWrapper">
          <img
            src={props.fields.BackgroundImage.value.src}
            className="lazy-load-images w-100 dashboard-img"
          />
          <div className="brain-slider-wrapper">
            <div className="brain-slider">
              {props.fields.BrainList.map((item, index) => (
                <div className="card d-flex flex-column" key={index}>
                  <div className="card-head d-flex">
                    {item.fields.SVGImage.value}
                    <p className="text-white txt-montserrat-24-700-140 mb-0">
                      {item.fields.Title.value}
                    </p>
                  </div>
                  {item.fields.Description.value}
                </div>
              ))}
            </div>
            <div className="brain-count position-absolute" id="brainCount">
              <p className="txt-montserrat-16-400-140">
                <span id="currentSlide" className="txt-montserrat-20-600-150 text-white">
                  1
                </span>
                /4
              </p>
            </div>
            <div className="close-button position-absolute" onClick="closeSlider()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.2806 18.2193C19.3502 18.289 19.4055 18.3717 19.4432 18.4628C19.4809 18.5538 19.5003 18.6514 19.5003 18.7499C19.5003 18.8485 19.4809 18.9461 19.4432 19.0371C19.4055 19.1281 19.3502 19.2109 19.2806 19.2806C19.2109 19.3502 19.1281 19.4055 19.0371 19.4432C18.9461 19.4809 18.8485 19.5003 18.7499 19.5003C18.6514 19.5003 18.5538 19.4809 18.4628 19.4432C18.3717 19.4055 18.289 19.3502 18.2193 19.2806L11.9999 13.0602L5.78055 19.2806C5.63982 19.4213 5.44895 19.5003 5.24993 19.5003C5.05091 19.5003 4.86003 19.4213 4.7193 19.2806C4.57857 19.1398 4.49951 18.949 4.49951 18.7499C4.49951 18.5509 4.57857 18.36 4.7193 18.2193L10.9396 11.9999L4.7193 5.78055C4.57857 5.63982 4.49951 5.44895 4.49951 5.24993C4.49951 5.05091 4.57857 4.86003 4.7193 4.7193C4.86003 4.57857 5.05091 4.49951 5.24993 4.49951C5.44895 4.49951 5.63982 4.57857 5.78055 4.7193L11.9999 10.9396L18.2193 4.7193C18.36 4.57857 18.5509 4.49951 18.7499 4.49951C18.949 4.49951 19.1398 4.57857 19.2806 4.7193C19.4213 4.86003 19.5003 5.05091 19.5003 5.24993C19.5003 5.44895 19.4213 5.63982 19.2806 5.78055L13.0602 11.9999L19.2806 18.2193Z"
                  fill="#ADADAD"
                />
              </svg>
            </div>
          </div>
        </div>
        {props.fields.BrainList.map((item, index) => (
          <div
            className="position-absolute pointers one  tooltip-container active"
            data-tooltip="Tooltip Top Text"
            onClick={() => openPointer(item.fields.className.value)}
            key={index}
          >
            <img src={item.fields.Image.value.src} />
            <span className="tooltip-text text-white txt-montserrat-14-600-140">
              {item.fields.Title.value}
            </span>
          </div>
        ))}
      </div>
      <div className="dark-overlay position-absolute"></div>
    </section>
  );
};

export default BrainComponent;
