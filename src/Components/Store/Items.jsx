import React from 'react';
import InsideItems from './InsideItems';
import Scroll from '../Scrol'
import data from "../../item-data.json"

function Notes() {
    return (
        <><Scroll showBelow={250} />
        <h1 className='fontF1 alignI'>Store</h1>
            <div className="row my-3"  >
                {data.map((note,index) => {
                    return <InsideItems note={note} key={index} i={index} />
                    
               
                })}
            </div>







        </>
    )
}

export default Notes
