import React from "react";
import pro_pic from "../images/pro-pic.JPEG";

// styles
import styled from 'styled-components';

/* 
   Styled Component 
   
*/
const HomeStyle = styled.div`
   min-height: 90vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 5rem 10rem;
   color: white;
`;

const DescriptionStyle = styled.div`
   flex: 1;
   padding-right: 5rem;
   h2{
      font-weight: lighter;
   }
`;

const Hide = styled.div`
   overflow: hidden;
`;

const ImgStyle = styled.div`
   flex: 1;
   overflow: hidden;
   img{
      -webkit-mask-image: radial-gradient(ellipse 63% 78% at 48% 50%, black 20%, transparent 65%);
      mask-image: radial-gradient(ellipse 63% 78% at 48% 50%, black 15%, transparent 65%);
   }
`;



/************************************************************ 
   MAIN RENDER
************************************************************/
const Home = () => {
   return (
      <HomeStyle> 
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
      </HomeStyle>
   );
}

export default Home;