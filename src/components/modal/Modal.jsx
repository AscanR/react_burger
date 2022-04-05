import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import ModalOverlay from '../modal-overlay/ModalOverlay'
import styles from './Modal.module.css'
import PropTypes from 'prop-types'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const modalsContainer = document.querySelector('#modals')

const Modal = ({title, onOverlayClick, children, closeButton}) => {

    const handleEscKeydown = (event) => {
        event.key === "Escape" && closeButton();
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscKeydown)

        return () => {
            document.removeEventListener('keydown', handleEscKeydown)
        }
    }, ['keydown'])

    return ReactDOM.createPortal(
          <>
              <div className={styles.modal}>
                  <div className={styles.heading}>
                      <h3 className='text text_type_main-large'>{title}</h3>
                      <CloseIcon type={"primary"} onClick={() => closeButton()}/>
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
    children: PropTypes.object.isRequired,
    closeButton: PropTypes.node.isRequired
}
export default Modal