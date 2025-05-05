import React from 'react'
import style from "../assets/styles/homeContent.module.css"
import personImage from "../assets/undraw_studying_n5uj-removebg-preview.png"
import Typewriter from 'typewriter-effect';

export default function HomeContent() {
  return (
    <>
      <div className="row d-flex align-items-center m-0 p-0">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h1 className='text-light display-3 fw-normal'>Hi There !
            <span className={style.handWave}>👋🏻</span>
            <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Hello My Name is David Smith !')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
          </h1>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
          <img className={style.personImage} src={personImage} alt="" />
        </div>
      </div>
    </>
  )
}
