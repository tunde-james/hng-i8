import React from 'react'
import { Header } from '../components'

function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Container>
        <Header.Name>Babatunde Tiamiyu</Header.Name>
        <Header.JobTitle>Frontend Developer</Header.JobTitle>
      </Header.Container>
    </Header>
  )
}

export default HeaderContainer
