import React, {useContext, useEffect} from 'react'
import Flowers from './Flowers'
import "./home.css"
import Question from './Question'
import ShowOptions from './ShowOptions'
import { Link, useNavigate } from 'react-router-dom';
import orderContext from "../context/orderContext"

function Home() {
  const context  = useContext(orderContext);
  const {user, getUser} = context;
  
  useEffect( () => {
    getUser();
    console.log(user);
  }, [])
  
  
  
  return (
    <div className='homeContainer'>
    <Flowers/>
         {user?.mcqDone? <ShowOptions/>: 
        <><div className='questionContainer'>
            Please select one option
        </div>
        <div className='questionBox'>
          <Question/>
        </div></>
      }
    </div>
  )
}

export default Home