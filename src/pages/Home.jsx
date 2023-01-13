import { Box, Container, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import ButtonComp from '../components/atoms/ButtonComp';
import DeleteComp from '../components/molecules/DeleteComp';
import ModalComp from '../components/molecules/ModalComp';
import TableComp from '../components/molecules/TableComp';
const Home = () => {
  return (
    <div className="app">
      <Container maxW="1140px" mt="32">
        <Flex>
          <DeleteComp />
          <Spacer />
          <ModalComp />
        </Flex>
        <Box mt={16}>
          <TableComp />
        </Box>
      </Container>
    </div>
  );
};

export default Home;
