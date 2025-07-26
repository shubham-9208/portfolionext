import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from 'framer-motion';

function Footer() {
  const pageList = [{ p: ' About', scrol: 'about' },
  { p: 'Skill', scrol: 'skill' },
  { p: 'Project', scrol: 'project' },
  { p: 'Contact', scrol: 'contact' }];

  return (
    <motion.div 
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2 }}
    className=' lg:m-10 m-5 flex flex-col flex-wrap justify-center items-center'>
      <div className=' m-4'><h1 className=' text-orange-400 text-xl font-semibold'>Shubham Maurya</h1></div>
      <div className='  flex flex-wrap lg:gap-10 gap-5 hover:transition-all duration-500 ease-out hover:text-orange-400 cursor-pointer'>
        {pageList.map((page) => (

          <Link key={page.scrol} to={page.scrol} spy={true}
            smooth={true}
            offset={-50}
            duration={500} className="  hover:transition-all duration-500 ease-out hover:text-purple-50 text-xl font-medium my-4">{page.p}
          </Link>
        ))}

      </div>
      <div className=" flex my-6  items-center gap-6 text-[30px]">
        <a href="https://github.com/shubham-9208" target="_blank" rel="noreferre">
          <FaGithub className=" cursor-pointer rounded-full hover:text-black hover:duration-300 duration-300 hover:bg-white" />
        </a>
        <a href="https://www.linkedin.com/in/shubhammaurya2527/" target="_blank" rel="noreferre">

          <FaLinkedin className=" cursor-pointer hover:text-blue-500 hover:duration-300 duration-300 hover:bg-white rounded-lg" />
        </a>

        
      </div>
      <div className=" flex justify-center items-center gap-2 lg:text-[17px] text-[16px]">

        <p><FaRegCopyright /></p>
        <p> Shubham Maurya. All rights reserved.</p>
      </div>
    </motion.div>

  )
}

export default Footer