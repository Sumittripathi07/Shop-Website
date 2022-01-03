import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import HomeBox from './HomeBox'
import Slider from './Slider'



 
const Home = () => {
    return (<>
        <div>

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 fw-normal">R.N Traders</h1>
                    <p className="lead fw-normal">All types of stationary, Gift items, Ice Cream, Cold Drink are Available</p>
                    <Link className="btn btn-outline-secondary" to="/store">Store</Link>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </div>
<Slider/>
<HomeBox/>


    </>

    )
}

export default Home
