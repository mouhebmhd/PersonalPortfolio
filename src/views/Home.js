import React from 'react'
import Navbar from '../components/Navbar'
import style from "../assets/styles/homeStyle.module.css"
import HomeContent from '../components/ContentComponent'
export default function HomePage() {
  return (
    <section className={style.mainContent}>
    <Navbar/>
    <HomeContent></HomeContent>
    </section>
  )
}
