import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/journal_logo.png'
import chat from '../Assets/chat.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    const[menu,setMenu] = useState("Home") 
    return (
    <div className = 'navbar'>
        <div className = 'navbar-logo'>
            <img src = {logo} alt = "" />
            <p>MoodLog</p>
        </div>
        <ul className = "nav-menu">
            <li onClick={()=>{setMenu("Home")}}><Link style={{color: '#000', textDecoration: 'none'} } to='/Home'>Home</Link>{menu === "Home"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Journal")}}><Link style={{color: '#000', textDecoration: 'none'} } to='/Journal'>Journal</Link>{menu === "Journal"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Community")}}><Link style={{color: '#000', textDecoration: 'none'} } to='/Community'>Community</Link>{menu === "Community"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Profile")}}><Link style={{color: '#000', textDecoration: 'none'} } to='/Profile'>Profile</Link>{menu === "Profile"? <hr/>:<></>}</li>
        </ul>
        <div className='nav-chat'>
            <Link to='/chat'><img src={chat} alt="" /></Link>
            <div className='nav-chat-count'> {/* this class is used to add counter to the cart icon*/}
              10
            </div>
        </div>
    </div>
  )
}
