import React from 'react'
import { motion } from 'framer-motion'
function Noteitems(props) {
    const { note } = props;
    return (<>


        <motion.div class="col  mb-2 my-card  d-flex justify-content-center " 
        initial={{
            opacity:0,
            translateX:props.i%2===0? -50 : 50,
            translateY:-50
        }}
        animate={{opacity:1, translateX:0,translateY:0}}
        transition={{duration:0.3,delay:props.i* 0.1}}
        >
                <div className="card " style={{ width: "24rem" }} >
                    <img src={note.imgs} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">{note.title}</h5>
                        <p className="card-text text-center">{note.description}</p>
                    </div>

            </div>
        </motion.div>





    </>
    )
}

export default Noteitems
