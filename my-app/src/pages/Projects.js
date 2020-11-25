import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HideStyle } from '../styles'

// images
import athlete from "../images/athlete-small.png";
import theracer from "../images/theracer-small.png";
import goodtimes from "../images/goodtimes-small.png";

// motion
import { motion } from 'framer-motion';
import { pageAnimation, photoAnimation, fadeAnimation, lineAnimation } from "../animation";

const ProjectsStyle = styled.div`
   min-height: 100vh;
   overflow: hidden;
   padding: 5rem 10rem;
   h2{
      padding: 1rem 0rem;
   }
`;

const Movie = styled.div`
   padding-bottom: 10rem;
   .line{
      height: 0.5rem;
      background: #23d997;
      margin-bottom: 3rem;
   }
   img{
      width: 100%;
      height: 70vh;
      object-fit: cover;
      /* overflow: hidden; */
   }
`;


const Projects = () => {
   return (
      <motion.div 
         variants={ pageAnimation } 
         initial="hidden" 
         animate="show"
         exit="exit" 
      >
         <ProjectsStyle>
            <Movie>
               <motion.h2 variants={ fadeAnimation }>The Athlete</motion.h2>
               <motion.div variants={ lineAnimation } className="line"></motion.div>
               <Link to="/projects/the-athlete">
                  <HideStyle>
                     <motion.img variants={ photoAnimation } src={ athlete } alt=""/>
                  </HideStyle>
               </Link>
            </Movie>
            <Movie>
               <motion.h2>The Racer</motion.h2>
               <motion.div variants={ lineAnimation } className="line"></motion.div>
               <Link to="/projects/the-racer">
                  <HideStyle>
                     <motion.img variants={ photoAnimation } src={ theracer } alt=""/>
                  </HideStyle>
               </Link>
            </Movie>
            <Movie>
               <motion.h2>Good Times</motion.h2>
               <motion.div variants={ lineAnimation } className="line"></motion.div>
               <Link to="/projects/good-times">
                  <HideStyle>
                     <motion.img variants={ photoAnimation } src={ goodtimes } alt=""/>
                  </HideStyle>
               </Link>
            </Movie>
      </ProjectsStyle>
      </motion.div>
   );
}

export default Projects;