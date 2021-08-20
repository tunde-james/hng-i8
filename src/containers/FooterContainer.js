import React from 'react'
import { Footer } from '../components'

function FooterContainer({ children }) {
  return (
    <Footer>
      <Footer.Container>
        <Footer.Copyright>
          <Footer.Text>&copy; Tunde James</Footer.Text>
          <Footer.Logo
            width="70"
            height="70"
            src="/images/hng.jpg"
            alt="hng logo"
          />
        </Footer.Copyright>
      </Footer.Container>
    </Footer>
  )
}

export default FooterContainer
