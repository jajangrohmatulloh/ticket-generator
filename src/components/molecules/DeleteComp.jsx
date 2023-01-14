import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import axios from 'axios';

const DeleteComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteData, setDeleteData] = useState({ ticketIds: [] });

  const handleDelete = () => {
    const checkbox = Array.from(
      document.getElementsByClassName('table__checkbox--one')
    );

    // const
    checkbox.forEach((val) => {
      setDeleteData({ ticketIds: [] });
      if (val.hasAttribute('data-checked')) {
        setDeleteData(deleteData.ticketIds.push(val.dataset.id));
      }
    });
    console.log(deleteData);
    const del = {
      ticketIds: [12003, 12006],
    };

    const deleteMethod = {
      method: 'delete', // Method itself
      // headers: {
      //   'Content-type': 'application/json; charset=UTF-8', // Indicates the content
      // },
      body: JSON.stringify(del),
    };
    // Make the HTTP Delete call using fetch api
    fetch('https://api.jajangrohmatulloh.com', deleteMethod)
      .then((response) => response.json())
      .then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
      .catch((err) => console.log(err));
    // axios
    //   .delete('http://api.jajangrohmatulloh.com', {
    //     headers: {
    //       Authorization: 'dfkjkdfj',
    //     },

    //     data: { del },
    //   })
    //   .then((response) => console.log(response));
  };
  return (
    <>
      <Button onClick={onOpen} isDisabled={false} colorScheme="red">
        Delete
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteComp;
