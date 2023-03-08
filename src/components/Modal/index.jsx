import {Modal, BG, Close} from './styles'

function ModalComponent({toggleModal, children}) {
  return (
    <div>
      <Modal>
        <Close onClick={toggleModal}/>
        {children}
      </Modal>
      <BG onClick={toggleModal}/>
    </div>
  )
}

export default ModalComponent
