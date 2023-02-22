import styled from 'styled-components'
import {ReactComponent as LogoSVG} from '../assets/logo.svg'
import {Marginals} from '../styles'

export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 760px;
  width: 100%;
`

export const Header = styled.header`
  ${Marginals}
  justify-content: center;
  padding: 30px;
`

function HeaderComponent() {
  return (
    <div>
      <Header>
        <Logo title="Milky Mood Logo" />
      </Header>
    </div>
  )
}

export default HeaderComponent
