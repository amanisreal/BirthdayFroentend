import React, { useEffect, useContext } from 'react'
import "./showOptions.css"
import orderContext from '../context/orderContext';

function ShowOptions() {
  const context  = useContext(orderContext);
  const {user, getUser} = context;

  useEffect(() => {
    getUser();
  }, [])
  return (
    <div className='showOptionsContainer'>

        <h4 className='h4Para'>The option You selected was {user.options} -> I will gift you somthing related to Diamond or glod which ever in my budget</h4>
        <p>Other options</p>
        <ul className='answers'>
            <li>Shoes</li>
            <li>Ipad</li>
            <li>Kapde</li>
        </ul>
        <br/>
        Note -> If you don't like the selected option, contact Aman Borkar.
    </div>
  )
}

export default ShowOptions