import { useEffect, useRef } from "react";

export const SpotLightEffect = () => {
  let ref = useRef();
  useEffect(() => {
    const spotlightSize = 400;

    document.addEventListener(
      "mousemove",
      function (event) {
        if (window.event) {
          // IE fix
          event = window.event;
        }
        let title = ref.current.querySelector(".title");

        // Get the coordinates of the title
        let titleRect = ref.current
          .querySelector(".title")
          .getBoundingClientRect();

        // Grab the mouse's X-position
        let mouseX = event.clientX;

        // Position spotlight x coordinate based on mouse x, center based on width of spotlight, take into account element x offset
        let spotlightX = mouseX - spotlightSize / 2 - titleRect.left;

        // Grab the mouse's Y position
        let mouseY = event.clientY;

        // Position spotlight y coordinate based on mouse y, center based on width of spotlight, take into account element y offset
        let spotlightY = mouseY - spotlightSize / 2 - titleRect.top;

        // Set x and y position of spotlight

        title.style = `--y:${spotlightY}px;--x:${spotlightX}px;`;
      },
      false
    );
  });

  return (
    <div ref={ref} className="spotLight-wrapper relative h-screen">
      <h1 className="text-[10rem] text-white h-full w-full">Spotlight animation technique</h1>
      <div className="title absolute h-full w-full top-0 left-0"></div>
    </div>
  );
};
