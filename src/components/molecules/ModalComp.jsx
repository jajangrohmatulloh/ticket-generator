import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

function ModalComp({ handleData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updateData, setUpdateData] = useState(0);

  const initialRef = React.useRef();
  const dateFromRef = React.useRef();
  const dateToRef = React.useRef();
  const packageEventRef = React.useRef();
  const nameRef = React.useRef();
  const finalRef = React.useRef();

  const handleSubmit = () => {
    if (
      packageEventRef.current.value &&
      dateFromRef.current.value &&
      dateToRef.current.value &&
      nameRef.current.value
    ) {
      const ticketData = {
        packageEvent: packageEventRef.current.value,
        startDate: new Date(dateFromRef.current.value).toString(),
        finishDate: new Date(dateToRef.current.value).toString(),
        name: nameRef.current.value,
      };

      axios
        .post('https://api.jajangrohmatulloh.com/create', ticketData)
        .then((response) => {
          console.log(response);
          setUpdateData(updateData + 1);
          onClose();
        });
    } else {
      alert('failed to post data');
    }
  };

  useEffect(() => {
    handleData(updateData);
  }, [updateData]);

  return (
    <>
      <Button onClick={onOpen}>Create a new ticket +</Button>

      <Modal
        blockScrollOnMount={false}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new ticket</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Package Event</FormLabel>
              <Input ref={packageEventRef} defaultValue="" />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Date From</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                ref={dateFromRef}
                defaultValue=""
                required
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Date To</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                ref={dateToRef}
                defaultValue=""
                required
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input ref={nameRef} required defaultValue="" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComp;
