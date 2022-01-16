import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import HomeBox from './HomeBox'
import HorizontalS from './HorizontalS'
import Slider from './Slider'
import { motion } from 'framer-motion'



 
const Home = () => {
    return (<>
        <div>

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <motion.h1 
                    initial="hidden" animate="visible" variants={{
                        hidden:{
                            scale:0.2,
                            opacity:0
                        },
                        visible:{
                            scale:1,
                            opacity:1,
                            transition:{
                                delay:0.25
                            }
                        }
                    }}
                    className="display-4 fw-normal fontF1"><b> R.N Traders </b></motion.h1>

                    <motion.p
                    initial="hidden" animate="visible" variants={{
                        hidden:{
                            scale:2.5,
                            opacity:0
                        },
                        visible:{
                            scale:1,
                            opacity:1,
                            transition:{
                                delay:0.25
                            }
                        }
                    }}
                    className="lead fw-normal fontF2">All types of stationary, Gift items, Ice Cream, Cold Drink are Available</motion.p>
                    <Link className="btn btn-outline-secondary" to="/store">Store</Link>
                </div>
                <motion.div
                initial="hidden" animate="visible" variants={{
                    hidden:{
                        scale:2.5,
                        opacity:0
                    },
                    visible:{
                        scale:1,
                        opacity:1,
                        transition:{
                            
                            delay:0.25
                        }
                        
                    }
                }}
                className="product-device shadow-sm d-none d-md-block"></motion.div>
                <motion.div
                initial="hidden" animate="visible" variants={{
                    hidden:{
                        scale:2.5,
                        opacity:0
                    },
                    visible:{
                        scale:1,
                        opacity:1,
                        transition:{
                            delay:0.25
                        }
                    }
                }}
                className="product-device product-device-2 shadow-sm d-none d-md-block"></motion.div>
            </div>
        </div>
<Slider/>
<HorizontalS/>
<HomeBox/>


    </>

    )
}

export default Home
