import { FaGreaterThan, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { RxCross1 } from 'react-icons/rx'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-scroll'


import { motion } from 'framer-motion';


function Navbar({ sideMenuOpen, setsideMenuOpen, }) {

    const pageList = [{ p: ' About', scrol: 'about' },
    { p: 'Skill', scrol: 'skill' },
    { p: 'Project', scrol: 'project' },
    { p: 'Contact', scrol: 'contact' }];



    const menuOpen = () => {
        setsideMenuOpen(!sideMenuOpen);
    };


    return (
        <>
            <div className="  mb-10 md:mb-20 flex lg:flex-none items-center justify-between  py-4 px-6">
                <div className=" flex flex-shrink-0 items-center">
                    <h1 className=" flex items-center text-[25px] justify-center"><span className=" text-orange-400"><FaLessThan /></span>ShubDev <span className=" text-orange-400"
                    ><FaGreaterThan /></span></h1>
                </div>
                <div className=" lg:block hidden">
                    <div className='  flex flex-wrap lg:gap-10 gap-5 hover:transition-all duration-500 ease-out hover:text-purple-500 cursor-pointer '>
                        {pageList.map((page) => (

                            <Link key={page.scrol} to={page.scrol} spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}

                                className="  hover:transition-all duration-500 ease-out hover:text-purple-50 text-xl font-medium my-4">{page.p}
                            </Link>
                        ))}

                    </div>
                </div>
                <div className=" lg:block hidden">
                    <a href="https://github.com/shubham-9208" target="_blank" rel="noreferre">

                        <button className=" px-7 py-3 border border-orange-400 bg-transparent rounded-3xl text-lg hover:bg-orange-400 hover:duration-500 duration-300 hover:text-white text-orange-400 "> Github Profile</button>
                    </a>
                </div>
                <GiHamburgerMenu onClick={menuOpen} className=" lg:hidden block text-[28px]" />

            </div>
            {sideMenuOpen && <motion.div whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }} className=' absolute flex  justify-start top-0 left-0 right-0 bottom-0 z-40 backdrop-blur h-screen w-full '>
                <div className=" md:w-[40%] w-full bg-black ">
                    <div className="flex justify-end p-4">
                        <RxCross1 onClick={menuOpen} className=" text-2xl" />
                    </div>
                    <div className="  flex flex-col items-center">
                        <div className=" flex flex-col items-center">
                            {pageList.map((page) => (

                                <Link key={page.scrol} to={page.scrol} spy={true}
                                    smooth={true}
                                    offset={-50}
                                    onClick={menuOpen}
                                    duration={500} className="border border-slate-800 bg-slate-800 px-10 py-2 rounded-xl w-[160px] text-center  text-2xl font-semibold  my-4 hover:border-purple-700 hover:bg-transparent hover:text-purple-500 hover: duration-300
                                    ">{page.p}
                                </Link>
                            ))}
                        </div>
                        <div className=" flex my-10  items-center gap-6 text-[30px]">
                            <a href="https://www.linkedin.com/in/shubhammaurya2527/" target="_blank" rel="noreferre">

                                <FaLinkedin className=" cursor-pointer hover:text-blue-500 hover:duration-300 duration-300 hover:bg-white rounded-lg" />
                            </a>

                            <a href="https://x.com/_shubham_9208" target="_blank" rel="noreferre">

                                <FaXTwitter className=" cursor-pointer hover:scale-125 hover:duration-300 duration-300" />
                            </a>
                            <a href="https://www.instagram.com/__shubham_km/" target="_blank" rel="noreferre">

                                <FaInstagram className=" cursor-pointer hover:text-pink-500 hover:duration-300 duration-300" />
                            </a>
                        </div>
                        <a href="https://github.com/shubham-9208" target="_blank" rel="noreferre">

                            <button className=" px-7 py-3 border border-purple-500 bg-transparent rounded-3xl text-lg hover:bg-purple-500 hover:duration-500 duration-300 hover:text-white text-purple-500 "> Github Profile</button>
                        </a>
                    </div>
                </div>
            </motion.div>}
        </>
    )
}

export default Navbar