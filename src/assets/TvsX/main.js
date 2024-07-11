$(document).ready(function () {
  AOS.init({
    duration: 1000,
  });
  //dropdown
});

const dropdown = (element) => {
  const chevron = element.parentElement.querySelector("#dropdown-chevron");
  chevron.classList.toggle("active");
  const list = element.parentElement.querySelector(".select-dropdown-list");
  list.classList.toggle("active");
};
const selectMenu = (pElement) => {
  // Get the parent element
  const parentElement = pElement.parentElement;
  const currentlyActive = parentElement.querySelector(".active");
  if (currentlyActive) {
    currentlyActive.classList.remove("active");
  }
  pElement.classList.add("active");
};

const muteVideo=()=>{
   const video = document.querySelector(".background-video");
   const muteButton = document.querySelector(".mute-svg img");
     if (video.muted) {
       video.muted = false;
       muteButton.src = "../assets/images/icons/unmute.svg";
     } else {
       video.muted = true;
       muteButton.src = "../assets/images/icons/mute.svg";
     }
  
}

//cta-wrapper hidden in hero section

document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero-section");
  const ctaMobWrapper = document.querySelector(".cta-mob-wrapper");
  const backgroundContainer = document.getElementById("video-group");
  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.1, // Adjust the threshold as needed
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        ctaMobWrapper.classList.add("hidden");
        backgroundContainer.style.zIndex="-100"
      } else {
        ctaMobWrapper.classList.remove("hidden");
        // backgroundContainer.style.zIndex = "unset";

      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(heroSection);
});


document.addEventListener("DOMContentLoaded", () => {
  console.log(window.innerWidth)
  const dnaSection = document.querySelector(".dna-section");
  // const whiteOverlay = document.querySelector(".white-overlay");
  const backgroundContainer = document.getElementById("video-group");
  const blurOverlay = dnaSection.querySelectorAll(".blur-overlay");
  console.log(blurOverlay);

  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.1, // Adjust the threshold as needed
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
      //   // whiteOverlay.style.display="none";
      //   // blurOverlay.forEach((overlay)=>{
      //   //  overlay.style.display = "none";
      //   })
        backgroundContainer.style.zIndex = "-100";
      } else {
        // whiteOverlay.style.display = "flex";
        //  blurOverlay.forEach((overlay) => {
        //    overlay.style.display = "flex";
        //  });
        // backgroundContainer.style.zIndex = "unset";
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(dnaSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("v0");
  const dnaCta = document.getElementById("dnaCta");
  const dnaSection = document.getElementById("dnaSection");
  let isPausedAfterTimeout = false;
  let isCtaClicked = false;
  const sections = document.querySelectorAll(".step");
 
  // const observerOptionsforSection = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.2, // 10% and 20%
  // };
  // const observerCallbackforSections = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         console.log(entry)
  //         // Remove visible class from all sections
  //         // sections.forEach((section) => section.classList.remove("visible"));

  //         // // Add visible class to the intersecting section
  //         // entry.target.classList.add("visible");

  //         // console.log(
  //         //   `Scroll height when ${entry.target.id} is in view: ${window.scrollY}`
  //         // );
  //       }
  //  });

    // };
  //  const observerSection = new IntersectionObserver(
  //    observerCallbackforSections,
  //    observerOptionsforSection
  //  );

  //  sections.forEach((section) => {
  //    observerSection.observe(section);
  //  });

  
 const observerOptions = {
   root: null,
   rootMargin: "0px",
   threshold: 0.5,
 };
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // if (isPausedAfterTimeout) {     
          video.play();              
         // requestAnimationFrame(scrollPlay);
        // }
      } else {
        video.pause();
      }
    });
  };
  


  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(document.querySelector(".video-group"));
 sections.forEach((section) => {
   observer.observe(section);
 });
 if (video) {
   const handleLoadedMetadata = () => {
     video
       .play()
       .then(() => {
         setTimeout(() => {
           video.pause();
           isPausedAfterTimeout = true;
         }, 3000);
       })
       .catch((error) => {
         console.error("Autoplay failed:", error);
       });
   };

   if (video.readyState >= 1) {
     handleLoadedMetadata();
   } else {
     video.addEventListener("loadedmetadata", handleLoadedMetadata);
   }
 }


  dnaCta.addEventListener("click", () => {
    if (!isCtaClicked) {
      console.log("CTA clicked");
      isPausedAfterTimeout = false;
      isCtaClicked = true;
      dnaCta.style.cssText = "display: none !important;";
      dnaSection.style.height = "500vh";

      // video.play();
      // setTimeout(() => {
      //   video.pause();
      //   console.log("Video paused after 1 more second");
        playVideoOnScroll();
      // }, 1000);
    }
  });

  function playVideoOnScroll() {
    var frameNumber = 0,
      playbackConst = 500,
      setHeight = document.getElementById("set-height"),
      vid = document.getElementById("v0");

    vid.addEventListener("loadedmetadata", function () {
      setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    });
   const updateSectionsVisibility = (frameNumber) => {
     sections.forEach((section) => {
       section.classList.remove("visible");
     });

     if (frameNumber > 2.4 && frameNumber <= 4) {
       sections[0].classList.add("visible");
     } else if (frameNumber > 4 && frameNumber <= 5.2) {
       sections[1].classList.add("visible");
     } else if (frameNumber > 5.2 && frameNumber <= 6.5) {
       sections[2].classList.add("visible");
     } else if (frameNumber > 6.5) {
       sections[3].classList.add("visible");
     }
   };

    function scrollPlay() {
      var frameNumber = window.pageYOffset / playbackConst;
      vid.currentTime = frameNumber;
      console.log(frameNumber)
     updateSectionsVisibility(frameNumber);
      window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);
  }
});



