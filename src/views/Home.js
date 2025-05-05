import React from 'react'
import Navbar from '../components/Navbar'
import style from "../assets/styles/homeStyle.module.css"
export default function HomePage() {
  return (
    <section className={style.mainContent}>
    <Navbar/>
    <div className="container"></div>
    </section>
  )
}
