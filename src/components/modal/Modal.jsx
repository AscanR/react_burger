import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import ModalOverlay from '../modal-overlay/ModalOverlay'
import styles from './Modal.module.css'
import img from '../../images/closebutton.svg'
import PropTypes from 'prop-types'

const modalsContainer = document.querySelector('#modals')

const Modal = ({title, onOverlayClick, onEscKeydown, children, closeButton}) => {

    useEffect(() => {
        document.addEventListener('keydown', onEscKeydown)

        return () => {
            document.removeEventListener('keydown', onEscKeydown)
        }
    }, [])

    return ReactDOM.createPortal(
          <>
              <div className={styles.modal}>
                  <div className={styles.heading}>
                      <h3 className='text text_type_main-large'>{title}</h3>
                      <img className={styles.close} src={img} alt='Закрыть' onClick={() => closeButton()}/>
                  </div>
                  {children}
              </div>
              <ModalOverlay onClick={onOverlayClick}/>
          </>,
          modalsContainer
    );
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    onOverlayClick: PropTypes.func.isRequired,
    onEscKeydown: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
    closeButton: PropTypes.func.isRequired
}
export default Modal