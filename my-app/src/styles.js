import styled from 'styled-components';

/* 
   Styled Component 
   
*/

export const AboutStyle = styled.div`
   min-height: 90vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 5rem 10rem;
   color: white;
`;

export const DescriptionStyle = styled.div`
   flex: 1;
   padding-right: 5rem;
   h2{
      font-weight: lighter;
   }
`;

export const Hide = styled.div`
   overflow: hidden;
`;

export const ImgStyle = styled.div`
   flex: 1;
   overflow: hidden;
   img{
      -webkit-mask-image: radial-gradient(ellipse 63% 78% at 48% 50%, black 20%, transparent 65%);
      mask-image: radial-gradient(ellipse 63% 78% at 48% 50%, black 15%, transparent 65%);
   }
`;