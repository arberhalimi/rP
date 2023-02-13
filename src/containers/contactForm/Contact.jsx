import React from 'react'
import "./contact.css"

const Contact = () => {
  return (

    <div className='contact-form container'>
      <h1>Contact us</h1>
      <form className="row g-3 ">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label text-light">Name and Surname</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label text-light">Email</label>
            <input type="password" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label text-light">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div class="form-floating col-12 my-4 ">
            <label for="floatingTextarea" className='text-light'>Comments</label>
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary text-light">Submit</button>
          </div>
      </form>
    </div>

  )
}

export default Contact