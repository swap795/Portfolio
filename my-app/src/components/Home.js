import React from "react";
import pro_pic from "../images/pro-pic.JPEG";

// styles
import styled from 'styled-components';
import { AboutStyle, DescriptionStyle, Hide, ImgStyle } from '../styles';


/************************************************************ 
   MAIN RENDER
************************************************************/
const Home = () => {
   return (
      <AboutStyle> 
         <DescriptionStyle>
            <div className="title">
               <Hide>
                  <h2>Welcome!</h2>
               </Hide>
               <Hide>
                  <h2>to my</h2>
               </Hide>
               <Hide>
                  <h2><span>Portfolio!</span></h2>
               </Hide>
            </div>
         </DescriptionStyle>
         <ImgStyle>
            <img src={ pro_pic } alt=""/>
         </ImgStyle>
      </AboutStyle>
   );
}

export default Home;