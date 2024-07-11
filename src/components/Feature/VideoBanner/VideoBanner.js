import React, { useEffect, useRef, useState } from 'react';
import { Text, Image, RichText, Link } from '@sitecore-jss/sitecore-jss-react';
import axios from 'axios';

const VideoBanner = (props) => {
  console.log('asd', props);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const svgElement = document.getElementById('hero-mute');

    if (video && svgElement) {
      video.muted = isMuted;

      if (isMuted) {
        svgElement.innerHTML =
          '<svg id="muteIcon" xmlns="http://www.w3.org/2000/svg" width="47" height="43" viewBox="0 0 47 43" fill="none"><g clip-path="url(#clip0_1140_1820)"><g filter="url(#filter0_i_1140_1820)"><path d="M33.0367 0.5H14.341C12.6949 0.5 11.1801 1.39885 10.3913 2.84371L1.60764 18.933C0.873952 20.2769 0.873952 21.9017 1.60764 23.2456L10.3913 39.3349C11.1801 40.7797 12.6949 41.6786 14.341 41.6786H33.0367C34.7092 41.6786 36.2437 40.751 37.0211 39.2701L45.4669 23.1808C46.1543 21.8712 46.1543 20.3074 45.4669 18.9977L37.0211 2.90845C36.2437 1.42758 34.7092 0.5 33.0367 0.5Z" stroke="#6C6A6A"/></g><path d="M28.25 23.2499V18.7499C28.25 18.551 28.329 18.3602 28.4697 18.2196C28.6103 18.0789 28.8011 17.9999 29 17.9999C29.1989 17.9999 29.3897 18.0789 29.5303 18.2196C29.671 18.3602 29.75 18.551 29.75 18.7499V23.2499C29.75 23.4488 29.671 23.6396 29.5303 23.7803C29.3897 23.9209 29.1989 23.9999 29 23.9999C28.8011 23.9999 28.6103 23.9209 28.4697 23.7803C28.329 23.6396 28.25 23.4488 28.25 23.2499ZM32 16.4999C31.8011 16.4999 31.6103 16.5789 31.4697 16.7196C31.329 16.8602 31.25 17.051 31.25 17.2499V24.7499C31.25 24.9488 31.329 25.1396 31.4697 25.2803C31.6103 25.4209 31.8011 25.4999 32 25.4999C32.1989 25.4999 32.3897 25.4209 32.5303 25.2803C32.671 25.1396 32.75 24.9488 32.75 24.7499V17.2499C32.75 17.051 32.671 16.8602 32.5303 16.7196C32.3897 16.5789 32.1989 16.4999 32 16.4999ZM31.055 28.7455C31.1226 28.8182 31.1752 28.9035 31.2096 28.9966C31.244 29.0897 31.2595 29.1887 31.2554 29.2879C31.2513 29.387 31.2275 29.4844 31.1854 29.5743C31.1434 29.6642 31.0839 29.7449 31.0105 29.8116C30.937 29.8784 30.851 29.9299 30.7575 29.9632C30.664 29.9964 30.5649 30.0108 30.4658 30.0055C30.3667 30.0002 30.2696 29.9752 30.1802 29.9321C30.0908 29.889 30.0109 29.8285 29.945 29.7543L26 25.4146V29.9999C25.9999 30.1403 25.9604 30.2778 25.8861 30.3968C25.8117 30.5158 25.7054 30.6116 25.5793 30.6732C25.4533 30.7348 25.3124 30.7598 25.1728 30.7454C25.0332 30.7309 24.9005 30.6776 24.7897 30.5915L18.2422 25.4999H14C13.6022 25.4999 13.2206 25.3419 12.9393 25.0606C12.658 24.7793 12.5 24.3977 12.5 23.9999V17.9999C12.5 17.6021 12.658 17.2206 12.9393 16.9393C13.2206 16.658 13.6022 16.4999 14 16.4999H17.8953L14.945 13.2543C14.8774 13.1817 14.8248 13.0963 14.7904 13.0032C14.756 12.9101 14.7405 12.8111 14.7446 12.712C14.7487 12.6128 14.7725 12.5154 14.8146 12.4255C14.8566 12.3356 14.9161 12.255 14.9895 12.1882C15.063 12.1215 15.149 12.07 15.2425 12.0367C15.336 12.0034 15.4351 11.989 15.5342 11.9944C15.6333 11.9997 15.7304 12.0246 15.8198 12.0678C15.9092 12.1109 15.9891 12.1713 16.055 12.2456L31.055 28.7455ZM24.5 23.7646L19.2594 17.9999H14V23.9999H18.5C18.6669 23.9997 18.829 24.0555 18.9603 24.1584L24.5 28.4662V23.7646ZM21.9744 15.4977L24.5 13.529V19.0106C24.5 19.2095 24.579 19.4002 24.7197 19.5409C24.8603 19.6815 25.0511 19.7606 25.25 19.7606C25.4489 19.7606 25.6397 19.6815 25.7803 19.5409C25.921 19.4002 26 19.2095 26 19.0106V11.9999C25.9999 11.8596 25.9604 11.7221 25.8861 11.6031C25.8117 11.4841 25.7054 11.3883 25.5793 11.3267C25.4533 11.265 25.3124 11.24 25.1728 11.2545C25.0332 11.2689 24.9005 11.3222 24.7897 11.4084L21.0537 14.3146C20.8999 14.4378 20.8007 14.6165 20.7776 14.8123C20.7545 15.008 20.8093 15.2049 20.9303 15.3605C21.0513 15.5161 21.2286 15.6178 21.424 15.6437C21.6194 15.6695 21.8171 15.6174 21.9744 15.4987V15.4977Z" fill="white"/></g><defs><filter id="filter0_i_1140_1820" x="-4.44263" y="-5" width="50.925" height="47.1787" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-5" dy="-5"/><feGaussianBlur stdDeviation="125"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.02 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_1140_1820"/></filter><clipPath id="clip0_1140_1820"><rect width="47" height="43" fill="white"/></clipPath></defs></svg>';
      } else {
        svgElement.innerHTML =
          '<svg id="muteIcon" xmlns="http://www.w3.org/2000/svg" width="47" height="43" viewBox="0 0 47 43" fill="none"><g clip-path="url(#clip0_1140_1829)"><g filter="url(#filter0_i_1140_1829)"><path d="M33.0367 0.5H14.341C12.6949 0.5 11.1801 1.39885 10.3913 2.84371L1.60764 18.933C0.873952 20.2769 0.873952 21.9017 1.60764 23.2456L10.3913 39.3349C11.1801 40.7797 12.6949 41.6786 14.341 41.6786H33.0367C34.7092 41.6786 36.2437 40.751 37.0211 39.2701L45.4669 23.1808C46.1543 21.8712 46.1543 20.3074 45.4669 18.9977L37.0211 2.90845C36.2437 1.42758 34.7092 0.5 33.0367 0.5Z" stroke="#6C6A6A"/></g><path d="M25.5791 11.3258C25.4529 11.2643 25.3121 11.2395 25.1726 11.2541C25.033 11.2686 24.9004 11.3221 24.7897 11.4083L18.2422 16.4998H14C13.6022 16.4998 13.2206 16.6579 12.9393 16.9392C12.658 17.2205 12.5 17.602 12.5 17.9998V23.9998C12.5 24.3977 12.658 24.7792 12.9393 25.0605C13.2206 25.3418 13.6022 25.4998 14 25.4998H18.2422L24.7897 30.5914C24.9005 30.6775 25.0332 30.7309 25.1728 30.7453C25.3124 30.7597 25.4533 30.7347 25.5793 30.6731C25.7054 30.6115 25.8117 30.5157 25.8861 30.3967C25.9604 30.2777 25.9999 30.1402 26 29.9998V11.9998C26 11.8593 25.9606 11.7217 25.8861 11.6025C25.8117 11.4833 25.7053 11.3874 25.5791 11.3258ZM24.5 28.4661L18.9603 24.1583C18.829 24.0554 18.6669 23.9996 18.5 23.9998H14V17.9998H18.5C18.6669 18.0001 18.829 17.9443 18.9603 17.8414L24.5 13.5336V28.4661ZM29.75 18.7498V23.2498C29.75 23.4488 29.671 23.6395 29.5303 23.7802C29.3897 23.9208 29.1989 23.9998 29 23.9998C28.8011 23.9998 28.6103 23.9208 28.4697 23.7802C28.329 23.6395 28.25 23.4488 28.25 23.2498V18.7498C28.25 18.5509 28.329 18.3602 28.4697 18.2195C28.6103 18.0789 28.8011 17.9998 29 17.9998C29.1989 17.9998 29.3897 18.0789 29.5303 18.2195C29.671 18.3602 29.75 18.5509 29.75 18.7498ZM32.75 17.2498V24.7498C32.75 24.9488 32.671 25.1395 32.5303 25.2802C32.3897 25.4208 32.1989 25.4998 32 25.4998C31.8011 25.4998 31.6103 25.4208 31.4697 25.2802C31.329 25.1395 31.25 24.9488 31.25 24.7498V17.2498C31.25 17.0509 31.329 16.8602 31.4697 16.7195C31.6103 16.5789 31.8011 16.4998 32 16.4998C32.1989 16.4998 32.3897 16.5789 32.5303 16.7195C32.671 16.8602 32.75 17.0509 32.75 17.2498Z" fill="white"/></g>defs><filter id="filter0_i_1140_1829" x="-4.44263" y="-5" width="50.925" height="47.1787" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-5" dy="-5"/><feGaussianBlur stdDeviation="125"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.02 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_1140_1829"/></filter><clipPath id="clip0_1140_1829"><rect width="47" height="43" fill="white"/></clipPath></defs></svg>';
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
 
  return (
    <section
      className="hero-section dark-themed position-relative d-flex justify-content-center align-items-center"
      data-theme="dark-mode"
    >
      <div className="video-wrapper">
        <div className="blur-overlay position-absolute first"></div>
        <video
          className="background-video position-relative lazy-load"
          autoPlay
          loop
          muted
          style={{ pointerEvents: 'none' }}
          preload="false"
          src={props.fields.BackGroundVideo.value.href}
          ref={videoRef}
        >
          <source type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="blur-overlay position-absolute"></div>
      </div>
      <h6
        data-aos="fade-up"
        className="section-heading txt-orbitron-48-800-120 text-uppercase position-absolute text-center"
      >
        {props.fields.Title.value}
      </h6>
      <div className="mute-svg position-absolute" id="hero-mute" onClick={() => toggleMute}>
        <svg
          id="muteIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="43"
          viewBox="0 0 47 43"
          fill="none"
        >
          <g clipPath="url(#clip0_1140_1820)">
            <g filter="url(#filter0_i_1140_1820)">
              <path
                d="M33.0367 0.5H14.341C12.6949 0.5 11.1801 1.39885 10.3913 2.84371L1.60764 18.933C0.873952 20.2769 0.873952 21.9017 1.60764 23.2456L10.3913 39.3349C11.1801 40.7797 12.6949 41.6786 14.341 41.6786H33.0367C34.7092 41.6786 36.2437 40.751 37.0211 39.2701L45.4669 23.1808C46.1543 21.8712 46.1543 20.3074 45.4669 18.9977L37.0211 2.90845C36.2437 1.42758 34.7092 0.5 33.0367 0.5Z"
                stroke="#6C6A6A"
              />
            </g>
            <path
              d="M28.25 23.2499V18.7499C28.25 18.551 28.329 18.3602 28.4697 18.2196C28.6103 18.0789 28.8011 17.9999 29 17.9999C29.1989 17.9999 29.3897 18.0789 29.5303 18.2196C29.671 18.3602 29.75 18.551 29.75 18.7499V23.2499C29.75 23.4488 29.671 23.6396 29.5303 23.7803C29.3897 23.9209 29.1989 23.9999 29 23.9999C28.8011 23.9999 28.6103 23.9209 28.4697 23.7803C28.329 23.6396 28.25 23.4488 28.25 23.2499ZM32 16.4999C31.8011 16.4999 31.6103 16.5789 31.4697 16.7196C31.329 16.8602 31.25 17.051 31.25 17.2499V24.7499C31.25 24.9488 31.329 25.1396 31.4697 25.2803C31.6103 25.4209 31.8011 25.4999 32 25.4999C32.1989 25.4999 32.3897 25.4209 32.5303 25.2803C32.671 25.1396 32.75 24.9488 32.75 24.7499V17.2499C32.75 17.051 32.671 16.8602 32.5303 16.7196C32.3897 16.5789 32.1989 16.4999 32 16.4999ZM31.055 28.7455C31.1226 28.8182 31.1752 28.9035 31.2096 28.9966C31.244 29.0897 31.2595 29.1887 31.2554 29.2879C31.2513 29.387 31.2275 29.4844 31.1854 29.5743C31.1434 29.6642 31.0839 29.7449 31.0105 29.8116C30.937 29.8784 30.851 29.9299 30.7575 29.9632C30.664 29.9964 30.5649 30.0108 30.4658 30.0055C30.3667 30.0002 30.2696 29.9752 30.1802 29.9321C30.0908 29.889 30.0109 29.8285 29.945 29.7543L26 25.4146V29.9999C25.9999 30.1403 25.9604 30.2778 25.8861 30.3968C25.8117 30.5158 25.7054 30.6116 25.5793 30.6732C25.4533 30.7348 25.3124 30.7598 25.1728 30.7454C25.0332 30.7309 24.9005 30.6776 24.7897 30.5915L18.2422 25.4999H14C13.6022 25.4999 13.2206 25.3419 12.9393 25.0606C12.658 24.7793 12.5 24.3977 12.5 23.9999V17.9999C12.5 17.6021 12.658 17.2206 12.9393 16.9393C13.2206 16.658 13.6022 16.4999 14 16.4999H17.8953L14.945 13.2543C14.8774 13.1817 14.8248 13.0963 14.7904 13.0032C14.756 12.9101 14.7405 12.8111 14.7446 12.712C14.7487 12.6128 14.7725 12.5154 14.8146 12.4255C14.8566 12.3356 14.9161 12.255 14.9895 12.1882C15.063 12.1215 15.149 12.07 15.2425 12.0367C15.336 12.0034 15.4351 11.989 15.5342 11.9944C15.6333 11.9997 15.7304 12.0246 15.8198 12.0678C15.9092 12.1109 15.9891 12.1713 16.055 12.2456L31.055 28.7455ZM24.5 23.7646L19.2594 17.9999H14V23.9999H18.5C18.6669 23.9997 18.829 24.0555 18.9603 24.1584L24.5 28.4662V23.7646ZM21.9744 15.4977L24.5 13.529V19.0106C24.5 19.2095 24.579 19.4002 24.7197 19.5409C24.8603 19.6815 25.0511 19.7606 25.25 19.7606C25.4489 19.7606 25.6397 19.6815 25.7803 19.5409C25.921 19.4002 26 19.2095 26 19.0106V11.9999C25.9999 11.8596 25.9604 11.7221 25.8861 11.6031C25.8117 11.4841 25.7054 11.3883 25.5793 11.3267C25.4533 11.265 25.3124 11.24 25.1728 11.2545C25.0332 11.2689 24.9005 11.3222 24.7897 11.4084L21.0537 14.3146C20.8999 14.4378 20.8007 14.6165 20.7776 14.8123C20.7545 15.008 20.8093 15.2049 20.9303 15.3605C21.0513 15.5161 21.2286 15.6178 21.424 15.6437C21.6194 15.6695 21.8171 15.6174 21.9744 15.4987V15.4977Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_1140_1820"
              x="-4.44263"
              y="-5"
              width="50.925"
              height="47.1787"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-5" dy="-5" />
              <feGaussianBlur stdDeviation="125" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.02 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1140_1820" />
            </filter>
            <clipPath id="clip0_1140_1820">
              <rect width="47" height="43" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        data-aos="fade-up"
        className="stats-wrapper-section position-absolute d-flex flex-column justify-content-center align-items-center gap-4"
      >
        <div className="stats-wrapper d-flex gap-3 align-items-center">
          {props.fields.BannerList.map((item, index) => (
            <div
              key={index}
              className="stats gap-1 d-flex flex-column gap-1 justify-content-center align-items-center"
            >
              <h6 className="txt-montserrat-20-700-140 text-white mb-0">
                {item.fields.Description.value}
              </h6>
              <p className="txt-montserrat-18-400-140 mb-0">{item.fields.Title.value}</p>
            </div>
          ))}
        </div>
        <div className="scroll-down-icon" id="scrollDownButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="48"
            viewBox="0 0 43 48"
            fill="none"
          >
            <g clipPath="url(#clip0_566_283)">
              <g filter="url(#filter0_i_566_283)">
                <path
                  d="M40.0879 10.5878L23.893 1.23766C22.4674 0.414574 20.7062 0.435607 19.3006 1.2925L3.64906 10.8344C2.34172 11.6314 1.52934 13.0385 1.49277 14.5692L1.055 32.8948C1.01568 34.5404 1.8781 36.0763 3.30371 36.8993L19.5838 46.2986C20.979 47.1041 22.6984 47.1024 24.0919 46.294L39.3618 37.4357C40.6961 36.6616 41.541 35.258 41.6004 33.7165L42.3346 14.6581C42.3989 12.9896 41.534 11.4227 40.0879 10.5878Z"
                  stroke="#6C6A6A"
                />
              </g>
              <path
                d="M20.8394 15.2798V14.5298H22.3394V15.2798H20.8394ZM22.3394 29.812C22.3394 30.2262 22.0036 30.562 21.5894 30.562C21.1751 30.562 20.8394 30.2262 20.8394 29.812H22.3394ZM22.3394 15.2798V29.812H20.8394V15.2798H22.3394Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.9323 23.765L22.4917 31.2056H21.5884H20.6851L13.2446 23.765L14.5173 22.4922L21.5884 29.5633L28.6595 22.4922L29.9323 23.765Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_566_283"
                x="-4.44629"
                y="-4.86523"
                width="47.2842"
                height="52.2666"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-5" dy="-5" />
                <feGaussianBlur stdDeviation="125" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.02 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_566_283" />
              </filter>
              <clipPath id="clip0_566_283">
                <rect width="43" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};
export default VideoBanner;
