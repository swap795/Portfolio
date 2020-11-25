/*
   Animation for the Pages
*/
export const pageAnimation = {
   hidden: {
      opacity: 0,
      y: 300
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         duration: .4,
         when: "beforeChildren",
         staggerChildren: 0.2,            
         // staggerChildren will apply this animation to all the other children tags but need to define it in the parent tag
      },
   },
   exit: {
      opacity: 0,
      y: 300,
      transition: {
         duration: .4,
      },
   }
};

/*
   Animation for the tags
*/
export const titleAnimation = {
   hidden: {
      y: 200,
   },
   show: {
      y: 0,
      transition: {
         duration: 0.62, 
         ease: "easeOut"
      },
   },
};

export const photoAnimation = {
   hidden: {
      x: 500,
      scale: 2,
      opacity: 0,
   },
   show: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
         // ease: "easOut",
         duration: 0.75,
      },
   },
};

export const fadeAnimation = {
   hidden: {
      opacity: 0,
   },
   show: {
      opacity: 1,
      transition: {
         ease: "easeOut",
         duration: 0.75,
      }
   },
};

export const lineAnimation = {
   hidden: {
      width: '0%',
   },
   show: {
      width: '100%',
      transition: {
         duration: 1,
      }
   }
}