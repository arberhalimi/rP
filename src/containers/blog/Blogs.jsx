import React, { useEffect, useState } from 'react'
import "./blog.css"
import axios from "axios"
import BlogCard from './BlogCard'

const Blogs = () => {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
    };
      
    axios.request(options).then(function (response) {
        setBlogs(response.data)
    }).catch(function (error) {
        console.error(error)
    });
}, [])


  return (
    <section className='container blogging'>
      <div className="blog-title">
        <h1>A lot is happening, 
          <br />We are blogging about it.</h1>
      </div>
      <div className="blog">
        {
          blogs && blogs.map((blogItem, index) => { 
          if(index < 6) return (
            <div className='blog-items' key={blogs.id}><BlogCard blogItem={blogItem}/></div>
          )
          })
        }
      </div>

    </section>
  )
}

export default Blogs