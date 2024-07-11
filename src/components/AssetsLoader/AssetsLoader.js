import React, { useEffect } from 'react';

function AssetsLoader() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '../../assets/TvsX/vendors/jquery/jquery-3.6.0.min.js';
    script.async = true;
    document.body.appendChild(script);
    const script1 = document.createElement('script');
    script1.src = '../../assets/TvsX/vendors/aos/js/aos.js';
    script1.async = true;
    document.body.appendChild(script1);
    const script4 = document.createElement('script');
    script4.src = '../../assets/TvsX/vendors/bootstrap/js/bootstrap.bundle.min.js';
    script4.async = true;
    document.body.appendChild(script4);
    const script5 = document.createElement('script');
    script5.src = '../../assets/TvsX/vendors/gsap/ScrollTrigger.min.js';
    script5.async = true;
    document.body.appendChild(script5);
    const script6 = document.createElement('script');
    script6.src = '../../assets/TvsX/vendors/gsap/gsap.min.js';
    script6.async = true;
    document.body.appendChild(script6);
    const script7 = document.createElement('script');
    script7.src = '../../assets/TvsX/vendors/gsap/ScrollMagic.min.js';
    script7.async = true;
    document.body.appendChild(script7);
    const script8 = document.createElement('script');
    script8.src = '../../assets/TvsX/vendors/gsap/animation.gsap.min.js';
    script8.async = true;
    document.body.appendChild(script8);
    const script9 = document.createElement('script');
    script9.src = '../../assets/TvsX/vendors/slick/slick.min.js';
    script9.async = true;
    document.body.appendChild(script9);
    const script12 = document.createElement('script');
    script12.src = 'https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js';
    script12.async = true;
    document.body.appendChild(script12);
  }, []);
  return <div></div>;
}
export default AssetsLoader;
