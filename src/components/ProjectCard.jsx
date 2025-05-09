import React from 'react'
import "../assets/styles/projectCardStyle.css"
import { IoLogoSnapchat } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { SiReadthedocs } from "react-icons/si";

export default function ProjectCard(props) {
    const data=props.projectData;
  return (
    <>
    <div className="projectCard  col-lg-3 mx-3 p-1 col-md-3  col-sm-6">
        <header className="projectIcon d-flex justify-content-center text-light ">
            {data.projectIcon}
        </header>
        <main className='  text-light'>
            <h4 className='text-center'>{data.projectTitle}</h4>
            <p>{data.projectDescription}</p>
        </main>
        <footer className='d-flex justify-content-center'>
            <button className="btn projectViewBtn"><FaGithub className='mx-1  h5'></FaGithub>Github</button>
            <button className="btn projectViewBtn "> <SiReadthedocs className='mx-1  h5'></SiReadthedocs>Demo</button>
        </footer>
    </div>
    </>
  )
}
