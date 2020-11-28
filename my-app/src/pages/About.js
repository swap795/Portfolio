import React from "react";
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import AboutMe from '../components/AboutMe';

const About = () => {
   return (
      <motion.div 
      exit="exit" 
      variants={ pageAnimation } 
      initial="hidden" 
      animate="show"
      >
         <AboutMe />
      </motion.div>
   );
}

export default About;