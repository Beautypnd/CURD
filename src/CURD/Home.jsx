import React from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"

const Home = () => {
  return (
    <div>
        <section id={style.nav}>
        <Link to="/" >Create User</Link>
        <Link to="/users">Users</Link>
        </section>
    </div>
  )
}

export default Home