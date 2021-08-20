import React from 'react'
import './Footer.scss'

function Footer({ children }) {
  return <footer className="footer">{children}</footer>
}

Footer.Container = function Container({ children }) {
  return <div className="container">{children}</div>
}

Footer.Copyright = function Copyright({ children }) {
  return <div className="copyright">{children}</div>
}

Footer.Text = function Text({ children }) {
  return <p className="copyright-text">{children}</p>
}

Footer.Logo = function Logo({ ...restProps }) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img {...restProps} />
}

export default Footer
