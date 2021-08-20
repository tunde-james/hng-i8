import React from 'react'
import { Footer } from '../components'

function FooterContainer({ children }) {
  return (
    <Footer>
      <Footer.Container>
        <Footer.Copyright>
          <Footer.Text>&copy; Tunde James</Footer.Text>
          <Footer.Div>
            <Footer.Logo
              width="70"
              height="70"
              src="/images/hng.jpg"
              alt="hng logo"
            />
            <Footer.Link href="https://training.zuri.team/" target="_blanck">
              Zuri Training
            </Footer.Link>
          </Footer.Div>
        </Footer.Copyright>
      </Footer.Container>
    </Footer>
  )
}

export default FooterContainer