// const playVideoOnScroll = () => {
//   gsap.registerPlugin(ScrollTrigger);

//   const bgVideo = document.querySelector("#bgVideo");
//   if (!bgVideo) {
//     console.error("Video element not found");
//     return;
//   }

//   bgVideo.pause();
//   bgVideo.currentTime = 0;

//   let sections = gsap.utils.toArray(".step");
//   let totalDuration = bgVideo.duration; // Total video duration
//   let sectionDuration = totalDuration / sections.length; // Duration of video per section

//   sections.forEach((step, i) => {
//     console.log(`Setting up scroll trigger for section ${i}`);

//     ScrollTrigger.create({
//       trigger: step,
//       start: "top top",
//       end: "bottom top",
//       pin: true,
//       scrub: true,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         const currentTime = sectionDuration * (i + progress);

//         // Smoothly update video currentTime
//         gsap.to(bgVideo, {
//           currentTime: currentTime,
//           duration: 0.1, // duration of the transition to the new time
//           ease: "none", // ensure no easing for the time update
//           overwrite: true,
//         });
//       },
//     });
//   });

//   ScrollTrigger.refresh();
// };
// document.addEventListener("DOMContentLoaded", function () {
//   var video = document.getElementById("bgVideo");

//   // Set the video to preload metadata
//   video.preload = "metadata";

//   // Once the video metadata is loaded, we can use its duration
//   video.onloadedmetadata = function () {
//     var duration = video.duration;

//     // Initialize ScrollMagic Controller
//     var controller = new ScrollMagic.Controller();

//     // Create a tween that scrubs the video based on scroll
//     var videoTween = gsap.to(video, {
//       currentTime: duration,
//       ease: "none",
//       paused: true,
//       reversed: true,
//     });

//     // Create the scene
//     var scene = new ScrollMagic.Scene({
//       triggerElement: "#dnaSection",
//       triggerHook: 0,
//       duration: "200%",
//     })
//       .setTween(videoTween)
//       .addTo(controller);

//     // Update the tween based on scroll direction
//     scene.on("update", function (event) {
//       if (event.scrollDirection === "REVERSE") {
//         videoTween.reversed(true);
//       } else {
//         videoTween.reversed(false);
//       }
//     });
//   };
// });





// // define images
// 	var images = [
//     "../assets/images/dna/1.jpg",
//     "../assets/images/dna/3.jpg",
//     "../assets/images/dna/4.jpg",
//     "../assets/images/dna/5.jpg",
//     "../assets/images/dna/6.jpg",
//     "../assets/images/dna/7.jpg",
//     "../assets/images/dna/8.jpg",
//     "../assets/images/dna/9.jpg",
//     "../assets/images/dna/10.jpg",
//     "../assets/images/dna/11.jpg",
//     "../assets/images/dna/12.jpg",
//     "../assets/images/dna/13.jpg",
//     "../assets/images/dna/14.jpg",
//     "../assets/images/dna/15.jpg",
//     "../assets/images/dna/16.jpg",
//     "../assets/images/dna/17.jpg",
//     "../assets/images/dna/18.jpg",
//     "../assets/images/dna/19.jpg",
//     "../assets/images/dna/20.jpg",
   
//   ];
// document.addEventListener("DOMContentLoaded", () => {

// 	// TweenMax can tween any property of any object. We use this object to cycle through the array
// 	var obj = {curImg: 0};

// 	// create tween
// 	var tween = TweenMax.to(obj, 1,
// 		{
// 			curImg: images.length - 1,	// animate propery curImg to number of images
// 			roundProps: "curImg",				// only integers so it can be used as an array index
//       //  滾動期間內播放的次數
// 			repeat: 10,									// repeat 3 times
// 			immediateRender: true,			// load first image automatically
// 			ease: Linear.easeNone,			// show every image the same ammount of time
// 			onUpdate: function () {
// 			  $("#myimg").attr("src", images[obj.curImg]); // set the image source
// 			}
// 		}
// 	);

// 	// init controller
// 	var controller = new ScrollMagic.Controller();

// 	// build scene
//   // 兔子動畫
// 	var scene = new ScrollMagic.Scene({
//     triggerElement: "#trigger", 
//     duration: 400
//   })
//   .setTween(tween)
//   .addTo(controller);

//   // pin scene
//   // 白色固定區塊
//   var scene2 = new ScrollMagic.Scene({
//     triggerElement:'#imagesequence',
//     // 需要與scene的duration搭配
//     duration: 400,
//     // 回滾時是否要動作
//     reverse: true
//   })
//   .setPin('#imagesequence')
//   .addIndicators() // add indicators (requires plugin)
//   .addTo(controller);
// })
	