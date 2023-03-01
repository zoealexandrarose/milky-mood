import {Modal, BG, Close} from './styles'

function ModalComponent({toggleModal}) {
  return (
    <div>
      <Modal>
        <Close onClick={toggleModal}/>
      </Modal>
      <BG onClick={toggleModal}/>
    </div>
  )
}

export default ModalComponent
