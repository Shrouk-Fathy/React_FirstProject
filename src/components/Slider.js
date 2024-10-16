import React from 'react'
import '../App.css';

export default function Slider() {
  return (
    <>
    <div className='container-fluid'>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner h">
                <div className="carousel-item active">
                <img src="https://www.blog.shippypro.com/hs-fs/hubfs/Blog/fashion-ecommerce.jpg?width=1920&height=1080&name=fashion-ecommerce.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://cdn.sites.mitgo.com/mitgo.com/2023/03/fashion-report-1-1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="https://www.omnisend.com/blog/wp-content/uploads/2021/03/21-03-19-Fashion-ecommerce.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
        
    </>
  )
}
