import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'
import FocusLock from 'react-focus-lock'
import { useOnClickOutside } from '../../hooks/useClickOutside'

interface Props {
  isOpen: boolean
  closeModal: any
  shouldCloseOnOverlayClick?: boolean
  showCloseButton?: boolean
  children?: React.ReactNode
}

const Modal = ({ isOpen, children, closeModal, shouldCloseOnOverlayClick = true, showCloseButton = true }: Props) => {
  const refModal = useRef<HTMLDivElement>(null)
  useOnClickOutside(refModal, () => closeModal())

  useEffect(() => {
    if (!isOpen || !shouldCloseOnOverlayClick) return
    window.addEventListener('keydown', event => listenKeyboardEvents(event))
    return () => {
      window.removeEventListener('keydown', listenKeyboardEvents)
    }
    function listenKeyboardEvents(event: any) {
      if (event.key === 'Escape') {
        closeModal()
      }
    }
  }, [closeModal, isOpen])

  if (!isOpen) return null

  return createPortal(
    <FocusLock>
      <div key="modal" role="dialog" aria-hidden={!isOpen} aria-modal={isOpen} className={styles.container}>
        <div className={styles.children} ref={refModal}>
          {showCloseButton && (
            <button
              className={styles.btn_close}
              onClick={e => {
                closeModal()
              }}
            >
              <svg viewBox="0 0 24 24" focusable="false" role="presentation" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
                ></path>
              </svg>
            </button>
          )}
          {children}
        </div>
      </div>
    </FocusLock>,
    document.body,
  )
}

export default Modal
