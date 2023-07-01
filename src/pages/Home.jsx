import React from 'react'
import image from '../assets/spoti.png'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="img">
                    <img src={image} />
                </div>
                <div className="pr">Premium</div>
                <div className="he">Help</div>
                <div className="do">Download</div>
                <div className="su">Sign up</div>
                <div className="li">Log in</div>

            </div>
            <div className="container1">
                <div className="me">Music for everyone.</div>
                <div className="mi">Millions of songs.No credit card needed.</div>
                <button>GET SPOTIFY FREE</button>
            </div>
        </>
    )
}

export default Home