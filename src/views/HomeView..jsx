import React from 'react'
import { Link } from 'react-router-dom'

const HomeView = () => (
  <section>
    <h1>Redux Tutorial</h1>
    <p>State management the classic way</p>
    <a href="https://redux.js.org/" target="blank">Read the docs</a>
    <hr />

    <Link to="/posts" className="button">
      See all posts
    </Link>
  </section>
)
export default HomeView