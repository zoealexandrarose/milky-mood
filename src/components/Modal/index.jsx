import {Modal, BG} from './styles'

function ModalComponent({toggleModal}) {
  return (
    <div>
      <Modal />
      <BG onClick={toggleModal}/>
    </div>
  )
}

export default ModalComponent
