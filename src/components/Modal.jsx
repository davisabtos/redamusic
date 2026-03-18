import React, { useRef, useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (!modalElement) return;

    if (isOpen) {
      
      modalElement.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      modalElement.close();
      document.body.style.overflow = '';
    }

    return () => {
        document.body.style.overflow = '';
    }
  }, [isOpen]);


  const handleClose = () => {
    onClose();
  };

  return (
    <dialog ref={modalRef} onClose={handleClose}>
      {children}
    </dialog>
  );
};

export default Modal;
