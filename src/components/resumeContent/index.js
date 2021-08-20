/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './ResumeContent.scss'

function ResumeContent({ children }) {
  return <main className="main">{children}</main>
}

ResumeContent.Container = function Container({ children }) {
  return <div className="container">{children}</div>
}

ResumeContent.Row = function Picture({ children }) {
  return <div className="row">{children}</div>
}

ResumeContent.ColumnLeft = function ColumnLeft({ children }) {
  return <div className="column__left">{children}</div>
}

ResumeContent.ColumnRight = function ColumnRight({ children }) {
  return <div className="column__right">{children}</div>
}

ResumeContent.Heading = function Heading({ children }) {
  return <h3 className="heading">{children}</h3>
}

ResumeContent.SubHeading = function SubHeading({ children }) {
  return <h3 className="heading__subheading">{children}</h3>
}

ResumeContent.SpanText = function SpanText({ children }) {
  return <span className="span-heading">{children}</span>
}

ResumeContent.Contact = function Contact({ children }) {
  return <div className="contact">{children}</div>
}

ResumeContent.ContactSpan = function ContactSpan({ children }) {
  return <span className="contact__span">{children}</span>
}

ResumeContent.Icon = function Icon({ children }) {
  return <p className="contact__icon">{children}</p>
}

ResumeContent.Summary = function Summary({ children }) {
  return <p className="summary">{children}</p>
}

ResumeContent.Col = function Col({ children }) {
  return <div className="col">{children}</div>
}

ResumeContent.List = function List({ children }) {
  return <ul className="list">{children}</ul>
}

ResumeContent.ListItem = function ListItem({ children }) {
  return <li className="list-item">{children}</li>
}

export default ResumeContent
