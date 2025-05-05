import React from 'react'
import logo from "../assets/logo.png"
import style from "../assets/styles/navbarStyle.module.css"
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";
import { GrBlog } from "react-icons/gr";
import { SiReaddotcv } from "react-icons/si";
import { LuGitFork } from "react-icons/lu";

class Navbar extends React.Component  {
  constructor(props)
  {
    super(props)
  }  
  render()
  {
    return (
       <React.Fragment>
            <div className="container-fluid navbar p-2 d-flex align-items-baseline">
                <div className="navbarBrand">
                    <img src={logo} alt="" className={style.brandImage} />
                </div>
                <div className="navbarItems">
                    <nav className=''>
                        <ul className={`${style.navItems} d-flex ` }>
                            <li className="navLink d-flex align-items-center">
                            <CiHome className='fs-4 mx-1'/>  Home
                            </li>
                            <li className="navLink d-flex align-items-center">
                            <CiUser className='fs-4 mx-1'/>  About
                            </li>
                            <li className="navLink d-flex align-items-center">
                            <FaChartLine className='fs-4 mx-1'/>  Projects
                            </li>
                            <li className="navLink d-flex align-items-center">
                                                            
                                <SiReaddotcv className='fs-4 mx-1'/>  Resume
                            </li>
                            <li className="navLink d-flex align-items-center">
                            <GrBlog className='fs-4 mx-1'/>   Blogs
                            </li>
                            <li className="navLink d-flex align-items-center">
                               <button className="btn"><LuGitFork className='fs-4 mx-1'/></button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
         
       </React.Fragment>
    )
  }
}

export default Navbar
