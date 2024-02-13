import { useEffect } from "react";

export const Cursor = () => {
  useEffect(() => {
    var xp = 0,
      mouseX = 0;
    var yp = 0,
      mouseY = 0;
    var xpDot = 0,
      mouseX = 0;
    var ypDot = 0,
      mouseY = 0;

    const cursorFollower = document.querySelector(".cursorFollower");
    const cursorFollowerDot = document.querySelector(".cursorFollowerDot");

    document.addEventListener("mousemove", (e) => {
      if (e.target.closest(".spotlight")) {

        cursorFollowerDot.classList.add("big");
      } else {
        cursorFollowerDot.classList.remove("big");
      }
      mouseX = e.pageX;
      mouseY =
        e.pageY -
        (document.documentElement.scrollTop || document.body.scrollTop);
    });

    setInterval(function () {
      xp += (mouseX - xp) / 30;
      yp += (mouseY - yp) / 30;

      cursorFollower.style.left = xp + "px";
      cursorFollower.style.top = yp + "px";
    }, 0);

    setInterval(function () {
      xpDot += (mouseX - xpDot) / 25;
      ypDot += (mouseY - ypDot) / 25;

      cursorFollowerDot.style.left = xpDot + "px";
      cursorFollowerDot.style.top = ypDot + "px";
    }, 0);
  }, []);
  return (
    <div>
      <span id="cursorFollower" className="cursorFollower"></span>
      <span id="cursorFollowerDot" className="cursorFollowerDot"></span>
    </div>
  );
};
