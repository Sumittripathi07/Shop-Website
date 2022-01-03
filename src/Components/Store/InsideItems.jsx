import React from 'react'
function Noteitems(props) {
    const { note } = props;
    return (<>



        <div class="col  mb-2 my-card  d-flex justify-content-center ">
                <div className="card " style={{ width: "24rem" }} >
                    <img src={note.imgs} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">{note.title}</h5>
                        <p className="card-text text-center">{note.description}</p>
                    </div>

            </div>
        </div>





    </>
    )
}

export default Noteitems
