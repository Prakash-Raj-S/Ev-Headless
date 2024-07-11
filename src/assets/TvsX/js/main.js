$(document).ready(function () {
  AOS.init({
    duration: 2000,
  });
  //dropdown
});


// cta-wrapper hidden in hero section

document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero-section");
  const ctaMobWrapper = document.querySelector(".cta-mob-wrapper");
  const rangeWrapper = document.querySelector(".range-wrapper");
  const secondaryHeader = document.querySelector(".secondary-header-wrapper");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const observerCallback = (entries) => {
   
    entries.forEach((entry) => {
       
      if (entry.isIntersecting) {
        console.log(entry, "isintersecting");
        ctaMobWrapper.classList.add("hidden");
        // rangeWrapper.style.zIndex = "-100";
        secondaryHeader.classList.add("hidden");
      } else {
        console.log(entry, "isnotintersecting");
        ctaMobWrapper.classList.remove("hidden");
        secondaryHeader.classList.remove("hidden");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(heroSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const experienceSection = document.querySelector(".experience-section");
  console.log(experienceSection,"experience")
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0, // Full visibility
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      console.log(`Is intersecting: ${entry.isIntersecting}`); // Debug line
    if (entry.isIntersecting) {
      // Attach the timeupdate event listener to the active video
      const videoContainer = document.getElementById("experienceVideos");
      const activeVideoWrapper =
        videoContainer.querySelector(".video-wrap.active");
      const activeVideo = activeVideoWrapper.querySelector("video");
      activeVideo.addEventListener("timeupdate", updateVideoRange);

      updateVideoRange(); // Ensure the range is updated immediately
    } else {
      // Remove event listener if not intersecting (optional)
      const videoContainer = document.getElementById("experienceVideos");
      const activeVideoWrapper =
        videoContainer.querySelector(".video-wrap.active");
      const activeVideo = activeVideoWrapper.querySelector("video");
      activeVideo.removeEventListener("timeupdate", updateVideoRange);
    }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(experienceSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("v0");
  const videoGroup = document.getElementById("video-group");

  const dnaCta = document.getElementById("dnaCta");
  const dnaSection = document.getElementById("dnaSection");
  let isPausedAfterTimeout = false;
  let isCtaClicked = false;
  const sections = document.querySelectorAll(".step");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
  //  video.classList.add('active')
 
        // video.play();
      } else {
  //       video.pause();
  //  video.classList.remove("active");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(document.querySelector(".video-group"));
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  if (video) {
     
     setTimeout(()=>{
      console.log("paused")
      video.pause()
     },3000)
  }
  const rangeWrapper = document.querySelector(".range-wrapper");
  const steps=document.querySelectorAll('.step')
  dnaCta.addEventListener("click", () => {
    if (!isCtaClicked) {
       
      console.log("CTA clicked");
     rangeWrapper.classList.add('active')
      isPausedAfterTimeout = false;
      isCtaClicked = true;
      dnaCta.style.cssText = "display: none !important;";
     
      playVideoOnScroll();
    }
   
  });
  
  // function playVideoOnScroll() {
  //   var frameNumber = 0,
  //     playbackConst = 500,
  //     setHeight = document.getElementById("set-height"),
  //     vid = document.getElementById("v0");

  //   vid.addEventListener("loadedmetadata", function () {
  //     setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
  //   });

  //  function updateRangeHeight(frameNumber) {
   
  //    const rangeElement = document.getElementById("range");
  //    const videoDuration = document.getElementById("v0").duration;
  //     const steps=document.querySelectorAll('.step')
  //    // Calculate scroll percentage (0 to 1)
  //    const scrollPercentage = Math.min(frameNumber / videoDuration, 1);

  //    // Set the height based on scroll percentage (20% to 100%)
  //    const targetHeight = scrollPercentage * 0.8 + 0.2; // Adjust multiplier for desired range

  //    // Set the height of the range element
  //    rangeElement.style.height = `${targetHeight * 100}%`;
  //    console.log(parseFloat(rangeElement.style.height,"height"))
  //    if (parseFloat(rangeElement.style.height) > 90) {
  //      document.getElementById("v0").style.position = "absolute";
  //    rangeWrapper.classList.remove("active");

  //       steps.forEach((step) => {
  //       step.style.setProperty("position", "absolute", "important");
  //       });
  //    }
  //    else{
  //     document.getElementById("v0").style.position = "fixed";
  //    rangeWrapper.classList.add("active");

  //      steps.forEach((step) => {
  //       step.style.setProperty("position", "fixed", "important");
  //      });
  //    }
    
  //  }

  //   const updateSectionsVisibility = (frameNumber) => {
  //     sections.forEach((section) => {
  //       section.classList.remove("visible");
  //     });

  //     if (frameNumber > 2.4 && frameNumber <= 4) {
  //       sections[0].classList.add("visible");
  //     } else if (frameNumber > 4 && frameNumber <= 5.2) {
  //       sections[1].classList.add("visible");
  //     } else if (frameNumber > 5.2 && frameNumber <= 6.5) {
  //       sections[2].classList.add("visible");
  //     } else if (frameNumber > 6.5) {
  //       sections[3].classList.add("visible");
  //     }
  //   };

  //   function scrollPlay() {
  //     var frameNumber = window.pageYOffset / playbackConst;
  //     vid.currentTime = frameNumber;
  //     updateSectionsVisibility(frameNumber);
  //     updateRangeHeight(frameNumber);
  //     window.requestAnimationFrame(scrollPlay);
  //   }

  //   window.requestAnimationFrame(scrollPlay);
  // }
 function playVideoOnScroll() {
   var frameNumber = 0,
     playbackConst = 500,
     dnasection=document.querySelector('.dna-section'),
     setHeight = document.getElementById("set-height"),
     vid = document.getElementById("v0"),
     steps = document.querySelectorAll(".step"),
     rangeWrapper = document.querySelector(".range-wrapper"),
     scrollContainer = document.getElementById("scroll-container"); // add this
     var controller = new ScrollMagic.Controller();

     var scene = new ScrollMagic.Scene({
     triggerElement: dnasection, // trigger the scene when the setHeight element is in view
     triggerHook: 0.5, // play video when 50% of the element is in view
     duration: dnasection.offsetHeight, // play video for the entire height of the setHeight element
     offset: 0, // offset from the top of the viewport
     })
     .setPin(dnasection) // pin the video element during the scene
     .on("progress", function (e) {
       vid.style.position = "fixed";
      //  dnasection.classList.add("active");
       dnasection.style.height =
         (Math.floor(vid.duration) * playbackConst)-2000 + "px";
      //  steps.style.position = "fixed";
      //  rangeWrapper.classList.add("active");
     })
     .on("end", function (e) {
      console.log("enddd")
       // Change video position to relative when the scene ends
        // vid.style.position = "relative";
      //  dnasection.classList.remove("active");
      steps.forEach((step)=>{
        step.classList.remove('visible')
      })
      //  steps.style.position = "relative";
      //  rangeWrapper.classList.remove("active");
     })
     .addTo(controller);

   // Add the scene to the controller
   controller.addScene(scene);

   // Show the scroll container
   scrollContainer.style.display = "block";

   function updateRangeHeight(frameNumber) {
     const rangeElement = document.getElementById("range");
     const videoDuration = document.getElementById("v0").duration;
     const steps = document.querySelectorAll(".step");

     // Calculate scroll percentage (0 to 1)
     const scrollPercentage = Math.min(frameNumber / videoDuration, 1);
     const targetHeight = scrollPercentage * 0.8 + 0.2; // Adjust multiplier for desired range

     // Set the height of the range element
     rangeElement.style.height = `${targetHeight * 100}%`;
     console.log(rangeElement.style.height,"height");
    if(rangeElement.style.height==="100%"){
      rangeWrapper.classList.remove('active')
      vid.style.position = "absolute";

    }
    else{
      rangeWrapper.classList.add("active");
         vid.style.position = "fixed";
    }
   }

   const updateSectionsVisibility = (frameNumber) => {
     sections.forEach((section) => {
       section.classList.remove("visible");
     });
   console.log(frameNumber,"frame")
     if (frameNumber > 2.4 && frameNumber <= 4) {
       sections[0].classList.add("visible");
     } else if (frameNumber > 4 && frameNumber <= 5.2) {
       sections[1].classList.add("visible");
     } else if (frameNumber > 5.2 && frameNumber <= 6.5) {
       sections[2].classList.add("visible");
     } else if (frameNumber > 6.5 && frameNumber <= 12) {
       sections[3].classList.add("visible");
     }
    
   
   };

   function scrollPlay() {
     var frameNumber = window.pageYOffset / playbackConst;
     vid.currentTime = frameNumber;
     updateSectionsVisibility(frameNumber);
     updateRangeHeight(frameNumber);
     window.requestAnimationFrame(scrollPlay);
   }

   window.requestAnimationFrame(scrollPlay);
 }

});

//slick active count
document.addEventListener("DOMContentLoaded", () => {
  
   const dashboardImageWrapper = document.getElementById(
     "dashboardImageWrapper"
   );
   const currentImg = dashboardImageWrapper.querySelector("img");
   let isFirstTime = true;
$(".brain-slider").on(
  "afterChange",
  function (event, slick, currentSlide, nextSlide) {
    // if (isFirstTime) {
    //   setTimeout(() => {
    //     updateActiveCount();
    //     isFirstTime = false; // Set the flag to false after the first execution
    //   }, 2000);
    //   setTimeout(()=>{
    //   },1500)
    // } else {
      updateActiveCount();
    // }
  }
);
})



//lazy loading

document.addEventListener("DOMContentLoaded", () => {
  const lazyMedias = document.querySelectorAll(".lazy-load");

  const loadMedia = (entry) => {
   
    if (entry.isIntersecting) {
     
      const video = entry.target;
      const source = video.querySelector("source");
      source.src = video.dataset.src;
      video.load(); // Start loading the video
      
      observer.unobserve(video); // Unobserve after loading  
      console.log("Video source set and loading started:", video.dataset.src);
    } else {
      console.log("Entry is not intersecting:", entry);
    }
  };

  const options = {
    root: null, // Observe the entire viewport
    
    threshold: 0.5, // Load when 50% of the video is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => loadMedia(entry));
  }, options);

  lazyMedias.forEach((video) => {
    observer.observe(video);
    console.log("Observer is set on video element:", video);
  });
});
//images
 document.addEventListener("DOMContentLoaded", () => {
   const lazyMedias = document.querySelectorAll(".lazy-load-images");

   const loadMedia = (entry) => {
     
     if (entry.isIntersecting || entry.intersectionRatio > 0) {
       const img = entry.target;
       img.src = img.dataset.src;
       img.classList.remove("placeholder"); // Optionally remove placeholder class
       observer.unobserve(img); // Unobserve after loading
       console.log("Image source set and loading started:", img.dataset.src);
     } else {
       console.log("Entry is not intersecting:", entry);
     }
   };

   const options = {
     root: null,
     rootMargin: "0px 0px 0px 0px",
     threshold: 0,
   };

   const observer = new IntersectionObserver((entries, observer) => {
     entries.forEach((entry) => loadMedia(entry));
   }, options);

   lazyMedias.forEach((img) => {
     observer.observe(img);
   });
 });

//update themes -dark adn light
const secondaryHeader=document.querySelector('.secondary-header')

var intersection_observer_options = {
  root: null,
  rootMargin: "0px 0px -100% 0px",
  threshold: 0,
};

var themeObserver = new IntersectionObserver(
  change_themes_on_view,
  intersection_observer_options
);

function change_themes_on_view(entries, observer) {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].boundingClientRect.top <= 0 && entries[i].isIntersecting) {
      var theme = entries[i].target.getAttribute("data-theme");
      const logoImg = secondaryHeader.querySelector(".logo-wrapper img");
      secondaryHeader.setAttribute("data-theme", theme);
      if (theme === "dark-mode") {
        logoImg.src = "../assets/images/secondary-header/logo.svg";
      } else {
        logoImg.src = "../assets/images/secondary-header/logo-dark.svg";
      }
    }
  }
}



