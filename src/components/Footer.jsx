import styled from 'styled-components'

export const Footer = styled.footer`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position: fixed;
  width: 100vw;
  z-index: 1;
  bottom: 0;
  justify-content: space-between;
  padding: 15px;
`
export const H2 = styled.h2`
  font-size: 64px;
  font-weight: 600;
  line-height: 0.7;
  margin: 0;
  padding: 15px;
`

export const H2Middle = styled(H2)`
  flex-grow: 1;
  position: relative;
  text-align: center;

  &::after {
    content: '';
    background-color: #FBFBFB;
    display: block;
    position: absolute;
    height: 2px;
    left: 15px;
    right: 15px;
    top: 55%;
  }
`

function FooterComponent() {
  return (
    <Footer>
      <H2>Jun 12</H2>
      <H2Middle>World Tour</H2Middle>
      <H2>Aug 12</H2>
    </Footer>
  )
}

export default FooterComponent
