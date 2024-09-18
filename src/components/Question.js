import React, {useState, useEffect} from 'react'
import './question.css'
import ShowOptions from './ShowOptions'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Question() {
  const navigate = useNavigate();
  const [opt, setOP] = useState(0);

  const handleSubmit = async (optionNum) => { 
    
      await axios.post(`https://birthday-backend-topaz.vercel.app/sendMsg`, {
        mcqOption: optionNum
      },{headers: {
               "Authorization":  localStorage.getItem('token')
            }}).then(function(response){
          console.log(response.data)
          
          if(response.status === 200){
            navigate('/showOptions')
          }
          
      }).catch(function(error){
          console.log(error);
          return ;
      })
  }

  const option1 = async(e) => {
    // e.preventDefault();
    setOP(1);
    handleSubmit(1);
  }

  const option2 = async(e) => {
    // e.preventDefault();
    setOP(2);
    await handleSubmit(2);
  }

  const option3 = async(e) => {
    // e.preventDefault();
    setOP(3);
    await handleSubmit(3);
  }

  const option4 = async(e) => {
    // e.preventDefault();
    setOP(4);
    await handleSubmit(4);
  }

  return (
    <div className='HideAndShow'>
        <div className='questionContainer'>
            <button onClick={option1} className='optionBox'>Option 1</button>
            <button onClick={option2} className='optionBox'>Option 2</button><br/>
            <button onClick={option3} className='optionBox'>Option 3</button>
            <button onClick={option4} className='optionBox'>Option 4</button>
        </div>
        
    </div>
  )
}

export default Question