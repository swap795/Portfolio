import React from "react";
import Faq from "../components/Faq";

import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';

import styled from 'styled-components';

const ContactStyle = styled.div`
   min-height: 90vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 5rem 10rem;
   color: white;
   padding: 1rem 2rem;
   h4{
      padding: 2rem 0rem
   }
`;

const ContactMe = () => {
   return (
      <motion.div
         exit="exit"
         variants={ pageAnimation }
         initial="hidden"
         animate="show"
      >
         <ContactStyle>
            <motion.h2 
               variants={ titleAnimation } 
               initial={{
                  hidden: {
                     y: 400,
                  }
               }}
               animate={{
                  show: {
                     y: 0,
                     transition: {
                        duration: 0.62, 
                     // ease: "easeOut"
                     },
                  },
               }}
            >
               Want to <span>Reach out</span> to me?
               <h4><span>Get in touch!</span></h4>
               <button>Here!</button>
            </motion.h2>
            <Faq />
         </ContactStyle>
      </motion.div>

   );
}

export default ContactMe;