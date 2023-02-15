import React from 'react'
import './header.css'

const Header = ({ title }) => {
  return (
    <h1 className='title'>
      { title }
    </h1>
  )
}

Header.defaultProps = {
    title: 'To Do List'
}

export default Header
