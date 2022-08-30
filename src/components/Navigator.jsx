import React from 'react'
import { NavLink } from 'react-router-dom'
const active = {
  border: '1px solid gray',
  color: 'darkgray'
}
const Navigator = () => (
  <nav>
    <section>
      <NavLink to="/"
        style={({ isActive }) => {
          return isActive ? active : null
        }}>Home</NavLink>
      <NavLink to="/posts"
        style={({ isActive }) => {
          return isActive ? active : null
        }}>Posts</NavLink>
    </section>
  </nav>
)
export default Navigator