import React from 'react'
import style from "../assets/styles/homeContent.module.css"
import "../assets/styles/typeWriterStyle.css"
import personImage from "../assets/home-main.png"
import Typewriter from 'typewriter-effect';

export default function HomeContent() {
  return (
    <>
        <div className="col m-0 p-0  p-2">
          <h1 className='text-light display-3 fw-normal'>Hi There !
            <span className={style.handWave}>👋🏻</span></h1>
            <div style={{ padding: 20, textAlign: "left" }}>
              <p className='fs-3 text-light'>
                <span className="display-4 fw-normal">I'm  David Smith ! </span>
            <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    /></p>
    </div>
          
        </div>
        <div className={"col  m-0 p-0  " + style.imageContainer}  >
          
          <img className={style.personImage}  src={personImage} />
        </div>
    </>
  )
}
