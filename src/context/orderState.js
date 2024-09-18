
import ordercontext from './orderContext'
import { useState, useReducer } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const OrderState = (props) => {
    const url = `https://birthday-backend-topaz.vercel.app`;
    const [user, setUser] = useState();

    const getUser = async() => {
        await axios({
            url: `${url}/getUser`,
            method: "GET",
            headers: {
               "Authorization":  localStorage.getItem('token')
            }
        }).then(function(response){
            console.log(response.data)
            if(response.status === 200){
                setUser(response.data)
            }
          }).catch(function(error){

            console.log(localStorage.getItem('token'))
            console.log()
            alert(error)
          })
    }

    return(
        <ordercontext.Provider value={{user, getUser}}>
            {props.children}
        </ordercontext.Provider>
    )
}

export default OrderState;
