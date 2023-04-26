// import logo from './logo.svg';

// import header from "./mycomponents/header";
// import {Home} from "./mycomponents/Home";
// import {About} from "./mycomponents/About";
// import {Template} from "./mycomponents/Template";
// import {Login} from "./mycomponents/Login";

// import Navbar from "./mycomponents/Navbar"
// import { Routes} from "react-router-dom";
// function App() {
//   let myVariable = 345;
//   return (
//     <div className='nav-menu'>
//       <Navbar/>
//     </div>
//   //  <>
//   // <header/>
//   // <Home/>
//   // <About />
//   // <Template />
//   // <Login />
//   //  </>
//   );
// }

import React from 'react';
import './App.css';

import {Routes,Route} from "react-router-dom";
// import {Link} from "react-router-dom";
import Home from "./routes/Home";
import {About} from "./routes/About";
import {Template} from "./routes/Template";
import {Service} from "./routes/Service";
import {Signup} from "./routes/Signup";
// import Hero from "./components/Hero";

// cd
  function App(){
 
  return(
    <div className ='App'>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Template" element={<Template/>} />
      <Route path="/Service" element={<Service/>} />
      <Route path="/Signup" element={<Signup/>} />

 </Routes>

   

   
   </div>
  );
}

export default App;
