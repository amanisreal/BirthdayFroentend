import React, {useRef, useEffect, useState, useContext} from "react";
import Login from "./components/login"
import './App.css';
import OrderState from "./context/orderState";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./components/Home"
import orderContext from "./context/orderContext";
import ShowOptions from "./components/ShowOptions";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    path:'/home',
    element: <Home/>
  },
  {
    path:'/showOptions',
    element: <ShowOptions/>
  }
])

function App() {
  
  return (
    <>
      <OrderState>
          <div className="appContainer">
            <RouterProvider router={router}/>
        </div>
      </OrderState>
    </>
  );
}

export default App;
