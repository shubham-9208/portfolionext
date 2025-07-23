

import { RxCross1 } from 'react-icons/rx'
import { motion } from 'framer-motion';


function Model({ toggleOOf, filterPopUp, ModelRef }) {
    return (
        <div>
            <motion.div whileInView={{ opacity: 1, z: 0 }}
                initial={{ opacity: 0, z: -100 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }} className=' absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 z-40 backdrop-blur h-full w-full '>
                {filterPopUp.map((prject) => (
                    <div key={prject.title} className='w-[100%] md:w-[65%] bg-[#171721] lg:px-8 px-3 py-4 rounded-xl ' ref={ModelRef}>
                        <div className=" flex justify-end mb-2 text-xl" onClick={toggleOOf}><RxCross1 /></div>
                        <img src={prject.image} alt="" className=' rounded-xl h-[180px] lg:h-[380px]  w-[100%] object-cover bg-white ' />

                        <h1 className=' py-2 text-2xl mt-2 font-bold text-slate-400 '>{prject.title}</h1>
                        <p className='  text-[13px] text-slate-500 mt-[-10px]'>{prject.date}</p>
                        <div className=' flex flex-wrap px-1 pt-1 justify-start items-center mt-3 gap-2'>
                            {prject.technologies.map((tech) => (
                                <p key={tech} className=' text-purple-500 text-[14px] font-semibold bg-[#201b31] rounded-full px-[10px]'>{tech}</p>
                            ))}
                        </div>

                        <p className='  text-[16px] text-slate-500 py-2 my-2 -tracking-tighter font-semibold'>{prject.description}</p>
                        <div className=" flex flex-wrap flex-col lg:flex-row  gap-2 my-6 ">


                            <a href={prject.codeUrl} target="_blank" rel="noreferre" className=' className="w-full lg:w-1/2  py-4 flex flex-1 justify-center hover:bg-purple-500 transition-all ease-in-out duration-500 bg-[#2c2540] font-bold text-[24px ] rounded-lg'>
                                <button >View Code</button>
                            </a>


                            <a href={prject.LiveUrl}  target="_blank" rel="noreferre "  className="w-full lg:w-1/2  py-4 flex flex-1  justify-center bg-purple-700 transition-all ease-in duration-300 hover:bg-purple-600 font-bold text-[24px ] rounded-lg ">
                                <button>Live Project</button>
                            </a>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Model