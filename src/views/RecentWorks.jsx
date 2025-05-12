import React, { useEffect } from 'react'
import style from "../assets/styles/homeStyle.module.css"
import ProjectCard from '../components/ProjectCard'
import { IoLogoSnapchat } from "react-icons/io";
import { FaLaptopCode, FaChartLine, FaRegCalendarAlt, FaShoppingCart, FaBrain, FaTools, FaGamepad } from "react-icons/fa";
import { SiEditorconfig } from "react-icons/si";
import "../assets/styles/projectsStyle.css"
import { useState } from 'react';
export default function RecentWorks() {
    
   const [allProjects,setAllProjects]=useState([])
   const [projects,setProjects]=useState([])
      const email="mouheb.mehdoui@protonmail.com"
      const setup=()=>{
        console.log("data is loading ")
        setProjects([       {
            projectKey: 1,
            projectIcon: <IoLogoSnapchat className='display-5 text-light' />,
            projectTitle: "Chatify",
            projectDescription: "A real-time messaging app featuring secure chats, group support, and sleek UI design."
          },
          {
            projectKey: 2,
            projectIcon: <FaLaptopCode className='display-5 text-light' />,
            projectTitle: "Bits Of Code",
            projectDescription: "A developer-focused snippet manager allowing tagging, search, and language-based organization."
          },
          {
            projectKey: 3,
            projectIcon: <SiEditorconfig className='display-5 text-light' />,
            projectTitle: "Editor.io",
            projectDescription: "A collaborative online code editor with real-time updates and syntax highlighting for multiple languages."
          },
          {
            projectKey: 4,
            projectIcon: <FaChartLine className='display-5 text-light' />,
            projectTitle: "InsightDash",
            projectDescription: "A data analytics dashboard for visualizing business metrics and generating actionable insights."
          },
          {
            projectKey: 5,
            projectIcon: <FaRegCalendarAlt className='display-5 text-light' />,
            projectTitle: "Schedula",
            projectDescription: "A smart scheduling assistant that automates calendar management and meeting coordination."
          },
          {
            projectKey: 6,
            projectIcon: <FaShoppingCart className='display-5 text-light' />,
            projectTitle: "ShopNow",
            projectDescription: "An e-commerce platform offering product browsing, secure checkout, and order tracking."
          },
          {
            projectKey: 7,
            projectIcon: <FaBrain className='display-5 text-light' />,
            projectTitle: "NeuroNLP",
            projectDescription: "A deep learning-powered NLP toolkit for sentiment analysis, translation, and text summarization."
          },
          {
            projectKey: 8,
            projectIcon: <FaTools className='display-5 text-light' />,
            projectTitle: "DevOpsKit",
            projectDescription: "An automation toolkit for CI/CD, environment setup, and performance monitoring in DevOps workflows."
          },
          {
            projectKey: 9,
            projectIcon: <FaGamepad className='display-5 text-light' />,
            projectTitle: "PixelQuest",
            projectDescription: "A retro-style 2D adventure game with rich pixel art, quests, and enemy encounters."
          }
        ]) 
        setAllProjects([       {
            projectKey: 1,
            projectIcon: <IoLogoSnapchat className='display-5 text-light' />,
            projectTitle: "Chatify",
            projectDescription: "A real-time messaging app featuring secure chats, group support, and sleek UI design."
          },
          {
            projectKey: 2,
            projectIcon: <FaLaptopCode className='display-5 text-light' />,
            projectTitle: "Bits Of Code",
            projectDescription: "A developer-focused snippet manager allowing tagging, search, and language-based organization."
          },
          {
            projectKey: 3,
            projectIcon: <SiEditorconfig className='display-5 text-light' />,
            projectTitle: "Editor.io",
            projectDescription: "A collaborative online code editor with real-time updates and syntax highlighting for multiple languages."
          },
          {
            projectKey: 4,
            projectIcon: <FaChartLine className='display-5 text-light' />,
            projectTitle: "InsightDash",
            projectDescription: "A data analytics dashboard for visualizing business metrics and generating actionable insights."
          },
          {
            projectKey: 5,
            projectIcon: <FaRegCalendarAlt className='display-5 text-light' />,
            projectTitle: "Schedula",
            projectDescription: "A smart scheduling assistant that automates calendar management and meeting coordination."
          },
          {
            projectKey: 6,
            projectIcon: <FaShoppingCart className='display-5 text-light' />,
            projectTitle: "ShopNow",
            projectDescription: "An e-commerce platform offering product browsing, secure checkout, and order tracking."
          },
          {
            projectKey: 7,
            projectIcon: <FaBrain className='display-5 text-light' />,
            projectTitle: "NeuroNLP",
            projectDescription: "A deep learning-powered NLP toolkit for sentiment analysis, translation, and text summarization."
          },
          {
            projectKey: 8,
            projectIcon: <FaTools className='display-5 text-light' />,
            projectTitle: "DevOpsKit",
            projectDescription: "An automation toolkit for CI/CD, environment setup, and performance monitoring in DevOps workflows."
          },
          {
            projectKey: 9,
            projectIcon: <FaGamepad className='display-5 text-light' />,
            projectTitle: "PixelQuest",
            projectDescription: "A retro-style 2D adventure game with rich pixel art, quests, and enemy encounters."
          }
        ]) 
        console.log("data stored in projects ")
      }
      useEffect(setup,[email])
      const searchProjects=(searchQuery)=>{
        const queryResult=allProjects.filter((project,index)=>{
            if(project.projectDescription.indexOf(searchQuery)!=-1)
            {
                return true 
            }
            else 
            {
                return false 
            }
        })
        setProjects(queryResult)
      }
  return (
    <>
    <div className={style.mainContent}>
        <header>
            <h1 className='text-center text-light p-2'>My Recent &nbsp;
                 <span style={{color:"var(--purpleColor)"}}>Works</span> </h1>
                 <p className='text-center text-light h5'>Here are a few projects i worked on recently </p>
                
        </header>
        <div className="searhcBar searchInputContainer m-0 p-0 d-flex justify-content-center mb-2" >
            <input type="text" name="" id="searchInput" onChange={(event)=>{searchProjects(event.target.value)}} /> 
        </div>
        <main className="row m-0 p-0 d-flex justify-content-center">
            {
                projects.map((project,index)=>{
                    return (
                    <ProjectCard 
/*                  projectKey={project.projectKey}
                    projectIcon={project.projectIcon}
                    projectTitle={project.projectTitle}
                    projectDescription={project.projectDescription} */
                    projectData={project}
                    color="red"
                     ></ProjectCard>

                    )
                })
            }
        </main>
    </div>
    </>
  )
}
