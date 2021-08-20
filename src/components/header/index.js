import React from 'react'
import './Header.scss'

function Header({ children }) {
  return <header className="header">{children}</header>
}

Header.Container = function Container({children}) {
  return (
    <div className="container">{children}</div>
  )
}

Header.Name = function Name({ children }) {
  return <h2 className="header__name">{children}</h2>
}

Header.JobTitle = function JobTitle({ children }) {
  return <h5 className="header__job">{children}</h5>
}

export default Header
