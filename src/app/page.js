"use client";
import Contact from "@/Component/Contact";
import Footer from "@/Component/Footer";
import Hero from "@/Component/Hero";
import Navbar from "@/Component/Navbar";
import Progressbar from "@/Component/Progressbar";
import Project from "@/Component/Project";
import Skill from "@/Component/Skill";
import { useState ,useEffect,useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const [sideMenuOpen, setsideMenuOpen] = useState(false)
  const curser= useRef(null);

  const curserFollower = (e) => {
    gsap.to(curser.current, {
      duration: 0.3,
      x: e.clientX - 18,
      y: e.clientY - 18,
      ease: "power1.out"
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove",curserFollower);
    return()=>window.removeEventListener("mousemove",curserFollower);
  }, []);


  return (
    <>
    <Progressbar/>
    <div ref={curser} className="w-6 h-6 fixed bg-orange-400 rounded-full z-40 pointer-events-none mix-blend-lighten "></div>
      <div className=" class text-neutral-300 selection:bg-white selection:text-black  ">

        <div className=" fixed top-0 -z-10 h-full w-full overflow-x-hidden">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
          <Navbar
            sideMenuOpen={sideMenuOpen}
            setsideMenuOpen={setsideMenuOpen}
            curser={curser}
          />
        <div className=" relative mx-auto lg:px-[140px] px-4 py-20 ">
          <Hero  />
          <Skill  />
          <Project  sideMenuOpen={sideMenuOpen} />
          <Contact  />
          <Footer />
        </div>
      </div>
    </>
  );
}
