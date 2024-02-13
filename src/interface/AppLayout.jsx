import { Outlet } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { useEffect, useRef, useState } from "react";
import { Routes, useLocation, Route, Navigate } from "react-router-dom";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const AppLayout = () => {
  let ref = useRef();
  let location = useLocation();
  useEffect(() => {
    function update(time) {
      ref.current?.lenis?.raf(time * 1000);
      ScrollTrigger.update();
    }
    // ref.current?.resize();
    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, [location]);

  return (
    <>
      <ReactLenis
        ref={ref}
        autoRaf={false}
        root
        options={{
          autoResize: true,
          duration: 1.8,
        }}
      />
      <Header />
      <main className="relative bg-color1">
        <Outlet />
      </main>
      <Footer scrollTriggered={true} />
    </>
  );
};