//cta-mob-wrapper

const bottomCtas = document.querySelector(".cta-mob-wrapper");

var intersection_observer_options_bottom = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

var themeObserverBottom = new IntersectionObserver(
  change_themes_on_view_bottom,
  intersection_observer_options_bottom
);

function change_themes_on_view_bottom(entries, observer) {
  entries.forEach((entry) => {
   const viewportHeight =
     window.innerHeight || document.documentElement.clientHeight;
   if (entry.isIntersecting || entry.intersectionRatio > 0) {
     var theme = entry.target.getAttribute("data-theme");
     bottomCtas.setAttribute("data-theme", theme);
   }
  });
}

var themed_sections = document.querySelectorAll("*[data-theme]");
for (var i = 0; i < themed_sections.length; i++) {
  themeObserver.observe(themed_sections[i]);
  themeObserverBottom.observe(themed_sections[i]);
}


//scroll down button
document.getElementById("scrollDownButton").addEventListener("click", () => {
  window.scrollBy({
    top: window.innerHeight , // Scroll down by half the viewport height
    behavior: "smooth", // Smooth scrolling
  });
});

//scroll up button
document.getElementById("scrolUpButton").addEventListener("click", () => {
  window.scrollBy({
    top: -window.innerHeight , // Scroll down by half the viewport height
    behavior: "smooth", // Smooth scrolling
  });
});

