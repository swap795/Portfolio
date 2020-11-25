import React from "react";
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutMe = () => {
   return (
      <motion.div 
      exit="exit" 
      variants={ pageAnimation } 
      initial="hidden" 
      animate="show"
      >
         <h1>About Me</h1>
      </motion.div>
   );
}

export default AboutMe;