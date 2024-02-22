import React from "react";

const Spinner =()=> {
    return ( 
      <div className="text-center my-5">
      <l-dot-wave
      size="50"
      speed="1.5"
      color="black" 
    ></l-dot-wave>
</div>
    );
}
export default Spinner;