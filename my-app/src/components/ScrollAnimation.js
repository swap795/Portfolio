// fires an event when we screen is on part of the page
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const ScrollAnimation = () => {
   const [element, view] = useInView({ threshold: 0.25 });
   const controls = useAnimation();

   if(view) {
      controls.start("show");
      console.log(view);
   } else {
      controls.start("hidden");
   }

   return [element, controls];
};

export default ScrollAnimation;
