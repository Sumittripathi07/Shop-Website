import React from 'react';
import InsideItems from './InsideItems';

function Notes() {
    const data = [
        {
            "title": "papalu",
            "description": "My name is papalu sumit",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "title": "Arnav",
            "description": "My name is Arnav",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "title": "Arnav",
            "description": "My name is Arnav",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "title": "Sumit",
            "description": "My name is Sumit",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "title": "Arnav",
            "description": "My name is Arnav",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "title": "Sumit",
            "description": "My name is Sumit",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "title": "Arnav",
            "description": "My name is Arnav",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "title": "Sumit",
            "description": "My name is Sumit",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "title": "Arnav",
            "description": "My name is Arnav",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "title": "Sumit",
            "description": "My name is Sumit",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "title": "Arnav",
            "description": "My name is Arnav",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "title": "Sumit",
            "description": "My name is Sumit",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "title": "Arnav",
            "description": "My name is Arnav",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "title": "Sumit",
            "description": "My name is Sumit",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "title": "Arnav",
            "description": "My name is Arnav",
            "imgs": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },

    ]
    return (
        <>
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
