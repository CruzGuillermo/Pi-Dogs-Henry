import React from "react";
import NotFound from "../image/not found.png";
import s from "./Error.module.css";
function Error() {
  return (
  
      <div  className={s.container}>
         <h3>Dog Not Found</h3>
        <img
          src={NotFound}
          alt=""
          width={400}
          height={300}
        />
      </div>

  );
}

export default Error;
