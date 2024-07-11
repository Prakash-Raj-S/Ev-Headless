import Cursor from "cursor";
import Magnetic from "magnetic";

// Basic cursor

// Cursor options with defaults
const cursor = new Cursor({
    container: "body", // container to attach
    speed: 0.7, // default speed
    ease: "expo.out", // default ease (gsap)
    visibleTimeout: 300 // disappear timeout
});

// Basic magnetic

// Magnetic options with default
const magnetic = new Magnetic(el, {
    y: 0.2, // horizontal delta
    x: 0.2, // vertical delta
    s: 0.2, // speed
    rs: 0.7 // release speed
});

// Automatic handle magnetic elements through attribute
$('[data-magnetic]').each(function () {new Magnetic(this);});