"use client"
import React from 'react'
import {motion , useScroll} from 'motion/react'
function Progressbar() {
    const {scrollYProgress}=useScroll()
  return (
    <>
    <motion.div className=" fixed top-0 right-0 left-0 h-[2px] bg-orange-400 origin-[0%] z-50 " style={{scaleX:scrollYProgress}}></motion.div>
    </>
  )
}

export default Progressbar