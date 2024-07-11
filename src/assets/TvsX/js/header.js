//header
document.addEventListener("DOMContentLoaded", async function () {
  try {
    const responseHeader = await fetch("../components/header.html");
    // const responseSecondaryHeader = await fetch(
    //   "../../components/secondary-header.html"
    // );
    const responseFooter = await fetch("../components/footer.html");
    let htmlHeader = await responseHeader.text();
    let htmlFooter = await responseFooter.text();
    // let htmlsecondaryHeader = await responseSecondaryHeader.text();
    let headerComponent =
      document.getElementById("headerComponent") || undefined;
    // let secondaryHeaderComponent =
    //   document.getElementById("secondaryHeaderComponent") || undefined;
    let footerComponent =
      document.getElementById("footerComponent") || undefined;
    if (headerComponent) {
      headerComponent.outerHTML = htmlHeader;
    }
    if (footerComponent) {
      footerComponent.outerHTML = htmlFooter;
    }
    // if (secondaryHeaderComponent) {
    //   secondaryHeaderComponent.outerHTML = htmlsecondaryHeader;
    // }

    // let script = document.createElement("script");
    // script.src = "src/js/components/navBar.js";
    // document.body.appendChild(script);
  } catch (error) {
    console.log(error);
  }
});

//fixed nav
var lastScrollTop = 0;
var scrollTimeout;


function hasScrolled() {
  // Clear the previous timeout to prevent it from firing while scrolling
  clearTimeout(scrollTimeout);

  // Hide the header when scrolling starts
  $(".secondary-header-wrapper").addClass("fade-out").removeClass("fade-in");
  $(".cta-mob-wrapper").addClass("fade-out").removeClass("fade-in");

  // Set a timeout to show the header after scrolling stops
  scrollTimeout = setTimeout(function () {
    $(".secondary-header-wrapper").removeClass("fade-out").addClass("fade-in");
    $(".cta-mob-wrapper").removeClass("fade-out").addClass("fade-in");
  }, 200); // Adjust the timeout duration as needed
}

// Attach the scroll event listener
$(window).scroll(hasScrolled);

// Ensure the header is visible on page load
$(document).ready(function () {
  // $(".secondary-header-wrapper").removeClass("fade-out").addClass("fade-in");
  // $(".cta-mob-wrapper").removeClass("fade-out").addClass("fade-in");
});


