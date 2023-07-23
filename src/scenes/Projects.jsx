import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title,description,link}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair text-black">{title}</p>
        <a href={link}>
        <p className="mt-7 text-black" >
       {description}
        </p>
       </a>
      </div>
      <img src={require(`../assets/${projectTitle}.jpg`)} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-28 pb-34" >
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5 ">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3"  />
          </div>
        </div>
        <p className="mt-10 mb-10">
        To demonstrate my expertise thus far, I have created the following projects both during and post-learning.
        </p>
      </motion.div>

      {/* PROJECTS */}
       <div className="flex justify-center">
        <motion.div
          className="sm:grid gap-10 mb-8 pb-8 sm:grid-cols-3 "
          spacing={10}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        > 
          {/* ROW 1 */}
           <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Click the one which you wants to see more...
          </div>
          
          <Project title="Attendance Marking System" 
            description="Face Recognition Model using Deep Learning(MTCNN and FaceNet) for managing the Attendance system in universities,offices,etc.
            UNDER PROGRESS"
          />
           
        
<a href="https://cafe-coffeehouse.netlify.app/"> 
          <Project title="Coffee House" 
            description=" Coffee House is a cafe website developed to study ReactJS and Hooks, responsive design, animations, and good practices in front-end development! "
            
          /> 
          </a>

          {/* ROW 2 */}
           {/* <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" /> */}

          {/* ROW 3 */}
          <a href="https://ghostchatapp.netlify.app/">
         <Project title="MERN Chat App"
         description="A real time group chat application under the domain of virtual communication developed using MongoDb,Express,React and NodeJs" />
         </a>
         <a href="https://github.com/hrish1012/InfoStream">
          <Project title="InfoStream-A NEWS Application"
          description="Infostream is a dynamic news application based on HTML, CSS, and JavaScript to curate and display real-time news fetched through the NewsAPI." />
          </a>
          <a href="https://hrishita-barkhade.netlify.app/">
          <Project title="Portfolio Website"
          description="In order to know more about me,here's my very own portfolio developed using ReactJS " />
          </a> 
        </motion.div> 
       </div> 
    </section>
  );
};

export default Projects;
