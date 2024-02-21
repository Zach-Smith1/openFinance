import React, { useState, useEffect } from "react";

const PI = () => {
  useEffect(() => {

  }, []);

  return (
    <div className='PIPage'>
      <span>Click on Workplan to open Full GL Redesign PDF</span>
      <img
      id="fpTimeline"
      src="../public/FPTimeline.jpg"
      onClick={() =>  window.open("../public/GLRedesignProject.pdf", '_blank')}
      alt="timeline"/>
    </div>
  );
}

export default PI;