//brain section comes to view - mobile view

document.addEventListener("DOMContentLoaded", () => {
  
    const brainSection = document.querySelector(".brain-section");

     const observerOptions = {
       root: null,
      //  rootMargin: "0px 0px -100% 0px",
       threshold: 0.5,
     };
     const brainHead = document.getElementById("brainHead");
     const pointers=document.querySelectorAll('.pointers')
     console.log()

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        const vid = document.getElementById("v0");
         if (entry.isIntersecting) {
           setTimeout(() => {
             brainHead.classList.add("active");
             pointers.forEach((pointer)=>{
              pointer.classList.add('active')
             })
           }, 1000);
           // Optionally, unobserve the section if you only want to trigger the function once
           observer.unobserve(entry.target);
         }
        
        if (entry.isIntersecting &&  window.innerWidth < 450) {
          console.log("entryyyy")
          refreshSlick("brain-slider");
          // Your function to execute when the section is in view
          setTimeout(() => {
            const slider = document.querySelector(".brain-slider-wrapper");
            slider.classList.add("active");
           
            updateActiveCount();
          }, 1000);
          // Optionally, unobserve the section if you only want to trigger the function once
          observer.unobserve(entry.target);
        }
       
       
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(brainSection);
  }
);

//video play on loop

document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".video-wrap video");
  const videoWraps = document.querySelectorAll(".video-wrap");
  const cards = document.querySelectorAll(".card-wrap");
   const updateActiveElements = (currentIndex, nextIndex) => {
     // Remove 'active' class from current video and card
     videoWraps[currentIndex].classList.remove("active");
     cards[currentIndex].classList.remove("active");

     // Add 'active' class to next video and card
     videoWraps[nextIndex].classList.add("active");
      // const activeVideo = videoWraps[nextIndex].querySelector("video");
      // console.log(activeVideo,"active")
      // activeVideo.play();
    if (window.innerWidth < 450) {

      // const slides = document.querySelectorAll(".responsive .slick-slide");
      // let slideIndex = 0;
      // $(".slick-slider .slick-slide").each(function (index) {
      //   if (!$(this).hasClass("slick-cloned")) {
      //     if ($(this).attr("data-id") === cleanedId) {
           
      //       slideIndex = index;
      //        console.log($(this).attr("data-id"), "slideindex");
      //        console.log(cleanedId, "slideindex");

      //       return false; // Exit the loop early once we find the match
      //     }
      //   }
      // });

      // Activate the corresponding slide if found
     $(".responsive").slick("slickNext");


    } else {
      cards[nextIndex].classList.add("active");
      const activeVideo = videoWraps[nextIndex].querySelector("video");
      activeVideo.addEventListener("timeupdate", updateVideoRange);

      updateVideoRange(); // Ensure the range is updated immediately

      // Play the next video
      videos[nextIndex].play();
    }
    
   };

  videos.forEach((video, index) => {
    video.addEventListener("ended", () => {
      // Determine the next video's index
      const nextIndex = (index + 1) % videos.length;

      // Update active elements
      updateActiveElements(index, nextIndex);
    });
  
  });
});
$(document).ready(function () {
  $(document).on("click", ".responsive .slick-dots button", function () {
    var dotIndex = $(this).parent().index();
    console.log(dotIndex, "dot index clicked");
     $("#experienceVideos .video-wrap").removeClass("active");

     // Add active class to the corresponding video wrapper
     $("#experienceVideos .video-wrap").eq(dotIndex).addClass("active");
    // Add your logic here to handle dot clicks
  });
});
$(document).ready(function () {
  $(".brain-slider").on("afterChange", function (event, slick, currentSlide) {
    $(".slick-slide").removeClass("fade-effect"); // Remove from all slides
    $(".slick-current").addClass("fade-effect"); // Add to the current active slide
  });

  // Initial setup on page load
  $(".slick-current").addClass("fade-effect");
});

