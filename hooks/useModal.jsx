import React, { useRef } from 'react';
import styles from './modal.module.scss';

const useModal = () => {
  const modalRef = useRef(null);

  const setShowModal = () => {
    modalRef.current.className = `${styles.wrapper} animate__animated animate__fadeInDown`;
  };

  const closeModal = () => {
    modalRef.current.className = `${styles.wrapper} animate__animated animate__fadeOutUp`;
  };

  const Modal = ({ trigger }) => (
    <section>
      {trigger}

      <div ref={modalRef} className="hidden">
        <div className={`${styles.content}`}>
          <h2>This is a modal</h2>
          <button onClick={closeModal}>Click me</button>
        </div>
      </div>
    </section>
  );

  return { Modal, setShowModal };
};

export default useModal;
