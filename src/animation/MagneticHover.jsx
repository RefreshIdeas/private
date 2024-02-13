import { Icon } from "@iconify/react";
import React, { useEffect, useRef } from "react";

export const MagneticHover = ({
  children,
  areaWidth = "100px",
  areaHight = "200px",
  magneticValue = 0.01,
}) => {
  let ref = useRef();
  useEffect(() => {
    let magneticArea = ref.current;
    let magneticElement = magneticArea.querySelector(".magnetic-element");
    magneticArea.addEventListener("mousemove", function (e) {
      let Xvalue =
        e.pageX - this.getBoundingClientRect().x - this.offsetWidth / 2;
      let Yvalue = e.pageY - this.offsetTop - this.offsetHeight / 2;
      magneticElement.animate(
        [
          {
            transform: `translate(${Xvalue * magneticValue}px,${
              Yvalue * magneticValue
            }px)`,
          },
        ],
        {
          duration: 500,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    });
    magneticArea.addEventListener("mouseleave", function (e) {
      magneticElement.animate([{ transform: "translate(0, 0)" }], {
        duration: 500,
        easing: "ease-in-out",
        fill: "forwards",
      });
    });

    return () => {
      //   magneticArea.removeEventListener();
    };
  });

  return (
    <div className="flex justify-center items-center">
      <div
        ref={ref}
        className="magnetic-area  relative flex justify-center items-center max-w-max max-h-max"
      >
        <div className="flex justify-center items-center">
          <div
            className="magnetic-element duration-600 ease-linear"
            data-magnetic-value="0.1"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