//news-section tabs 

 document.addEventListener("DOMContentLoaded", () => {

   const reviewsWrap = document.getElementById("reviews-wrap");
   const blogsWrap = document.getElementById("blogs-wrap");
   const testimonialWrap = document.getElementById("testimonials-wrap");
   const reviewsSection = document.getElementById("reviews");
   const blogsSection = document.getElementById("blogs");
   const testimonialSection = document.getElementById("testimonials");
   const sections = document.querySelectorAll(
     ".news-cards-wrapper .tabs-section-wrapper"
   );
   const tabs = document.querySelectorAll(".news-tabs-wrapper .tab-wrap");
  
   reviewsWrap.addEventListener("click", () => {
     tabs.forEach((tab) => tab.classList.remove("active"));
     sections.forEach((section) => section.classList.remove("active"));
     reviewsSection.classList.add("active");
     reviewsWrap.classList.add("active");
   });

   blogsWrap.addEventListener("click", () => {
     tabs.forEach((tab) => tab.classList.remove("active"));
     sections.forEach((section) => section.classList.remove("active"));
     blogsSection.classList.add("active");
     blogsWrap.classList.add("active");
   });
   testimonialWrap.addEventListener("click", () => {
     tabs.forEach((tab) => tab.classList.remove("active"));
     sections.forEach((section) => section.classList.remove("active"));
     testimonialSection.classList.add("active");
     testimonialWrap.classList.add("active");
   });
 });

 document.addEventListener("DOMContentLoaded", () => {
  const heroMute = document.getElementById("hero-mute");
  heroMute.addEventListener("click",()=>{
   muteVideo(heroMute, "hero-video");
  })
  const chargerMute = document.getElementById("charger-mute");
  chargerMute.addEventListener("click", () => {
   muteVideo(chargerMute, "charger-video");
  });
   const publicChargerMute = document.getElementById("public-charger-mute");
   publicChargerMute.addEventListener("click", () => {
     muteVideo(publicChargerMute, "public-charger-video");
   });
 })

  document.addEventListener("DOMContentLoaded", () => {
    const dnaLink = document.getElementById("dnaLink");
     dnaLink.addEventListener("click", () => {
      selectMenu(dnaLink);
     });
     const brainLink = document.getElementById("brainLink");
     brainLink.addEventListener("click", () => {
       selectMenu(brainLink);
     });
     const experienceLink = document.getElementById("experienceLink");
     experienceLink.addEventListener("click", () => {
       selectMenu(experienceLink);
     });
     const chargingLink = document.getElementById("chargingLink");
     chargingLink.addEventListener("click", () => {
       selectMenu(chargingLink);
     });
      const pricingLink = document.getElementById("pricingLink");
      pricingLink.addEventListener("click", () => {
        selectMenu(pricingLink);
      });

  })

   document.addEventListener("DOMContentLoaded", () => {
     const brainCloseButton = document.getElementById("closeBrainSlider");
     brainCloseButton.addEventListener("click", () => {
       closeSlider()
     });
   })

    document.addEventListener("DOMContentLoaded", () => {
      const xhieldPointer = document.getElementById("xheild-pointer");
       xhieldPointer.addEventListener("click", () => {
         openPointer("smart-xhield", 1);
       });
       const navproPointer = document.getElementById("navpro-pointer");
       navproPointer.addEventListener("click", () => {
        openPointer('navpro',2)
       });
       const playtechPointer = document.getElementById("playtech-pointer");
       playtechPointer.addEventListener("click", () => {
        openPointer("playtech", 3);
       });
       const personalisationPointer = document.getElementById("personalisation-pointer");
       personalisationPointer.addEventListener("click", () => {
         openPointer("personalisation", 4);
       });
    })

      document.addEventListener("DOMContentLoaded", () => {
        const powerCard = document.querySelector(".experience-power-card");
         powerCard.addEventListener("click", () => {
          selectCard("power");
         });

          const safetyCard = document.querySelector(".experience-safety-card");
          safetyCard.addEventListener("click", () => {
            selectCard("safety");
          });

           const speedCard = document.querySelector(".experience-speed-card");
           speedCard.addEventListener("click", () => {
             selectCard("speed");
           });
            const comfortCard = document.querySelector(".experience-comfort-card");
            comfortCard.addEventListener("click", () => {
              selectCard("comfort");
            });
      })

        document.addEventListener("DOMContentLoaded", () => {
           const conciergeCta = document.getElementById(
             "concierge-cta"
           );
           conciergeCta.addEventListener("click", () => {
            OpenIconPopup("conciergePopup");
           });
            const conciergeCloseCta = document.getElementById(
             "concierge-close-cta"
           );
           conciergeCloseCta.addEventListener("click", () => {
             closeIconPopup("conciergePopup");
           });
           //garmin

           const garminCta = document.getElementById("garmin-cta");
           garminCta.addEventListener("click", () => {
             OpenIconPopup("garminPopup");
           });
           const garminCloseCta = document.getElementById(
             "garmin-close-cta"
           );
           garminCloseCta.addEventListener("click", () => {
             closeIconPopup("garminPopup");
           });
        })

 // Get all FAQ cards
