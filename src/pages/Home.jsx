import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../App.css"

import { Footer, Blogs, Possibility, Features, WhatIsRp, Header } from "../containers"
import { Brand, Navbar} from "../components"
import Contact from '../containers/contactForm/Contact';

const Home = () => {
  return (
    <>
        <div className="Header">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatIsRp />
        <Features />
        <Possibility />
        <Blogs />
        <Contact />
        <Footer />
    </>
  )
}

export default Home