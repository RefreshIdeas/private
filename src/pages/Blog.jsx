import { Link } from "react-router-dom";
import PageTransitions from "../animation/PageTransitions";
import { InnerPage_heroSec } from "../components/layout/InnerPage_heroSec";
import OverlayTextReveal from "../animation/OverlayTextReveal";
import { MagneticHover } from "../animation/MagneticHover";
import { UniversalFadeUp } from "../animation/UniversalFadeUp";

export const Blog = () => {
  return (
    <>
      <InnerPage_heroSec
        subheading="Insights, Tutorials, and Tech Musings"
        heading="Explore Blog Posts"
        pera="Explore a curated collection of my latest blog posts on web development, software engineering, and tech trends. From practical tutorials to insightful discussions, find knowledge to fuel your coding journey."
      />

      <div className="container">
        <div className="flex justify-start flex-wrap mx-[-15px]">
          <div className="lg:basis-6/12 basis-full lg:mb-[7rem] mb-[5rem]">
            <UniversalFadeUp
              starting="center bottom"
              ending="center 65%"
              initialPosition="translate-y-[100px] opacity-0"
            >
              <Link to={"/blog/blogid"} className="">
                <MagneticHover magneticValue={0.01}>
                  <img
                    src="https://framerusercontent.com/images/PsIlsU4MkmD8LBweO6ZAcx4Avs.jpg?scale-down-to=1024"
                    className="rounded-[3rem] md:h-[40rem] h-[30rem] w-full object-cover"
                    alt=""
                  />
                  <div className="px-[3rem] mt-[2rem]">
                    <OverlayTextReveal
                      onlyoverlay={true}
                      starting="top bottom"
                      ending="bottom 98%"
                    >
                      <h3 className="md:text-[3.8rem] text-[2.4rem] text-color2 font-light">
                        Top Sketch plugins voor (freelance) webdesigners
                      </h3>
                    </OverlayTextReveal>
                  </div>
                </MagneticHover>
              </Link>
            </UniversalFadeUp>
          </div>
          <div className="lg:basis-6/12 basis-full lg:mb-[7rem] mb-[5rem]">
            <UniversalFadeUp
              starting="center bottom"
              ending="center 65%"
              initialPosition="translate-y-[100px] opacity-0"
            >
              <Link to={"/blog/blogid"} className="">
                <MagneticHover magneticValue={0.01}>
                  <img
                    src="https://framerusercontent.com/images/PsIlsU4MkmD8LBweO6ZAcx4Avs.jpg?scale-down-to=1024"
                    className="rounded-[3rem] md:h-[40rem] h-[30rem] w-full object-cover"
                    alt=""
                  />
                  <div className="px-[3rem] mt-[2rem]">
                    <OverlayTextReveal
                      onlyoverlay={true}
                      starting="top bottom"
                      ending="bottom 98%"
                    >
                      <h3 className="md:text-[3.8rem] text-[2.4rem] text-color2 font-light">
                        Top Sketch plugins voor (freelance) webdesigners
                      </h3>
                    </OverlayTextReveal>
                  </div>
                </MagneticHover>
              </Link>
            </UniversalFadeUp>
          </div>
          <div className="lg:basis-6/12 basis-full lg:mb-[7rem] mb-[5rem]">
            <UniversalFadeUp
              starting="center bottom"
              ending="center 65%"
              initialPosition="translate-y-[100px] opacity-0"
            >
              <Link to={"/blog/blogid"} className="">
                <MagneticHover magneticValue={0.01}>
                  <img
                    src="https://framerusercontent.com/images/PsIlsU4MkmD8LBweO6ZAcx4Avs.jpg?scale-down-to=1024"
                    className="rounded-[3rem] md:h-[40rem] h-[30rem] w-full object-cover"
                    alt=""
                  />
                  <div className="px-[3rem] mt-[2rem]">
                    <OverlayTextReveal
                      onlyoverlay={true}
                      starting="top bottom"
                      ending="bottom 98%"
                    >
                      <h3 className="md:text-[3.8rem] text-[2.4rem] text-color2 font-light">
                        Top Sketch plugins voor (freelance) webdesigners
                      </h3>
                    </OverlayTextReveal>
                  </div>
                </MagneticHover>
              </Link>
            </UniversalFadeUp>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTransitions(Blog);
