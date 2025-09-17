import React from 'react'
import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

export const MyModal = ({kep, nev, modal, setModal}) => {

//const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);



  return (
    <Modal style={{display:'flex', alignItems:'center', justifyContent:'center'}} isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{nev}</ModalHeader>
        <ModalBody>
          <img src={kep} className='img-fluid' alt="" />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
  )
}