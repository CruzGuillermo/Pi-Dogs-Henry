import React from "react";
import NotFound from "../image/not found.png";
import s from "./Error.module.css";
function Error() {
  return (
  
      <div  className={s.container}>
        <img
          src={NotFound}
          alt=""
          width={450}
          height={350}
        
        />
        <h3>Dog Not Found</h3>
      </div>

  );
}

export default Error;
