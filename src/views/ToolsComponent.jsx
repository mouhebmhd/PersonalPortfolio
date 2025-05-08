import React from 'react'
import style from "../assets/styles/homeStyle.module.css"
import specificStyle from "../assets/styles/toolsStyle.module.css"
import CardComponent from '../components/CardComponent'
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { BsSlack } from "react-icons/bs";
import { IoTriangle } from "react-icons/io5";
import { SiMacos } from "react-icons/si";
import GitHistory from '../components/GitHistory';

export default function Tools() {
  const icons=[
    <SiMacos key={"macOs"}/>,
    <SiPostman key={"postman"}/>,
    <BsSlack key={"slack"}/>,
    <VscVscode key={"vscode"}/>,
    <IoTriangle key={"triangle"}/>,
    
  ]
  return (
    <>
    <section className={style.mainContent}>
      <header>
        <p className='display-4 fw-bold text-center p-2 text-light'>
          <span className={specificStyle.specificText}>Tools </span> I use 
          </p>
      </header>
      <main className="d-flex justify-content-center ">
      {icons.map((icon,index,array)=>{
        return <CardComponent key={icon.key}>{icon}</CardComponent>
      })}
      </main>
      <GitHistory></GitHistory>

   
     
      


    </section>
    
    
    
    
    </>
  )
}
