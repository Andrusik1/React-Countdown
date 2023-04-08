// eslint-disable-next-line no-unused-vars
import { React,useState } from 'react'
import './style.scss'
import Timer from './timer';
import Footer from './Footer';

function App() {
  

  return (
    <div className="countDown">
     <Timer/>
     <Footer/>
    </div>
  )
}

export default App
