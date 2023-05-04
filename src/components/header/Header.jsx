import { Link, NavLink } from 'react-router-dom'
import './header.css'
import React from 'react'

const Header = ({ main }) => {
  console.log(main)
  return (
    <nav className="nav">
      <h1>ZooPlus</h1>
      <div className='nav_buttons'>
        {/* <Link className={`  ${main ? "text-white" : "text-black"}`} to="/">Главная</Link> */}
        {/* <Link className={`  ${main ? "text-white" : "text-black"}`}>Полезная информация</Link> */}
        {/* <Link className={` ${main ? "text-white" : "text-black"}`} to="/choice">Информация по породам</Link> */}
        <NavLink
          to="/"
          className={`${main ? "text-white" : "text-black"}`}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Главная
        </NavLink>
        <NavLink
          to="/help"
          className={`${main ? "text-white" : "text-black"}`}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}

        >
          Полезная информация
        </NavLink>
        <NavLink
          to="/choice"
          className={`${main ? "text-white" : "text-black"}`}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          Информация по породам
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
