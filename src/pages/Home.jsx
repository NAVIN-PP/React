import React from 'react'
import image from '../assets/spoti.png'
import { Link } from 'react-router-dom'
import './Home.css'
import { renderMatches } from 'react-router-dom'

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
                <div className="br">|</div>
                <div className="su">Sign up</div>
                <Link to="/Login" id='cg'>
                    <div className="li">Log in</div>
                </Link>


            </div>
            <div className="container1">
                <div className="me">Music for everyone.</div>
                <div className="mi">Millions of songs.No credit card needed.</div><br />
                <div className="gs">
                    <button>GET SPOTIFY FREE</button>
                </div>
            </div>

        </>
    )
}

export default Home