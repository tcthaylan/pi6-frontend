import React from 'react';
import Modal from 'react-responsive-modal';
import './Modal.css';
import PropTypes from 'prop-types';
import ModalDeleteItens from './DeleteItens'

const ModalContent = (props) => {
  const {
    modal, closeModal, updateItens, type, history, openModal,
  } = props;
  const { name, data } = modal;
  console.log(modal);
  return (
    <Modal
      open
      onClose={() => {
        closeModal();
      }}
      center
    >
      { name === 'delete'
      && <ModalDeleteItens closeModal={closeModal} data={data} updateItens={updateItens} type={type} history={history} /> }
    </Modal>
  );
};

ModalContent.propTypes = {
  showModal: PropTypes.bool.isRequired,
  closeOpen: PropTypes.func.isRequired,
};

export default ModalContent;
