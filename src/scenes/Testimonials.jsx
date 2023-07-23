import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import AWS from "../../src/assets/AWS Cloud Virtual Internship.pdf";
import IEEE from "../../src/assets/IEEE.pdf";


const Testimonials = () => {
  return (
    <section id="experience" className=" mt-32">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >  <p className="font-playfair font-semibold text-4xl mt-1 mb-5">
            <span className="text-red">EXPE</span>RIENCE
          </p>
      
        <LineGradient width="mx-auto w-1/4" />
        <p className="mt-5">
          Here's where I have started my professional career as a working intern.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-30 ">
        <motion.div
          className="mx-auto relative bg-blue max-w-[500px] h-[300px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-160px] before:-ml-[110px] before:left-1/2 before:content-person1 mb-20 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
         
          <p className="text-center text-xl">
          <b>Amazon Web Services Cloud Internship</b></p>
          <p className="text-center text-black " >Offered by- </p>
          <p className="text-center text-black" ><b>AICTE-Eduskills supported by </b></p>
          <p className="text-center text-black" ><b>Amazon Web Services</b></p>
         <p className="text-center text-black"> Duration-10 weeks</p>
        <a href={AWS} className="text-center text-black"><b><u>Certificate Link </u></b></a>
         
        </motion.div>

     <motion.div
className="mx-auto relative bg-red max-w-[500px] h-[300px] flex flex-col justify-end p-16 mt-48
  before:absolute before:top-[-160px]  before:-ml-[110px] before:left-1/2 before:content-person2 mb-20 ml-100 "
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.5 }}
transition={{ delay: 0.2, duration: 0.6 }}
variants={{
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}}
>


<p className="text-center text-xl">
<b>Full-Stack Web Developer Internship</b></p>
          <p className="text-center text-black " >Offered by- </p>
          <p className="text-center text-black" ><b>Alhansat Solutions in collaboration with IEEE Bombay Section</b></p>
         <p className="text-center text-black"> Duration-2 months</p>
         <a href={IEEE} className="text-center text-black"><b><u>Certificate Link </u></b></a>
       
</motion.div>

      </div>
    </section>
  );
};

export default Testimonials;

