import {useState} from 'react'
import {Container} from './styles'
import Form from '../Form'

function ModalInner() {
  const [showSuccess, setShowSuccess] = useState(false)

  return (
    <Container>
      <h3>Sign Up</h3>
      <p>Join our newsletter to be notified of when pre-release tickets for our first ever world tour go on sale.</p>
      <Form />

      <>
        <h4>Yay! We're so excited!</h4>
        <p>We hope you are too.</p>
      </>
    </Container>
  )
}

export default ModalInner
