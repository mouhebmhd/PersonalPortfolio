import React from 'react'
import logo from "../assets/logo.png"
import style from "../assets/styles/navbarStyle.module.css"
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";
import { GrBlog } from "react-icons/gr";
import { SiReaddotcv } from "react-icons/si";
import { LuGitFork } from "react-icons/lu";
import { MdStar } from "react-icons/md";
import  {Link}  from 'react-router-dom';
class Navbar extends React.Component  {
  constructor(props)
  {
    super(props)
  }  
  render()
  {
    return (
       <React.Fragment>
            <div className="container-fluid text-light navbar bg-dark  d-flex align-items-center" style={{padding:"15px"}}>
                <div className="navbarBrand">
                    <img src={logo} alt="" className={style.brandImage} />
                </div>
                <div className="navbarItems ">
                    <nav className=''>
                        <ul className={`${style.navItems} d-flex align-items-center ` }>
                            <Link to="/home" className="navLink d-flex align-items-center" style={{textDecoration:"none",color:"#fff"}}>
                            <CiHome className='fs-4 mx-1'/>  Home
                            </Link>
                            <Link  to="/about" className="navLink d-flex align-items-center" style={{textDecoration:"none",color:"#fff"}}>
                            <CiUser className='fs-4 mx-1'/>  About
                            </Link>
                            <Link to="/projects" className="navLink d-flex align-items-center" style={{textDecoration:"none",color:"#fff"}}>
                            <FaChartLine className='fs-4 mx-1'/>  Projects
                            </Link>
                            <Link to="/skills" className="navLink d-flex align-items-center" style={{textDecoration:"none",color:"#fff"}}>
                                                            
                                <SiReaddotcv className='fs-4 mx-1'/>  Skills
                            </Link>
                            <Link to="/clients" className="navLink d-flex align-items-center" style={{textDecoration:"none",color:"#fff"}}>
                            <GrBlog className='fs-4 mx-1'/>   Clients
                            </Link>
                            <Link to="/fork" className="navLink d-flex align-items-center" style={{textDecoration:"none",color:"#fff"}}>
                               <button className={style.forkButton}>
                                <LuGitFork className='fs-4 '/>
                                <MdStar className='fs-4 '/>

                                </button>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </div>
         
       </React.Fragment>
    )
  }
}

export default Navbar
