import { Box, Container, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import ButtonComp from '../components/atoms/ButtonComp';
import ModalComp from '../components/molecules/ModalComp';
import TableComp from '../components/molecules/TableComp';
const Home = () => {
  return (
    <div className="app">
      <Container maxW="1140px" mt="32">
        <Flex>
          <ButtonComp />
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
