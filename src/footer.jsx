import React from 'react'

const Footer = () => {
  return (
    <>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-3">
            <h3>EXOTICS</h3>
            <p>subscribe to get notified about our products.</p>
            <input type="text" placeholder='Enter Your Email' />
            <button className='btn btn-dark my-4'>Subscribe</button>
          </div>
        </div>
        <div className="col-md-4 my-3">
          <h3>INFORMATION</h3>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>All Products</p>
          <p>Blog</p>
        </div>
        <div className="col-md-4 my-3">
            <h3>About Us</h3>
            <p>we provide the products you like for music at one place without efforts.</p>
            <p>Follow us on social media.</p>

        </div>
      </div>
    </>
  )
}

export default Footer
