import React, { useRef } from 'react';
import styles from './modal.module.scss';

const useModal = () => {
  const modalContainer = useRef(null);
  const modalRef = useRef(null);

  const setShowModal = () => {
    modalContainer.current.className = `${styles.wrapper} animate__animated animate__fadeInDown`;
  };

  const closeModal = () => {
    modalContainer.current.className = `${styles.wrapper} animate__animated animate__fadeOutUp`;
  };

  const Modal = ({ trigger, children, header }) => (
    <section>
      {trigger}

      <div
        ref={modalContainer}
        className="hidden"
        onClick={(e) => !modalRef.current.contains(e.target) && closeModal()}
      >
        <div className={styles.musk}>
          <section className={`${styles.content}`} ref={modalRef}>
            <main>{children}</main>
          </section>
        </div>
      </div>
    </section>
  );

  return { Modal, setShowModal, closeModal };
};

export default useModal;
