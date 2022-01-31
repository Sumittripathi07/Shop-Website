import React from 'react'

const Slider = () => {
    return (
        <div>
            

        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <svg className="bd-placeholder-img homeSvg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div className="container">
          <div className="carousel-caption text-start">
            <h1 className='fontF1'>Ice-Cream</h1>
            {/* <p>Some representative placeholder content for the first slide of the carousel.</p> */}
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <svg className="bd-placeholder-img homeSvg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div className="container">
          <div className="carousel-caption">
            <h1 className='fontF1'>Stationary</h1>
            <p className='fontF2'>Stationary that you will love!! <br /> Get only the best Staionary & Gift Supply</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <svg className="bd-placeholder-img homeSvg my-background03" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" ></rect> <img src="../Images/img00.jpg" href="google.com" height="100%" width="100%" alt="No Imgs" /></svg>

        <div className="container">
          <div className="carousel-caption text-end">
            <h1 className='fontF1'>Water Supply</h1>
            {/* <p>Some representative placeholder content for the third slide of this carousel.</p> */}
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

        </div>
    )
}

export default Slider
