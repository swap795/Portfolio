import React from "react";
import styled from 'styled-components';
import { AboutStyle } from '../styles';

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
`;


const Faq = () => {
   return (
      <FaqStyle>
         <h2>Any Questions? <span>FAQ</span></h2>
         <div className="faq-line"></div>
         <div className="question">
            <h4>Get in touch!</h4>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Submit</button>
         </div>
      </FaqStyle>
   );
}

export default Faq;