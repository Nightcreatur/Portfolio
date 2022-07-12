import React from 'react';
import './Intro.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import Vector3 from '../../img/Vector3.png'
import Crown from "../../img/crown.png"
import thumbup from '../../img/thumbup.png'
import galsseemoji from '../../img/glassesimoji.png'
import Floating from '../Floating/Floating';
const Intro = () => {
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hi!</span>
                    <span>I Am</span>
                    <span>Sandeep Timilsena</span>
                    <span>Fronend Developer with high level of experience in
                        mobile app /web desiging and development, producing the Quality work</span>
                </div>

                <button className='button i-button'>Hire me</button>
                <div className="i-icon">
                    <a href="https://www.instagram.com/_helloo_sandy/"> <FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                    <a href="https://github.com/Nightcreatur"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                    <a href="https://www.facebook.com/profile.php?id=100076571874735"><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
                </div>
            </div>

            <div className="i-right">

                <img src={Vector2} alt="" />
                <img src={Vector1} alt="" />
                <img src={Vector3} alt="" />
                <img src={Vector3} alt="" />
                <div style={{ top: '-4%', left: '68%' }} >
                    <Floating image={Crown} txt1='Web' txt2='Developer' />
                </div>
                <div style={{ top: '64%', right: '68%' }} >
                    <Floating image={thumbup} txt1='Mobile' txt2='Developer' />
                </div>
                <div className='blur' style={{ background: '#2987bd' }} ></div>
                <div className='blur' style={{ background: '#2987bd', top: '55%', left: '-25%', height: '11rem', width: '22rem' }}></div>
            </div>

        </div >
    );
}

export default Intro;
