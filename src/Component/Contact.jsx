
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
function Contact() {
    const apiKey = '4KEedK-zgOg7KYaTQ'

    const form = useRef();

    const sendEmail = (e) => {


        
        e.preventDefault();

        emailjs
            .sendForm('service_y90m18p', 'template_a93k93v', form.current, {
                publicKey: apiKey,
            })
            .then(
                () => {
                    toast.success("Message send");
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }



    return (
        <>
            <div className=' border-b border-neutral-900 pb-4'>
                <div className=" my-10" id='contact'>
                    <h1 className=" text-center font-bold text-6xl tracking-tighter">Contact</h1>
                </div>
                <div>
                    <p className=" text-center font-semibold text-xl">Feel free to reach out to me for any questions or opportunities!</p>
                </div>
                <motion.div 
                 whileInView={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: 100 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.2 }}
                className=" flex justify-center items-center lg:m-8 m-4">
                    <div style={{ backgroundColor: "#171721 " }} className=" lg:w-[55%] w-full border border-gray-600 rounded-xl lg:p-10 px-3 mt-4 py-5 shadow-[0_0_10px_rgba(244,108,56,0.7)]">
                        <h1 className=" lg:text-3xl text-2xl font-bold px-2 lg:px-0">Mail me !</h1>
                        <form ref={form} action="" onSubmit={sendEmail}>
                            <input type="email" name="from_email" required className=" flex flex-1 w-[100%] p-4 bg-transparent rounded-xl border border-gray-600 outline-none text-lg mt-8" placeholder="Email" />
                            <input type="text " required name="from_name" className=" flex flex-1 w-[100%] p-4 bg-transparent rounded-xl border border-gray-600 outline-none text-lg mt-6" placeholder="Name" />
                            <textarea required name="message" className=" max-h-[400px] flex flex-1 w-[100%] p-4 bg-transparent rounded-xl border border-gray-600 outline-none text-lg mt-6 " placeholder="Message"></textarea>
                            <button className="flex items-center justify-center flex-1 w-[100%] p-3 bg-transparent rounded-xl border border-gray-600 outline-none text-xl mt-6 font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">Send</button>
                        </form>
                    </div>
                </motion.div>
            </div>
            <ToastContainer />
        </>
    );
}

export default Contact;


