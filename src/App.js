import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css"

import { Footer, Blogs, Possibility, Features, WhatIsRp, Header } from "./containers"
import { Brand, Navbar} from "./components"
import AllBlogs from "./pages/AllBlogs";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <div >
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/AllBlogs" element={<AllBlogs />}></Route>
            <Route path="/AllBlogs/:id" element={<Blog />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Services" element={<Services />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
