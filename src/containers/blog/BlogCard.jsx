import React from 'react'
import { Link } from 'react-router-dom'



const BlogCard = ({blogItem}) => {
    const images = [
        {url: "https://th.bing.com/th/id/OIP.TRXkfTeMY27eDG1aWmOimQHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
        {url: "https://th.bing.com/th/id/OIP.L3thwOhRZwu0QkKCRP8DkQHaEo?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
        {url: "https://th.bing.com/th/id/OIP.aXcZMZVtIsZTuXCSfMueHwHaEo?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
        {url: "https://th.bing.com/th/id/OIP.IDxjYBWwXi-UpgvI7yfqhQHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
        {url: "https://th.bing.com/th/id/OIP.xBYMX6iyBNtYGzQjRwG0EgHaEK?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
]

    
    const randomNumber = Math.floor(Math.random() * images.length)
    const url = images[randomNumber].url  

  return (
    <div className="blog-card">
        <div className="blog-card-img">
            <img src={url} alt="" />
        </div>
        <div className="blog-card-text">
            <h4 className='text-light'>{blogItem.title}</h4>
            <Link to={`/AllBlogs/${blogItem.id}`} className="a">Read Full Article</Link>
        </div>
    </div>
  )
}

export default BlogCard