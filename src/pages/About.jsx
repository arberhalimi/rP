import React from 'react'
import { Navbar } from '../components'
import { Footer } from '../containers'
import "../App.css"

const About = () => {
  return (
    <div className=''>
        <Navbar />
        <div className="about-page container">
            <h1>about us</h1>
        </div>
        <div className="about-page-word container">
            <div className="about-page-word-text">
                <h1>Lets make better world with technology</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur non odit assumenda magnam, consequatur facilis.</p>
            </div>
            <div className="about-page-word-img">
                <img src="https://th.bing.com/th/id/OIP.1nb6lJgsCeeY400-n_Tq-gHaD4?pid=ImgDet&rs=1" alt="" />
            </div>
        </div>
        <div className="about-page-content">
            <div className="about-page-images">
                <img src="https://th.bing.com/th/id/R.e173e7bed5ad70e3655cd3d1a6668253?rik=nDEaLhJkjWtpMA&pid=ImgRaw&r=0" alt="" />
                <img src="https://c.tadst.com/gfx/750w/international-programmer-day.jpg" alt="" />
                <img src="https://th.bing.com/th/id/OIP.L0TROCa03peNWy64Dza4rAHaE8?pid=ImgDet&rs=1" alt="" />
                <img src="https://media.gettyimages.com/photos/programmer-picture-id175434468?s=170667a" alt="" />
            </div>
            <div className="about-page-description container">
                <h4>history</h4>
                <h2>We help brands and companies to grow and stand in digital world</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sed consequuntur quod! Ratione, blanditiis laborum dolores.</p>
            </div>
        </div>
        <div className="about-page-awards container">
            <h1>Our Prestigiuos Awards</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores repellendus suscipit id totam optio vero aut ullam. </p>
            <div className="about-page-awards-images">
                <img src="https://th.bing.com/th/id/OIP.5Hi3Al0RN0TNHKgG4N5sjgHaFb?w=192&h=149&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                <img src="https://th.bing.com/th/id/OIP._218tFYMtLBP8uEssKWcfgHaDZ?pid=ImgDet&rs=1" alt="" />
                <img src="https://secureservercdn.net/45.40.148.117/4aa.7f4.myftpupload.com/wp-content/uploads/2018/02/TCC-logo-1024x366.png" alt="" />
                <img src="https://airmax.net/images/logos/connection-logo.png" alt="" />
                <img src="https://th.bing.com/th/id/OIP.QCcKArPc5NfY6_q9raMqXgHaCT?pid=ImgDet&rs=1" alt="" />
            </div>
        </div>
        <div className="about-page-team container">
            <div className="about-page-team-text">
                <h4>Our Team</h4>
                <h2>Awesome people behind us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis eum deserunt laudantium corporis aperiam sunt dolorem a dignissimos illo numquam doloribus accusantium amet fugit exercitationem distinctio voluptatibus, repudiandae assumenda?</p>
            </div>
            <div className="about-page-team-img">
                <img src="https://st.depositphotos.com/1075946/1825/i/950/depositphotos_18258225-stock-photo-portrait-of-handsome-office-worker.jpg" alt="" />
                <img src="https://th.bing.com/th/id/R.7302cf2befe0b0600770c8bb2d0a3b56?rik=vwxBgbh6PIY8fg&riu=http%3a%2f%2fthumbs.dreamstime.com%2fx%2fportrait-office-worker-17727435.jpg&ehk=PP%2bSJ7eiO7fJOFJMXdVhuwGm%2bWmJBlz3%2fIO5yeI6u6Y%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About