const faqCards = document.querySelectorAll('.faq-card');

// Function to toggle active class based on input field value
function toggleActiveClass() {
    faqCards.forEach(card => {
        const input = card.querySelector('.faq-input');
        const button = card.querySelector('.faq-button');
        
        // Add active class if input has value, otherwise remove it
        if (input.value.trim() !== '') {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Add event listener for input change on each FAQ card
faqCards.forEach(card => {
    const input = card.querySelector('.faq-input');
    
    input.addEventListener('input', toggleActiveClass);
});

// Initial call to set initial state
toggleActiveClass();
 

//secondary nav working
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll("#secondaryMenu a");
  console.log(menuLinks, "sections");
   
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Adjust based on when you want to trigger the active state
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const link = document.querySelector(
        `#secondaryMenu a[href="#${entry.target.id}"]`
      );
      if(link){
      if (entry.isIntersecting) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

//dealership tabs working

// const tabSelection=(id,tabId,state)=>{
//   const tabWrapper = document.querySelectorAll("#mapTabs .tabs");
//   console.log(tabWrapper,"tabs")
//   const cardWrappers = document.querySelectorAll(".pincode-card-wrapper");
//   const stateWrapper = document.getElementById("pincodeStates");
//   if(state==='active'){
//     stateWrapper.classList.add('active')
//     cardWrappers.forEach((wrapper) => {
//       if (wrapper.id === id) {
//         wrapper.classList.add("active");
//       } else {
//         wrapper.classList.remove("active");
//       }
//     });
//   }
 
//   tabWrapper.forEach((tab) => {
//     if (tab.id === tabId) {
//       tab.classList.add("active");
//     } else {
//       tab.classList.remove("active");
//     }
//   });

// }
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("#mapTabs .tabs");
  const cardWrappers = document.querySelectorAll(".pincode-card-wrapper");
  const stateWrapper = document.getElementById("pincodeStates");
  const nextSvg = document.getElementById("nextSvg");
const input = document.getElementById("pincodeInput");
const text = document.getElementById("pincodeCopy");
  const tabSelection = (id, tabId, state) => {
    if (state === "active") {
      stateWrapper.classList.add("active");
    }

    tabs.forEach((tab) => {
      tab.classList.toggle("active", tab.id === tabId);
    });

    cardWrappers.forEach((wrapper) => {
      wrapper.classList.toggle("active", wrapper.id === id);
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabSelection(`${tab.id}-cards`, tab.id);
    });
  });

 const handleNextSvgClickOrEnterPress = () => {
   const activeTab = document.querySelector("#mapTabs .tabs.active");
   if (activeTab && input.value.trim() !== "") {
    text.textContent =
      "Your pin is being captured to show nearby dealership locations and public chargers";
     tabSelection(`${activeTab.id}-cards`, activeTab.id, "active");
   }
   if(input.value.trim() === "123456"){
    stateWrapper.classList.remove("active");
    stateWrapper.classList.add("not-exist");
   }
 };

 nextSvg.addEventListener("click", handleNextSvgClickOrEnterPress);

 input.addEventListener("keypress", (event) => {
   if (event.key === "Enter") {
     handleNextSvgClickOrEnterPress();
   }
 });
  input.addEventListener("input", (event) => {
    const value = input.value;
    const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value !== numericValue) {
      input.value = numericValue; // Update the input value to only numeric characters
    }
  });
});
