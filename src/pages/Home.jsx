import { Box, Container, Flex, Spacer } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ButtonComp from '../components/atoms/ButtonComp';
import DeleteComp from '../components/molecules/DeleteComp';
import ModalComp from '../components/molecules/ModalComp';
import TableComp from '../components/molecules/TableComp';
const Home = () => {
  const [update, setUpdateData] = useState();

  const handleData = (val) => {
    setUpdateData(val);
  };

  return (
    <div className="app">
      <Container maxW="1140px" mt="32">
        <Flex>
          <DeleteComp handleData={(val) => handleData(val)} />
          <Spacer />
          <ModalComp handleData={(val) => handleData(val)} />
        </Flex>
        <Box mt={16}>
          <TableComp updateData={update} />
        </Box>
      </Container>
    </div>
  );
};

export default Home;
