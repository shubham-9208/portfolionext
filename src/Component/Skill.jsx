import { delay, motion } from "framer-motion"

import { FaCss3, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { BiLogoNetlify } from "react-icons/bi";
import { SiPostman } from "react-icons/si";

function Skill() {


    return (
        <div id="skill" className=' border-b border-neutral-900 lg:pb-4 '>
            <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }} className=" my-10">
                <h1 className=" text-center font-bold text-6xl tracking-tighter ">Skills</h1>
            </motion.div>
            <div>
                <motion.p
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.2 }}
                    className=" text-center font-semibold text-xl">Here are some of my skills on which I have been working on for the past 6 months .
                </motion.p>
            </div>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className=" lg:mx-10 mt-10 lg:p-10 p-2 flex items-center  justify-center flex-wrap">

                <div style={{ backgroundColor: "rgba(41, 39, 39, 0.178) " }} className="flex flex-wrap flex-col h-[90%] w-[60%] p-6 border border-gray-700  rounded-xl shadow-[0_0_10px_rgba(75,20,130,0.8)] min-w-[350px]">
                    <div className=" flex flex-wrap items-center justify-center">
                        <h1 className="font-semibold text-3xl tracking-tight text-center">FrontEnd</h1>
                    </div>
                    <div>
                        <div className=" flex flex-wrap w-full lg:p-6 p-3 gap-5 m-auto justify-center">

                            <div
                                className="  flex items-center gap-2 text-[24px] font-semibold border border-gray-500 px-5 py-3 rounded-xl hover:translate-y-[-5px]  duration-500 ease-out">
                                <div className="text-[#5ed3f3]"><FaReact /></div>
                                <p className="text-gray-400">React</p>
                            </div>
                            <div
                                className="  flex items-center gap-2 text-[24px] font-semibold border border-gray-500 px-5 py-3 rounded-xl hover:translate-y-[-5px]  duration-500 ease-out">
                                <div className="text-[#e3c42f]">< SiJavascript/></div>
                                <p className="text-gray-400">Javascript</p>
                            </div>
                            <div
                                className="  flex items-center gap-2 text-[24px] font-semibold border border-gray-500 px-5 py-3 rounded-xl hover:translate-y-[-5px]  duration-500 ease-out">
                                <div className="text-[#f4470b]"><FaHtml5 /></div>
                                <p className="text-gray-400">HTML</p>
                            </div>
                            <div
                                className="  flex items-center gap-2 text-[24px] font-semibold border border-gray-500 px-5 py-3 rounded-xl hover:translate-y-[-5px]  duration-500 ease-out">
                                <div className="text-[#254bdd]"><FaCss3 /></div>
                                <p className="text-gray-400">CSS</p>
                            </div>
                            <div
                                className="  flex items-center gap-2 text-[24px] font-semibold border border-gray-500 px-5 py-3 rounded-xl hover:translate-y-[-5px]  duration-500 ease-out">
                                <div className="text-[#3fa3b2]"><RiTailwindCssFill /></div>
                                <p className="text-gray-400">TailwindCss</p>
                            </div>
                            <div
                                className="  flex items-center gap-2 text-[24px] font-semibold border border-gray-500 px-5 py-3 rounded-xl hover:translate-y-[-5px]  duration-500 ease-out">
                                <div className="text-red-500"><SiStyledcomponents /></div>
                                <p className="text-gray-400">Styledcomponents</p>
                            </div>

                        </div>
                    </div>
                </div>

            </motion.div>
            {/* <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className=" lg:mx-10 mb-10 mt-5 lg:p-10 flex items-center justify-center flex-wrap">
                <div style={{ backgroundColor: "rgba(41, 39, 39, 0.178) " }} className="flex flex-wrap flex-col h-[90%] w-[60%] pt-4 lg:p-6 border border-gray-700  rounded-xl shadow-[0_0_10px_rgba(75,20,130,0.8)] min-w-[350px]">
                    <div className=" flex flex-wrap items-center justify-center">
                        <h1 className="font-semibold text-3xl tracking-tight text-center">BackEnd</h1>
                    </div>

                    <div className=" flex flex-wrap w-full p-6  gap-5 m-auto justify-center">

                        <div className="  flex items-center gap-2 text-[24px] font-semibold border border-gray-500 px-5 py-3 rounded-xl hover:translate-y-[-5px]  duration-500 ease-out">
                            <p className=" text-gray-400">Firebase</p>
                        </div>

                        <div className="  flex items-center gap-2 text-[24px] font-semibold border border-gray-500 px-5 py-3 rounded-xl hover:translate-y-[-5px]  duration-500 ease-out">
                            <p className=" text-gray-400">MySQL</p>
                        </div>



                    </div>


                </div>
            </motion.div> */}
            

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className=" lg:mx-10 mb-10 mt-5 lg:p-10 flex items-center justify-center flex-wrap">
                <div style={{ backgroundColor: "rgba(41, 39, 39, 0.178) " }} className="flex flex-wrap flex-col h-[90%] w-[60%] pt-4 lg:p-6 border border-gray-700  rounded-xl shadow-[0_0_10px_rgba(75,20,130,0.8)] min-w-[350px]">
                    <div className=" flex flex-wrap items-center justify-center">
                        <h1 className="font-semibold text-3xl tracking-tight text-center">Others</h1>
                    </div>

                    <div className=" flex flex-wrap w-full p-6  gap-5 m-auto justify-center">

                        <div className="  flex items-center gap-2 text-[24px] font-semibold border border-gray-500 px-5 py-3 rounded-xl hover:translate-y-[-5px]  duration-500 ease-out">
                            <div className=""><FaGithub /></div>
                            <p className=" text-gray-400">Github</p>
                        </div>
                        <div className="  flex items-center gap-2 text-[24px] font-semibold border border-gray-500 px-5 py-3 rounded-xl hover:translate-y-[-5px]  duration-500 ease-out">
                            <div className="text-blue-500"><VscVscode /></div>
                            <p className=" text-gray-400">Vscode</p>
                        </div>
                        <div className="  flex items-center gap-2 text-[24px] font-semibold border border-gray-500 px-5 py-3 rounded-xl hover:translate-y-[-5px]  duration-500 ease-out">
                            <div className="text-orange-500"><SiPostman /></div>
                            <p className=" text-gray-400">Postman</p>
                        </div>
                        <div className="  flex items-center gap-2 text-[24px] font-semibold border border-gray-500 px-5 py-3 rounded-xl hover:translate-y-[-5px]  duration-500 ease-out">
                            <div className="text-[#3eb1bd]"><BiLogoNetlify /></div>
                            <p className=" text-gray-400">Netlify</p>
                        </div>
                        <div className="  flex items-center gap-2 text-[24px] font-semibold border border-gray-500 px-5 py-3 rounded-xl hover:translate-y-[-5px]  duration-500 ease-out">
                            <div className="text-orange-500"><FaGitAlt /></div>
                            <p className=" text-gray-400">GitAlt</p>
                        </div>


                    </div>


                </div>
            </motion.div>


        </div>
    )
}


export default Skill
