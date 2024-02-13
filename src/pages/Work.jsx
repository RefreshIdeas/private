import OverlayTextReveal from "../animation/OverlayTextReveal";
import { TextReveal_vertical } from "../animation/TextReveal_vertical";
import { UniversalFadeHorizontal } from "../animation/UniversalFadeHorizontal";
import PageTransitions from "../animation/PageTransitions";
import { InnerPage_heroSec } from "../components/layout/InnerPage_heroSec";
import youtubeclone from "../images/youtubeClone.jpg";
import lmsImage from "../images/lms.jpg";
import todoImage from "../images/todo.jpg";
import adminPanelImage from "../images/admin-panel.jpg";
import instaclone from "../images/instaclone.png";
import schoolapi from "../images/schoolapi.jpg";
import { MagneticHover } from "../animation/MagneticHover";
import upcomingProjectsVideo from "../images/uplcoming_projects.mp4";
import { useEffect, useState } from "react";
import { useScreenSize } from "../hooks/useScreenSize";

const Work = () => {
  let isLargeDevice = useScreenSize("lg", true);
  let [projecList, setprojextList] = useState([]);
  let even = (val) => val % 2 === 0;
  useEffect(() => {
    let list = [
      {
        name: "Video Stream",
        detail: "React js and rapid api",
        url: youtubeclone,
      },
      {
        name: "Learning Managment System",
        detail: "Mysql,express,node and react",
        url: lmsImage,
      },
      {
        name: "My school",
        detail: "Mysql,express,node Api",
        url: schoolapi,
      },
      {
        name: "All Projects",
        detail: "Frontend and backend",
        url: upcomingProjectsVideo,
        type: "video",
      },
      {
        name: "Social Networking Site",
        detail: "Mysql, express, node, react and web socket",
        url: instaclone,
      },
      {
        name: "Todo List",
        detail: "Mysql, express, node and react",
        url: todoImage,
      },
      {
        name: "Admin Panel",
        detail: "Mysql, express, node, react and web socket",
        url: adminPanelImage,
      },
    ];
    setprojextList(list);
  }, [isLargeDevice]);

  return (
    <div>
      <InnerPage_heroSec
        subheading="Building Innovative Solutions Across the Tech Stack"
        heading="My Full Stack Journey"
        pera="Transforming creative ideas into seamless and impactful digital experiences through innovative full-stack development and a passion for elegant solutions."
      />

      <div className="container ">
        <div className="flex items-center justify-center flex-col max-w-[1100px] mx-auto ">
          <TextReveal_vertical
            text="Each project is a canvas for innovation. I specialize in designing and developing robust, scalable applications that blend creativity with functionality. Explore my diverse portfolio showcasing a range of solutions crafted to exceed expectations and leave a lasting impression."
            classes="lg:text-[4rem] md:text-[2.4rem] text-[2.4rem] font-light text-color2 normal-case md:mr-4 mr-2"
            justify="center"
            hightlighTextsArray={[
              "innovation",
              "robust,",
              "scalable",
              "applications",
              "creativity",
              "with",
              "functionality",
              "exceed",
              "expectations",
              "lasting",
              "impression",
            ]}
          />
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="container mt-[14rem] ">
          <div className="flex justify-between items-center flex-wrap  w-full ">
            {projecList.map(({ name, detail, url, type = false }, index) =>
              !type ? (
                <div
                  key={index}
                  className={`lg:basis-7/12 basis-full lg:mb-[10rem] mb-[5rem] !px-0 ${
                    even(+index) ? "" : "ml-auto"
                  }`}
                >
                  <MagneticHover magneticValue={0.08}>
                    <UniversalFadeHorizontal
                      onfinish={
                        isLargeDevice
                          ? `${even(+index) ? "-100px" : "100px"}`
                          : 0
                      }
                      starting={isLargeDevice ? null : "top bottom"}
                      ending={isLargeDevice ? null : "center center"}
                      initialPosition={`${
                        even(+index)
                          ? "translate-x-[100px]"
                          : "-translate-x-[100px]"
                      } opacity-80`}
                    >
                      <img
                        src={url}
                        alt=""
                        className=" lg:rounded-[5rem] rounded-[3rem] md:h-[450px] h-[350px] w-full object-cover"
                      />
                      <div className="px-[20px] mt-[2.2rem]">
                        <OverlayTextReveal
                          onlyoverlay={true}
                          starting="bottom bottom"
                          ending="bottom bottom"
                        >
                          <h3 className="lg:text-[4.5rem] md:text-[3rem] text-[2.4rem] leading-normal uppercase font-light text-color2 lg:leading-[6rem] mb-0">
                            {name}
                          </h3>
                        </OverlayTextReveal>
                        <p className="text-[1.8rem] text-color2 capitalize font-extralight">
                          {detail}
                        </p>
                      </div>
                    </UniversalFadeHorizontal>
                  </MagneticHover>
                </div>
              ) : (
                <div
                  className="basis-full lg:mb-[10rem] mb-[5rem] !px-0"
                  key={index}
                >
                  <MagneticHover magneticValue={0.08}>
                    <UniversalFadeHorizontal
                      initialPosition="-translate-x-[100px] opacity-80"
                      onfinish={isLargeDevice ? "100px" : 0}
                      starting={isLargeDevice ? null : "top bottom"}
                      ending={isLargeDevice ? null : "center center"}
                    >
                      <video
                        loop
                        autoPlay
                        muted
                        src={url}
                        className="lg:h-[70rem] w-full object-cover overflow-hidden lg:rounded-[5rem] rounded-[3rem] md:h-[450px] h-[350px]"
                      ></video>
                      <div className="px-[20px] mt-[2.2rem]">
                        <OverlayTextReveal
                          onlyoverlay={true}
                          starting="bottom bottom"
                          ending="bottom bottom"
                        >
                          <h3 className="lg:text-[4.5rem] md:text-[3rem] text-[2.4rem] leading-normal uppercase font-light text-color2 lg:leading-[6rem] mb-0">
                            {name}
                          </h3>
                        </OverlayTextReveal>
                        <p className="text-[1.8rem] text-color2 capitalize font-extralight">
                          {detail}
                        </p>
                      </div>
                    </UniversalFadeHorizontal>
                  </MagneticHover>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTransitions(Work);
