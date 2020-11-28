import React from "react";
import styled from 'styled-components';
import { AboutStyle } from '../styles';

import { motion, AnimateSharedLayout } from 'framer-motion';
import { pageAnimation } from '../animation';

import Toggle from '../components/Toggle';

const FaqStyle = styled(AboutStyle)`
   display: block;
   span{
      display: block;
   }
   h2{
      padding-bottom: 2rem;
      font-weight: lighter;
   }
   .faq-line{
      background: #cccccc;
      height: 0.2rem;
      margin: 2rem 0rem;
      width: 100%auto;
   }
   .question{
      padding: 1.2rem 0rem;
      cursor: pointer;
   }
   .answer{
      padding: 0rem 0rem;
      p{
         padding: 1rem 0rem;
      }
   }
`;


const Faq = () => {
   return (
   <motion.div 
      variants={ pageAnimation } 
      initial="hidden" 
      animate="show"
      exit="exit"
   >
      <FaqStyle>
         <h2>Any Questions? <span>FAQ</span></h2>
         <div className="faq-line"></div>
         {/* AnimateSharedLayout notices changes in layout and puts animation accordingly */}
         <AnimateSharedLayout>
            <Toggle title={ "What technologies are used to create this Website?" }>
               <div className="answer">      
                  <p><span>Blah</span></p>
                  <p>Blah Blah Blah</p>
               </div>
            </Toggle>
            <Toggle title={ "Why can't I access the projects?" }>
               <div className="answer">      
                  <p><span>Blah</span></p>
                  <p>Blah Blah Blah</p>
               </div>
            </Toggle>
            <Toggle title={ "Can people other than recruiters reach out?" }>
               <div className="answer">      
                  <p><span>Blah</span></p>
                  <p>Blah Blah Blah</p>
               </div>
            </Toggle>
         </AnimateSharedLayout>
      </FaqStyle>
   </motion.div>
   );
}

export default Faq;