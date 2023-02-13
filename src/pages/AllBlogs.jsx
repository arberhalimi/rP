import React, { useEffect, useState } from 'react'
import BlogCard from '../containers/blog/BlogCard';
import axios from 'axios';
import '../containers/blog/blog.css';
import { Navbar } from '../components';

const AllBlogs = ({blogItem}) => {
    const [allBlogs, setAllBlogs] = useState([])

    useEffect(() => {
      const options = {
          method: 'GET',
          url: 'https://jsonplaceholder.typicode.com/posts'
      };
        
      axios.request(options).then(function (response) {
        setAllBlogs(response.data)
      }).catch(function (error) {
          console.error(error)
      });
  }, [])

  console.log(allBlogs)  

  return (
    <div >
      <Navbar />
      <div className="blog-title container" style={{marginTop: "100px", textAlign:"center"}}>
        <h1>A lot is happening, 
          <br />We are blogging about it.</h1>
      </div>
      <div className='container blog AllBlogs'>

      {
        allBlogs && allBlogs.map(blogItem => <div className='blog-items' key={allBlogs.id}><BlogCard blogItem={blogItem}/></div>)
      }
    </div>
    </div>
  )
}

export default AllBlogs