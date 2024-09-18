import React, {useContext, useState} from 'react'
import "./login.css"
import ReactConfetti from "react-confetti"
import Confetti from "./Confetti";
import Home from "./Home"
import BouncingBalls from "./BouncingBalls";
import orderContext from "../context/orderContext"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const context  = useContext(orderContext);
  const [password, setPassWord] = useState('');
  const {user} = context;
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[1].value); 
    
      await axios.post(`https://birthday-backend-topaz.vercel.app/login`, {
          password: e.target[1].value
      }).then(function(response){
          console.log(response.data)
          //setUser(response.data.user);
          console.log(user);
          if(response.status === 200){
            console.log(response.data.token)  
            localStorage.setItem('token', response.data.token);
              if(response.data.user.mcqDone){
                navigate('/showOptions');
              }
              else{
                navigate('/home');
              }
          }
          
      }).catch(function(error){
          console.log(error);
          return ;
      })
  }

  return (
    <>
      <ReactConfetti/>
      <BouncingBalls/>
      <div className='loginContainer'>
        <form className='loginForm' onSubmit={handleSubmit}>
          <input className="nikitaInputBox" disabled = "disabled" placeholder="SRUSHTI PARBAT"/>
          <br/>
          <input placeholder='Password' className='passwordInputBox'/>
          <br/>
          <button type='submit' className='loginButton'>Login</button>
        </form>
      </div>
    </>
  )
}

export default Login