"use client";
import Contact from "@/Component/Contact";
import Footer from "@/Component/Footer";
import Hero from "@/Component/Hero";
import Navbar from "@/Component/Navbar";
import Project from "@/Component/Project";
import Skill from "@/Component/Skill";
import { useState } from "react";

export default function Home() {
  const [sideMenuOpen, setsideMenuOpen] = useState(false)
  return (
    <>
    
      <div className=" class text-neutral-300 selection:bg-white selection:text-black  ">

        <div className=" fixed top-0 -z-10 h-full w-full overflow-x-hidden">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className=" relative mx-auto lg:px-[140px] px-4 pb-8">
          <Navbar
            sideMenuOpen={sideMenuOpen}
            setsideMenuOpen={setsideMenuOpen}
          />
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
