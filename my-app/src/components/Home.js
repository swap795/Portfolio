import React from "react";
import pro_pic from "../images/pro-pic.JPEG";

const Home = () => {
   return (
      <div>
         <div className="description">
            <div className="title">
               <div className="hide">
                  <h2>Welcome!</h2>
               </div>
               <div className="hide">
                  <h2>to my</h2>
               </div>
               <div className="hide">
                  <h2><span>Portfolio!</span></h2>
               </div>
            </div>
         </div>
         <div>
            <img src={ pro_pic } alt="Swap's pic"/>
         </div>
      </div>
   );
}

export default Home;