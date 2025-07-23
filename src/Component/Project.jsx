import { motion } from "framer-motion"

import { PROJECTS } from '../constants'
import { useEffect, useRef, useState } from "react";
import Model from "./Model";


function Project({ sideMenuOpen }) {

    const ModelRef = useRef(null)
    const [isOpen, setisOpen] = useState(false)
    const [filterPopUp, setfilterPopUp] = useState('')

    const toggleOn = (title) => {
        setisOpen(!isOpen)
        const data = PROJECTS?.filter((proj) =>
            proj.title.toLowerCase().includes(title.toLowerCase())
        )
        setfilterPopUp(data)

    }
    const toggleOOf = () => {
        setisOpen(false)
    }

    useEffect(() => {
        if (isOpen || sideMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, sideMenuOpen]);

    useEffect(() => {
        if (isOpen && ModelRef.current) {
            ModelRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }

    }, [isOpen])


    return (
        <div className='relative border-b border-neutral-900 lg:pb-4'>
            <div className=" my-10" id='project'>
                <h1 className=" text-center font-bold text-6xl tracking-tighter">Projects</h1>
            </div>
            <div>
                <p className=" text-center font-semibold text-xl">I have worked on a wide range of projects. Here are some of my projects. .</p>
            </div>

            <div

                className=' flex flex-wrap items-center  justify-center lg:m-10 lg:p-10 overflow-hidden gap-10'>
                {PROJECTS.map((project) => (

                    <motion.div whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x:project.x }}
                        viewport={{ once: true }}
                        whileHover={{ translateY: -10 }}
                        transition={{ duration: 1 }} key={project.title} style={{ backgroundColor: "#171721 " }} onClick={() => toggleOn(project.title)}
                        className='rounded-xl border border-gray-800  lg:px-5 px-2 py-5 h-[490px] w-[330px]  hover:translate-y-[-10px] hover:shadow-[0_0_10px_rgba(75,20,130,0.8)] hover:brightness-110 transition-all duration-500 ease-out overflow-hidden cursor-pointer '>

                        <img src={project.image} alt="" className=' rounded-xl h-[180px]  w-[100%] object-cover bg-white ' />
                        <div className=' flex flex-wrap px-1 pt-1 justify-start items-center mt-3 gap-2'>
                            {project.technologies.map((tech) => (
                                <p key={tech} className=' text-purple-500 text-[14px] font-semibold bg-[#201b31] rounded-full px-[10px]'>{tech}</p>
                            ))}
                        </div>
                        <h1 className=' py-2 text-2xl mt-2 font-bold text-slate-400 '>{project.title}</h1>
                        <p className='  text-[13px] text-slate-500 mt-[-10px]'>{project.date}</p>
                        <p className=' h-[110px] overflow-hidden  text-[16px] text-slate-500 py-2 my-2 -tracking-tighter font-semibold'>{project.description}</p>
                    </motion.div>

                ))}
                {isOpen && <Model ModelRef={ModelRef} toggleOOf={toggleOOf} filterPopUp={filterPopUp} />}


            </div>

        </div>
    )
}

export default Project