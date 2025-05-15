import React from 'react'
import style from "../assets/styles/homeStyle.module.css"
import  "../assets/styles/aboutMe.css"
import { TbHandFingerRight } from "react-icons/tb";
import AboutImage from "../assets/about.png"
export default function WhoAmI() {
  return (
    <>
    <div className={style.mainContent}>
        <div className="row m-0 p-0 d-flex justify-content-center align-items-center vh-100">
            <div className="col-lg-8  col-sm-12 p-3">
                <h1 className="text-center text-light" >Know Who <span className="specialText">I'M</span> </h1>
                <p className='text-light fs-3 p-4 aboutMeDesc'>Hi Everyone, I am  <span className="specialText">Soumyajit Behera</span> from <span className="specialText">Bhubaneswar, India</span>.
                I am currently employed as a software developer at Juspay.
                I have completed Integrated MSc (IMSc) in Maths and Computing at BIT Mesra.</p>
                <p className='text-light fs-3 '>Apart from coding, some other activities that I love to do!
                </p>
                <ul className="skills">
                    <li className='text-light fs-3'><TbHandFingerRight></TbHandFingerRight> Reading Books </li>
                    <li className='text-light fs-3'><TbHandFingerRight></TbHandFingerRight> Playing Video Games </li>
                    <li className='text-light fs-3'><TbHandFingerRight></TbHandFingerRight> Travelling</li>
                    
                </ul>
                <p className="quote text-center fs-4">"Strive to build things that make a difference!" <br />
                — Soumyajit</p>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 aboutImage">
                <img src={AboutImage} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}
/*
xxl 1400px  
xl 1200-1400 px 
lg 991-1199   X 
md 768-991
sm 568-768 X
xs <568px

*/
