import { Navigation } from "./Navigation";
import { Logo } from "../../interface/ui/Logo";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  let [navigation, setNavigation] = useState(screen.width > 768 ? true : false);
  return (
    <>
      <header>
        <div className="container flex_v_center justify-between py-[2.5rem] fixed left-[50%] translate-x-[-50%] z-[100] !px-0">
          <div className="logo basis-auto relative z-50">
            <Link to={"/"}>
              <Logo className={"md:h-[100px] h-[80px] md:w-[100px] w-[80px]"} />
            </Link>
          </div>
          <Navigation show={navigation} />
          <div className="contact_us basis-auto md:block hidden">
            <Link to={"/contact"} className="btn primary btn-lg ">
              Contact
            </Link>
          </div>
          <div className="hamburger basis-auto md:hidden block  ">
            <div
              className="plates glass_effect rounded-full"
              onClick={() => setNavigation(!navigation)}
            >
              <div
                className="plate plate1"
                onClick={(e) =>
                  e.target.closest(".plate").classList.toggle("active")
                }
              >
                <svg
                  className="burger"
                  version="1.1"
                  height="100"
                  width="100"
                  viewBox="0 0 100 100"
                >
                  <path className="line line1" d="M 30,65 H 70" />
                  <path
                    className="line line2"
                    d="M 70,50 H 30 C 30,50 18.644068,50.320751 18.644068,36.016949 C 18.644068,21.712696 24.988973,6.5812347 38.79661,11.016949 C 52.604247,15.452663 46.423729,62.711864 46.423729,62.711864 L 50.423729,49.152542 L 50.423729,16.101695"
                  />
                  <path
                    className="line line3"
                    d="M 30,35 H 70 C 70,35 80.084746,36.737688 80.084746,25.423729 C 80.084746,19.599612 75.882239,9.3123528 64.711864,13.559322 C 53.541489,17.806291 54.423729,62.711864 54.423729,62.711864 L 50.423729,49.152542 V 16.101695"
                  />
                </svg>
                <svg
                  className="x"
                  version="1.1"
                  height="100"
                  width="100"
                  viewBox="0 0 100 100"
                >
                  <path className="line" d="M 34,32 L 66,68" />
                  <path className="line" d="M 66,32 L 34,68" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
