import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Navbar } from '../components'
import '../containers/blog/blog.css';
import { Footer } from '../containers';


const Blog = () => {
  const [blog, setBlog] = useState()
  const {id} = useParams()

  const images = [
    {url: "https://th.bing.com/th/id/OIP.TRXkfTeMY27eDG1aWmOimQHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    {url: "https://th.bing.com/th/id/OIP.L3thwOhRZwu0QkKCRP8DkQHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    {url: "https://th.bing.com/th/id/OIP.aXcZMZVtIsZTuXCSfMueHwHaEo?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    {url: "https://th.bing.com/th/id/OIP.IDxjYBWwXi-UpgvI7yfqhQHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    {url: "https://th.bing.com/th/id/OIP.xBYMX6iyBNtYGzQjRwG0EgHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
]


const randomNumber = Math.floor(Math.random() * images.length)
const url = images[randomNumber].url  


  useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/'+id
    };
      
    axios.request(options).then(function (response) {
      setBlog(response.data)
    }).catch(function (error) {
        console.error(error)
    });
}, [])

  return (
    <div className='container'>
      <Navbar />
      <div className="blogg">
        <img src={url} alt="." />
        <h2 className='title'>{blog.title}</h2> 
        <p className='blog-description'>{blog.body}</p>
        <p className='blog-description'>{blog.body}</p>
        <p className='blog-description'>{blog.body}</p>
        <p className='blog-description'>{blog.body}</p>
      </div>
      <Footer />
    </div>
  )
}

export default Blog