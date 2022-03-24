import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom' 

function Nav() {
    return (
        <div className='nav'>
            <div className='rectangle'>
                <div className='white'></div>
                <div className='black'></div>
                <div className='white'></div>
                <div className='black border'></div>
                <div className='black border2'></div>
                <div className='white'></div>
                <div className='black'></div>
                <div className='white'></div>
                
            </div>
            <div className='links'>
                <NavLink to='/'  style={({ isActive }) => 
                      (isActive ? {color: '#7251B2'} : {color: 'black'})} id='link' >Upload a file</NavLink>
                <NavLink to='/vault'  style={({ isActive }) => 
                      (isActive ? {color: '#7251B2'} : {color: 'black'})} id='link' >File Vault</NavLink>
                <NavLink to='/policies'  style={({ isActive }) => 
                      (isActive ? {color: '#7251B2'} : {color: 'black'})} id='link' >Organizational Policies</NavLink>
                <NavLink to='/'  style={({ isActive }) => 
                      (isActive ? {color: 'black'} : {color: 'black'})} id='link' >Access Logs</NavLink>
            </div>
        </div>
    )
}

export default Nav
