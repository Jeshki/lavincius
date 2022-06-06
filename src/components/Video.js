import React from 'react'
import { Link } from 'react-router-dom'
import './Video.css'

import Kidsvideo from '../assets/kids.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Kidsvideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>VAIKŲ IR ŠEIMOS</h1>
                <p>UGDYMO ERDVĖ</p>
                <div>
                    <Link to='/training' className='btn'>MOKYMAI</Link>
                    <Link to='/contact' className='btn btn-light'>REGISTRUOKIS</Link>
                </div>
            </div>
        </div>
    )
}

export default Video