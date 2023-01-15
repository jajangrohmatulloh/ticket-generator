import React, { useEffect, useState } from 'react';
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

const DeleteComp = ({ handleData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteData, setDeleteData] = useState({ ticketIds: [] });
  const [updateData, setUpdateData] = useState(0);

  const handleDelete = () => {
    const checkbox = Array.from(
      document.getElementsByClassName('table__checkbox--one')
    );

    checkbox.forEach((val) => {
      setDeleteData({ ticketIds: [] });
      if (val.hasAttribute('data-checked')) {
        setDeleteData(deleteData.ticketIds.push(val.dataset.id));
      }
    });

    axios
      .delete('https://api.jajangrohmatulloh.com', {
        headers: {
          'Content-Type': 'application/json',
        },

        data: deleteData,
      })
      .then((response) => {
        console.log(response);
        setUpdateData(updateData + 1);
        onClose();
      })
      .catch((err) => console.log('sdsd', err));
  };

  useEffect(() => {
    handleData(updateData);
  }, [updateData]);
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
