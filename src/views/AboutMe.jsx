import React, { Component } from 'react'
import style from "../assets/styles/homeStyle.module.css"
import "../assets/styles/aboutStyle.css"
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import avatarImage from "../assets/avatar.png"
export default class AboutMe extends Component {
    
 render()
 {
    return (
        <>
        <section className={ ` ${style.mainContent} aboutMeSection` }>
            <div className="textDescription">
                <h1>LET ME <span className='specialText'>INTRODUCE</span> MYSELF</h1>
                <p>I fell in love with programming and I have at least learnt something, I think... 👨‍💻</p>
                <p>I am fluent in classics like <span className='specialText'> C++, Javascript and Go.</span></p>
                <p>My field of interest's are building new <span className='specialText'>Web Technologies and Products</span>  and also in areas related to  <span className='specialText'>Blockchain.</span></p>
                <p>Whenever possible, I also apply my passion for developing products with <span className='specialText'>Node.js and Modern Javascript Library and Frameworks </span> like <span className="specialText">React.js and Next.js</span></p>
            </div>
            <div className="photoDescription d-flex justify-content-center align-items-center">
                <img src={avatarImage} alt="" />
            </div>
            <div className="contactDescription d-flex justify-content-center flex-column align-items-center">
                <h3 className=''>FIND ME ON </h3>
                <p>Feel free to <span className="specialText">connect</span> with me </p>
                <div className="socialLinks d-flex">
                

                    <div className="socialLink"> <FaGithub></FaGithub></div>
                    <div className="socialLink"><FaTwitter></FaTwitter></div>
                    <div className="socialLink"><FaLinkedinIn></FaLinkedinIn></div>
                    <div className="socialLink"><FaInstagram></FaInstagram></div>
                </div>
            </div>
        </section>
        </>
    )
 }
}
