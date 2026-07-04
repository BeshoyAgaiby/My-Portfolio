import React from "react";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Home from "../Home/Home"
import About from "../About/About"
import Projects from "../Projects/Projects"
import Skills from "../Skills/Skills"
import Contacts from "../Contacts/Contacts"
import Education from "../Education/Education"
export default function Layout() {
  return <>
  <Navbar/>
  <div className="container">
    <Home/>
    <About/>
    <Projects/>
    <Skills/> 
    <Contacts/>
    <Education/>
  </div>
  <Footer/>
  
  </>;
}
