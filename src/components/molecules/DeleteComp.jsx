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
  const [test, setTest] = useState({ ticket: ['sdhsjf', 'dfdjsfkd'] });
  const [updateData, setUpdateData] = useState(0);

  // const handleOpen = () => {
  //   const checkbox = Array.from(
  //     document.getElementsByClassName('table__checkbox--one')
  //   );

  //   checkbox.forEach((val) => {
  //     setDeleteData({ ticketIds: [] });
  //     if (val.hasAttribute('data-checked')) {
  //       setDeleteData(deleteData.ticketIds.push(val.dataset.id));
  //     }
  //   });

  //   console.log(deleteData.ticketIds[0]);
  //   onOpen();
  // };

  const handleDelete = () => {
    const checkbox = Array.from(
      document.getElementsByClassName('table__checkbox--one')
    );

    let tempCheck = { ticketIds: [] };
    checkbox.forEach((val) => {
      if (val.hasAttribute('data-checked')) {
        tempCheck.ticketIds.push(val.dataset.id);
      }
    });
    setDeleteData(tempCheck);
    setDeleteData((prevState) => {
      axios
        .delete('https://api.jajangrohmatulloh.com', {
          headers: {
            'Content-Type': 'application/json',
          },

          data: prevState,
        })
        .then((response) => {
          console.log(response);
          onClose();
        })
        .catch((err) => console.log(err));
      return prevState;
    });

    setUpdateData(updateData + 1);
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
          <ModalHeader>Delete this ticket ?</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteComp;
