// Importing necessary modules from the gsap library
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Registering gsap plugins
gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// Exporting the initGSAPThemescroll function
export let initGSAPThemescroll = (callback, disableObserver) => {
  window.scrollTo(0, 0);

  // Selecting DOM elements using document.querySelectorAll
  let sections = document.querySelectorAll(".panel"),
    images = document.querySelectorAll(".bg"),
    headings = gsap.utils.toArray(".section-heading"),
    outerWrappers = gsap.utils.toArray(".outer"),
    observers = document.querySelector(".observers"),
    innerWrappers = gsap.utils.toArray(".inner"),
    currentIndex = -1,
    wrap = gsap.utils.wrap(0, sections.length), // Creating a wrapped value utility function
    animating;

  // Setting initial styles for outer and inner wrappers
  gsap.set(outerWrappers, { yPercent: 100 });
  gsap.set(innerWrappers, { yPercent: -100 });

  let intentObserver = Observer.create({
    target: ".observers",
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    onDown: (e) => {
      !animating && gotoSection(currentIndex - 1, -1);
    },
    onUp: (e) => {
      !animating && gotoSection(currentIndex + 1, 1);
    },
    tolerance: 10,
    preventDefault: true,
  });

  let intentObserverInner = Observer.create({
    target: ".stopScroll",
    type: "wheel,touch,pointer",

    onDown: (e) => {
      let target = e.target.querySelector(".scrollableBlock");

      if (target.scrollTop + target.clientHeight >= target.scrollHeight - 2) {
        intentObserverInner.disable();
        intentObserver.enable();
      }
      gsap.to(document.querySelector(".stopScroll"), {
        // scrollTo: { offsetY: 30 },
        duration: 1, // Adjust the duration as needed
        ease: "power2.out", // Choose an easing function
      });
    },
    onUp: (e) => {
      let target = e.target.querySelector(".scrollableBlock");
      // console.log(
      //   target.scrollTop + target.clientHeight,
      //   "------- ",
      //   target.scrollHeight
      // );

      if (e.target.querySelector(".scrollableBlock").scrollTop <= 0) {
        intentObserverInner.disable();
        intentObserver.enable();
      }
      gsap.to(document.querySelector(".stopScroll"), {
        // scrollTo: { offsetY: -30 },
        duration: 1, // Adjust the duration as needed
        ease: "power2.out", // Choose an easing function
      });
    },
    // tolerance: 10,
    preventDefault: false,
  });

  // Function to navigate to a specific section with animations

  function gotoSection(index, direction) {
    document.body.classList.add("overflow-hidden");
    document.documentElement.classList.add("overflow-hidden");
    if (sections.length === index) {
      intentObserver.disable();
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
      gsap.to(window, {
        scrollTo: screen.height,
        duration: 0.8,
        ease: "linear",
      });
    }
    animating = true;

    if (index === sections.length && direction > 0) {
      document.body.classList.remove("overflow-hidden");
      intentObserver.disable();
      return;
    }

    if (index < 0 && direction < 0) {
      animating = false;
      return;
    }
    /* Rest of your code */
    index = wrap(index); // make sure it's valid
    if (sections[index].classList.contains("stopScroll")) {
      document.body.classList.add("overflow-hidden");
      intentObserver.disable();
      intentObserverInner.enable();
    }

    let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => {
          setTimeout(() => {
            animating = false;
          }, 1000);
        },
      });
    if (currentIndex >= 0) {
      sections[currentIndex].classList.remove("active");
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(images[currentIndex], { yPercent: 0 }).set(sections[currentIndex], {
        autoAlpha: 0,
      });
    }
    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    sections[index].classList.add("active");
    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      {
        yPercent: (i) => {
          return i ? -100 * dFactor : 100 * dFactor;
        },
      },
      {
        yPercent: 0,
      },
      0
    ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

    currentIndex = index;

    callback();

    window.addEventListener("scroll", function (e) {
      if (animating && window.scrollY <= sections[currentIndex].offsetTop) {
        intentObserver.enable();
        animating = false;
      }
    });
  }

  // Creating an Observer for mouse wheel events
  // // disable observer on component unmount
  if (disableObserver === "disable") {
    intentObserver.kill();
    intentObserverInner.kill();
    document.documentElement.classList.remove("overflow-hidden");
    document.body.classList.remove("overflow-hidden");

    return;
  }
  // Initializing by navigating to the first section
  gotoSection(0, 1);
};

// exporing gsap observer wheel
export let observeGsapWheel = (callback) => {
  // return Observer.create({
  //   type: "wheel,pointer",
  //   wheelSpeed: -1,
  //   onUp: () => callback(),
  //   onDown: () => callback(),
  //   tolerance: 10,
  //   preventDefault: true,
  // });
};
