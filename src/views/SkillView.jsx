import React from 'react'
import style from "../assets/styles/homeStyle.module.css"
import specificStyle from "../assets/styles/toolsStyle.module.css"
import CardComponent from '../components/CardComponent'
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { IoLogoLaravel } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { GiElephant } from "react-icons/gi";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";

import GitHistory from '../components/GitHistory';

export default function SkillSet() {
  const icons=[
    <TbBrandCpp key={"TbBrandCpp"}></TbBrandCpp>,
    <IoLogoNodejs key={"IoLogoNodejs"}></IoLogoNodejs>,
    <FaCss3Alt key={"FaCss3Alt"}></FaCss3Alt>,
    <DiNodejs key={"DiNodejs"}></DiNodejs>,
    <FaReact key={"FaReact"}></FaReact>,
    <DiMongodb key={"DiMongodb"}></DiMongodb>,
    <FaGitAlt key={"FaGitAlt"}></FaGitAlt>,
    <SiNestjs key={"SiNestjs"}></SiNestjs>,
    <IoLogoLaravel key={"IoLogoLaravel"}></IoLogoLaravel>,
    <FaJava key={"FaJava"}></FaJava>,
    <GiElephant key={"GiElephant"}></GiElephant>,
    <FaBootstrap key={"FaBootstrap"}></FaBootstrap>,
    <FaPython key={"FaPython"}></FaPython>,
    <SiTensorflow key={"SiTensorflow"}></SiTensorflow>
  ]
  return (
    <>
    <section className={style.mainContent}>
      <header>
        <p className='display-4 fw-bold text-center p-2 text-light'>
          Professional     &nbsp;
          <span className={specificStyle.specificText}>Skillset </span>
          </p>
      </header>
      <main className="d-flex justify-content-center flex-wrap row-gap-3">
        {
          icons.map((icon,index,array)=>{
            return <CardComponent key={icon.key}>
              {icon}
            </CardComponent>
          })
        }
      </main>
   
   

   
     
      


    </section>
    
    
    
    
    </>
  )
}
