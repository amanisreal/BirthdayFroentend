
import React, {useRef, useEffect, useState} from "react";
import ReactConfetti from 'react-confetti';
function Confetti() {
    const [windowD, setD] = useState({width: window.innerWidth-10, height: window.innerHeight-10});
    const [opa, setOpa] = useState(1);
  const detectD = () => {
    setD({width: window.innerWidth-10, height: window.innerHeight-10})
  }

  useEffect(() => {
    window.addEventListener('resize', detectD);
    if(opa>0)setOpa(opa-0.1);
    console.log(1);
  }, [1000]);

  return (
    <div><ReactConfetti 
    height={windowD.height} 
    width={windowD.width}
    tweenDuration={1}
    opacity={opa}
    /></div>
  )
}

export default Confetti