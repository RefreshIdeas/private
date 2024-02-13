import React, { useEffect, useRef } from "react";
import gsap from "gsap/gsap-core";

export const FlareImages = ({ children, imagesArray = [] }) => {
  let ref = useRef();
  useEffect(() => {
    let splitImages = ref.current;
    let revealTextFromIMage = gsap.timeline({
      scrollTrigger: {
        trigger: splitImages,
        start: "100 90%",
        end: "bottom 90%",
        scrub: 1,
      },
    });

    revealTextFromIMage
      .to(splitImages?.querySelector(".firstImage.revealTextFromIMageLeft"), {
        rotate: "-20deg",
        opacity: 1,
        translateX: "-400px",
        translateY: "150px",

        duration: 1,
        ease: "linear",
      })
      .to(
        splitImages?.querySelector(".firstImage.revealTextFromIMageRight"),
        {
          translateY: "150px",
          rotate: "20deg",
          opacity: 1,
          translateX: "400px",
          duration: 1,
          ease: "linear",
        },
        0
      )
      .to(
        splitImages?.querySelector(".lastImage.revealTextFromIMageLeft"),
        {
          rotate: "-15deg",
          translateY: "-250px",
          translateX: "-300px",
          duration: 1,
          ease: "linear",
        },
        0
      )
      .to(
        splitImages?.querySelector(".lastImage.revealTextFromIMageRight"),
        {
          rotate: "15deg",
          translateY: "-250px",
          translateX: "300px",
          duration: 1,
          ease: "linear",
        },
        0
      )
      .to(
        splitImages?.querySelector(".revealTextFromIMageLeft.centerImage"),
        {
          rotate: "-29deg",

          opacity: 1,
          translateX: "-400px",
          duration: 1,
          ease: "linear",
        },
        0
      )
      .to(
        splitImages?.querySelector(".revealTextFromIMageRight.centerImage"),
        {
          rotate: "29deg",
          opacity: 1,
          translateX: "400px",
          duration: 1,
          ease: "linear",
        },
        0
      );
    return () => {
      revealTextFromIMage.kill();
    };
  }, []);

  if (imagesArray.length < 6)
    return <h2 className="text-color2">Please provide 6 images</h2>;
  return (
    <>
      <div
        ref={ref}
        className="splitImages mb-[-300px] flex items-center relative   bg-black container flex-wrap  pt-[180px]"
      >
        <div className="absolute mx-auto top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]">
          {children}
        </div>

        <div className="basis-6/12 bg-color1 revealTextFromIMageLeft h-[500px]  object-cover border-[1px] border-gray-800 rounded-[30px] overflow-hidden origin-bottom-left !p-0 firstImage">
          <img
            src={imagesArray[0]}
            className="h-full w-full object-cover opacity-70"
            alt=""
          />
        </div>

        <div className="basis-6/12 bg-color1 revealTextFromIMageRight h-[500px] object-cover border-[1px] border-gray-800 rounded-[30px] overflow-hidden origin-bottom-right !p-0 firstImage">
          <img
            src={imagesArray[1]}
            className="h-full w-full object-cover opacity-70"
            alt=""
          />
        </div>

        <div className="basis-6/12 bg-color1 revealTextFromIMageLeft h-[500px]  object-cover border-[1px] border-gray-800 rounded-[30px] overflow-hidden origin-bottom-left !p-0 centerImage">
          <img
            src={imagesArray[2]}
            className="h-full w-full object-cover opacity-70"
            alt=""
          />
        </div>

        <div className="basis-6/12 bg-color1 revealTextFromIMageRight h-[500px]  object-cover border-[1px] border-gray-800 rounded-[30px] overflow-hidden origin-bottom-right !p-0 centerImage">
          <img
            src={imagesArray[3]}
            className="h-full w-full object-cover opacity-70"
            alt=""
          />
        </div>

        <div className="basis-6/12 bg-color1 revealTextFromIMageLeft h-[500px] notcenter object-cover border-[1px] border-gray-800 rounded-[30px] overflow-hidden origin-bottom-left !p-0 lastImage">
          <img
            src={imagesArray[4]}
            className="h-full w-full object-cover opacity-70"
            alt=""
          />
        </div>

        <div className="basis-6/12 bg-color1 revealTextFromIMageRight h-[500px] notcenter object-cover border-[1px] border-gray-800 rounded-[30px] overflow-hidden origin-bottom-right !p-0 lastImage">
          <img
            src={imagesArray[5]}
            className="h-full w-full object-cover opacity-70"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
