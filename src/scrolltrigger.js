// Importing necessary modules from the gsap library
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

// Registering gsap plugins
gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollTrigger);

// Exporting the initGSAPThemescroll function
export let initGSAPThemescroll = () => {
  // Selecting DOM elements using document.querySelectorAll
  let sections = document.querySelectorAll("section"),
    images = document.querySelectorAll(".bg"),
    headings = gsap.utils.toArray(".section-heading"),
    outerWrappers = gsap.utils.toArray(".outer"),
    innerWrappers = gsap.utils.toArray(".inner"),
    currentIndex = -1,
    wrap = gsap.utils.wrap(0, sections.length), // Creating a wrapped value utility function
    animating;

  // Setting initial styles for outer and inner wrappers
  gsap.set(outerWrappers, { yPercent: 100 });
  gsap.set(innerWrappers, { yPercent: -100 });

  // Function to navigate to a specific section with animations

  function gotoSection(index, direction) {
    index = wrap(index); // Ensure index is within valid range
    animating = true;
    let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => (animating = false),
      });
    if (currentIndex >= 0) {
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
        sections[currentIndex],
        { autoAlpha: 0 }
      );
    }

    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      {
        yPercent: (i) => {
          console.log(i);
          return i ? -100 * dFactor : 100 * dFactor;
        },
      },
      {
        yPercent: 0,
      },
      0
    )
      .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
      .fromTo(
        headings[index],
        { fontSize: "0px", yPercent: 390 },
        { fontSize: "60px", yPercent: 0 },
        0
      );

    currentIndex = index;
  }

  // Creating an Observer for mouse wheel events
  Observer.create({
    type: "wheel,pointer",
    wheelSpeed: -1,
    onDown: () =>
      !animating && 0 < currentIndex && gotoSection(currentIndex - 1, -1),
    onUp: () =>
      !animating &&
      sections.length - 1 > currentIndex &&
      gotoSection(currentIndex + 1, 1),
    tolerance: 100,
    preventDefault: true,
  });

  // Initializing by navigating to the first section
  gotoSection(0, 1);
};
