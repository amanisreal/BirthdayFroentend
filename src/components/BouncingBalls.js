import React, { useState, useEffect } from 'react';
import Ball from './Ball';

const BouncingBalls = () => {
  

  return (
    <div>
      <Ball x={100} name={'H'}/>
      <Ball x={150} name={'A'}/>
      <Ball x={200} name={'P'}/>
      <Ball x={250} name={'P'}/>
      <Ball x={300} name={'Y'}/>

      <Ball x={500} name={'B'}/>
      <Ball x={550} name={'I'}/>
      <Ball x={600} name={'R'}/>
      <Ball x={650} name={'T'}/>
      <Ball x={700} name={'H'}/>
      <Ball x={750} name={'D'}/>
      <Ball x={800} name={'A'}/>
      <Ball x={850} name={'Y'}/>
      
      <Ball x={1050} name={'S'}/>
      <Ball x={1100} name={'R'}/>
      <Ball x={1150} name={'U'}/>
      <Ball x={1200} name={'U'}/>
      <Ball x={1250} name={'U'}/>
      <Ball x={1300} name={'.'}/>
      <Ball x={1350} name={'.'}/>
    </div>
  );
};

export default BouncingBalls;