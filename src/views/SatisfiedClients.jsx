import React from 'react'
import style from "../assets/styles/homeStyle.module.css"
import "../assets/styles/clientsStyle.css"
import { useState,useEffect } from 'react'
import avatar from "../assets/avatar.png"
import axios from 'axios'
export default function SatisfiedClients() {
    const [users,setUsers]=useState([])
    const currentUser="mouheb.mehdoui@protonmail.com"
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log("API call succeeded")
            console.log(response.data)
            setUsers(response.data)
        })
        .catch((error)=>{
            console.log("API CAll failed")
            console.log(error)
        })
    },[currentUser])
  return (
    <>
    <div className={style.mainContent + " m-0 p-0"} id="mainContent">
        <h1>Meet Our <span className="specialText">Clients</span>  </h1>
        <p className="text-center text-light fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus voluptate deserunt?</p>
        <div className="teamMembers d-flex container-fluid m-0 p-0 justify-content-center flex-wrap ">
           {users.map((user,index,array)=>{
            return (<div className="teamMember mx-1">
                <div className="memberImage">
                    <div className="image" >
                        
                    </div>
                </div>
                <p className="fs-3 memberName text-center">{user.name}</p>
                <p className="fs-5 memberJob specialText text-center">{user.company.bs}</p>
                <p className="memberEmail">{user.company.catchPhrase}</p>
                <p className="memberPhone text-center">{user.email}</p>
            </div>)
           })}
            
         
        </div>
    </div>
    </>
  )
}
