import React from 'react'
import Navbar from '../components/Navbar'
import style from "../assets/styles/homeStyle.module.css"
import HomeContent from '../components/ContentComponent'
export default function HomePage() {
  return (
    <section className={style.mainContent} id="homePage">
    <div className={ "row m-0 p-0 "+style.homeContent} >
      <HomeContent ></HomeContent>
    </div>
    
    </section>
  )
}
