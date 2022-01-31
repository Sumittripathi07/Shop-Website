import React from 'react'

const HomeBox = () => {
    return (<>
        <div>
            <div className="mainBox" id="about">
                <div className="box">
                    <div className="inBox">
                        <h2 className='fontF4 HB01'>Get Your Need at your Door step.</h2>
                    </div>
                    <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80" alt="books" className="box-pic" />
                </div>
                <div className="box rev">
                    <div className="inBox">
                        <h2 className='fontF4 HB02' >Make Life Easy with <b> RN Traders </b>.</h2>
                    </div>
                    <img src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="books" className="box-pic" />
                </div>
            </div>
        </div>
    </>
    )
}

export default HomeBox
